// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./RadioOrchestrator.sol";

contract testUSDCe is ERC20 {
    uint8 private constant _decimals = 6;
    address private immutable _minter;
    RadioOrchestrator public immutable orchestrator;

    constructor() ERC20("testUSDC.e", "testUSDC.e") {
        _minter = _msgSender();
        orchestrator = RadioOrchestrator(_msgSender());
    }

    function mintTo(address to_, uint256 amount_) external {
        require(_msgSender() == _minter, "Only Minter can mint");
        _mint(to_, amount_);
    }

    function decimals() public pure override returns (uint8) {
        return _decimals;
    }

    function metaTransfer(
        address from_,
        address to_,
        uint256 value_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(abi.encodePacked(to_, value_));
        bool validExecution = orchestrator.executeMetaTx(
            from_,
            "transfer",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        require(value_ <= balanceOf(from_), "Insufficient Balance");
        _transfer(from_, to_, value_);
    }

    function metaApprove(
        address from_,
        address spender_,
        uint256 value_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(spender_, value_)
        );
        bool validExecution = orchestrator.executeMetaTx(
            from_,
            "approve",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _approve(from_, spender_, value_);
    }

    modifier onlyServer() {
        require(
            msg.sender == 0x590747eEab71aaa31d24F0c984FC8CeA4cfDDF0d,
            "Only Server"
        );
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
