// SPDX-License-Identifier: MIT
pragma solidity =0.8.19;

import {ContractRegistry} from "@flarenetwork/flare-periphery-contracts/coston2/ContractRegistry.sol";
import {FtsoV2Interface} from "@flarenetwork/flare-periphery-contracts/coston2/FtsoV2Interface.sol";
import {IFtsoFeedIdConverter} from "@flarenetwork/flare-periphery-contracts/coston2/IFtsoFeedIdConverter.sol";

contract RadioOrchestration {
    IFtsoFeedIdConverter internal _feedIdConverter;
    FtsoV2Interface internal ftsoV2;
    string[] private _tokenSymbols = [
        "FLR",
        "SGB",
        "BTC",
        "XRP",
        "LTC",
        "XLM",
        "DOGE",
        "ADA",
        "ALGO"
    ];

    constructor(address _ftsoV2) {
        ftsoV2 = FtsoV2Interface(_ftsoV2);
        _feedIdConverter = ContractRegistry.getFtsoFeedIdConverter();
    }

    function _getFeedId(uint8 index_) internal view returns (bytes21) {
        return
            _feedIdConverter.getFeedId(
                1,
                string.concat(_tokenSymbols[index_], "/USD")
            );
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
