//SPDX-License-Identifier: BSD-3-Clause

pragma solidity =0.8.19;


interface IStore {
    // Structs
    struct Asset {
        uint8 decimals;  
        uint80 minSize;  // minimum position size
        bytes21 priceFeedId;  //feed id for reference price
    }

    struct Market {
        bytes32 name; // Market's full name, e.g. Bitcoin / U.S. Dollar
        bytes12 category; // crypto, fx, commodities, or indices
        bool hasReferencePrice; // Reference Price feed boolean
        uint16 maxLeverage; // No decimals
        uint16 maxDeviation; // In bps, max price difference from oracle to referencePrice
        uint16 fee; // In bps. 10 = 0.1%
        uint16 liqThreshold; // In bps
        uint16 fundingFactor; // Yearly funding rate if OI is completely skewed to one side. In bps.
        uint8 minOrderAge; // Min order age before is can be executed. In seconds
        uint8 priceMaxAge; // Max price age, in seconds
        bool isReduceOnly; // accepts only reduce only orders
        uint16 priceSpread;  // market's price spread in bps.
        bytes21 priceFeedId; // FTSOv2 price feed id
    }


    function setAsset(address _asset, Asset memory _assetInfo) external;
    function setMarket(bytes10 _market, Market memory _marketInfo) external;
    function setFeeShare(uint256 _bps) external;
    function setBufferPayoutPeriod(uint256 _period) external;
    function setMaxLiquidityOrderTTL(uint256 _maxLiquidityOrderTTL) external;
    function setUtilizationMultiplier(address _asset, uint256 _utilizationMultiplier) external;
    function withdrawFees(address _asset) external;
    function setIsPublicDeposit(bool _isPublicDeposit) external;
    function setWhitelistedDepositer(address _account, bool _isActive) external;
    function getMarket(bytes10 _market) external view returns (Market memory);
    function functionCall(address target, bytes memory data) external;
}
