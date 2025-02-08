// SPDX-License-Identifier: MIT
pragma solidity =0.8.19;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './interfaces/IOrderBook.sol';
import './interfaces/IStore.sol';

contract OrderMaker is Ownable {
    // Protocol contracts
    IOrderBook public orderBook;
    IStore public store;
    IERC20 public immutable usdce;
    
    // Asset management
    bytes10[] public markets;
    mapping(bytes10 => bool) public supportedMarkets;

    // Events
    event OrderSubmitted(
        address indexed user,
        uint256 indexed marketIndex,
        uint256 orderId,
        uint256 leverage,
        uint256 margin
    );

    event MarketAdded(bytes10 market);
    event MarketRemoved(bytes10 market);

    constructor(
        IOrderBook _orderBook,
        IStore _store,
        IERC20 _usdce,
        bytes10[] memory _initialMarkets
    ) Ownable(msg.sender) {
        orderBook = _orderBook;
        store = _store;
        usdce = _usdce;
        
        for (uint i = 0; i < _initialMarkets.length; i++) {
            markets.push(_initialMarkets[i]);
            supportedMarkets[_initialMarkets[i]] = true;
        }
    }

    /**
     * @notice Open a long position with simplified parameters
     * @param marketIndex Index of the market in markets array
     * @param leverage Desired leverage (e.g., 10 for 10x)
     * @param margin Amount of USDC.e to use as collateral (in 6 decimals)
     */
    function buyAsset(
        uint256 marketIndex,
        uint256 leverage,
        uint256 margin
    ) external {
        require(marketIndex < markets.length, "Invalid market index");
        bytes10 market = markets[marketIndex];
        
        IStore.Market memory marketInfo = store.getMarket(market);
        require(leverage <= marketInfo.maxLeverage, "Exceeds max leverage");
        
        // Calculate position size (margin * leverage)
        uint256 size = margin * leverage;
        require(size >= marketInfo.minSize, "Position too small");

        // Transfer USDC.e from user
        usdce.transferFrom(msg.sender, address(this), margin);
        usdce.approve(address(orderBook), margin);

        // Create order
        IOrderBook.OrderDetail memory detail = IOrderBook.OrderDetail({
            orderType: 0,       // Market order
            isReduceOnly: false,
            price: 0,           // Market price
            expiry: 0,
            cancelOrderId: 0,
            executionFee: 0,
            trailingStopPercentage: 0
        });

        IOrderBook.Order memory order = IOrderBook.Order({
            user: msg.sender,
            margin: uint96(margin),
            asset: address(usdce),
            market: market,
            isLong: true,       // Long position
            size: uint96(size),
            fee: 0,             // Fee calculated by protocol
            timestamp: uint32(block.timestamp),
            orderId: 0,         // Will be set by OrderBook
            orderDetail: detail
        });

        // Submit to OrderBook
        uint256 orderId = orderBook.add(order);
        
        emit OrderSubmitted(msg.sender, marketIndex, orderId, leverage, margin);
    }

    // Management functions
    function addMarket(bytes10 market) external onlyOwner {
        require(!supportedMarkets[market], "Market already exists");
        markets.push(market);
        supportedMarkets[market] = true;
        emit MarketAdded(market);
    }

    function removeMarket(uint256 index) external onlyOwner {
        require(index < markets.length, "Invalid index");
        bytes10 market = markets[index];
        delete supportedMarkets[market];
        markets[index] = markets[markets.length - 1];
        markets.pop();
        emit MarketRemoved(market);
    }

    // Helper view functions
    function getAllMarkets() external view returns (bytes10[] memory) {
        return markets;
    }

    function getMarketInfo(uint256 index) external view returns (IStore.Market memory) {
        require(index < markets.length, "Invalid index");
        return store.getMarket(markets[index]);
    }
}