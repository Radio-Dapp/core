// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "./testUSDCe.sol";
import "./RelayManager.sol";
import "./RadioFund.sol";
import "./RadioFTSOinterface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RadioOrchestrator is Ownable {
    testUSDCe public immutable USDCe;

    RelayManager public immutable relayManager;
    RadioFTSOinterface public immutable radioFTSOinterface;

    uint256 public immutable one_usdc;

    mapping(address => bool) public isRegisteredMarketer;
    mapping(address => uint256) public fundCreatedAtBlockNumber;

    modifier onlyRegisteredMarketer(address user_) {
        require(isRegisteredMarketer[user_], "Only Marketer");
        _;
    }

    constructor() Ownable(msg.sender) {
        // only for testing, USDCe is being deployed here and not takes from the constructor
        USDCe = (new testUSDCe());

        one_usdc = 10 ** USDCe.decimals();

        relayManager = new RelayManager();
        // Hardcoded for Coston2
        radioFTSOinterface = new RadioFTSOinterface(
            0x3d893C53D9e8056135C26C8c638B76C8b60Df726
        );

        // feeController = new ();
    }

    function _registerMarketer(address marketer_) private {
        isRegisteredMarketer[marketer_] = true;
    }

    function becomeMarketer() external {
        require(
            isRegisteredMarketer[msg.sender] == false,
            "Already registered"
        );
        _registerMarketer(msg.sender);
    }

    function _createFund(
        address creator_,
        string memory name_,
        string memory symbol_
    ) private {
        RadioFund newFund = new RadioFund(creator_, name_, symbol_);
        fundCreatedAtBlockNumber[address(newFund)] = block.number;
    }

    function metaCreateFund(
        address creator_,
        string memory name_,
        string memory symbol_,
        string memory uri_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(name_, symbol_, uri_)
        );
        bool validExecution = relayManager.execute(
            creator_,
            address(this),
            "launchToken",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _createFund(msg.sender, name_, symbol_);
    }

    function getUSDCeForFundPurchaseFrom(
        address from_,
        uint256 amount_
    ) external {
        require(
            fundCreatedAtBlockNumber[msg.sender] > 0,
            "Only Token Contracts can call this method"
        );

        USDCe.transferFrom(from_, msg.sender, amount_);
    }

    function executeMetaTx(
        address from_,
        string memory functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) public returns (bool) {
        bool flag = false;

        if (fundCreatedAtBlockNumber[msg.sender] > 0) flag = true;
        if (msg.sender == address(USDCe)) flag = true;

        require(flag, "Not allowed to execute meta tx");

        bool valid = relayManager.execute(
            from_,
            msg.sender,
            functionName_,
            functionDataHash_,
            signature_
        );

        return valid;
    }

    function faucetUSDCe(address to_, uint256 amount_) external onlyOwner {
        USDCe.mintTo(to_, amount_);
    }
}
