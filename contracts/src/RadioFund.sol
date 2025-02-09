// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./RadioOrchestrator.sol";
import "./interfaces/IRelayManager.sol";
import "./testUSDCe.sol";

contract RadioFund is ERC20 {
    testUSDCe public immutable USDCe;
    uint256 public immutable one_usdc;

    uint8[] public sharesConfig;

    uint256 private _virtualReserve;
    uint256 private _tokenPrice;

    uint8 private immutable _decimals;

    address _creator;

    RadioOrchestrator private _orchestrator;

    modifier onlyCreator() {
        require(msg.sender == _creator, "Only Creator");
        _;
    }

    constructor(
        address creator_,
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
        _orchestrator = RadioOrchestrator(msg.sender);

        USDCe = _orchestrator.USDCe();
        one_usdc = _orchestrator.one_usdc();

        _creator = creator_;
    }

    function setConfig(uint8[] memory sharesConfig_) public onkyCreator {
        require(sharesConfig_.length == _orchestrator.radioFTSOinterface.totalTokens(), "Invalid config");
for (uint256 i = 0; i < sharesConfig_.length; i++) {
        }

    function liquidity() public view returns (uint256) {
        return
            _orchestrator.radioFTSOinterface.getUSDCeValueForTokenShare(sharesConfig) *
            totalSupply();
    }

    function tokenPrice() public view returns (uint256) {
        return _tokenPrice;
    }

    function calculateAmountOut(uint256 fraxIn_) public view returns (uint256) {
        uint256 numerator = supply() * fraxIn_;
        uint256 denominator = reserve() + fraxIn_;

        require(denominator < numerator, "Mathematical overflow");
        require(denominator != 0, "Division by zero");

        return numerator / denominator;
    }

    function calculateFraxOut(uint256 amountIn_) public view returns (uint256) {
        uint256 numerator = reserve() * amountIn_;
        uint256 denominator = supply() + amountIn_;

        require(denominator < numerator, "Mathematical overflow");
        require(denominator != 0, "Division by zero");

        return numerator / denominator;
    }

    function _buy(
        address buyer_,
        uint256 fraxIn_,
        uint256 amountOutMin_
    ) private updatePriceAndReserve {
        require(fraxIn_ > one_pFrax, "fraxIn must be greater than 1");
        require(amountOutMin_ > 0, "amountOutMin must be greater than 0");

        require(pFRAX.balanceOf(buyer_) >= fraxIn_, "Insufficient Balance");

        uint256 fee = fraxIn_ /
            _feeController.pumpfaxtTokenBuySellFee_FRACTION();

        uint256 amountOut_ = calculateAmountOut(fraxIn_ - fee);
        require(amountOut_ >= amountOutMin_, "Slippage tolerance exceeded");

        _feeController.submitFee(buyer_, fee, keccak256("buyPumpfaxtToken"));
        _master.getPFraxForTokenPurchaseFrom(buyer_, fraxIn_ - fee);
        _transfer(address(this), buyer_, amountOut_);
    }

    function buy(uint256 fraxIn_, uint256 amountOutMin_) external {
        _buy(msg.sender, fraxIn_, amountOutMin_);
    }

    function metaBuy(
        address from_,
        uint256 fraxIn_,
        uint256 amountOutMin_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(fraxIn_, amountOutMin_)
        );
        bool validExecution = _master.executeMetaTx(
            from_,
            "buy",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _buy(from_, fraxIn_, amountOutMin_);
    }

    function _sell(
        address seller_,
        uint256 amountIn_,
        uint256 fraxOutMin_
    ) private updatePriceAndReserve {
        require(amountIn_ > 0, "fraxIn must be greater than 0");
        require(fraxOutMin_ > 0, "amountOutMin must be greater than 0");

        uint256 fraxOut = calculateFraxOut(amountIn_);
        require(fraxOut >= fraxOutMin_, "Slippage tolerance exceeded");

        uint256 fee = fraxOut /
            _feeController.pumpfaxtTokenBuySellFee_FRACTION();

        _feeController.submitFee(seller_, fee, keccak256("sellPumpfaxtToken"));
        _transfer(seller_, address(this), amountIn_);
        pFRAX.transfer(seller_, fraxOut - fee);
    }

    function sell(uint256 amountIn_, uint256 fraxOutMin_) external {
        _sell(msg.sender, amountIn_, fraxOutMin_);
    }

    function metaSell(
        address from_,
        uint256 amountIn_,
        uint256 fraxOutMin_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(amountIn_, fraxOutMin_)
        );
        bool validExecution = _master.executeMetaTx(
            from_,
            "sell",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _sell(from_, amountIn_, fraxOutMin_);
    }
}
