// SPDX-License-Identifier: MIT
pragma solidity =0.8.19;

import "@openzeppelin/contracts/tokens/ERC20/ERC20.sol";

contract RadioPeriphery is ERC20{
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
