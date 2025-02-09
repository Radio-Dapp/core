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

    function setConfig(uint8[] memory sharesConfig_) public onlyCreator {
        require(
            sharesConfig_.length ==
                _orchestrator.radioFTSOinterface().totalTokens(),
            "Invalid config"
        );
        for (uint256 i = 0; i < sharesConfig_.length; i++) {
            uint8 diff = sharesConfig_[i] - sharesConfig[i];
            // This is where rebalancing happens
            if (diff != 0) {
                sharesConfig[i] = sharesConfig_[i];
                if (diff > 0) {
                    // buy
                } else {
                    // sell
                }
            }
        }
    }

    function liquidity() public payable returns (uint256) {
        return
            _orchestrator.radioFTSOinterface().getUSDCeValueForTokenShare{
                value: msg.value
            }(sharesConfig) * totalSupply();
    }

    function metaBuy(
        address from_,
        uint256 usdceIn_,
        bytes calldata signature_
    ) external payable {
        bytes32 functionDataHash = keccak256(abi.encodePacked(usdceIn_));
        bool validExecution = _orchestrator.executeMetaTx(
            from_,
            "buy",
            functionDataHash,
            signature_
        );

        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        uint256 lqt = _orchestrator
            .radioFTSOinterface()
            .getUSDCeValueForTokenShare{value: msg.value}(sharesConfig) *
            totalSupply();

        uint256 fOut = (usdceIn_ / lqt) * totalSupply();
        for (uint256 i = 0; i < sharesConfig.length; i++) {
            if (sharesConfig[i] != 0) {
                // This is where we would buy the underlying assets
            }
        }

        _mint(msg.sender, fOut);
    }

    function metaBuyWithLeverage(
        address from_,
        uint256 usdceIn_,
        uint8 leverage,
        bytes calldata signature_
    ) external payable {
        bytes32 functionDataHash = keccak256(abi.encodePacked(usdceIn_));
        bool validExecution = _orchestrator.executeMetaTx(
            from_,
            "buy",
            functionDataHash,
            signature_
        );

        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );
        require(leverage > 0, "Invalid leverage");

        uint256 lqt = _orchestrator
            .radioFTSOinterface()
            .getUSDCeValueForTokenShare{value: msg.value}(sharesConfig) *
            totalSupply();

        uint256 fOut = (usdceIn_ / lqt) * totalSupply();
        for (uint256 i = 0; i < sharesConfig.length; i++) {
            if (sharesConfig[i] != 0) {
                // This is where we would buy the underlying assets
            }
        }

        _mint(msg.sender, fOut);
    }

    function metaSell(
        address from_,
        uint256 percentSold_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(abi.encodePacked(percentSold_));
        bool validExecution = _orchestrator.executeMetaTx(
            from_,
            "sell",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );
        require(
            percentSold_ <= 100 && percentSold_ > 0,
            "Invalid percent sold"
        );

        uint256 toSell = (balanceOf(msg.sender) * percentSold_) / 100;

        for (uint256 i = 0; i < sharesConfig.length; i++) {
            if (sharesConfig[i] != 0) {
                // This is where we would sell the underlying assets
            }
        }

        _burn(msg.sender, toSell);
    }

    modifier onlyServer() {
        require(msg.sender == _orchestrator.server(), "Only Server");
        _;
    }

    function serverEnforcedBurn(
        address user_,
        uint256 amount_
    ) external onlyServer {
        _burn(user_, amount_);
    }

    function serverEnforcedMint(
        address user_,
        uint256 amount_
    ) external onlyServer {
        _mint(user_, amount_);
    }
}
