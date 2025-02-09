// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ContractRegistry} from "@flarenetwork/flare-periphery-contracts/coston2/ContractRegistry.sol";
import {FtsoV2Interface} from "@flarenetwork/flare-periphery-contracts/coston2/FtsoV2Interface.sol";
import {IFtsoFeedIdConverter} from "@flarenetwork/flare-periphery-contracts/coston2/IFtsoFeedIdConverter.sol";

contract RadioFTSOinterface {
    IFtsoFeedIdConverter internal _feedIdConverter;
    FtsoV2Interface internal ftsoV2;
    string[] private _tokenSymbols = [
        "BNB",
        "TRUMP",
        "ARB",
        "SOL",
        "POL",
        "SUI",
        "DOGE",
        "AAVE",
        "XRP",
        "LTC",
        "TRX",
        "AVAX",
        "ETH",
        "LINK",
        "BTC",
        "FLR"
    ];
    bytes21[] private _tokenFeedIds;
    uint8 public totalTokens;

    bytes21 private constant _usdcFeedId =
        0x01555344432f555344000000000000000000000000;

    uint64 lastInteracted;

    constructor(address _ftsoV2) {
        totalTokens = uint8(_tokenSymbols.length);

        ftsoV2 = FtsoV2Interface(_ftsoV2);
        _feedIdConverter = ContractRegistry.getFtsoFeedIdConverter();
        for (uint8 i = 0; i < totalTokens; i++) {
            _tokenFeedIds.push(_getFeedId(i));
        }
    }

    function _getFeedId(uint8 index_) internal view returns (bytes21) {
        return
            _feedIdConverter.getFeedId(
                1,
                string.concat(_tokenSymbols[index_], "/USD")
            );
    }

    function getFtsoV2CurrentFeedValues()
        external
        returns (
            uint256[] memory _feedValues,
            int8[] memory _decimals,
            uint64 _timestamp
        )
    {
        return ftsoV2.getFeedsById(_tokenFeedIds);
    }

    function getTokenUSDCPrice(uint8 index_) public payable returns (uint256) {
        (uint256 feedValue, int8 decimals, uint64 timestamp) = ftsoV2
            .getFeedById{value: msg.value}(_tokenFeedIds[index_]);

        lastInteracted = timestamp;

        return scaleToUSDCe(feedValue, uint8(decimals));
    }

    function getUSDCeValueForTokenShare(
        uint8[] memory tokenShares_
    ) external payable returns (uint256) {
        uint256 totalValue = 0;
        for (uint8 i = 0; i < totalTokens; i++) {
            (uint256 feedValue, int8 decimals, uint64 timestamp) = ftsoV2
                .getFeedById{value: (msg.value / totalTokens) - 1}(
                _tokenFeedIds[i]
            );

            lastInteracted = timestamp;

            uint256 tokenPrice = scaleToUSDCe(feedValue, uint8(decimals));
            totalValue += tokenPrice * tokenShares_[i];
        }

        return totalValue / 100;
    }

    // hardcoded as 6 deimcals, remember to change it so that it is fetched from the actual USDCe contract
    function scaleToUSDCe(
        uint256 price,
        uint8 inputDecimals
    ) public pure returns (uint256) {
        if (inputDecimals == 6) {
            return price;
        } else if (inputDecimals < 6) {
            return price * (10 ** (6 - inputDecimals));
        } else {
            return price / (10 ** (inputDecimals - 6));
        }
    }

    function getConversion(
        uint8 index_
    ) external payable returns (uint256, int8, uint64) {
        (uint256 feedValue, int8 decimals, uint64 timestamp) = ftsoV2
            .getFeedById{value: msg.value}(_getFeedId(index_));

        return (feedValue, decimals, timestamp);
    }

    function _scaleBaseFeedValue(
        uint256 _baseFeedValue,
        uint8 _baseFeedDecimals,
        uint8 _finalDecimals
    ) internal pure returns (uint256) {
        if (_baseFeedDecimals < _finalDecimals) {
            return
                _baseFeedValue *
                10 ** uint256(_finalDecimals - _baseFeedDecimals);
        } else if (_baseFeedDecimals > _finalDecimals) {
            return
                _baseFeedValue /
                10 ** uint256(_baseFeedDecimals - _finalDecimals);
        } else {
            return _baseFeedValue;
        }
    }
}
