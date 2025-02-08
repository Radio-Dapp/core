// SPDX-License-Identifier: MIT
pragma solidity =0.8.19;

import {ContractRegistry} from "@flarenetwork/flare-periphery-contracts/coston2/ContractRegistry.sol";
import {TestFtsoV2Interface} from "@flarenetwork/flare-periphery-contracts/coston2/TestFtsoV2Interface.sol";

contract FundFactory {
    TestFtsoV2Interface internal ftsoV2;
    // Feed IDs, see https://dev.flare.network/ftso/feeds for full list
    bytes21[] public feedIds = [
        bytes21(0x01464c522f55534400000000000000000000000000), // FLR/USD
        bytes21(0x014254432f55534400000000000000000000000000), // BTC/USD
        bytes21(0x014554482f55534400000000000000000000000000) // ETH/USD
    ];

    constructor() {
        ftsoV2 = TestFtsoV2Interface(ContractRegistry.getTestFtsoV2());
    }

    function getFtsoV2CurrentFeedValues()
        view
        external
        returns (
            uint256[] memory _feedValues,
            int8[] memory _decimals,
            uint64 _timestamp
        )
    {
        return ftsoV2.getFeedsById(feedIds);
    }
}
