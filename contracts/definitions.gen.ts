
export const abi = {
  AuxillaryList: [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "add",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "contains",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAll",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "indexOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "length",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "remove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "safeAdd",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "safeRemove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const,
  RadioFTSOinterface: [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_ftsoV2",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "index_",
        "type": "uint8"
      }
    ],
    "name": "getConversion",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "int8",
        "name": "",
        "type": "int8"
      },
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFtsoV2CurrentFeedValues",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "_feedValues",
        "type": "uint256[]"
      },
      {
        "internalType": "int8[]",
        "name": "_decimals",
        "type": "int8[]"
      },
      {
        "internalType": "uint64",
        "name": "_timestamp",
        "type": "uint64"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "index_",
        "type": "uint8"
      }
    ],
    "name": "getTokenUSDCPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8[]",
        "name": "tokenShares_",
        "type": "uint8[]"
      }
    ],
    "name": "getUSDCeValueForTokenShare",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "inputDecimals",
        "type": "uint8"
      }
    ],
    "name": "scaleToUSDCe",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalTokens",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const,
  RadioFund: [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "creator_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "USDCe",
    "outputs": [
      {
        "internalType": "contract testUSDCe",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "liquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "usdceIn_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaBuy",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "usdceIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "leverage",
        "type": "uint8"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaBuyWithLeverage",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "percentSold_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaSell",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "one_usdc",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "serverEnforcedBurn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "serverEnforcedMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8[]",
        "name": "sharesConfig_",
        "type": "uint8[]"
      }
    ],
    "name": "setConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "sharesConfig",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const,
  RadioOrchestrator: [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "USDCe",
    "outputs": [
      {
        "internalType": "contract testUSDCe",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "becomeMarketer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "functionName_",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "functionDataHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "executeMetaTx",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "faucetUSDCe",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "fundCreatedAtBlockNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "getUSDCeForFundPurchaseFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isRegisteredMarketer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "creator_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "uri_",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaCreateFund",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "one_usdc",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "radioFTSOinterface",
    "outputs": [
      {
        "internalType": "contract RadioFTSOinterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "relayManager",
    "outputs": [
      {
        "internalType": "contract RelayManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "server",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "creator_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      }
    ],
    "name": "serverEnforcedFabrication",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const,
  RelayManager: [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "functionName_",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "functionDataHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "execute",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "nonceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "functionName_",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "functionDataHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "validate",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "messageHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "verifySignature",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
] as const,
  SignatureVerifier: [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "messageHash_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "verifySignature",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
] as const,
  testUSDCe: [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaApprove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature_",
        "type": "bytes"
      }
    ],
    "name": "metaTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "mintTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "orchestrator",
    "outputs": [
      {
        "internalType": "contract RadioOrchestrator",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "serverEnforcedBurn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "serverEnforcedMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const
} as const;

export const bytecode = {
  AuxillaryList: "0x608060405234801561000f575f80fd5b50335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610081575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100789190610196565b60405180910390fd5b6100908161009660201b60201c565b506101af565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61018082610157565b9050919050565b61019081610176565b82525050565b5f6020820190506101a95f830184610187565b92915050565b610df5806101bc5f395ff3fe608060405234801561000f575f80fd5b50600436106100a7575f3560e01c80635dbe47e81161006f5780635dbe47e81461013b5780636bdc38841461016b578063715018a6146101875780638da5cb5b14610191578063f2fde38b146101af578063fd6aad25146101cb576100a7565b8063046f7b9d146100ab5780630a3b0a4f146100c75780631f7b6d32146100e357806329092d0e1461010157806353ed51431461011d575b5f80fd5b6100c560048036038101906100c09190610a97565b6101fb565b005b6100e160048036038101906100dc9190610a97565b610299565b005b6100eb6103fa565b6040516100f89190610ada565b60405180910390f35b61011b60048036038101906101169190610a97565b610406565b005b61012561066c565b6040516101329190610baa565b60405180910390f35b61015560048036038101906101509190610a97565b6106f7565b6040516101629190610be4565b60405180910390f35b61018560048036038101906101809190610a97565b610749565b005b61018f6107e6565b005b6101996107f9565b6040516101a69190610c0c565b60405180910390f35b6101c960048036038101906101c49190610a97565b610820565b005b6101e560048036038101906101e09190610a97565b6108a4565b6040516101f29190610ada565b60405180910390f35b6102036108ea565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff161561028d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028490610c7f565b60405180910390fd5b61029681610299565b50565b6102a16108ea565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166103f757600181908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600180805490506103609190610cca565b60025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055505b50565b5f600180549050905090565b61040e6108ea565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1615610669575f60025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f600180805490506104b09190610cca565b9050808214610596575f600182815481106104ce576104cd610cfd565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050806001848154811061050d5761050c610cfd565b5b905f5260205f20015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b60018054806105a8576105a7610d2a565b5b600190038181905f5260205f20015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055905560025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f905560035f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81549060ff021916905550505b50565b606060018054806020026020016040519081016040528092919081815260200182805480156106ed57602002820191905f5260205f20905b815f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106a4575b5050505050905090565b5f60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff169050919050565b6107516108ea565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166107da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d190610da1565b60405180910390fd5b6107e381610406565b50565b6107ee6108ea565b6107f75f610971565b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108286108ea565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610898575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161088f9190610c0c565b60405180910390fd5b6108a181610971565b50565b5f60025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6108f2610a32565b73ffffffffffffffffffffffffffffffffffffffff166109106107f9565b73ffffffffffffffffffffffffffffffffffffffff161461096f57610933610a32565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109669190610c0c565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a6682610a3d565b9050919050565b610a7681610a5c565b8114610a80575f80fd5b50565b5f81359050610a9181610a6d565b92915050565b5f60208284031215610aac57610aab610a39565b5b5f610ab984828501610a83565b91505092915050565b5f819050919050565b610ad481610ac2565b82525050565b5f602082019050610aed5f830184610acb565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b610b2581610a5c565b82525050565b5f610b368383610b1c565b60208301905092915050565b5f602082019050919050565b5f610b5882610af3565b610b628185610afd565b9350610b6d83610b0d565b805f5b83811015610b9d578151610b848882610b2b565b9750610b8f83610b42565b925050600181019050610b70565b5085935050505092915050565b5f6020820190508181035f830152610bc28184610b4e565b905092915050565b5f8115159050919050565b610bde81610bca565b82525050565b5f602082019050610bf75f830184610bd5565b92915050565b610c0681610a5c565b82525050565b5f602082019050610c1f5f830184610bfd565b92915050565b5f82825260208201905092915050565b7f4164647265737320616c726561647920657869737473000000000000000000005f82015250565b5f610c69601683610c25565b9150610c7482610c35565b602082019050919050565b5f6020820190508181035f830152610c9681610c5d565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610cd482610ac2565b9150610cdf83610ac2565b9250828203905081811115610cf757610cf6610c9d565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffd5b7f4164647265737320646f6573206e6f74206578697374000000000000000000005f82015250565b5f610d8b601683610c25565b9150610d9682610d57565b602082019050919050565b5f6020820190508181035f830152610db881610d7f565b905091905056fea26469706673582212208df47db5a931a63aba8585839f5401162d63cbd5c5e25699f87e9ca09d251b6464736f6c634300081a0033",
  RadioFTSOinterface: "0x60806040526040518061020001604052806040518060400160405280600381526020017f424e42000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600581526020017f5452554d5000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f415242000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f534f4c000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f504f4c000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f535549000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f444f47450000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f414156450000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f585250000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f4c5443000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f545258000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f415641580000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f455448000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f4c494e4b0000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f425443000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f464c52000000000000000000000000000000000000000000000000000000000081525081525060029060106103ce9291906106cb565b503480156103da575f80fd5b5060405161242238038061242283398181016040528101906103fc91906107fb565b60028054905060045f6101000a81548160ff021916908360ff1602179055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061046961053560201b60201c565b5f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f5b60045f9054906101000a900460ff1660ff168160ff16101561052e5760036104d6826105eb60201b60201c565b908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548174ffffffffffffffffffffffffffffffffffffffffff021916908360581c021790555080806001019150506104a9565b5050610e23565b5f73ad67fe66660fb8dfe9d6b1b4240d8650e30f601973ffffffffffffffffffffffffffffffffffffffff1663159354a260405160200161057590610880565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016105a791906108b6565b602060405180830381865afa1580156105c2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105e691906107fb565b905090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f8b7a824600160028560ff1681548110610641576106406108cf565b5b905f5260205f20016040516020016106599190610a1b565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610685929190610aee565b602060405180830381865afa1580156106a0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106c49190610b71565b9050919050565b828054828255905f5260205f20908101928215610711579160200282015b828111156107105782518290816107009190610d54565b50916020019190600101906106e9565b5b50905061071e9190610722565b5090565b5b80821115610741575f81816107389190610745565b50600101610723565b5090565b50805461075190610929565b5f825580601f10610762575061077f565b601f0160209004905f5260205f209081019061077e9190610782565b5b50565b5b80821115610799575f815f905550600101610783565b5090565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6107ca826107a1565b9050919050565b6107da816107c0565b81146107e4575f80fd5b50565b5f815190506107f5816107d1565b92915050565b5f602082840312156108105761080f61079d565b5b5f61081d848285016107e7565b91505092915050565b5f82825260208201905092915050565b7f4674736f466565644964436f6e766572746572000000000000000000000000005f82015250565b5f61086a601383610826565b915061087582610836565b602082019050919050565b5f6020820190508181035f8301526108978161085e565b9050919050565b5f819050919050565b6108b08161089e565b82525050565b5f6020820190506108c95f8301846108a7565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061094057607f821691505b602082108103610953576109526108fc565b5b50919050565b5f81905092915050565b5f819050815f5260205f209050919050565b5f815461098181610929565b61098b8186610959565b9450600182165f81146109a557600181146109ba576109ec565b60ff19831686528115158202860193506109ec565b6109c385610963565b5f5b838110156109e4578154818901526001820191506020810190506109c5565b838801955050505b50505092915050565b7f2f55534400000000000000000000000000000000000000000000000000000000815250565b5f610a268284610975565b9150610a31826109f5565b60048201915081905092915050565b5f819050919050565b5f60ff82169050919050565b5f819050919050565b5f610a78610a73610a6e84610a40565b610a55565b610a49565b9050919050565b610a8881610a5e565b82525050565b5f81519050919050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610ac082610a8e565b610aca8185610826565b9350610ada818560208601610a98565b610ae381610aa6565b840191505092915050565b5f604082019050610b015f830185610a7f565b8181036020830152610b138184610ab6565b90509392505050565b5f7fffffffffffffffffffffffffffffffffffffffffff000000000000000000000082169050919050565b610b5081610b1c565b8114610b5a575f80fd5b50565b5f81519050610b6b81610b47565b92915050565b5f60208284031215610b8657610b8561079d565b5b5f610b9384828501610b5d565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610c137fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610bd8565b610c1d8683610bd8565b95508019841693508086168417925050509392505050565b5f819050919050565b5f610c58610c53610c4e84610c35565b610a55565b610c35565b9050919050565b5f819050919050565b610c7183610c3e565b610c85610c7d82610c5f565b848454610be4565b825550505050565b5f90565b610c99610c8d565b610ca4818484610c68565b505050565b5b81811015610cc757610cbc5f82610c91565b600181019050610caa565b5050565b601f821115610d0c57610cdd81610963565b610ce684610bc9565b81016020851015610cf5578190505b610d09610d0185610bc9565b830182610ca9565b50505b505050565b5f82821c905092915050565b5f610d2c5f1984600802610d11565b1980831691505092915050565b5f610d448383610d1d565b9150826002028217905092915050565b610d5d82610a8e565b67ffffffffffffffff811115610d7657610d75610b9c565b5b610d808254610929565b610d8b828285610ccb565b5f60209050601f831160018114610dbc575f8415610daa578287015190505b610db48582610d39565b865550610e1b565b601f198416610dca86610963565b5f5b82811015610df157848901518255600182019150602085019450602081019050610dcc565b86831015610e0e5784890151610e0a601f891682610d1d565b8355505b6001600288020188555050505b505050505050565b6115f280610e305f395ff3fe608060405260043610610054575f3560e01c806347adde1a146100585780637e1c0c0914610088578063840128de146100b2578063d115df31146100e4578063f4b9212514610120578063f601bc8b14610150575b5f80fd5b610072600480360381019061006d91906108ac565b61017c565b60405161007f919061090b565b60405180910390f35b348015610093575f80fd5b5061009c61032d565b6040516100a99190610933565b60405180910390f35b6100cc60048036038101906100c7919061094c565b61033f565b6040516100db939291906109b3565b60405180910390f35b3480156100ef575f80fd5b5061010a60048036038101906101059190610a12565b610402565b604051610117919061090b565b60405180910390f35b61013a6004803603810190610135919061094c565b61047a565b604051610147919061090b565b60405180910390f35b34801561015b575f80fd5b50610164610588565b60405161017393929190610bbe565b60405180910390f35b5f805f90505f5b60045f9054906101000a900460ff1660ff168160ff161015610317575f805f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166393e9f806600160045f9054906101000a900460ff1660ff16346101fe9190610c5b565b6102089190610c8b565b60038760ff168154811061021f5761021e610cbe565b5b905f5260205f20015f9054906101000a900460581b6040518363ffffffff1660e01b81526004016102509190610d25565b60606040518083038185885af115801561026c573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906102919190610da6565b92509250925080600460016101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505f6102cb8484610402565b9050878560ff16815181106102e3576102e2610cbe565b5b602002602001015160ff16816102f99190610df6565b866103049190610e37565b9550505050508080600101915050610183565b506064816103259190610c5b565b915050919050565b60045f9054906101000a900460ff1681565b5f805f805f8060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166393e9f8063461038c8a610635565b6040518363ffffffff1660e01b81526004016103a89190610d25565b60606040518083038185885af11580156103c4573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906103e99190610da6565b9250925092508282829550955095505050509193909250565b5f60068260ff160361041657829050610474565b60068260ff16101561044d5781600661042f9190610e6a565b600a61043b9190610fcd565b836104469190610df6565b9050610474565b60068261045a9190610e6a565b600a6104669190610fcd565b836104719190610c5b565b90505b92915050565b5f805f8060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166393e9f8063460038860ff16815481106104d3576104d2610cbe565b5b905f5260205f20015f9054906101000a900460581b6040518363ffffffff1660e01b81526004016105049190610d25565b60606040518083038185885af1158015610520573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906105459190610da6565b92509250925080600460016101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555061057e8383610402565b9350505050919050565b6060805f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634c37574560036040518263ffffffff1660e01b81526004016105e7919061112b565b5f604051808303815f875af1158015610602573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f8201168201806040525081019061062a91906112cb565b925092509250909192565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f8b7a824600160028560ff168154811061068b5761068a610cbe565b5b905f5260205f20016040516020016106a39190611472565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016106cf929190611539565b602060405180830381865afa1580156106ea573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061070e9190611591565b9050919050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6107708261072a565b810181811067ffffffffffffffff8211171561078f5761078e61073a565b5b80604052505050565b5f6107a1610715565b90506107ad8282610767565b919050565b5f67ffffffffffffffff8211156107cc576107cb61073a565b5b602082029050602081019050919050565b5f80fd5b5f60ff82169050919050565b6107f6816107e1565b8114610800575f80fd5b50565b5f81359050610811816107ed565b92915050565b5f610829610824846107b2565b610798565b9050808382526020820190506020840283018581111561084c5761084b6107dd565b5b835b8181101561087557806108618882610803565b84526020840193505060208101905061084e565b5050509392505050565b5f82601f83011261089357610892610726565b5b81356108a3848260208601610817565b91505092915050565b5f602082840312156108c1576108c061071e565b5b5f82013567ffffffffffffffff8111156108de576108dd610722565b5b6108ea8482850161087f565b91505092915050565b5f819050919050565b610905816108f3565b82525050565b5f60208201905061091e5f8301846108fc565b92915050565b61092d816107e1565b82525050565b5f6020820190506109465f830184610924565b92915050565b5f602082840312156109615761096061071e565b5b5f61096e84828501610803565b91505092915050565b5f815f0b9050919050565b61098b81610977565b82525050565b5f67ffffffffffffffff82169050919050565b6109ad81610991565b82525050565b5f6060820190506109c65f8301866108fc565b6109d36020830185610982565b6109e060408301846109a4565b949350505050565b6109f1816108f3565b81146109fb575f80fd5b50565b5f81359050610a0c816109e8565b92915050565b5f8060408385031215610a2857610a2761071e565b5b5f610a35858286016109fe565b9250506020610a4685828601610803565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b610a82816108f3565b82525050565b5f610a938383610a79565b60208301905092915050565b5f602082019050919050565b5f610ab582610a50565b610abf8185610a5a565b9350610aca83610a6a565b805f5b83811015610afa578151610ae18882610a88565b9750610aec83610a9f565b925050600181019050610acd565b5085935050505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b610b3981610977565b82525050565b5f610b4a8383610b30565b60208301905092915050565b5f602082019050919050565b5f610b6c82610b07565b610b768185610b11565b9350610b8183610b21565b805f5b83811015610bb1578151610b988882610b3f565b9750610ba383610b56565b925050600181019050610b84565b5085935050505092915050565b5f6060820190508181035f830152610bd68186610aab565b90508181036020830152610bea8185610b62565b9050610bf960408301846109a4565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610c65826108f3565b9150610c70836108f3565b925082610c8057610c7f610c01565b5b828204905092915050565b5f610c95826108f3565b9150610ca0836108f3565b9250828203905081811115610cb857610cb7610c2e565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f7fffffffffffffffffffffffffffffffffffffffffff000000000000000000000082169050919050565b610d1f81610ceb565b82525050565b5f602082019050610d385f830184610d16565b92915050565b5f81519050610d4c816109e8565b92915050565b610d5b81610977565b8114610d65575f80fd5b50565b5f81519050610d7681610d52565b92915050565b610d8581610991565b8114610d8f575f80fd5b50565b5f81519050610da081610d7c565b92915050565b5f805f60608486031215610dbd57610dbc61071e565b5b5f610dca86828701610d3e565b9350506020610ddb86828701610d68565b9250506040610dec86828701610d92565b9150509250925092565b5f610e00826108f3565b9150610e0b836108f3565b9250828202610e19816108f3565b91508282048414831517610e3057610e2f610c2e565b5b5092915050565b5f610e41826108f3565b9150610e4c836108f3565b9250828201905080821115610e6457610e63610c2e565b5b92915050565b5f610e74826107e1565b9150610e7f836107e1565b9250828203905060ff811115610e9857610e97610c2e565b5b92915050565b5f8160011c9050919050565b5f808291508390505b6001851115610ef357808604811115610ecf57610ece610c2e565b5b6001851615610ede5780820291505b8081029050610eec85610e9e565b9450610eb3565b94509492505050565b5f82610f0b5760019050610fc6565b81610f18575f9050610fc6565b8160018114610f2e5760028114610f3857610f67565b6001915050610fc6565b60ff841115610f4a57610f49610c2e565b5b8360020a915084821115610f6157610f60610c2e565b5b50610fc6565b5060208310610133831016604e8410600b8410161715610f9c5782820a905083811115610f9757610f96610c2e565b5b610fc6565b610fa98484846001610eaa565b92509050818404811115610fc057610fbf610c2e565b5b81810290505b9392505050565b5f610fd7826108f3565b9150610fe2836107e1565b925061100f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610efc565b905092915050565b5f81549050919050565b5f82825260208201905092915050565b5f819050815f5260205f209050919050565b61104c81610ceb565b82525050565b5f61105d8383611043565b60208301905092915050565b5f815f1c9050919050565b5f8160581b9050919050565b5f61108a82611074565b9050919050565b5f6110a361109e83611069565b611080565b9050919050565b5f6110b58254611091565b9050919050565b5f600182019050919050565b5f6110d282611017565b6110dc8185611021565b93506110e783611031565b805f5b8381101561111e576110fb826110aa565b6111058882611052565b9750611110836110bc565b9250506001810190506110ea565b5085935050505092915050565b5f6020820190508181035f83015261114381846110c8565b905092915050565b5f67ffffffffffffffff8211156111655761116461073a565b5b602082029050602081019050919050565b5f6111886111838461114b565b610798565b905080838252602082019050602084028301858111156111ab576111aa6107dd565b5b835b818110156111d457806111c08882610d3e565b8452602084019350506020810190506111ad565b5050509392505050565b5f82601f8301126111f2576111f1610726565b5b8151611202848260208601611176565b91505092915050565b5f67ffffffffffffffff8211156112255761122461073a565b5b602082029050602081019050919050565b5f6112486112438461120b565b610798565b9050808382526020820190506020840283018581111561126b5761126a6107dd565b5b835b8181101561129457806112808882610d68565b84526020840193505060208101905061126d565b5050509392505050565b5f82601f8301126112b2576112b1610726565b5b81516112c2848260208601611236565b91505092915050565b5f805f606084860312156112e2576112e161071e565b5b5f84015167ffffffffffffffff8111156112ff576112fe610722565b5b61130b868287016111de565b935050602084015167ffffffffffffffff81111561132c5761132b610722565b5b6113388682870161129e565b925050604061134986828701610d92565b9150509250925092565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061139757607f821691505b6020821081036113aa576113a9611353565b5b50919050565b5f81905092915050565b5f819050815f5260205f209050919050565b5f81546113d881611380565b6113e281866113b0565b9450600182165f81146113fc576001811461141157611443565b60ff1983168652811515820286019350611443565b61141a856113ba565b5f5b8381101561143b5781548189015260018201915060208101905061141c565b838801955050505b50505092915050565b7f2f55534400000000000000000000000000000000000000000000000000000000815250565b5f61147d82846113cc565b91506114888261144c565b60048201915081905092915050565b5f819050919050565b5f819050919050565b5f6114c36114be6114b984611497565b6114a0565b6107e1565b9050919050565b6114d3816114a9565b82525050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f61150b826114d9565b61151581856114e3565b93506115258185602086016114f3565b61152e8161072a565b840191505092915050565b5f60408201905061154c5f8301856114ca565b818103602083015261155e8184611501565b90509392505050565b61157081610ceb565b811461157a575f80fd5b50565b5f8151905061158b81611567565b92915050565b5f602082840312156115a6576115a561071e565b5b5f6115b38482850161157d565b9150509291505056fea2646970667358221220b7e120418d0dce042892e3dad2606dd429bdcee30e09312ce38b98408e44729364736f6c634300081a0033",
  RadioFund: "0x60e060405234801561000f575f80fd5b50604051613f1f380380613f1f833981810160405281019061003191906103da565b81818160039081610042919061066f565b508060049081610052919061066f565b5050503360095f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638a4d786b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100ff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101239190610779565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb5fac416040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e491906107ce565b60a081815250508260085f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506107f9565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61026d82610244565b9050919050565b61027d81610263565b8114610287575f80fd5b50565b5f8151905061029881610274565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6102ec826102a6565b810181811067ffffffffffffffff8211171561030b5761030a6102b6565b5b80604052505050565b5f61031d610233565b905061032982826102e3565b919050565b5f67ffffffffffffffff821115610348576103476102b6565b5b610351826102a6565b9050602081019050919050565b8281835e5f83830152505050565b5f61037e6103798461032e565b610314565b90508281526020810184848401111561039a576103996102a2565b5b6103a584828561035e565b509392505050565b5f82601f8301126103c1576103c061029e565b5b81516103d184826020860161036c565b91505092915050565b5f805f606084860312156103f1576103f061023c565b5b5f6103fe8682870161028a565b935050602084015167ffffffffffffffff81111561041f5761041e610240565b5b61042b868287016103ad565b925050604084015167ffffffffffffffff81111561044c5761044b610240565b5b610458868287016103ad565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806104b057607f821691505b6020821081036104c3576104c261046c565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105257fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826104ea565b61052f86836104ea565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61057361056e61056984610547565b610550565b610547565b9050919050565b5f819050919050565b61058c83610559565b6105a06105988261057a565b8484546104f6565b825550505050565b5f90565b6105b46105a8565b6105bf818484610583565b505050565b5b818110156105e2576105d75f826105ac565b6001810190506105c5565b5050565b601f821115610627576105f8816104c9565b610601846104db565b81016020851015610610578190505b61062461061c856104db565b8301826105c4565b50505b505050565b5f82821c905092915050565b5f6106475f198460080261062c565b1980831691505092915050565b5f61065f8383610638565b9150826002028217905092915050565b61067882610462565b67ffffffffffffffff811115610691576106906102b6565b5b61069b8254610499565b6106a68282856105e6565b5f60209050601f8311600181146106d7575f84156106c5578287015190505b6106cf8582610654565b865550610736565b601f1984166106e5866104c9565b5f5b8281101561070c578489015182556001820191506020850194506020810190506106e7565b868310156107295784890151610725601f891682610638565b8355505b6001600288020188555050505b505050505050565b5f61074882610263565b9050919050565b6107588161073e565b8114610762575f80fd5b50565b5f815190506107738161074f565b92915050565b5f6020828403121561078e5761078d61023c565b5b5f61079b84828501610765565b91505092915050565b6107ad81610547565b81146107b7575f80fd5b50565b5f815190506107c8816107a4565b92915050565b5f602082840312156107e3576107e261023c565b5b5f6107f0848285016107ba565b91505092915050565b60805160a05160c0516136ff6108205f395f50505f610c6101525f610b5a01526136ff5ff3fe608060405260043610610113575f3560e01c80638a4d786b1161009f578063be4ae8e011610063578063be4ae8e0146103a1578063d1af8871146103bd578063d7327eac146103e5578063dd62ed3e1461040d578063f963ef2d1461044957610113565b80638a4d786b146102ab57806395d89b41146102d5578063a7115132146102ff578063a9059cbb1461033b578063bb5fac411461037757610113565b80631a686502116100e65780631a686502146101cf57806323b872dd146101ed578063313ce56714610229578063571ba9af1461025357806370a082311461026f57610113565b806306fdde0314610117578063095ea7b31461014157806315a1f2ce1461017d57806318160ddd146101a5575b5f80fd5b348015610122575f80fd5b5061012b610471565b6040516101389190611ba4565b60405180910390f35b34801561014c575f80fd5b5061016760048036038101906101629190611c62565b610501565b6040516101749190611cba565b60405180910390f35b348015610188575f80fd5b506101a3600480360381019061019e9190611d34565b610523565b005b3480156101b0575f80fd5b506101b9610704565b6040516101c69190611db4565b60405180910390f35b6101d761070d565b6040516101e49190611db4565b60405180910390f35b3480156101f8575f80fd5b50610213600480360381019061020e9190611dcd565b61082e565b6040516102209190611cba565b60405180910390f35b348015610234575f80fd5b5061023d61085c565b60405161024a9190611e38565b60405180910390f35b61026d60048036038101906102689190611d34565b610864565b005b34801561027a575f80fd5b5061029560048036038101906102909190611e51565b610b13565b6040516102a29190611db4565b60405180910390f35b3480156102b6575f80fd5b506102bf610b58565b6040516102cc9190611ed7565b60405180910390f35b3480156102e0575f80fd5b506102e9610b7c565b6040516102f69190611ba4565b60405180910390f35b34801561030a575f80fd5b5061032560048036038101906103209190611ef0565b610c0c565b6040516103329190611e38565b60405180910390f35b348015610346575f80fd5b50610361600480360381019061035c9190611c62565b610c3d565b60405161036e9190611cba565b60405180910390f35b348015610382575f80fd5b5061038b610c5f565b6040516103989190611db4565b60405180910390f35b6103bb60048036038101906103b69190611f45565b610c83565b005b3480156103c8575f80fd5b506103e360048036038101906103de9190611c62565b610f78565b005b3480156103f0575f80fd5b5061040b60048036038101906104069190611c62565b611081565b005b348015610418575f80fd5b50610433600480360381019061042e9190611fc9565b61118a565b6040516104409190611db4565b60405180910390f35b348015610454575f80fd5b5061046f600480360381019061046a919061213f565b61120c565b005b606060038054610480906121b3565b80601f01602080910402602001604051908101604052809291908181526020018280546104ac906121b3565b80156104f75780601f106104ce576101008083540402835291602001916104f7565b820191905f5260205f20905b8154815290600101906020018083116104da57829003601f168201915b5050505050905090565b5f8061050b6114b3565b90506105188185856114ba565b600191505092915050565b5f836040516020016105359190612203565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80878487876040518563ffffffff1660e01b81526004016105ae94939291906122d8565b6020604051808303815f875af11580156105ca573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105ee9190612353565b905080610630576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610627906123ee565b60405180910390fd5b6064851115801561064057505f85115b61067f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067690612456565b60405180910390fd5b5f60648661068c33610b13565b61069691906124a1565b6106a0919061250f565b90505f5b6005805490508110156106f0575f600582815481106106c6576106c561253f565b5b905f5260205f2090602091828204019190069054906101000a9050505080806001019150506106a4565b506106fb33826114cc565b50505050505050565b5f600254905090565b5f610716610704565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166347ee24126040518163ffffffff1660e01b8152600401602060405180830381865afa158015610780573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107a491906125a7565b73ffffffffffffffffffffffffffffffffffffffff166347adde1a3460056040518363ffffffff1660e01b81526004016107de91906132fc565b60206040518083038185885af11580156107fa573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061081f9190613330565b61082991906124a1565b905090565b5f806108386114b3565b905061084585828561154b565b6108508585856115dd565b60019150509392505050565b5f6012905090565b5f836040516020016108769190612203565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80878487876040518563ffffffff1660e01b81526004016108ef94939291906133a5565b6020604051808303815f875af115801561090b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061092f9190612353565b905080610971576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610968906123ee565b60405180910390fd5b5f61097a610704565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166347ee24126040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109e4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a0891906125a7565b73ffffffffffffffffffffffffffffffffffffffff166347adde1a3460056040518363ffffffff1660e01b8152600401610a4291906132fc565b60206040518083038185885af1158015610a5e573d5f803e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610a839190613330565b610a8d91906124a1565b90505f610a98610704565b8288610aa4919061250f565b610aae91906124a1565b90505f5b600580549050811015610afe575f60058281548110610ad457610ad361253f565b5b905f5260205f2090602091828204019190069054906101000a905050508080600101915050610ab2565b50610b0933826116cd565b5050505050505050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b606060048054610b8b906121b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb7906121b3565b8015610c025780601f10610bd957610100808354040283529160200191610c02565b820191905f5260205f20905b815481529060010190602001808311610be557829003601f168201915b5050505050905090565b60058181548110610c1b575f80fd5b905f5260205f209060209182820401919006915054906101000a900460ff1681565b5f80610c476114b3565b9050610c548185856115dd565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f84604051602001610c959190612203565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b8152600401610d0e94939291906133a5565b6020604051808303815f875af1158015610d2a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d4e9190612353565b905080610d90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d87906123ee565b60405180910390fd5b5f8560ff1611610dd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcc90613440565b60405180910390fd5b5f610dde610704565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166347ee24126040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e48573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e6c91906125a7565b73ffffffffffffffffffffffffffffffffffffffff166347adde1a3460056040518363ffffffff1660e01b8152600401610ea691906132fc565b60206040518083038185885af1158015610ec2573d5f803e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610ee79190613330565b610ef191906124a1565b90505f610efc610704565b8289610f08919061250f565b610f1291906124a1565b90505f5b600580549050811015610f62575f60058281548110610f3857610f3761253f565b5b905f5260205f2090602091828204019190069054906101000a905050508080600101915050610f16565b50610f6d33826116cd565b505050505050505050565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fd922a426040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fe2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110069190613472565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611073576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106a906134e7565b60405180910390fd5b61107d82826114cc565b5050565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fd922a426040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110eb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061110f9190613472565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461117c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611173906134e7565b60405180910390fd5b61118682826116cd565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461129b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112929061354f565b60405180910390fd5b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166347ee24126040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061132991906125a7565b73ffffffffffffffffffffffffffffffffffffffff16637e1c0c096040518163ffffffff1660e01b8152600401602060405180830381865afa158015611371573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113959190613581565b60ff168151146113da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d1906135f6565b60405180910390fd5b5f5b81518110156114af575f600582815481106113fa576113f961253f565b5b905f5260205f2090602091828204019190069054906101000a900460ff1683838151811061142b5761142a61253f565b5b602002602001015161143d9190613614565b90505f8160ff16146114a15782828151811061145c5761145b61253f565b5b6020026020010151600583815481106114785761147761253f565b5b905f5260205f2090602091828204019190066101000a81548160ff021916908360ff1602179055505b5080806001019150506113dc565b5050565b5f33905090565b6114c7838383600161174c565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361153c575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016115339190613648565b60405180910390fd5b611547825f8361191b565b5050565b5f611556848461118a565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146115d757818110156115c8578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016115bf93929190613661565b60405180910390fd5b6115d684848484035f61174c565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361164d575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016116449190613648565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116bd575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016116b49190613648565b60405180910390fd5b6116c883838361191b565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361173d575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016117349190613648565b60405180910390fd5b6117485f838361191b565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036117bc575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016117b39190613648565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361182c575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016118239190613648565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015611915578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161190c9190611db4565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361196b578060025f82825461195f9190613696565b92505081905550611a39565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156119f4578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016119eb93929190613661565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611a80578060025f8282540392505081905550611aca565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611b279190611db4565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611b7682611b34565b611b808185611b3e565b9350611b90818560208601611b4e565b611b9981611b5c565b840191505092915050565b5f6020820190508181035f830152611bbc8184611b6c565b905092915050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611bfe82611bd5565b9050919050565b611c0e81611bf4565b8114611c18575f80fd5b50565b5f81359050611c2981611c05565b92915050565b5f819050919050565b611c4181611c2f565b8114611c4b575f80fd5b50565b5f81359050611c5c81611c38565b92915050565b5f8060408385031215611c7857611c77611bcd565b5b5f611c8585828601611c1b565b9250506020611c9685828601611c4e565b9150509250929050565b5f8115159050919050565b611cb481611ca0565b82525050565b5f602082019050611ccd5f830184611cab565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f840112611cf457611cf3611cd3565b5b8235905067ffffffffffffffff811115611d1157611d10611cd7565b5b602083019150836001820283011115611d2d57611d2c611cdb565b5b9250929050565b5f805f8060608587031215611d4c57611d4b611bcd565b5b5f611d5987828801611c1b565b9450506020611d6a87828801611c4e565b935050604085013567ffffffffffffffff811115611d8b57611d8a611bd1565b5b611d9787828801611cdf565b925092505092959194509250565b611dae81611c2f565b82525050565b5f602082019050611dc75f830184611da5565b92915050565b5f805f60608486031215611de457611de3611bcd565b5b5f611df186828701611c1b565b9350506020611e0286828701611c1b565b9250506040611e1386828701611c4e565b9150509250925092565b5f60ff82169050919050565b611e3281611e1d565b82525050565b5f602082019050611e4b5f830184611e29565b92915050565b5f60208284031215611e6657611e65611bcd565b5b5f611e7384828501611c1b565b91505092915050565b5f819050919050565b5f611e9f611e9a611e9584611bd5565b611e7c565b611bd5565b9050919050565b5f611eb082611e85565b9050919050565b5f611ec182611ea6565b9050919050565b611ed181611eb7565b82525050565b5f602082019050611eea5f830184611ec8565b92915050565b5f60208284031215611f0557611f04611bcd565b5b5f611f1284828501611c4e565b91505092915050565b611f2481611e1d565b8114611f2e575f80fd5b50565b5f81359050611f3f81611f1b565b92915050565b5f805f805f60808688031215611f5e57611f5d611bcd565b5b5f611f6b88828901611c1b565b9550506020611f7c88828901611c4e565b9450506040611f8d88828901611f31565b935050606086013567ffffffffffffffff811115611fae57611fad611bd1565b5b611fba88828901611cdf565b92509250509295509295909350565b5f8060408385031215611fdf57611fde611bcd565b5b5f611fec85828601611c1b565b9250506020611ffd85828601611c1b565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61203d82611b5c565b810181811067ffffffffffffffff8211171561205c5761205b612007565b5b80604052505050565b5f61206e611bc4565b905061207a8282612034565b919050565b5f67ffffffffffffffff82111561209957612098612007565b5b602082029050602081019050919050565b5f6120bc6120b78461207f565b612065565b905080838252602082019050602084028301858111156120df576120de611cdb565b5b835b8181101561210857806120f48882611f31565b8452602084019350506020810190506120e1565b5050509392505050565b5f82601f83011261212657612125611cd3565b5b81356121368482602086016120aa565b91505092915050565b5f6020828403121561215457612153611bcd565b5b5f82013567ffffffffffffffff81111561217157612170611bd1565b5b61217d84828501612112565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806121ca57607f821691505b6020821081036121dd576121dc612186565b5b50919050565b5f819050919050565b6121fd6121f882611c2f565b6121e3565b82525050565b5f61220e82846121ec565b60208201915081905092915050565b61222681611bf4565b82525050565b7f73656c6c000000000000000000000000000000000000000000000000000000005f82015250565b5f612260600483611b3e565b915061226b8261222c565b602082019050919050565b5f819050919050565b61228881612276565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f6122b7838561228e565b93506122c483858461229e565b6122cd83611b5c565b840190509392505050565b5f6080820190506122eb5f83018761221d565b81810360208301526122fc81612254565b905061230b604083018661227f565b818103606083015261231e8184866122ac565b905095945050505050565b61233281611ca0565b811461233c575f80fd5b50565b5f8151905061234d81612329565b92915050565b5f6020828403121561236857612367611bcd565b5b5f6123758482850161233f565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f6123d8602d83611b3e565b91506123e38261237e565b604082019050919050565b5f6020820190508181035f830152612405816123cc565b9050919050565b7f496e76616c69642070657263656e7420736f6c640000000000000000000000005f82015250565b5f612440601483611b3e565b915061244b8261240c565b602082019050919050565b5f6020820190508181035f83015261246d81612434565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6124ab82611c2f565b91506124b683611c2f565b92508282026124c481611c2f565b915082820484148315176124db576124da612474565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61251982611c2f565b915061252483611c2f565b925082612534576125336124e2565b5b828204905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f61257682611bf4565b9050919050565b6125868161256c565b8114612590575f80fd5b50565b5f815190506125a18161257d565b92915050565b5f602082840312156125bc576125bb611bcd565b5b5f6125c984828501612593565b91505092915050565b5f81549050919050565b5f82825260208201905092915050565b5f819050815f5260205f209050919050565b61260781611e1d565b82525050565b5f815f1c9050919050565b5f60ff82169050919050565b5f6126366126318361260d565b612618565b9050919050565b5f8160081c9050919050565b5f61265b6126568361263d565b612618565b9050919050565b5f8160101c9050919050565b5f61268061267b83612662565b612618565b9050919050565b5f8160181c9050919050565b5f6126a56126a083612687565b612618565b9050919050565b5f8160201c9050919050565b5f6126ca6126c5836126ac565b612618565b9050919050565b5f8160281c9050919050565b5f6126ef6126ea836126d1565b612618565b9050919050565b5f8160301c9050919050565b5f61271461270f836126f6565b612618565b9050919050565b5f8160381c9050919050565b5f6127396127348361271b565b612618565b9050919050565b5f8160401c9050919050565b5f61275e61275983612740565b612618565b9050919050565b5f8160481c9050919050565b5f61278361277e83612765565b612618565b9050919050565b5f8160501c9050919050565b5f6127a86127a38361278a565b612618565b9050919050565b5f8160581c9050919050565b5f6127cd6127c8836127af565b612618565b9050919050565b5f8160601c9050919050565b5f6127f26127ed836127d4565b612618565b9050919050565b5f8160681c9050919050565b5f612817612812836127f9565b612618565b9050919050565b5f8160701c9050919050565b5f61283c6128378361281e565b612618565b9050919050565b5f8160781c9050919050565b5f61286161285c83612843565b612618565b9050919050565b5f8160801c9050919050565b5f61288661288183612868565b612618565b9050919050565b5f8160881c9050919050565b5f6128ab6128a68361288d565b612618565b9050919050565b5f8160901c9050919050565b5f6128d06128cb836128b2565b612618565b9050919050565b5f8160981c9050919050565b5f6128f56128f0836128d7565b612618565b9050919050565b5f8160a01c9050919050565b5f61291a612915836128fc565b612618565b9050919050565b5f8160a81c9050919050565b5f61293f61293a83612921565b612618565b9050919050565b5f8160b01c9050919050565b5f61296461295f83612946565b612618565b9050919050565b5f8160b81c9050919050565b5f6129896129848361296b565b612618565b9050919050565b5f8160c01c9050919050565b5f6129ae6129a983612990565b612618565b9050919050565b5f8160c81c9050919050565b5f6129d36129ce836129b5565b612618565b9050919050565b5f8160d01c9050919050565b5f6129f86129f3836129da565b612618565b9050919050565b5f8160d81c9050919050565b5f612a1d612a18836129ff565b612618565b9050919050565b5f8160e01c9050919050565b5f612a42612a3d83612a24565b612618565b9050919050565b5f8160e81c9050919050565b5f612a67612a6283612a49565b612618565b9050919050565b5f8160f01c9050919050565b5f612a8c612a8783612a6e565b612618565b9050919050565b5f8160f81c9050919050565b5f612ab1612aac83612a93565b612618565b9050919050565b5f612ac2826125d2565b612acc81856125dc565b935083612ad8846125ec565b5f600115612e04575b83600160200382011015612e03578154612b0388612afe83612624565b6125fe565b602088019750612b1b88612b1683612649565b6125fe565b602088019750612b3388612b2e8361266e565b6125fe565b602088019750612b4b88612b4683612693565b6125fe565b602088019750612b6388612b5e836126b8565b6125fe565b602088019750612b7b88612b76836126dd565b6125fe565b602088019750612b9388612b8e83612702565b6125fe565b602088019750612bab88612ba683612727565b6125fe565b602088019750612bc388612bbe8361274c565b6125fe565b602088019750612bdb88612bd683612771565b6125fe565b602088019750612bf388612bee83612796565b6125fe565b602088019750612c0b88612c06836127bb565b6125fe565b602088019750612c2388612c1e836127e0565b6125fe565b602088019750612c3b88612c3683612805565b6125fe565b602088019750612c5388612c4e8361282a565b6125fe565b602088019750612c6b88612c668361284f565b6125fe565b602088019750612c8388612c7e83612874565b6125fe565b602088019750612c9b88612c9683612899565b6125fe565b602088019750612cb388612cae836128be565b6125fe565b602088019750612ccb88612cc6836128e3565b6125fe565b602088019750612ce388612cde83612908565b6125fe565b602088019750612cfb88612cf68361292d565b6125fe565b602088019750612d1388612d0e83612952565b6125fe565b602088019750612d2b88612d2683612977565b6125fe565b602088019750612d4388612d3e8361299c565b6125fe565b602088019750612d5b88612d56836129c1565b6125fe565b602088019750612d7388612d6e836129e6565b6125fe565b602088019750612d8b88612d8683612a0b565b6125fe565b602088019750612da388612d9e83612a30565b6125fe565b602088019750612dbb88612db683612a55565b6125fe565b602088019750612dd388612dce83612a7a565b6125fe565b602088019750612deb88612de683612a9f565b6125fe565b60208801975060018301925050602081019050612ae1565b5b6001156132ef57815484821015612e3457612e2788612e2283612624565b6125fe565b6020880197506001820191505b84821015612e5b57612e4e88612e4983612649565b6125fe565b6020880197506001820191505b84821015612e8257612e7588612e708361266e565b6125fe565b6020880197506001820191505b84821015612ea957612e9c88612e9783612693565b6125fe565b6020880197506001820191505b84821015612ed057612ec388612ebe836126b8565b6125fe565b6020880197506001820191505b84821015612ef757612eea88612ee5836126dd565b6125fe565b6020880197506001820191505b84821015612f1e57612f1188612f0c83612702565b6125fe565b6020880197506001820191505b84821015612f4557612f3888612f3383612727565b6125fe565b6020880197506001820191505b84821015612f6c57612f5f88612f5a8361274c565b6125fe565b6020880197506001820191505b84821015612f9357612f8688612f8183612771565b6125fe565b6020880197506001820191505b84821015612fba57612fad88612fa883612796565b6125fe565b6020880197506001820191505b84821015612fe157612fd488612fcf836127bb565b6125fe565b6020880197506001820191505b8482101561300857612ffb88612ff6836127e0565b6125fe565b6020880197506001820191505b8482101561302f576130228861301d83612805565b6125fe565b6020880197506001820191505b8482101561305657613049886130448361282a565b6125fe565b6020880197506001820191505b8482101561307d576130708861306b8361284f565b6125fe565b6020880197506001820191505b848210156130a4576130978861309283612874565b6125fe565b6020880197506001820191505b848210156130cb576130be886130b983612899565b6125fe565b6020880197506001820191505b848210156130f2576130e5886130e0836128be565b6125fe565b6020880197506001820191505b848210156131195761310c88613107836128e3565b6125fe565b6020880197506001820191505b84821015613140576131338861312e83612908565b6125fe565b6020880197506001820191505b848210156131675761315a886131558361292d565b6125fe565b6020880197506001820191505b8482101561318e576131818861317c83612952565b6125fe565b6020880197506001820191505b848210156131b5576131a8886131a383612977565b6125fe565b6020880197506001820191505b848210156131dc576131cf886131ca8361299c565b6125fe565b6020880197506001820191505b84821015613203576131f6886131f1836129c1565b6125fe565b6020880197506001820191505b8482101561322a5761321d88613218836129e6565b6125fe565b6020880197506001820191505b84821015613251576132448861323f83612a0b565b6125fe565b6020880197506001820191505b848210156132785761326b8861326683612a30565b6125fe565b6020880197506001820191505b8482101561329f576132928861328d83612a55565b6125fe565b6020880197506001820191505b848210156132c6576132b9886132b483612a7a565b6125fe565b6020880197506001820191505b848210156132ed576132e0886132db83612a9f565b6125fe565b6020880197506001820191505b505b8694505050505092915050565b5f6020820190508181035f8301526133148184612ab8565b905092915050565b5f8151905061332a81611c38565b92915050565b5f6020828403121561334557613344611bcd565b5b5f6133528482850161331c565b91505092915050565b7f62757900000000000000000000000000000000000000000000000000000000005f82015250565b5f61338f600383611b3e565b915061339a8261335b565b602082019050919050565b5f6080820190506133b85f83018761221d565b81810360208301526133c981613383565b90506133d8604083018661227f565b81810360608301526133eb8184866122ac565b905095945050505050565b7f496e76616c6964206c65766572616765000000000000000000000000000000005f82015250565b5f61342a601083611b3e565b9150613435826133f6565b602082019050919050565b5f6020820190508181035f8301526134578161341e565b9050919050565b5f8151905061346c81611c05565b92915050565b5f6020828403121561348757613486611bcd565b5b5f6134948482850161345e565b91505092915050565b7f4f6e6c79205365727665720000000000000000000000000000000000000000005f82015250565b5f6134d1600b83611b3e565b91506134dc8261349d565b602082019050919050565b5f6020820190508181035f8301526134fe816134c5565b9050919050565b7f4f6e6c792043726561746f7200000000000000000000000000000000000000005f82015250565b5f613539600c83611b3e565b915061354482613505565b602082019050919050565b5f6020820190508181035f8301526135668161352d565b9050919050565b5f8151905061357b81611f1b565b92915050565b5f6020828403121561359657613595611bcd565b5b5f6135a38482850161356d565b91505092915050565b7f496e76616c696420636f6e6669670000000000000000000000000000000000005f82015250565b5f6135e0600e83611b3e565b91506135eb826135ac565b602082019050919050565b5f6020820190508181035f83015261360d816135d4565b9050919050565b5f61361e82611e1d565b915061362983611e1d565b9250828203905060ff81111561364257613641612474565b5b92915050565b5f60208201905061365b5f83018461221d565b92915050565b5f6060820190506136745f83018661221d565b6136816020830185611da5565b61368e6040830184611da5565b949350505050565b5f6136a082611c2f565b91506136ab83611c2f565b92508282019050808211156136c3576136c2612474565b5b9291505056fea2646970667358221220d52f5dd431782b7892c5be6be065452fd6d6f1ff66eb8659331cab7a4edda96a64736f6c634300081a0033",
  RadioOrchestrator: "0x61010060405273590747eeab71aaa31d24f0c984fc8cea4cfddf0d60015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550348015610064575f80fd5b50335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100d6575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100cd91906103be565b60405180910390fd5b6100e58161029760201b60201c565b506040516100f290610358565b604051809103905ff08015801561010b573d5f803e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561018a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101ae9190610411565b600a6101ba91906105a1565b60e081815250506040516101cd90610365565b604051809103905ff0801580156101e6573d5f803e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050733d893c53d9e8056135c26c8c638b76c8b60df72660405161023b90610372565b61024591906103be565b604051809103905ff08015801561025e573d5f803e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250506105eb565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611fa280615dba83390190565b610b4b80617d5c83390190565b612422806188a783390190565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103a88261037f565b9050919050565b6103b88161039e565b82525050565b5f6020820190506103d15f8301846103af565b92915050565b5f80fd5b5f60ff82169050919050565b6103f0816103db565b81146103fa575f80fd5b50565b5f8151905061040b816103e7565b92915050565b5f60208284031215610426576104256103d7565b5b5f610433848285016103fd565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f808291508390505b60018511156104be5780860481111561049a5761049961043c565b5b60018516156104a95780820291505b80810290506104b785610469565b945061047e565b94509492505050565b5f826104d65760019050610591565b816104e3575f9050610591565b81600181146104f9576002811461050357610532565b6001915050610591565b60ff8411156105155761051461043c565b5b8360020a91508482111561052c5761052b61043c565b5b50610591565b5060208310610133831016604e8410600b84101617156105675782820a9050838111156105625761056161043c565b5b610591565b6105748484846001610475565b9250905081840481111561058b5761058a61043c565b5b81810290505b9392505050565b5f819050919050565b5f6105ab82610598565b91506105b6836103db565b92506105e37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846104c7565b905092915050565b60805160a05160c05160e0516157796106415f395f61097001525f6103ae01525f81816103d201528181610796015261087801525f81816102f0015281816104880152818161052a01526106fd01526157795ff3fe608060405234801561000f575f80fd5b50600436106100fe575f3560e01c80638da5cb5b11610095578063b39a6e0211610064578063b39a6e0214610272578063bb5fac411461028e578063f2fde38b146102ac578063fd922a42146102c8576100fe565b80638da5cb5b146101fe5780638ece94361461021c578063ae2669c314610238578063af4a5d8014610242576100fe565b806355b5d88b116100d157806355b5d88b1461019c578063715018a6146101ba578063844f347c146101c45780638a4d786b146101e0576100fe565b806329dfe5ad146101025780632ae803f51461011e5780632d2e4bfc1461014e57806347ee24121461017e575b5f80fd5b61011c60048036038101906101179190610d0d565b6102e6565b005b61013860048036038101906101339190610d4b565b61037a565b6040516101459190610d90565b60405180910390f35b61016860048036038101906101639190610d4b565b610397565b6040516101759190610db8565b60405180910390f35b6101866103ac565b6040516101939190610e2c565b60405180910390f35b6101a46103d0565b6040516101b19190610e65565b60405180910390f35b6101c26103f4565b005b6101de60048036038101906101d99190610d0d565b610407565b005b6101e8610528565b6040516101f59190610e9e565b60405180910390f35b61020661054c565b6040516102139190610ec6565b60405180910390f35b6102366004803603810190610231919061101b565b610573565b005b610240610612565b005b61025c60048036038101906102579190611133565b6106ac565b6040516102699190610d90565b60405180910390f35b61028c600480360381019061028791906111d3565b610847565b005b61029661096e565b6040516102a39190610db8565b60405180910390f35b6102c660048036038101906102c19190610d4b565b610992565b005b6102d0610a16565b6040516102dd9190610ec6565b60405180910390f35b6102ee610a3b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663449a52f883836040518363ffffffff1660e01b81526004016103499291906112bd565b5f604051808303815f87803b158015610360575f80fd5b505af1158015610372573d5f803e3d5ffd5b505050505050565b6002602052805f5260405f205f915054906101000a900460ff1681565b6003602052805f5260405f205f915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6103fc610a3b565b6104055f610ac2565b565b5f60035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205411610486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047d90611364565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd8333846040518463ffffffff1660e01b81526004016104e393929190611382565b6020604051808303815f875af11580156104ff573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061052391906113e1565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610602576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f990611456565b60405180910390fd5b61060d838383610b83565b505050565b5f151560025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff161515146106a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610698906114be565b60405180910390fd5b6106aa33610c03565b565b5f805f90505f60035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205411156106fb57600190505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361075357600190505b80610793576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078a90611526565b60405180910390fd5b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166330cf1e6889338a8a8a8a6040518763ffffffff1660e01b81526004016107f7969594939291906115df565b6020604051808303815f875af1158015610813573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061083791906113e1565b9050809250505095945050505050565b5f85858560405160200161085d9392919061167a565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166330cf1e6889308588886040518663ffffffff1660e01b81526004016108d79594939291906116f4565b6020604051808303815f875af11580156108f3573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061091791906113e1565b905080610959576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610950906117c3565b60405180910390fd5b610964888888610b83565b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61099a610a3b565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a0a575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a019190610ec6565b60405180910390fd5b610a1381610ac2565b50565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610a43610c5b565b73ffffffffffffffffffffffffffffffffffffffff16610a6161054c565b73ffffffffffffffffffffffffffffffffffffffff1614610ac057610a84610c5b565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610ab79190610ec6565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f838383604051610b9390610c62565b610b9f939291906117e1565b604051809103905ff080158015610bb8573d5f803e3d5ffd5b5090504360035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555050505050565b600160025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555050565b5f33905090565b613f1f8061182583390190565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610ca982610c80565b9050919050565b610cb981610c9f565b8114610cc3575f80fd5b50565b5f81359050610cd481610cb0565b92915050565b5f819050919050565b610cec81610cda565b8114610cf6575f80fd5b50565b5f81359050610d0781610ce3565b92915050565b5f8060408385031215610d2357610d22610c78565b5b5f610d3085828601610cc6565b9250506020610d4185828601610cf9565b9150509250929050565b5f60208284031215610d6057610d5f610c78565b5b5f610d6d84828501610cc6565b91505092915050565b5f8115159050919050565b610d8a81610d76565b82525050565b5f602082019050610da35f830184610d81565b92915050565b610db281610cda565b82525050565b5f602082019050610dcb5f830184610da9565b92915050565b5f819050919050565b5f610df4610def610dea84610c80565b610dd1565b610c80565b9050919050565b5f610e0582610dda565b9050919050565b5f610e1682610dfb565b9050919050565b610e2681610e0c565b82525050565b5f602082019050610e3f5f830184610e1d565b92915050565b5f610e4f82610dfb565b9050919050565b610e5f81610e45565b82525050565b5f602082019050610e785f830184610e56565b92915050565b5f610e8882610dfb565b9050919050565b610e9881610e7e565b82525050565b5f602082019050610eb15f830184610e8f565b92915050565b610ec081610c9f565b82525050565b5f602082019050610ed95f830184610eb7565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610f2d82610ee7565b810181811067ffffffffffffffff82111715610f4c57610f4b610ef7565b5b80604052505050565b5f610f5e610c6f565b9050610f6a8282610f24565b919050565b5f67ffffffffffffffff821115610f8957610f88610ef7565b5b610f9282610ee7565b9050602081019050919050565b828183375f83830152505050565b5f610fbf610fba84610f6f565b610f55565b905082815260208101848484011115610fdb57610fda610ee3565b5b610fe6848285610f9f565b509392505050565b5f82601f83011261100257611001610edf565b5b8135611012848260208601610fad565b91505092915050565b5f805f6060848603121561103257611031610c78565b5b5f61103f86828701610cc6565b935050602084013567ffffffffffffffff8111156110605761105f610c7c565b5b61106c86828701610fee565b925050604084013567ffffffffffffffff81111561108d5761108c610c7c565b5b61109986828701610fee565b9150509250925092565b5f819050919050565b6110b5816110a3565b81146110bf575f80fd5b50565b5f813590506110d0816110ac565b92915050565b5f80fd5b5f80fd5b5f8083601f8401126110f3576110f2610edf565b5b8235905067ffffffffffffffff8111156111105761110f6110d6565b5b60208301915083600182028301111561112c5761112b6110da565b5b9250929050565b5f805f805f6080868803121561114c5761114b610c78565b5b5f61115988828901610cc6565b955050602086013567ffffffffffffffff81111561117a57611179610c7c565b5b61118688828901610fee565b9450506040611197888289016110c2565b935050606086013567ffffffffffffffff8111156111b8576111b7610c7c565b5b6111c4888289016110de565b92509250509295509295909350565b5f805f805f8060a087890312156111ed576111ec610c78565b5b5f6111fa89828a01610cc6565b965050602087013567ffffffffffffffff81111561121b5761121a610c7c565b5b61122789828a01610fee565b955050604087013567ffffffffffffffff81111561124857611247610c7c565b5b61125489828a01610fee565b945050606087013567ffffffffffffffff81111561127557611274610c7c565b5b61128189828a01610fee565b935050608087013567ffffffffffffffff8111156112a2576112a1610c7c565b5b6112ae89828a016110de565b92509250509295509295509295565b5f6040820190506112d05f830185610eb7565b6112dd6020830184610da9565b9392505050565b5f82825260208201905092915050565b7f4f6e6c7920546f6b656e20436f6e7472616374732063616e2063616c6c2074685f8201527f6973206d6574686f640000000000000000000000000000000000000000000000602082015250565b5f61134e6029836112e4565b9150611359826112f4565b604082019050919050565b5f6020820190508181035f83015261137b81611342565b9050919050565b5f6060820190506113955f830186610eb7565b6113a26020830185610eb7565b6113af6040830184610da9565b949350505050565b6113c081610d76565b81146113ca575f80fd5b50565b5f815190506113db816113b7565b92915050565b5f602082840312156113f6576113f5610c78565b5b5f611403848285016113cd565b91505092915050565b7f4f6e6c79205365727665720000000000000000000000000000000000000000005f82015250565b5f611440600b836112e4565b915061144b8261140c565b602082019050919050565b5f6020820190508181035f83015261146d81611434565b9050919050565b7f416c7265616479207265676973746572656400000000000000000000000000005f82015250565b5f6114a86012836112e4565b91506114b382611474565b602082019050919050565b5f6020820190508181035f8301526114d58161149c565b9050919050565b7f4e6f7420616c6c6f77656420746f2065786563757465206d65746120747800005f82015250565b5f611510601e836112e4565b915061151b826114dc565b602082019050919050565b5f6020820190508181035f83015261153d81611504565b9050919050565b5f81519050919050565b8281835e5f83830152505050565b5f61156682611544565b61157081856112e4565b935061158081856020860161154e565b61158981610ee7565b840191505092915050565b61159d816110a3565b82525050565b5f82825260208201905092915050565b5f6115be83856115a3565b93506115cb838584610f9f565b6115d483610ee7565b840190509392505050565b5f60a0820190506115f25f830189610eb7565b6115ff6020830188610eb7565b8181036040830152611611818761155c565b90506116206060830186611594565b81810360808301526116338184866115b3565b9050979650505050505050565b5f81905092915050565b5f61165482611544565b61165e8185611640565b935061166e81856020860161154e565b80840191505092915050565b5f611685828661164a565b9150611691828561164a565b915061169d828461164a565b9150819050949350505050565b7f6c61756e6368546f6b656e0000000000000000000000000000000000000000005f82015250565b5f6116de600b836112e4565b91506116e9826116aa565b602082019050919050565b5f60a0820190506117075f830188610eb7565b6117146020830187610eb7565b8181036040830152611725816116d2565b90506117346060830186611594565b81810360808301526117478184866115b3565b90509695505050505050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f6117ad602d836112e4565b91506117b882611753565b604082019050919050565b5f6020820190508181035f8301526117da816117a1565b9050919050565b5f6060820190506117f45f830186610eb7565b8181036020830152611806818561155c565b9050818103604083015261181a818461155c565b905094935050505056fe60e060405234801561000f575f80fd5b50604051613f1f380380613f1f833981810160405281019061003191906103da565b81818160039081610042919061066f565b508060049081610052919061066f565b5050503360095f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638a4d786b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100ff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101239190610779565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb5fac416040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e491906107ce565b60a081815250508260085f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506107f9565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61026d82610244565b9050919050565b61027d81610263565b8114610287575f80fd5b50565b5f8151905061029881610274565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6102ec826102a6565b810181811067ffffffffffffffff8211171561030b5761030a6102b6565b5b80604052505050565b5f61031d610233565b905061032982826102e3565b919050565b5f67ffffffffffffffff821115610348576103476102b6565b5b610351826102a6565b9050602081019050919050565b8281835e5f83830152505050565b5f61037e6103798461032e565b610314565b90508281526020810184848401111561039a576103996102a2565b5b6103a584828561035e565b509392505050565b5f82601f8301126103c1576103c061029e565b5b81516103d184826020860161036c565b91505092915050565b5f805f606084860312156103f1576103f061023c565b5b5f6103fe8682870161028a565b935050602084015167ffffffffffffffff81111561041f5761041e610240565b5b61042b868287016103ad565b925050604084015167ffffffffffffffff81111561044c5761044b610240565b5b610458868287016103ad565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806104b057607f821691505b6020821081036104c3576104c261046c565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105257fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826104ea565b61052f86836104ea565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61057361056e61056984610547565b610550565b610547565b9050919050565b5f819050919050565b61058c83610559565b6105a06105988261057a565b8484546104f6565b825550505050565b5f90565b6105b46105a8565b6105bf818484610583565b505050565b5b818110156105e2576105d75f826105ac565b6001810190506105c5565b5050565b601f821115610627576105f8816104c9565b610601846104db565b81016020851015610610578190505b61062461061c856104db565b8301826105c4565b50505b505050565b5f82821c905092915050565b5f6106475f198460080261062c565b1980831691505092915050565b5f61065f8383610638565b9150826002028217905092915050565b61067882610462565b67ffffffffffffffff811115610691576106906102b6565b5b61069b8254610499565b6106a68282856105e6565b5f60209050601f8311600181146106d7575f84156106c5578287015190505b6106cf8582610654565b865550610736565b601f1984166106e5866104c9565b5f5b8281101561070c578489015182556001820191506020850194506020810190506106e7565b868310156107295784890151610725601f891682610638565b8355505b6001600288020188555050505b505050505050565b5f61074882610263565b9050919050565b6107588161073e565b8114610762575f80fd5b50565b5f815190506107738161074f565b92915050565b5f6020828403121561078e5761078d61023c565b5b5f61079b84828501610765565b91505092915050565b6107ad81610547565b81146107b7575f80fd5b50565b5f815190506107c8816107a4565b92915050565b5f602082840312156107e3576107e261023c565b5b5f6107f0848285016107ba565b91505092915050565b60805160a05160c0516136ff6108205f395f50505f610c6101525f610b5a01526136ff5ff3fe608060405260043610610113575f3560e01c80638a4d786b1161009f578063be4ae8e011610063578063be4ae8e0146103a1578063d1af8871146103bd578063d7327eac146103e5578063dd62ed3e1461040d578063f963ef2d1461044957610113565b80638a4d786b146102ab57806395d89b41146102d5578063a7115132146102ff578063a9059cbb1461033b578063bb5fac411461037757610113565b80631a686502116100e65780631a686502146101cf57806323b872dd146101ed578063313ce56714610229578063571ba9af1461025357806370a082311461026f57610113565b806306fdde0314610117578063095ea7b31461014157806315a1f2ce1461017d57806318160ddd146101a5575b5f80fd5b348015610122575f80fd5b5061012b610471565b6040516101389190611ba4565b60405180910390f35b34801561014c575f80fd5b5061016760048036038101906101629190611c62565b610501565b6040516101749190611cba565b60405180910390f35b348015610188575f80fd5b506101a3600480360381019061019e9190611d34565b610523565b005b3480156101b0575f80fd5b506101b9610704565b6040516101c69190611db4565b60405180910390f35b6101d761070d565b6040516101e49190611db4565b60405180910390f35b3480156101f8575f80fd5b50610213600480360381019061020e9190611dcd565b61082e565b6040516102209190611cba565b60405180910390f35b348015610234575f80fd5b5061023d61085c565b60405161024a9190611e38565b60405180910390f35b61026d60048036038101906102689190611d34565b610864565b005b34801561027a575f80fd5b5061029560048036038101906102909190611e51565b610b13565b6040516102a29190611db4565b60405180910390f35b3480156102b6575f80fd5b506102bf610b58565b6040516102cc9190611ed7565b60405180910390f35b3480156102e0575f80fd5b506102e9610b7c565b6040516102f69190611ba4565b60405180910390f35b34801561030a575f80fd5b5061032560048036038101906103209190611ef0565b610c0c565b6040516103329190611e38565b60405180910390f35b348015610346575f80fd5b50610361600480360381019061035c9190611c62565b610c3d565b60405161036e9190611cba565b60405180910390f35b348015610382575f80fd5b5061038b610c5f565b6040516103989190611db4565b60405180910390f35b6103bb60048036038101906103b69190611f45565b610c83565b005b3480156103c8575f80fd5b506103e360048036038101906103de9190611c62565b610f78565b005b3480156103f0575f80fd5b5061040b60048036038101906104069190611c62565b611081565b005b348015610418575f80fd5b50610433600480360381019061042e9190611fc9565b61118a565b6040516104409190611db4565b60405180910390f35b348015610454575f80fd5b5061046f600480360381019061046a919061213f565b61120c565b005b606060038054610480906121b3565b80601f01602080910402602001604051908101604052809291908181526020018280546104ac906121b3565b80156104f75780601f106104ce576101008083540402835291602001916104f7565b820191905f5260205f20905b8154815290600101906020018083116104da57829003601f168201915b5050505050905090565b5f8061050b6114b3565b90506105188185856114ba565b600191505092915050565b5f836040516020016105359190612203565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80878487876040518563ffffffff1660e01b81526004016105ae94939291906122d8565b6020604051808303815f875af11580156105ca573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105ee9190612353565b905080610630576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610627906123ee565b60405180910390fd5b6064851115801561064057505f85115b61067f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067690612456565b60405180910390fd5b5f60648661068c33610b13565b61069691906124a1565b6106a0919061250f565b90505f5b6005805490508110156106f0575f600582815481106106c6576106c561253f565b5b905f5260205f2090602091828204019190069054906101000a9050505080806001019150506106a4565b506106fb33826114cc565b50505050505050565b5f600254905090565b5f610716610704565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166347ee24126040518163ffffffff1660e01b8152600401602060405180830381865afa158015610780573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107a491906125a7565b73ffffffffffffffffffffffffffffffffffffffff166347adde1a3460056040518363ffffffff1660e01b81526004016107de91906132fc565b60206040518083038185885af11580156107fa573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061081f9190613330565b61082991906124a1565b905090565b5f806108386114b3565b905061084585828561154b565b6108508585856115dd565b60019150509392505050565b5f6012905090565b5f836040516020016108769190612203565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80878487876040518563ffffffff1660e01b81526004016108ef94939291906133a5565b6020604051808303815f875af115801561090b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061092f9190612353565b905080610971576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610968906123ee565b60405180910390fd5b5f61097a610704565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166347ee24126040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109e4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a0891906125a7565b73ffffffffffffffffffffffffffffffffffffffff166347adde1a3460056040518363ffffffff1660e01b8152600401610a4291906132fc565b60206040518083038185885af1158015610a5e573d5f803e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610a839190613330565b610a8d91906124a1565b90505f610a98610704565b8288610aa4919061250f565b610aae91906124a1565b90505f5b600580549050811015610afe575f60058281548110610ad457610ad361253f565b5b905f5260205f2090602091828204019190069054906101000a905050508080600101915050610ab2565b50610b0933826116cd565b5050505050505050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b606060048054610b8b906121b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb7906121b3565b8015610c025780601f10610bd957610100808354040283529160200191610c02565b820191905f5260205f20905b815481529060010190602001808311610be557829003601f168201915b5050505050905090565b60058181548110610c1b575f80fd5b905f5260205f209060209182820401919006915054906101000a900460ff1681565b5f80610c476114b3565b9050610c548185856115dd565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f84604051602001610c959190612203565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b8152600401610d0e94939291906133a5565b6020604051808303815f875af1158015610d2a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d4e9190612353565b905080610d90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d87906123ee565b60405180910390fd5b5f8560ff1611610dd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcc90613440565b60405180910390fd5b5f610dde610704565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166347ee24126040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e48573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e6c91906125a7565b73ffffffffffffffffffffffffffffffffffffffff166347adde1a3460056040518363ffffffff1660e01b8152600401610ea691906132fc565b60206040518083038185885af1158015610ec2573d5f803e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610ee79190613330565b610ef191906124a1565b90505f610efc610704565b8289610f08919061250f565b610f1291906124a1565b90505f5b600580549050811015610f62575f60058281548110610f3857610f3761253f565b5b905f5260205f2090602091828204019190069054906101000a905050508080600101915050610f16565b50610f6d33826116cd565b505050505050505050565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fd922a426040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fe2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110069190613472565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611073576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106a906134e7565b60405180910390fd5b61107d82826114cc565b5050565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fd922a426040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110eb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061110f9190613472565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461117c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611173906134e7565b60405180910390fd5b61118682826116cd565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461129b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112929061354f565b60405180910390fd5b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166347ee24126040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061132991906125a7565b73ffffffffffffffffffffffffffffffffffffffff16637e1c0c096040518163ffffffff1660e01b8152600401602060405180830381865afa158015611371573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113959190613581565b60ff168151146113da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d1906135f6565b60405180910390fd5b5f5b81518110156114af575f600582815481106113fa576113f961253f565b5b905f5260205f2090602091828204019190069054906101000a900460ff1683838151811061142b5761142a61253f565b5b602002602001015161143d9190613614565b90505f8160ff16146114a15782828151811061145c5761145b61253f565b5b6020026020010151600583815481106114785761147761253f565b5b905f5260205f2090602091828204019190066101000a81548160ff021916908360ff1602179055505b5080806001019150506113dc565b5050565b5f33905090565b6114c7838383600161174c565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361153c575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016115339190613648565b60405180910390fd5b611547825f8361191b565b5050565b5f611556848461118a565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146115d757818110156115c8578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016115bf93929190613661565b60405180910390fd5b6115d684848484035f61174c565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361164d575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016116449190613648565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116bd575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016116b49190613648565b60405180910390fd5b6116c883838361191b565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361173d575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016117349190613648565b60405180910390fd5b6117485f838361191b565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036117bc575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016117b39190613648565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361182c575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016118239190613648565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015611915578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161190c9190611db4565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361196b578060025f82825461195f9190613696565b92505081905550611a39565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156119f4578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016119eb93929190613661565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611a80578060025f8282540392505081905550611aca565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611b279190611db4565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611b7682611b34565b611b808185611b3e565b9350611b90818560208601611b4e565b611b9981611b5c565b840191505092915050565b5f6020820190508181035f830152611bbc8184611b6c565b905092915050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611bfe82611bd5565b9050919050565b611c0e81611bf4565b8114611c18575f80fd5b50565b5f81359050611c2981611c05565b92915050565b5f819050919050565b611c4181611c2f565b8114611c4b575f80fd5b50565b5f81359050611c5c81611c38565b92915050565b5f8060408385031215611c7857611c77611bcd565b5b5f611c8585828601611c1b565b9250506020611c9685828601611c4e565b9150509250929050565b5f8115159050919050565b611cb481611ca0565b82525050565b5f602082019050611ccd5f830184611cab565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f840112611cf457611cf3611cd3565b5b8235905067ffffffffffffffff811115611d1157611d10611cd7565b5b602083019150836001820283011115611d2d57611d2c611cdb565b5b9250929050565b5f805f8060608587031215611d4c57611d4b611bcd565b5b5f611d5987828801611c1b565b9450506020611d6a87828801611c4e565b935050604085013567ffffffffffffffff811115611d8b57611d8a611bd1565b5b611d9787828801611cdf565b925092505092959194509250565b611dae81611c2f565b82525050565b5f602082019050611dc75f830184611da5565b92915050565b5f805f60608486031215611de457611de3611bcd565b5b5f611df186828701611c1b565b9350506020611e0286828701611c1b565b9250506040611e1386828701611c4e565b9150509250925092565b5f60ff82169050919050565b611e3281611e1d565b82525050565b5f602082019050611e4b5f830184611e29565b92915050565b5f60208284031215611e6657611e65611bcd565b5b5f611e7384828501611c1b565b91505092915050565b5f819050919050565b5f611e9f611e9a611e9584611bd5565b611e7c565b611bd5565b9050919050565b5f611eb082611e85565b9050919050565b5f611ec182611ea6565b9050919050565b611ed181611eb7565b82525050565b5f602082019050611eea5f830184611ec8565b92915050565b5f60208284031215611f0557611f04611bcd565b5b5f611f1284828501611c4e565b91505092915050565b611f2481611e1d565b8114611f2e575f80fd5b50565b5f81359050611f3f81611f1b565b92915050565b5f805f805f60808688031215611f5e57611f5d611bcd565b5b5f611f6b88828901611c1b565b9550506020611f7c88828901611c4e565b9450506040611f8d88828901611f31565b935050606086013567ffffffffffffffff811115611fae57611fad611bd1565b5b611fba88828901611cdf565b92509250509295509295909350565b5f8060408385031215611fdf57611fde611bcd565b5b5f611fec85828601611c1b565b9250506020611ffd85828601611c1b565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61203d82611b5c565b810181811067ffffffffffffffff8211171561205c5761205b612007565b5b80604052505050565b5f61206e611bc4565b905061207a8282612034565b919050565b5f67ffffffffffffffff82111561209957612098612007565b5b602082029050602081019050919050565b5f6120bc6120b78461207f565b612065565b905080838252602082019050602084028301858111156120df576120de611cdb565b5b835b8181101561210857806120f48882611f31565b8452602084019350506020810190506120e1565b5050509392505050565b5f82601f83011261212657612125611cd3565b5b81356121368482602086016120aa565b91505092915050565b5f6020828403121561215457612153611bcd565b5b5f82013567ffffffffffffffff81111561217157612170611bd1565b5b61217d84828501612112565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806121ca57607f821691505b6020821081036121dd576121dc612186565b5b50919050565b5f819050919050565b6121fd6121f882611c2f565b6121e3565b82525050565b5f61220e82846121ec565b60208201915081905092915050565b61222681611bf4565b82525050565b7f73656c6c000000000000000000000000000000000000000000000000000000005f82015250565b5f612260600483611b3e565b915061226b8261222c565b602082019050919050565b5f819050919050565b61228881612276565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f6122b7838561228e565b93506122c483858461229e565b6122cd83611b5c565b840190509392505050565b5f6080820190506122eb5f83018761221d565b81810360208301526122fc81612254565b905061230b604083018661227f565b818103606083015261231e8184866122ac565b905095945050505050565b61233281611ca0565b811461233c575f80fd5b50565b5f8151905061234d81612329565b92915050565b5f6020828403121561236857612367611bcd565b5b5f6123758482850161233f565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f6123d8602d83611b3e565b91506123e38261237e565b604082019050919050565b5f6020820190508181035f830152612405816123cc565b9050919050565b7f496e76616c69642070657263656e7420736f6c640000000000000000000000005f82015250565b5f612440601483611b3e565b915061244b8261240c565b602082019050919050565b5f6020820190508181035f83015261246d81612434565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6124ab82611c2f565b91506124b683611c2f565b92508282026124c481611c2f565b915082820484148315176124db576124da612474565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61251982611c2f565b915061252483611c2f565b925082612534576125336124e2565b5b828204905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f61257682611bf4565b9050919050565b6125868161256c565b8114612590575f80fd5b50565b5f815190506125a18161257d565b92915050565b5f602082840312156125bc576125bb611bcd565b5b5f6125c984828501612593565b91505092915050565b5f81549050919050565b5f82825260208201905092915050565b5f819050815f5260205f209050919050565b61260781611e1d565b82525050565b5f815f1c9050919050565b5f60ff82169050919050565b5f6126366126318361260d565b612618565b9050919050565b5f8160081c9050919050565b5f61265b6126568361263d565b612618565b9050919050565b5f8160101c9050919050565b5f61268061267b83612662565b612618565b9050919050565b5f8160181c9050919050565b5f6126a56126a083612687565b612618565b9050919050565b5f8160201c9050919050565b5f6126ca6126c5836126ac565b612618565b9050919050565b5f8160281c9050919050565b5f6126ef6126ea836126d1565b612618565b9050919050565b5f8160301c9050919050565b5f61271461270f836126f6565b612618565b9050919050565b5f8160381c9050919050565b5f6127396127348361271b565b612618565b9050919050565b5f8160401c9050919050565b5f61275e61275983612740565b612618565b9050919050565b5f8160481c9050919050565b5f61278361277e83612765565b612618565b9050919050565b5f8160501c9050919050565b5f6127a86127a38361278a565b612618565b9050919050565b5f8160581c9050919050565b5f6127cd6127c8836127af565b612618565b9050919050565b5f8160601c9050919050565b5f6127f26127ed836127d4565b612618565b9050919050565b5f8160681c9050919050565b5f612817612812836127f9565b612618565b9050919050565b5f8160701c9050919050565b5f61283c6128378361281e565b612618565b9050919050565b5f8160781c9050919050565b5f61286161285c83612843565b612618565b9050919050565b5f8160801c9050919050565b5f61288661288183612868565b612618565b9050919050565b5f8160881c9050919050565b5f6128ab6128a68361288d565b612618565b9050919050565b5f8160901c9050919050565b5f6128d06128cb836128b2565b612618565b9050919050565b5f8160981c9050919050565b5f6128f56128f0836128d7565b612618565b9050919050565b5f8160a01c9050919050565b5f61291a612915836128fc565b612618565b9050919050565b5f8160a81c9050919050565b5f61293f61293a83612921565b612618565b9050919050565b5f8160b01c9050919050565b5f61296461295f83612946565b612618565b9050919050565b5f8160b81c9050919050565b5f6129896129848361296b565b612618565b9050919050565b5f8160c01c9050919050565b5f6129ae6129a983612990565b612618565b9050919050565b5f8160c81c9050919050565b5f6129d36129ce836129b5565b612618565b9050919050565b5f8160d01c9050919050565b5f6129f86129f3836129da565b612618565b9050919050565b5f8160d81c9050919050565b5f612a1d612a18836129ff565b612618565b9050919050565b5f8160e01c9050919050565b5f612a42612a3d83612a24565b612618565b9050919050565b5f8160e81c9050919050565b5f612a67612a6283612a49565b612618565b9050919050565b5f8160f01c9050919050565b5f612a8c612a8783612a6e565b612618565b9050919050565b5f8160f81c9050919050565b5f612ab1612aac83612a93565b612618565b9050919050565b5f612ac2826125d2565b612acc81856125dc565b935083612ad8846125ec565b5f600115612e04575b83600160200382011015612e03578154612b0388612afe83612624565b6125fe565b602088019750612b1b88612b1683612649565b6125fe565b602088019750612b3388612b2e8361266e565b6125fe565b602088019750612b4b88612b4683612693565b6125fe565b602088019750612b6388612b5e836126b8565b6125fe565b602088019750612b7b88612b76836126dd565b6125fe565b602088019750612b9388612b8e83612702565b6125fe565b602088019750612bab88612ba683612727565b6125fe565b602088019750612bc388612bbe8361274c565b6125fe565b602088019750612bdb88612bd683612771565b6125fe565b602088019750612bf388612bee83612796565b6125fe565b602088019750612c0b88612c06836127bb565b6125fe565b602088019750612c2388612c1e836127e0565b6125fe565b602088019750612c3b88612c3683612805565b6125fe565b602088019750612c5388612c4e8361282a565b6125fe565b602088019750612c6b88612c668361284f565b6125fe565b602088019750612c8388612c7e83612874565b6125fe565b602088019750612c9b88612c9683612899565b6125fe565b602088019750612cb388612cae836128be565b6125fe565b602088019750612ccb88612cc6836128e3565b6125fe565b602088019750612ce388612cde83612908565b6125fe565b602088019750612cfb88612cf68361292d565b6125fe565b602088019750612d1388612d0e83612952565b6125fe565b602088019750612d2b88612d2683612977565b6125fe565b602088019750612d4388612d3e8361299c565b6125fe565b602088019750612d5b88612d56836129c1565b6125fe565b602088019750612d7388612d6e836129e6565b6125fe565b602088019750612d8b88612d8683612a0b565b6125fe565b602088019750612da388612d9e83612a30565b6125fe565b602088019750612dbb88612db683612a55565b6125fe565b602088019750612dd388612dce83612a7a565b6125fe565b602088019750612deb88612de683612a9f565b6125fe565b60208801975060018301925050602081019050612ae1565b5b6001156132ef57815484821015612e3457612e2788612e2283612624565b6125fe565b6020880197506001820191505b84821015612e5b57612e4e88612e4983612649565b6125fe565b6020880197506001820191505b84821015612e8257612e7588612e708361266e565b6125fe565b6020880197506001820191505b84821015612ea957612e9c88612e9783612693565b6125fe565b6020880197506001820191505b84821015612ed057612ec388612ebe836126b8565b6125fe565b6020880197506001820191505b84821015612ef757612eea88612ee5836126dd565b6125fe565b6020880197506001820191505b84821015612f1e57612f1188612f0c83612702565b6125fe565b6020880197506001820191505b84821015612f4557612f3888612f3383612727565b6125fe565b6020880197506001820191505b84821015612f6c57612f5f88612f5a8361274c565b6125fe565b6020880197506001820191505b84821015612f9357612f8688612f8183612771565b6125fe565b6020880197506001820191505b84821015612fba57612fad88612fa883612796565b6125fe565b6020880197506001820191505b84821015612fe157612fd488612fcf836127bb565b6125fe565b6020880197506001820191505b8482101561300857612ffb88612ff6836127e0565b6125fe565b6020880197506001820191505b8482101561302f576130228861301d83612805565b6125fe565b6020880197506001820191505b8482101561305657613049886130448361282a565b6125fe565b6020880197506001820191505b8482101561307d576130708861306b8361284f565b6125fe565b6020880197506001820191505b848210156130a4576130978861309283612874565b6125fe565b6020880197506001820191505b848210156130cb576130be886130b983612899565b6125fe565b6020880197506001820191505b848210156130f2576130e5886130e0836128be565b6125fe565b6020880197506001820191505b848210156131195761310c88613107836128e3565b6125fe565b6020880197506001820191505b84821015613140576131338861312e83612908565b6125fe565b6020880197506001820191505b848210156131675761315a886131558361292d565b6125fe565b6020880197506001820191505b8482101561318e576131818861317c83612952565b6125fe565b6020880197506001820191505b848210156131b5576131a8886131a383612977565b6125fe565b6020880197506001820191505b848210156131dc576131cf886131ca8361299c565b6125fe565b6020880197506001820191505b84821015613203576131f6886131f1836129c1565b6125fe565b6020880197506001820191505b8482101561322a5761321d88613218836129e6565b6125fe565b6020880197506001820191505b84821015613251576132448861323f83612a0b565b6125fe565b6020880197506001820191505b848210156132785761326b8861326683612a30565b6125fe565b6020880197506001820191505b8482101561329f576132928861328d83612a55565b6125fe565b6020880197506001820191505b848210156132c6576132b9886132b483612a7a565b6125fe565b6020880197506001820191505b848210156132ed576132e0886132db83612a9f565b6125fe565b6020880197506001820191505b505b8694505050505092915050565b5f6020820190508181035f8301526133148184612ab8565b905092915050565b5f8151905061332a81611c38565b92915050565b5f6020828403121561334557613344611bcd565b5b5f6133528482850161331c565b91505092915050565b7f62757900000000000000000000000000000000000000000000000000000000005f82015250565b5f61338f600383611b3e565b915061339a8261335b565b602082019050919050565b5f6080820190506133b85f83018761221d565b81810360208301526133c981613383565b90506133d8604083018661227f565b81810360608301526133eb8184866122ac565b905095945050505050565b7f496e76616c6964206c65766572616765000000000000000000000000000000005f82015250565b5f61342a601083611b3e565b9150613435826133f6565b602082019050919050565b5f6020820190508181035f8301526134578161341e565b9050919050565b5f8151905061346c81611c05565b92915050565b5f6020828403121561348757613486611bcd565b5b5f6134948482850161345e565b91505092915050565b7f4f6e6c79205365727665720000000000000000000000000000000000000000005f82015250565b5f6134d1600b83611b3e565b91506134dc8261349d565b602082019050919050565b5f6020820190508181035f8301526134fe816134c5565b9050919050565b7f4f6e6c792043726561746f7200000000000000000000000000000000000000005f82015250565b5f613539600c83611b3e565b915061354482613505565b602082019050919050565b5f6020820190508181035f8301526135668161352d565b9050919050565b5f8151905061357b81611f1b565b92915050565b5f6020828403121561359657613595611bcd565b5b5f6135a38482850161356d565b91505092915050565b7f496e76616c696420636f6e6669670000000000000000000000000000000000005f82015250565b5f6135e0600e83611b3e565b91506135eb826135ac565b602082019050919050565b5f6020820190508181035f83015261360d816135d4565b9050919050565b5f61361e82611e1d565b915061362983611e1d565b9250828203905060ff81111561364257613641612474565b5b92915050565b5f60208201905061365b5f83018461221d565b92915050565b5f6060820190506136745f83018661221d565b6136816020830185611da5565b61368e6040830184611da5565b949350505050565b5f6136a082611c2f565b91506136ab83611c2f565b92508282019050808211156136c3576136c2612474565b5b9291505056fea2646970667358221220d52f5dd431782b7892c5be6be065452fd6d6f1ff66eb8659331cab7a4edda96a64736f6c634300081a0033a2646970667358221220507164211daa2739aa36824a203dc4f98640ba7ecf4dcc103aa48901a6a1265c64736f6c634300081a003360c060405234801561000f575f80fd5b506040518060400160405280600a81526020017f74657374555344432e65000000000000000000000000000000000000000000008152506040518060400160405280600a81526020017f74657374555344432e6500000000000000000000000000000000000000000000815250816003908161008b9190610366565b50806004908161009b9190610366565b5050506100ac61012560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506100ed61012560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050610435565b5f33905090565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806101a757607f821691505b6020821081036101ba576101b9610163565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261021c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826101e1565b61022686836101e1565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61026a6102656102608461023e565b610247565b61023e565b9050919050565b5f819050919050565b61028383610250565b61029761028f82610271565b8484546101ed565b825550505050565b5f90565b6102ab61029f565b6102b681848461027a565b505050565b5b818110156102d9576102ce5f826102a3565b6001810190506102bc565b5050565b601f82111561031e576102ef816101c0565b6102f8846101d2565b81016020851015610307578190505b61031b610313856101d2565b8301826102bb565b50505b505050565b5f82821c905092915050565b5f61033e5f1984600802610323565b1980831691505092915050565b5f610356838361032f565b9150826002028217905092915050565b61036f8261012c565b67ffffffffffffffff81111561038857610387610136565b5b6103928254610190565b61039d8282856102dd565b5f60209050601f8311600181146103ce575f84156103bc578287015190505b6103c6858261034b565b86555061042d565b601f1984166103dc866101c0565b5f5b82811015610403578489015182556001820191506020850194506020810190506103de565b86831015610420578489015161041c601f89168261032f565b8355505b6001600288020188555050505b505050505050565b60805160a051611b306104725f395f81816105a1015281816107300152818161082501528181610849015261095101525f6103fc0152611b305ff3fe608060405234801561000f575f80fd5b50600436106100f3575f3560e01c806395d89b4111610095578063b74795d911610064578063b74795d914610283578063d1af8871146102a1578063d7327eac146102bd578063dd62ed3e146102d9576100f3565b806395d89b41146101fd578063a6dedeb51461021b578063a9059cbb14610237578063b7009f5514610267576100f3565b806323b872dd116100d157806323b872dd14610163578063313ce56714610193578063449a52f8146101b157806370a08231146101cd576100f3565b806306fdde03146100f7578063095ea7b31461011557806318160ddd14610145575b5f80fd5b6100ff610309565b60405161010c91906111ca565b60405180910390f35b61012f600480360381019061012a919061127f565b610399565b60405161013c91906112d7565b60405180910390f35b61014d6103bb565b60405161015a91906112ff565b60405180910390f35b61017d60048036038101906101789190611318565b6103c4565b60405161018a91906112d7565b60405180910390f35b61019b6103f2565b6040516101a89190611383565b60405180910390f35b6101cb60048036038101906101c6919061127f565b6103fa565b005b6101e760048036038101906101e2919061139c565b61049d565b6040516101f491906112ff565b60405180910390f35b6102056104e2565b60405161021291906111ca565b60405180910390f35b61023560048036038101906102309190611428565b610572565b005b610251600480360381019061024c919061127f565b6106df565b60405161025e91906112d7565b60405180910390f35b610281600480360381019061027c9190611428565b610701565b005b61028b610823565b6040516102989190611507565b60405180910390f35b6102bb60048036038101906102b6919061127f565b610847565b005b6102d760048036038101906102d2919061127f565b61094f565b005b6102f360048036038101906102ee9190611520565b610a57565b60405161030091906112ff565b60405180910390f35b6060600380546103189061158b565b80601f01602080910402602001604051908101604052809291908181526020018280546103449061158b565b801561038f5780601f106103665761010080835404028352916020019161038f565b820191905f5260205f20905b81548152906001019060200180831161037257829003601f168201915b5050505050905090565b5f806103a3610ad9565b90506103b0818585610ae0565b600191505092915050565b5f600254905090565b5f806103ce610ad9565b90506103db858285610af2565b6103e6858585610b84565b60019150509392505050565b5f6006905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610439610ad9565b73ffffffffffffffffffffffffffffffffffffffff161461048f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048690611605565b60405180910390fd5b6104998282610c74565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6060600480546104f19061158b565b80601f016020809104026020016040519081016040528092919081815260200182805461051d9061158b565b80156105685780601f1061053f57610100808354040283529160200191610568565b820191905f5260205f20905b81548152906001019060200180831161054b57829003601f168201915b5050505050905090565b5f8484604051602001610586929190611688565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016105fe949392919061176e565b6020604051808303815f875af115801561061a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061063e91906117e9565b905080610680576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067790611884565b60405180910390fd5b6106898761049d565b8511156106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c2906118ec565b60405180910390fd5b6106d6878787610b84565b50505050505050565b5f806106e9610ad9565b90506106f6818585610b84565b600191505092915050565b5f8484604051602001610715929190611688565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b815260040161078d9493929190611954565b6020604051808303815f875af11580156107a9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107cd91906117e9565b90508061080f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080690611884565b60405180910390fd5b61081a878787610ae0565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fd922a426040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108d491906119b9565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610941576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093890611a2e565b60405180910390fd5b61094b8282610cf3565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fd922a426040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109b8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109dc91906119b9565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4090611a2e565b60405180910390fd5b610a538282610c74565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b610aed8383836001610d72565b505050565b5f610afd8484610a57565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b7e5781811015610b6f578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610b6693929190611a4c565b60405180910390fd5b610b7d84848484035f610d72565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610bf4575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610beb9190611a81565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c64575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610c5b9190611a81565b60405180910390fd5b610c6f838383610f41565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ce4575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610cdb9190611a81565b60405180910390fd5b610cef5f8383610f41565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d63575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d5a9190611a81565b60405180910390fd5b610d6e825f83610f41565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610de2575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610dd99190611a81565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e52575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610e499190611a81565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610f3b578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610f3291906112ff565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f91578060025f828254610f859190611ac7565b9250508190555061105f565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508181101561101a578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161101193929190611a4c565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110a6578060025f82825403925050819055506110f0565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161114d91906112ff565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61119c8261115a565b6111a68185611164565b93506111b6818560208601611174565b6111bf81611182565b840191505092915050565b5f6020820190508181035f8301526111e28184611192565b905092915050565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61121b826111f2565b9050919050565b61122b81611211565b8114611235575f80fd5b50565b5f8135905061124681611222565b92915050565b5f819050919050565b61125e8161124c565b8114611268575f80fd5b50565b5f8135905061127981611255565b92915050565b5f8060408385031215611295576112946111ea565b5b5f6112a285828601611238565b92505060206112b38582860161126b565b9150509250929050565b5f8115159050919050565b6112d1816112bd565b82525050565b5f6020820190506112ea5f8301846112c8565b92915050565b6112f98161124c565b82525050565b5f6020820190506113125f8301846112f0565b92915050565b5f805f6060848603121561132f5761132e6111ea565b5b5f61133c86828701611238565b935050602061134d86828701611238565b925050604061135e8682870161126b565b9150509250925092565b5f60ff82169050919050565b61137d81611368565b82525050565b5f6020820190506113965f830184611374565b92915050565b5f602082840312156113b1576113b06111ea565b5b5f6113be84828501611238565b91505092915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f8401126113e8576113e76113c7565b5b8235905067ffffffffffffffff811115611405576114046113cb565b5b602083019150836001820283011115611421576114206113cf565b5b9250929050565b5f805f805f60808688031215611441576114406111ea565b5b5f61144e88828901611238565b955050602061145f88828901611238565b94505060406114708882890161126b565b935050606086013567ffffffffffffffff811115611491576114906111ee565b5b61149d888289016113d3565b92509250509295509295909350565b5f819050919050565b5f6114cf6114ca6114c5846111f2565b6114ac565b6111f2565b9050919050565b5f6114e0826114b5565b9050919050565b5f6114f1826114d6565b9050919050565b611501816114e7565b82525050565b5f60208201905061151a5f8301846114f8565b92915050565b5f8060408385031215611536576115356111ea565b5b5f61154385828601611238565b925050602061155485828601611238565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806115a257607f821691505b6020821081036115b5576115b461155e565b5b50919050565b7f4f6e6c79204d696e7465722063616e206d696e740000000000000000000000005f82015250565b5f6115ef601483611164565b91506115fa826115bb565b602082019050919050565b5f6020820190508181035f83015261161c816115e3565b9050919050565b5f8160601b9050919050565b5f61163982611623565b9050919050565b5f61164a8261162f565b9050919050565b61166261165d82611211565b611640565b82525050565b5f819050919050565b61168261167d8261124c565b611668565b82525050565b5f6116938285611651565b6014820191506116a38284611671565b6020820191508190509392505050565b6116bc81611211565b82525050565b7f7472616e736665720000000000000000000000000000000000000000000000005f82015250565b5f6116f6600883611164565b9150611701826116c2565b602082019050919050565b5f819050919050565b61171e8161170c565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f61174d8385611724565b935061175a838584611734565b61176383611182565b840190509392505050565b5f6080820190506117815f8301876116b3565b8181036020830152611792816116ea565b90506117a16040830186611715565b81810360608301526117b4818486611742565b905095945050505050565b6117c8816112bd565b81146117d2575f80fd5b50565b5f815190506117e3816117bf565b92915050565b5f602082840312156117fe576117fd6111ea565b5b5f61180b848285016117d5565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f61186e602d83611164565b915061187982611814565b604082019050919050565b5f6020820190508181035f83015261189b81611862565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f6118d6601483611164565b91506118e1826118a2565b602082019050919050565b5f6020820190508181035f830152611903816118ca565b9050919050565b7f617070726f7665000000000000000000000000000000000000000000000000005f82015250565b5f61193e600783611164565b91506119498261190a565b602082019050919050565b5f6080820190506119675f8301876116b3565b818103602083015261197881611932565b90506119876040830186611715565b818103606083015261199a818486611742565b905095945050505050565b5f815190506119b381611222565b92915050565b5f602082840312156119ce576119cd6111ea565b5b5f6119db848285016119a5565b91505092915050565b7f4f6e6c79205365727665720000000000000000000000000000000000000000005f82015250565b5f611a18600b83611164565b9150611a23826119e4565b602082019050919050565b5f6020820190508181035f830152611a4581611a0c565b9050919050565b5f606082019050611a5f5f8301866116b3565b611a6c60208301856112f0565b611a7960408301846112f0565b949350505050565b5f602082019050611a945f8301846116b3565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611ad18261124c565b9150611adc8361124c565b9250828201905080821115611af457611af3611a9a565b5b9291505056fea264697066735822122039f5b6b74c53015e41d0fdd72e35f2537210f0f3fecf633bfcf33bcd0d9e52a964736f6c634300081a00336080604052348015600e575f80fd5b50610b2f8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610055575f3560e01c8063017519981461005957806330cf1e68146100895780638cf4ab92146100b9578063d087d288146100e9578063ed2a2d6414610107575b5f80fd5b610073600480360381019061006e919061057a565b610137565b6040516100809190610605565b60405180910390f35b6100a3600480360381019061009e9190610673565b61017b565b6040516100b09190610605565b60405180910390f35b6100d360048036038101906100ce9190610673565b61022e565b6040516100e09190610605565b60405180910390f35b6100f16102be565b6040516100fe9190610742565b60405180910390f35b610121600480360381019061011c919061075b565b610301565b60405161012e9190610742565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff1661015a858585610346565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f8061018c8989898989898961022e565b9050806101ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c590610806565b60405180910390fd5b5f808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f81548092919061021a90610851565b919050555080915050979650505050505050565b5f805f808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f89898989898660405160200161028b96959493929190610959565b6040516020818303038152906040528051906020012090506102af8a828787610137565b92505050979650505050505050565b5f805f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905090565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f808460405160200161035991906109ff565b6040516020818303038152906040528051906020012090505f805f6103c087878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505061041f565b9250925092506001848285856040515f81526020016040526040516103e89493929190610a4e565b6020604051602081039080840390855afa158015610408573d5f803e3d5ffd5b505050602060405103519450505050509392505050565b5f805f6041845114610466576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045d90610adb565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104b58261048c565b9050919050565b6104c5816104ab565b81146104cf575f80fd5b50565b5f813590506104e0816104bc565b92915050565b5f819050919050565b6104f8816104e6565b8114610502575f80fd5b50565b5f81359050610513816104ef565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011261053a57610539610519565b5b8235905067ffffffffffffffff8111156105575761055661051d565b5b60208301915083600182028301111561057357610572610521565b5b9250929050565b5f805f806060858703121561059257610591610484565b5b5f61059f878288016104d2565b94505060206105b087828801610505565b935050604085013567ffffffffffffffff8111156105d1576105d0610488565b5b6105dd87828801610525565b925092505092959194509250565b5f8115159050919050565b6105ff816105eb565b82525050565b5f6020820190506106185f8301846105f6565b92915050565b5f8083601f84011261063357610632610519565b5b8235905067ffffffffffffffff8111156106505761064f61051d565b5b60208301915083600182028301111561066c5761066b610521565b5b9250929050565b5f805f805f805f60a0888a03121561068e5761068d610484565b5b5f61069b8a828b016104d2565b97505060206106ac8a828b016104d2565b965050604088013567ffffffffffffffff8111156106cd576106cc610488565b5b6106d98a828b0161061e565b955095505060606106ec8a828b01610505565b935050608088013567ffffffffffffffff81111561070d5761070c610488565b5b6107198a828b01610525565b925092505092959891949750929550565b5f819050919050565b61073c8161072a565b82525050565b5f6020820190506107555f830184610733565b92915050565b5f602082840312156107705761076f610484565b5b5f61077d848285016104d2565b91505092915050565b5f82825260208201905092915050565b7f496e76616c6964205369676e6174757265206f7220496e76616c6964204578655f8201527f637574696f6e2052657175657374000000000000000000000000000000000000602082015250565b5f6107f0602e83610786565b91506107fb82610796565b604082019050919050565b5f6020820190508181035f83015261081d816107e4565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61085b8261072a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361088d5761088c610824565b5b600182019050919050565b5f8160601b9050919050565b5f6108ae82610898565b9050919050565b5f6108bf826108a4565b9050919050565b6108d76108d2826104ab565b6108b5565b82525050565b5f81905092915050565b828183375f83830152505050565b5f61090083856108dd565b935061090d8385846108e7565b82840190509392505050565b5f819050919050565b61093361092e826104e6565b610919565b82525050565b5f819050919050565b61095361094e8261072a565b610939565b82525050565b5f61096482896108c6565b60148201915061097482886108c6565b6014820191506109858286886108f5565b91506109918285610922565b6020820191506109a18284610942565b602082019150819050979650505050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f6109e9601c836108dd565b91506109f4826109b5565b601c82019050919050565b5f610a09826109dd565b9150610a158284610922565b60208201915081905092915050565b610a2d816104e6565b82525050565b5f60ff82169050919050565b610a4881610a33565b82525050565b5f608082019050610a615f830187610a24565b610a6e6020830186610a3f565b610a7b6040830185610a24565b610a886060830184610a24565b95945050505050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f610ac5601883610786565b9150610ad082610a91565b602082019050919050565b5f6020820190508181035f830152610af281610ab9565b905091905056fea2646970667358221220edd326c8e176a961dbb7333512e7d3d5adbf1b1b40d8524c4a27dddeb4ce0f6464736f6c634300081a003360806040526040518061020001604052806040518060400160405280600381526020017f424e42000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600581526020017f5452554d5000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f415242000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f534f4c000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f504f4c000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f535549000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f444f47450000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f414156450000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f585250000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f4c5443000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f545258000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f415641580000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f455448000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f4c494e4b0000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f425443000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f464c52000000000000000000000000000000000000000000000000000000000081525081525060029060106103ce9291906106cb565b503480156103da575f80fd5b5060405161242238038061242283398181016040528101906103fc91906107fb565b60028054905060045f6101000a81548160ff021916908360ff1602179055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061046961053560201b60201c565b5f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f5b60045f9054906101000a900460ff1660ff168160ff16101561052e5760036104d6826105eb60201b60201c565b908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548174ffffffffffffffffffffffffffffffffffffffffff021916908360581c021790555080806001019150506104a9565b5050610e23565b5f73ad67fe66660fb8dfe9d6b1b4240d8650e30f601973ffffffffffffffffffffffffffffffffffffffff1663159354a260405160200161057590610880565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016105a791906108b6565b602060405180830381865afa1580156105c2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105e691906107fb565b905090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f8b7a824600160028560ff1681548110610641576106406108cf565b5b905f5260205f20016040516020016106599190610a1b565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610685929190610aee565b602060405180830381865afa1580156106a0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106c49190610b71565b9050919050565b828054828255905f5260205f20908101928215610711579160200282015b828111156107105782518290816107009190610d54565b50916020019190600101906106e9565b5b50905061071e9190610722565b5090565b5b80821115610741575f81816107389190610745565b50600101610723565b5090565b50805461075190610929565b5f825580601f10610762575061077f565b601f0160209004905f5260205f209081019061077e9190610782565b5b50565b5b80821115610799575f815f905550600101610783565b5090565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6107ca826107a1565b9050919050565b6107da816107c0565b81146107e4575f80fd5b50565b5f815190506107f5816107d1565b92915050565b5f602082840312156108105761080f61079d565b5b5f61081d848285016107e7565b91505092915050565b5f82825260208201905092915050565b7f4674736f466565644964436f6e766572746572000000000000000000000000005f82015250565b5f61086a601383610826565b915061087582610836565b602082019050919050565b5f6020820190508181035f8301526108978161085e565b9050919050565b5f819050919050565b6108b08161089e565b82525050565b5f6020820190506108c95f8301846108a7565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061094057607f821691505b602082108103610953576109526108fc565b5b50919050565b5f81905092915050565b5f819050815f5260205f209050919050565b5f815461098181610929565b61098b8186610959565b9450600182165f81146109a557600181146109ba576109ec565b60ff19831686528115158202860193506109ec565b6109c385610963565b5f5b838110156109e4578154818901526001820191506020810190506109c5565b838801955050505b50505092915050565b7f2f55534400000000000000000000000000000000000000000000000000000000815250565b5f610a268284610975565b9150610a31826109f5565b60048201915081905092915050565b5f819050919050565b5f60ff82169050919050565b5f819050919050565b5f610a78610a73610a6e84610a40565b610a55565b610a49565b9050919050565b610a8881610a5e565b82525050565b5f81519050919050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610ac082610a8e565b610aca8185610826565b9350610ada818560208601610a98565b610ae381610aa6565b840191505092915050565b5f604082019050610b015f830185610a7f565b8181036020830152610b138184610ab6565b90509392505050565b5f7fffffffffffffffffffffffffffffffffffffffffff000000000000000000000082169050919050565b610b5081610b1c565b8114610b5a575f80fd5b50565b5f81519050610b6b81610b47565b92915050565b5f60208284031215610b8657610b8561079d565b5b5f610b9384828501610b5d565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610c137fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610bd8565b610c1d8683610bd8565b95508019841693508086168417925050509392505050565b5f819050919050565b5f610c58610c53610c4e84610c35565b610a55565b610c35565b9050919050565b5f819050919050565b610c7183610c3e565b610c85610c7d82610c5f565b848454610be4565b825550505050565b5f90565b610c99610c8d565b610ca4818484610c68565b505050565b5b81811015610cc757610cbc5f82610c91565b600181019050610caa565b5050565b601f821115610d0c57610cdd81610963565b610ce684610bc9565b81016020851015610cf5578190505b610d09610d0185610bc9565b830182610ca9565b50505b505050565b5f82821c905092915050565b5f610d2c5f1984600802610d11565b1980831691505092915050565b5f610d448383610d1d565b9150826002028217905092915050565b610d5d82610a8e565b67ffffffffffffffff811115610d7657610d75610b9c565b5b610d808254610929565b610d8b828285610ccb565b5f60209050601f831160018114610dbc575f8415610daa578287015190505b610db48582610d39565b865550610e1b565b601f198416610dca86610963565b5f5b82811015610df157848901518255600182019150602085019450602081019050610dcc565b86831015610e0e5784890151610e0a601f891682610d1d565b8355505b6001600288020188555050505b505050505050565b6115f280610e305f395ff3fe608060405260043610610054575f3560e01c806347adde1a146100585780637e1c0c0914610088578063840128de146100b2578063d115df31146100e4578063f4b9212514610120578063f601bc8b14610150575b5f80fd5b610072600480360381019061006d91906108ac565b61017c565b60405161007f919061090b565b60405180910390f35b348015610093575f80fd5b5061009c61032d565b6040516100a99190610933565b60405180910390f35b6100cc60048036038101906100c7919061094c565b61033f565b6040516100db939291906109b3565b60405180910390f35b3480156100ef575f80fd5b5061010a60048036038101906101059190610a12565b610402565b604051610117919061090b565b60405180910390f35b61013a6004803603810190610135919061094c565b61047a565b604051610147919061090b565b60405180910390f35b34801561015b575f80fd5b50610164610588565b60405161017393929190610bbe565b60405180910390f35b5f805f90505f5b60045f9054906101000a900460ff1660ff168160ff161015610317575f805f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166393e9f806600160045f9054906101000a900460ff1660ff16346101fe9190610c5b565b6102089190610c8b565b60038760ff168154811061021f5761021e610cbe565b5b905f5260205f20015f9054906101000a900460581b6040518363ffffffff1660e01b81526004016102509190610d25565b60606040518083038185885af115801561026c573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906102919190610da6565b92509250925080600460016101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505f6102cb8484610402565b9050878560ff16815181106102e3576102e2610cbe565b5b602002602001015160ff16816102f99190610df6565b866103049190610e37565b9550505050508080600101915050610183565b506064816103259190610c5b565b915050919050565b60045f9054906101000a900460ff1681565b5f805f805f8060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166393e9f8063461038c8a610635565b6040518363ffffffff1660e01b81526004016103a89190610d25565b60606040518083038185885af11580156103c4573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906103e99190610da6565b9250925092508282829550955095505050509193909250565b5f60068260ff160361041657829050610474565b60068260ff16101561044d5781600661042f9190610e6a565b600a61043b9190610fcd565b836104469190610df6565b9050610474565b60068261045a9190610e6a565b600a6104669190610fcd565b836104719190610c5b565b90505b92915050565b5f805f8060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166393e9f8063460038860ff16815481106104d3576104d2610cbe565b5b905f5260205f20015f9054906101000a900460581b6040518363ffffffff1660e01b81526004016105049190610d25565b60606040518083038185885af1158015610520573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906105459190610da6565b92509250925080600460016101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555061057e8383610402565b9350505050919050565b6060805f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634c37574560036040518263ffffffff1660e01b81526004016105e7919061112b565b5f604051808303815f875af1158015610602573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f8201168201806040525081019061062a91906112cb565b925092509250909192565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f8b7a824600160028560ff168154811061068b5761068a610cbe565b5b905f5260205f20016040516020016106a39190611472565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016106cf929190611539565b602060405180830381865afa1580156106ea573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061070e9190611591565b9050919050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6107708261072a565b810181811067ffffffffffffffff8211171561078f5761078e61073a565b5b80604052505050565b5f6107a1610715565b90506107ad8282610767565b919050565b5f67ffffffffffffffff8211156107cc576107cb61073a565b5b602082029050602081019050919050565b5f80fd5b5f60ff82169050919050565b6107f6816107e1565b8114610800575f80fd5b50565b5f81359050610811816107ed565b92915050565b5f610829610824846107b2565b610798565b9050808382526020820190506020840283018581111561084c5761084b6107dd565b5b835b8181101561087557806108618882610803565b84526020840193505060208101905061084e565b5050509392505050565b5f82601f83011261089357610892610726565b5b81356108a3848260208601610817565b91505092915050565b5f602082840312156108c1576108c061071e565b5b5f82013567ffffffffffffffff8111156108de576108dd610722565b5b6108ea8482850161087f565b91505092915050565b5f819050919050565b610905816108f3565b82525050565b5f60208201905061091e5f8301846108fc565b92915050565b61092d816107e1565b82525050565b5f6020820190506109465f830184610924565b92915050565b5f602082840312156109615761096061071e565b5b5f61096e84828501610803565b91505092915050565b5f815f0b9050919050565b61098b81610977565b82525050565b5f67ffffffffffffffff82169050919050565b6109ad81610991565b82525050565b5f6060820190506109c65f8301866108fc565b6109d36020830185610982565b6109e060408301846109a4565b949350505050565b6109f1816108f3565b81146109fb575f80fd5b50565b5f81359050610a0c816109e8565b92915050565b5f8060408385031215610a2857610a2761071e565b5b5f610a35858286016109fe565b9250506020610a4685828601610803565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b610a82816108f3565b82525050565b5f610a938383610a79565b60208301905092915050565b5f602082019050919050565b5f610ab582610a50565b610abf8185610a5a565b9350610aca83610a6a565b805f5b83811015610afa578151610ae18882610a88565b9750610aec83610a9f565b925050600181019050610acd565b5085935050505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b610b3981610977565b82525050565b5f610b4a8383610b30565b60208301905092915050565b5f602082019050919050565b5f610b6c82610b07565b610b768185610b11565b9350610b8183610b21565b805f5b83811015610bb1578151610b988882610b3f565b9750610ba383610b56565b925050600181019050610b84565b5085935050505092915050565b5f6060820190508181035f830152610bd68186610aab565b90508181036020830152610bea8185610b62565b9050610bf960408301846109a4565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610c65826108f3565b9150610c70836108f3565b925082610c8057610c7f610c01565b5b828204905092915050565b5f610c95826108f3565b9150610ca0836108f3565b9250828203905081811115610cb857610cb7610c2e565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f7fffffffffffffffffffffffffffffffffffffffffff000000000000000000000082169050919050565b610d1f81610ceb565b82525050565b5f602082019050610d385f830184610d16565b92915050565b5f81519050610d4c816109e8565b92915050565b610d5b81610977565b8114610d65575f80fd5b50565b5f81519050610d7681610d52565b92915050565b610d8581610991565b8114610d8f575f80fd5b50565b5f81519050610da081610d7c565b92915050565b5f805f60608486031215610dbd57610dbc61071e565b5b5f610dca86828701610d3e565b9350506020610ddb86828701610d68565b9250506040610dec86828701610d92565b9150509250925092565b5f610e00826108f3565b9150610e0b836108f3565b9250828202610e19816108f3565b91508282048414831517610e3057610e2f610c2e565b5b5092915050565b5f610e41826108f3565b9150610e4c836108f3565b9250828201905080821115610e6457610e63610c2e565b5b92915050565b5f610e74826107e1565b9150610e7f836107e1565b9250828203905060ff811115610e9857610e97610c2e565b5b92915050565b5f8160011c9050919050565b5f808291508390505b6001851115610ef357808604811115610ecf57610ece610c2e565b5b6001851615610ede5780820291505b8081029050610eec85610e9e565b9450610eb3565b94509492505050565b5f82610f0b5760019050610fc6565b81610f18575f9050610fc6565b8160018114610f2e5760028114610f3857610f67565b6001915050610fc6565b60ff841115610f4a57610f49610c2e565b5b8360020a915084821115610f6157610f60610c2e565b5b50610fc6565b5060208310610133831016604e8410600b8410161715610f9c5782820a905083811115610f9757610f96610c2e565b5b610fc6565b610fa98484846001610eaa565b92509050818404811115610fc057610fbf610c2e565b5b81810290505b9392505050565b5f610fd7826108f3565b9150610fe2836107e1565b925061100f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610efc565b905092915050565b5f81549050919050565b5f82825260208201905092915050565b5f819050815f5260205f209050919050565b61104c81610ceb565b82525050565b5f61105d8383611043565b60208301905092915050565b5f815f1c9050919050565b5f8160581b9050919050565b5f61108a82611074565b9050919050565b5f6110a361109e83611069565b611080565b9050919050565b5f6110b58254611091565b9050919050565b5f600182019050919050565b5f6110d282611017565b6110dc8185611021565b93506110e783611031565b805f5b8381101561111e576110fb826110aa565b6111058882611052565b9750611110836110bc565b9250506001810190506110ea565b5085935050505092915050565b5f6020820190508181035f83015261114381846110c8565b905092915050565b5f67ffffffffffffffff8211156111655761116461073a565b5b602082029050602081019050919050565b5f6111886111838461114b565b610798565b905080838252602082019050602084028301858111156111ab576111aa6107dd565b5b835b818110156111d457806111c08882610d3e565b8452602084019350506020810190506111ad565b5050509392505050565b5f82601f8301126111f2576111f1610726565b5b8151611202848260208601611176565b91505092915050565b5f67ffffffffffffffff8211156112255761122461073a565b5b602082029050602081019050919050565b5f6112486112438461120b565b610798565b9050808382526020820190506020840283018581111561126b5761126a6107dd565b5b835b8181101561129457806112808882610d68565b84526020840193505060208101905061126d565b5050509392505050565b5f82601f8301126112b2576112b1610726565b5b81516112c2848260208601611236565b91505092915050565b5f805f606084860312156112e2576112e161071e565b5b5f84015167ffffffffffffffff8111156112ff576112fe610722565b5b61130b868287016111de565b935050602084015167ffffffffffffffff81111561132c5761132b610722565b5b6113388682870161129e565b925050604061134986828701610d92565b9150509250925092565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061139757607f821691505b6020821081036113aa576113a9611353565b5b50919050565b5f81905092915050565b5f819050815f5260205f209050919050565b5f81546113d881611380565b6113e281866113b0565b9450600182165f81146113fc576001811461141157611443565b60ff1983168652811515820286019350611443565b61141a856113ba565b5f5b8381101561143b5781548189015260018201915060208101905061141c565b838801955050505b50505092915050565b7f2f55534400000000000000000000000000000000000000000000000000000000815250565b5f61147d82846113cc565b91506114888261144c565b60048201915081905092915050565b5f819050919050565b5f819050919050565b5f6114c36114be6114b984611497565b6114a0565b6107e1565b9050919050565b6114d3816114a9565b82525050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f61150b826114d9565b61151581856114e3565b93506115258185602086016114f3565b61152e8161072a565b840191505092915050565b5f60408201905061154c5f8301856114ca565b818103602083015261155e8184611501565b90509392505050565b61157081610ceb565b811461157a575f80fd5b50565b5f8151905061158b81611567565b92915050565b5f602082840312156115a6576115a561071e565b5b5f6115b38482850161157d565b9150509291505056fea2646970667358221220b7e120418d0dce042892e3dad2606dd429bdcee30e09312ce38b98408e44729364736f6c634300081a0033",
  RelayManager: "0x6080604052348015600e575f80fd5b50610b2f8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610055575f3560e01c8063017519981461005957806330cf1e68146100895780638cf4ab92146100b9578063d087d288146100e9578063ed2a2d6414610107575b5f80fd5b610073600480360381019061006e919061057a565b610137565b6040516100809190610605565b60405180910390f35b6100a3600480360381019061009e9190610673565b61017b565b6040516100b09190610605565b60405180910390f35b6100d360048036038101906100ce9190610673565b61022e565b6040516100e09190610605565b60405180910390f35b6100f16102be565b6040516100fe9190610742565b60405180910390f35b610121600480360381019061011c919061075b565b610301565b60405161012e9190610742565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff1661015a858585610346565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f8061018c8989898989898961022e565b9050806101ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c590610806565b60405180910390fd5b5f808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f81548092919061021a90610851565b919050555080915050979650505050505050565b5f805f808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f89898989898660405160200161028b96959493929190610959565b6040516020818303038152906040528051906020012090506102af8a828787610137565b92505050979650505050505050565b5f805f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905090565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f808460405160200161035991906109ff565b6040516020818303038152906040528051906020012090505f805f6103c087878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505061041f565b9250925092506001848285856040515f81526020016040526040516103e89493929190610a4e565b6020604051602081039080840390855afa158015610408573d5f803e3d5ffd5b505050602060405103519450505050509392505050565b5f805f6041845114610466576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045d90610adb565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104b58261048c565b9050919050565b6104c5816104ab565b81146104cf575f80fd5b50565b5f813590506104e0816104bc565b92915050565b5f819050919050565b6104f8816104e6565b8114610502575f80fd5b50565b5f81359050610513816104ef565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011261053a57610539610519565b5b8235905067ffffffffffffffff8111156105575761055661051d565b5b60208301915083600182028301111561057357610572610521565b5b9250929050565b5f805f806060858703121561059257610591610484565b5b5f61059f878288016104d2565b94505060206105b087828801610505565b935050604085013567ffffffffffffffff8111156105d1576105d0610488565b5b6105dd87828801610525565b925092505092959194509250565b5f8115159050919050565b6105ff816105eb565b82525050565b5f6020820190506106185f8301846105f6565b92915050565b5f8083601f84011261063357610632610519565b5b8235905067ffffffffffffffff8111156106505761064f61051d565b5b60208301915083600182028301111561066c5761066b610521565b5b9250929050565b5f805f805f805f60a0888a03121561068e5761068d610484565b5b5f61069b8a828b016104d2565b97505060206106ac8a828b016104d2565b965050604088013567ffffffffffffffff8111156106cd576106cc610488565b5b6106d98a828b0161061e565b955095505060606106ec8a828b01610505565b935050608088013567ffffffffffffffff81111561070d5761070c610488565b5b6107198a828b01610525565b925092505092959891949750929550565b5f819050919050565b61073c8161072a565b82525050565b5f6020820190506107555f830184610733565b92915050565b5f602082840312156107705761076f610484565b5b5f61077d848285016104d2565b91505092915050565b5f82825260208201905092915050565b7f496e76616c6964205369676e6174757265206f7220496e76616c6964204578655f8201527f637574696f6e2052657175657374000000000000000000000000000000000000602082015250565b5f6107f0602e83610786565b91506107fb82610796565b604082019050919050565b5f6020820190508181035f83015261081d816107e4565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61085b8261072a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361088d5761088c610824565b5b600182019050919050565b5f8160601b9050919050565b5f6108ae82610898565b9050919050565b5f6108bf826108a4565b9050919050565b6108d76108d2826104ab565b6108b5565b82525050565b5f81905092915050565b828183375f83830152505050565b5f61090083856108dd565b935061090d8385846108e7565b82840190509392505050565b5f819050919050565b61093361092e826104e6565b610919565b82525050565b5f819050919050565b61095361094e8261072a565b610939565b82525050565b5f61096482896108c6565b60148201915061097482886108c6565b6014820191506109858286886108f5565b91506109918285610922565b6020820191506109a18284610942565b602082019150819050979650505050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f6109e9601c836108dd565b91506109f4826109b5565b601c82019050919050565b5f610a09826109dd565b9150610a158284610922565b60208201915081905092915050565b610a2d816104e6565b82525050565b5f60ff82169050919050565b610a4881610a33565b82525050565b5f608082019050610a615f830187610a24565b610a6e6020830186610a3f565b610a7b6040830185610a24565b610a886060830184610a24565b95945050505050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f610ac5601883610786565b9150610ad082610a91565b602082019050919050565b5f6020820190508181035f830152610af281610ab9565b905091905056fea2646970667358221220edd326c8e176a961dbb7333512e7d3d5adbf1b1b40d8524c4a27dddeb4ce0f6464736f6c634300081a0033",
  SignatureVerifier: "0x6080604052348015600e575f80fd5b5061052d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063017519981461002d575b5f80fd5b610047600480360381019061004291906102d5565b61005d565b6040516100549190610360565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff166100808585856100a1565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f80846040516020016100b491906103ed565b6040516020818303038152906040528051906020012090505f805f61011b87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505061017a565b9250925092506001848285856040515f8152602001604052604051610143949392919061043c565b6020604051602081039080840390855afa158015610163573d5f803e3d5ffd5b505050602060405103519450505050509392505050565b5f805f60418451146101c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b8906104d9565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610210826101e7565b9050919050565b61022081610206565b811461022a575f80fd5b50565b5f8135905061023b81610217565b92915050565b5f819050919050565b61025381610241565b811461025d575f80fd5b50565b5f8135905061026e8161024a565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011261029557610294610274565b5b8235905067ffffffffffffffff8111156102b2576102b1610278565b5b6020830191508360018202830111156102ce576102cd61027c565b5b9250929050565b5f805f80606085870312156102ed576102ec6101df565b5b5f6102fa8782880161022d565b945050602061030b87828801610260565b935050604085013567ffffffffffffffff81111561032c5761032b6101e3565b5b61033887828801610280565b925092505092959194509250565b5f8115159050919050565b61035a81610346565b82525050565b5f6020820190506103735f830184610351565b92915050565b5f81905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f6103b7601c83610379565b91506103c282610383565b601c82019050919050565b5f819050919050565b6103e76103e282610241565b6103cd565b82525050565b5f6103f7826103ab565b915061040382846103d6565b60208201915081905092915050565b61041b81610241565b82525050565b5f60ff82169050919050565b61043681610421565b82525050565b5f60808201905061044f5f830187610412565b61045c602083018661042d565b6104696040830185610412565b6104766060830184610412565b95945050505050565b5f82825260208201905092915050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f6104c360188361047f565b91506104ce8261048f565b602082019050919050565b5f6020820190508181035f8301526104f0816104b7565b905091905056fea2646970667358221220b92d008be799bac292fac429e9448af954fba2f5c6084303a47bf905da6e817e64736f6c634300081a0033",
  testUSDCe: "0x60c060405234801561000f575f80fd5b506040518060400160405280600a81526020017f74657374555344432e65000000000000000000000000000000000000000000008152506040518060400160405280600a81526020017f74657374555344432e6500000000000000000000000000000000000000000000815250816003908161008b9190610366565b50806004908161009b9190610366565b5050506100ac61012560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506100ed61012560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050610435565b5f33905090565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806101a757607f821691505b6020821081036101ba576101b9610163565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261021c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826101e1565b61022686836101e1565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61026a6102656102608461023e565b610247565b61023e565b9050919050565b5f819050919050565b61028383610250565b61029761028f82610271565b8484546101ed565b825550505050565b5f90565b6102ab61029f565b6102b681848461027a565b505050565b5b818110156102d9576102ce5f826102a3565b6001810190506102bc565b5050565b601f82111561031e576102ef816101c0565b6102f8846101d2565b81016020851015610307578190505b61031b610313856101d2565b8301826102bb565b50505b505050565b5f82821c905092915050565b5f61033e5f1984600802610323565b1980831691505092915050565b5f610356838361032f565b9150826002028217905092915050565b61036f8261012c565b67ffffffffffffffff81111561038857610387610136565b5b6103928254610190565b61039d8282856102dd565b5f60209050601f8311600181146103ce575f84156103bc578287015190505b6103c6858261034b565b86555061042d565b601f1984166103dc866101c0565b5f5b82811015610403578489015182556001820191506020850194506020810190506103de565b86831015610420578489015161041c601f89168261032f565b8355505b6001600288020188555050505b505050505050565b60805160a051611b306104725f395f81816105a1015281816107300152818161082501528181610849015261095101525f6103fc0152611b305ff3fe608060405234801561000f575f80fd5b50600436106100f3575f3560e01c806395d89b4111610095578063b74795d911610064578063b74795d914610283578063d1af8871146102a1578063d7327eac146102bd578063dd62ed3e146102d9576100f3565b806395d89b41146101fd578063a6dedeb51461021b578063a9059cbb14610237578063b7009f5514610267576100f3565b806323b872dd116100d157806323b872dd14610163578063313ce56714610193578063449a52f8146101b157806370a08231146101cd576100f3565b806306fdde03146100f7578063095ea7b31461011557806318160ddd14610145575b5f80fd5b6100ff610309565b60405161010c91906111ca565b60405180910390f35b61012f600480360381019061012a919061127f565b610399565b60405161013c91906112d7565b60405180910390f35b61014d6103bb565b60405161015a91906112ff565b60405180910390f35b61017d60048036038101906101789190611318565b6103c4565b60405161018a91906112d7565b60405180910390f35b61019b6103f2565b6040516101a89190611383565b60405180910390f35b6101cb60048036038101906101c6919061127f565b6103fa565b005b6101e760048036038101906101e2919061139c565b61049d565b6040516101f491906112ff565b60405180910390f35b6102056104e2565b60405161021291906111ca565b60405180910390f35b61023560048036038101906102309190611428565b610572565b005b610251600480360381019061024c919061127f565b6106df565b60405161025e91906112d7565b60405180910390f35b610281600480360381019061027c9190611428565b610701565b005b61028b610823565b6040516102989190611507565b60405180910390f35b6102bb60048036038101906102b6919061127f565b610847565b005b6102d760048036038101906102d2919061127f565b61094f565b005b6102f360048036038101906102ee9190611520565b610a57565b60405161030091906112ff565b60405180910390f35b6060600380546103189061158b565b80601f01602080910402602001604051908101604052809291908181526020018280546103449061158b565b801561038f5780601f106103665761010080835404028352916020019161038f565b820191905f5260205f20905b81548152906001019060200180831161037257829003601f168201915b5050505050905090565b5f806103a3610ad9565b90506103b0818585610ae0565b600191505092915050565b5f600254905090565b5f806103ce610ad9565b90506103db858285610af2565b6103e6858585610b84565b60019150509392505050565b5f6006905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610439610ad9565b73ffffffffffffffffffffffffffffffffffffffff161461048f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048690611605565b60405180910390fd5b6104998282610c74565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6060600480546104f19061158b565b80601f016020809104026020016040519081016040528092919081815260200182805461051d9061158b565b80156105685780601f1061053f57610100808354040283529160200191610568565b820191905f5260205f20905b81548152906001019060200180831161054b57829003601f168201915b5050505050905090565b5f8484604051602001610586929190611688565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016105fe949392919061176e565b6020604051808303815f875af115801561061a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061063e91906117e9565b905080610680576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067790611884565b60405180910390fd5b6106898761049d565b8511156106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c2906118ec565b60405180910390fd5b6106d6878787610b84565b50505050505050565b5f806106e9610ad9565b90506106f6818585610b84565b600191505092915050565b5f8484604051602001610715929190611688565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b815260040161078d9493929190611954565b6020604051808303815f875af11580156107a9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107cd91906117e9565b90508061080f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080690611884565b60405180910390fd5b61081a878787610ae0565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fd922a426040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108d491906119b9565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610941576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093890611a2e565b60405180910390fd5b61094b8282610cf3565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fd922a426040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109b8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109dc91906119b9565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4090611a2e565b60405180910390fd5b610a538282610c74565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b610aed8383836001610d72565b505050565b5f610afd8484610a57565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b7e5781811015610b6f578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610b6693929190611a4c565b60405180910390fd5b610b7d84848484035f610d72565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610bf4575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610beb9190611a81565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c64575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610c5b9190611a81565b60405180910390fd5b610c6f838383610f41565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ce4575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610cdb9190611a81565b60405180910390fd5b610cef5f8383610f41565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d63575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d5a9190611a81565b60405180910390fd5b610d6e825f83610f41565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610de2575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610dd99190611a81565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e52575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610e499190611a81565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610f3b578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610f3291906112ff565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f91578060025f828254610f859190611ac7565b9250508190555061105f565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508181101561101a578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161101193929190611a4c565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110a6578060025f82825403925050819055506110f0565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161114d91906112ff565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61119c8261115a565b6111a68185611164565b93506111b6818560208601611174565b6111bf81611182565b840191505092915050565b5f6020820190508181035f8301526111e28184611192565b905092915050565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61121b826111f2565b9050919050565b61122b81611211565b8114611235575f80fd5b50565b5f8135905061124681611222565b92915050565b5f819050919050565b61125e8161124c565b8114611268575f80fd5b50565b5f8135905061127981611255565b92915050565b5f8060408385031215611295576112946111ea565b5b5f6112a285828601611238565b92505060206112b38582860161126b565b9150509250929050565b5f8115159050919050565b6112d1816112bd565b82525050565b5f6020820190506112ea5f8301846112c8565b92915050565b6112f98161124c565b82525050565b5f6020820190506113125f8301846112f0565b92915050565b5f805f6060848603121561132f5761132e6111ea565b5b5f61133c86828701611238565b935050602061134d86828701611238565b925050604061135e8682870161126b565b9150509250925092565b5f60ff82169050919050565b61137d81611368565b82525050565b5f6020820190506113965f830184611374565b92915050565b5f602082840312156113b1576113b06111ea565b5b5f6113be84828501611238565b91505092915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f8401126113e8576113e76113c7565b5b8235905067ffffffffffffffff811115611405576114046113cb565b5b602083019150836001820283011115611421576114206113cf565b5b9250929050565b5f805f805f60808688031215611441576114406111ea565b5b5f61144e88828901611238565b955050602061145f88828901611238565b94505060406114708882890161126b565b935050606086013567ffffffffffffffff811115611491576114906111ee565b5b61149d888289016113d3565b92509250509295509295909350565b5f819050919050565b5f6114cf6114ca6114c5846111f2565b6114ac565b6111f2565b9050919050565b5f6114e0826114b5565b9050919050565b5f6114f1826114d6565b9050919050565b611501816114e7565b82525050565b5f60208201905061151a5f8301846114f8565b92915050565b5f8060408385031215611536576115356111ea565b5b5f61154385828601611238565b925050602061155485828601611238565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806115a257607f821691505b6020821081036115b5576115b461155e565b5b50919050565b7f4f6e6c79204d696e7465722063616e206d696e740000000000000000000000005f82015250565b5f6115ef601483611164565b91506115fa826115bb565b602082019050919050565b5f6020820190508181035f83015261161c816115e3565b9050919050565b5f8160601b9050919050565b5f61163982611623565b9050919050565b5f61164a8261162f565b9050919050565b61166261165d82611211565b611640565b82525050565b5f819050919050565b61168261167d8261124c565b611668565b82525050565b5f6116938285611651565b6014820191506116a38284611671565b6020820191508190509392505050565b6116bc81611211565b82525050565b7f7472616e736665720000000000000000000000000000000000000000000000005f82015250565b5f6116f6600883611164565b9150611701826116c2565b602082019050919050565b5f819050919050565b61171e8161170c565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f61174d8385611724565b935061175a838584611734565b61176383611182565b840190509392505050565b5f6080820190506117815f8301876116b3565b8181036020830152611792816116ea565b90506117a16040830186611715565b81810360608301526117b4818486611742565b905095945050505050565b6117c8816112bd565b81146117d2575f80fd5b50565b5f815190506117e3816117bf565b92915050565b5f602082840312156117fe576117fd6111ea565b5b5f61180b848285016117d5565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f61186e602d83611164565b915061187982611814565b604082019050919050565b5f6020820190508181035f83015261189b81611862565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f6118d6601483611164565b91506118e1826118a2565b602082019050919050565b5f6020820190508181035f830152611903816118ca565b9050919050565b7f617070726f7665000000000000000000000000000000000000000000000000005f82015250565b5f61193e600783611164565b91506119498261190a565b602082019050919050565b5f6080820190506119675f8301876116b3565b818103602083015261197881611932565b90506119876040830186611715565b818103606083015261199a818486611742565b905095945050505050565b5f815190506119b381611222565b92915050565b5f602082840312156119ce576119cd6111ea565b5b5f6119db848285016119a5565b91505092915050565b7f4f6e6c79205365727665720000000000000000000000000000000000000000005f82015250565b5f611a18600b83611164565b9150611a23826119e4565b602082019050919050565b5f6020820190508181035f830152611a4581611a0c565b9050919050565b5f606082019050611a5f5f8301866116b3565b611a6c60208301856112f0565b611a7960408301846112f0565b949350505050565b5f602082019050611a945f8301846116b3565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611ad18261124c565b9150611adc8361124c565b9250828201905080821115611af457611af3611a9a565b5b9291505056fea264697066735822122039f5b6b74c53015e41d0fdd72e35f2537210f0f3fecf633bfcf33bcd0d9e52a964736f6c634300081a0033"
} as const;

export type ContractName = keyof typeof abi;

export default { abi, bytecode };
