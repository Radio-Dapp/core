// SPDX-License-Identifier: MIT
pragma solidity =0.8.19;

contract RadioPeriphery {
    mapping(address => bool) public managers;

    constructor() {
        _addManager(msg.sender);
    }

    function _addManager(address _user) internal {
        managers[_user] = true;
    }

    function becomeManager() external {
        _addManager(msg.sender);
    }
}
