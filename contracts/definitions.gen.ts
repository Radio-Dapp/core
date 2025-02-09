
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
  PumpfaxtToken: [
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "fraxIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin_",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "fraxIn_",
        "type": "uint256"
      }
    ],
    "name": "calculateAmountOut",
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
        "internalType": "uint256",
        "name": "amountIn_",
        "type": "uint256"
      }
    ],
    "name": "calculateFraxOut",
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
        "name": "fraxIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin_",
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
        "internalType": "uint256",
        "name": "amountIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fraxOutMin_",
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
    "name": "one_pFrax",
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
    "name": "pFRAX",
    "outputs": [
      {
        "internalType": "contract IPFrax",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reserve",
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
        "internalType": "uint256",
        "name": "amountIn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fraxOutMin_",
        "type": "uint256"
      }
    ],
    "name": "sell",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "supply",
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
    "name": "tokenPrice",
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
  },
  {
    "inputs": [],
    "name": "uri",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
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
  PumpfaxtToken: "0x60e060405234801561000f575f80fd5b50604051613b7c380380613b7c83398181016040528101906100319190610b7f565b828281600390816100429190610e44565b5080600490816100529190610e44565b5050503360095f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376c16abe6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100ff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101239190610f4e565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101a1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c59190610faf565b60ff1660c08160ff168152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630f11081f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561023c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102609190611004565b60a0818152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636999b3776040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102f5919061106a565b600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600890816103839190610e44565b5061043a3060c051600a61039791906111f1565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b0c81b36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610401573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104259190611004565b61042f919061123b565b6105ba60201b60201c565b60a05160095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad3dc0136040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104cb9190611004565b6104d5919061123b565b6005819055506104e961063f60201b60201c565b60a0516104fa61065460201b60201c565b610504919061123b565b61050e91906112a9565b6006819055505f6005541180156105405750600554600361052f919061123b565b61053d61065460201b60201c565b10155b156105b1575f61055461063f60201b60201c565b6064600554610563919061123b565b61056d91906112a9565b90505f6005819055505f60648261058861063f60201b60201c565b610592919061123b565b61059c91906112a9565b90506105ae308261067560201b60201c565b50505b50505050611391565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361062a575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161062191906112e8565b60405180910390fd5b61063b5f83836106fa60201b60201c565b5050565b5f61064f3061091360201b60201c565b905090565b5f61066361095860201b60201c565b6005546106709190611301565b905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106e5575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106dc91906112e8565b60405180910390fd5b6106f6825f836106fa60201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361074a578060025f82825461073e9190611301565b92505081905550610818565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156107d3578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016107ca93929190611343565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361085f578060025f82825403925050819055506108a9565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516109069190611378565b60405180910390a3505050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f60805173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161099491906112e8565b602060405180830381865afa1580156109af573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109d39190611004565b905090565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a12826109e9565b9050919050565b610a2281610a08565b8114610a2c575f80fd5b50565b5f81519050610a3d81610a19565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610a9182610a4b565b810181811067ffffffffffffffff82111715610ab057610aaf610a5b565b5b80604052505050565b5f610ac26109d8565b9050610ace8282610a88565b919050565b5f67ffffffffffffffff821115610aed57610aec610a5b565b5b610af682610a4b565b9050602081019050919050565b8281835e5f83830152505050565b5f610b23610b1e84610ad3565b610ab9565b905082815260208101848484011115610b3f57610b3e610a47565b5b610b4a848285610b03565b509392505050565b5f82601f830112610b6657610b65610a43565b5b8151610b76848260208601610b11565b91505092915050565b5f805f8060808587031215610b9757610b966109e1565b5b5f610ba487828801610a2f565b945050602085015167ffffffffffffffff811115610bc557610bc46109e5565b5b610bd187828801610b52565b935050604085015167ffffffffffffffff811115610bf257610bf16109e5565b5b610bfe87828801610b52565b925050606085015167ffffffffffffffff811115610c1f57610c1e6109e5565b5b610c2b87828801610b52565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610c8557607f821691505b602082108103610c9857610c97610c41565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610cfa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610cbf565b610d048683610cbf565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f610d48610d43610d3e84610d1c565b610d25565b610d1c565b9050919050565b5f819050919050565b610d6183610d2e565b610d75610d6d82610d4f565b848454610ccb565b825550505050565b5f90565b610d89610d7d565b610d94818484610d58565b505050565b5b81811015610db757610dac5f82610d81565b600181019050610d9a565b5050565b601f821115610dfc57610dcd81610c9e565b610dd684610cb0565b81016020851015610de5578190505b610df9610df185610cb0565b830182610d99565b50505b505050565b5f82821c905092915050565b5f610e1c5f1984600802610e01565b1980831691505092915050565b5f610e348383610e0d565b9150826002028217905092915050565b610e4d82610c37565b67ffffffffffffffff811115610e6657610e65610a5b565b5b610e708254610c6e565b610e7b828285610dbb565b5f60209050601f831160018114610eac575f8415610e9a578287015190505b610ea48582610e29565b865550610f0b565b601f198416610eba86610c9e565b5f5b82811015610ee157848901518255600182019150602085019450602081019050610ebc565b86831015610efe5784890151610efa601f891682610e0d565b8355505b6001600288020188555050505b505050505050565b5f610f1d82610a08565b9050919050565b610f2d81610f13565b8114610f37575f80fd5b50565b5f81519050610f4881610f24565b92915050565b5f60208284031215610f6357610f626109e1565b5b5f610f7084828501610f3a565b91505092915050565b5f60ff82169050919050565b610f8e81610f79565b8114610f98575f80fd5b50565b5f81519050610fa981610f85565b92915050565b5f60208284031215610fc457610fc36109e1565b5b5f610fd184828501610f9b565b91505092915050565b610fe381610d1c565b8114610fed575f80fd5b50565b5f81519050610ffe81610fda565b92915050565b5f60208284031215611019576110186109e1565b5b5f61102684828501610ff0565b91505092915050565b5f61103982610a08565b9050919050565b6110498161102f565b8114611053575f80fd5b50565b5f8151905061106481611040565b92915050565b5f6020828403121561107f5761107e6109e1565b5b5f61108c84828501611056565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f808291508390505b6001851115611117578086048111156110f3576110f2611095565b5b60018516156111025780820291505b8081029050611110856110c2565b94506110d7565b94509492505050565b5f8261112f57600190506111ea565b8161113c575f90506111ea565b8160018114611152576002811461115c5761118b565b60019150506111ea565b60ff84111561116e5761116d611095565b5b8360020a91508482111561118557611184611095565b5b506111ea565b5060208310610133831016604e8410600b84101617156111c05782820a9050838111156111bb576111ba611095565b5b6111ea565b6111cd84848460016110ce565b925090508184048111156111e4576111e3611095565b5b81810290505b9392505050565b5f6111fb82610d1c565b915061120683610f79565b92506112337fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611120565b905092915050565b5f61124582610d1c565b915061125083610d1c565b925082820261125e81610d1c565b9150828204841483151761127557611274611095565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6112b382610d1c565b91506112be83610d1c565b9250826112ce576112cd61127c565b5b828204905092915050565b6112e281610a08565b82525050565b5f6020820190506112fb5f8301846112d9565b92915050565b5f61130b82610d1c565b915061131683610d1c565b925082820190508082111561132e5761132d611095565b5b92915050565b61133d81610d1c565b82525050565b5f6060820190506113565f8301866112d9565b6113636020830185611334565b6113706040830184611334565b949350505050565b5f60208201905061138b5f830184611334565b92915050565b60805160a05160c0516127976113e55f395f61062f01525f8181610511015281816110e3015281816111b0015261157801525f818161053f0152818161060a01528181611032015261125501526127975ff3fe608060405234801561000f575f80fd5b5060043610610140575f3560e01c80637ff9b596116100b6578063cd3293de1161007a578063cd3293de1461038e578063ce20d840146103ac578063d6febde8146103c8578063d79875eb146103e4578063dd62ed3e14610400578063eac989f81461043057610140565b80637ff9b596146102c257806387d12a3f146102e057806395d89b41146103105780639721f2901461032e578063a9059cbb1461035e57610140565b80631a686502116101085780631a686502146101ec57806323b872dd1461020a5780632c41d85d1461023a578063313ce56714610258578063503cb67d1461027657806370a082311461029257610140565b8063047fc9aa1461014457806306fdde0314610162578063095ea7b3146101805780630f11081f146101b057806318160ddd146101ce575b5f80fd5b61014c61044e565b6040516101599190611ac2565b60405180910390f35b61016a61045d565b6040516101779190611b4b565b60405180910390f35b61019a60048036038101906101959190611bf7565b6104ed565b6040516101a79190611c4f565b60405180910390f35b6101b861050f565b6040516101c59190611ac2565b60405180910390f35b6101d6610533565b6040516101e39190611ac2565b60405180910390f35b6101f461053c565b6040516102019190611ac2565b60405180910390f35b610224600480360381019061021f9190611c68565b6105da565b6040516102319190611c4f565b60405180910390f35b610242610608565b60405161024f9190611d13565b60405180910390f35b61026061062c565b60405161026d9190611d47565b60405180910390f35b610290600480360381019061028b9190611dc1565b610653565b005b6102ac60048036038101906102a79190611e45565b610776565b6040516102b99190611ac2565b60405180910390f35b6102ca6107bb565b6040516102d79190611ac2565b60405180910390f35b6102fa60048036038101906102f59190611e70565b6107c4565b6040516103079190611ac2565b60405180910390f35b61031861088a565b6040516103259190611b4b565b60405180910390f35b61034860048036038101906103439190611e70565b61091a565b6040516103559190611ac2565b60405180910390f35b61037860048036038101906103739190611bf7565b6109e0565b6040516103859190611c4f565b60405180910390f35b610396610a02565b6040516103a39190611ac2565b60405180910390f35b6103c660048036038101906103c19190611dc1565b610a1d565b005b6103e260048036038101906103dd9190611e9b565b610b40565b005b6103fe60048036038101906103f99190611e9b565b610b4f565b005b61041a60048036038101906104159190611ed9565b610b5e565b6040516104279190611ac2565b60405180910390f35b610438610be0565b6040516104459190611b4b565b60405180910390f35b5f61045830610776565b905090565b60606003805461046c90611f44565b80601f016020809104026020016040519081016040528092919081815260200182805461049890611f44565b80156104e35780601f106104ba576101008083540402835291602001916104e3565b820191905f5260205f20905b8154815290600101906020018083116104c657829003601f168201915b5050505050905090565b5f806104f7610c70565b9050610504818585610c77565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f600254905090565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105969190611f83565b602060405180830381865afa1580156105b1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105d59190611fb0565b905090565b5f806105e4610c70565b90506105f1858285610c89565b6105fc858585610d1b565b60019150509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f8484604051602001610667929190611ffb565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016106e094939291906120d2565b6020604051808303815f875af11580156106fc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610720919061214d565b905080610762576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610759906121e8565b60405180910390fd5b61076d878787610e0b565b50505050505050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f600654905090565b5f80826107cf610a02565b6107d99190612233565b90505f836107e561044e565b6107ef9190612274565b9050818110610833576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082a906122f1565b60405180910390fd5b5f8103610875576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086c90612359565b60405180910390fd5b808261088191906123a4565b92505050919050565b60606004805461089990611f44565b80601f01602080910402602001604051908101604052809291908181526020018280546108c590611f44565b80156109105780601f106108e757610100808354040283529160200191610910565b820191905f5260205f20905b8154815290600101906020018083116108f357829003601f168201915b5050505050905090565b5f808261092561044e565b61092f9190612233565b90505f8361093b610a02565b6109459190612274565b9050818110610989576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610980906122f1565b60405180910390fd5b5f81036109cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c290612359565b60405180910390fd5b80826109d791906123a4565b92505050919050565b5f806109ea610c70565b90506109f7818585610d1b565b600191505092915050565b5f610a0b61053c565b600554610a189190612274565b905090565b5f8484604051602001610a31929190611ffb565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b8152600401610aaa949392919061241e565b6020604051808303815f875af1158015610ac6573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aea919061214d565b905080610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b23906121e8565b60405180910390fd5b610b378787876111ae565b50505050505050565b610b4b3383836111ae565b5050565b610b5a338383610e0b565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b606060088054610bef90611f44565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1b90611f44565b8015610c665780601f10610c3d57610100808354040283529160200191610c66565b820191905f5260205f20905b815481529060010190602001808311610c4957829003601f168201915b5050505050905090565b5f33905090565b610c848383836001611643565b505050565b5f610c948484610b5e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d155781811015610d06578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610cfd9392919061246f565b60405180910390fd5b610d1484848484035f611643565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d8b575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d829190611f83565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dfb575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610df29190611f83565b60405180910390fd5b610e06838383611812565b505050565b5f8211610e4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e44906124ee565b60405180910390fd5b5f8111610e8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e869061257c565b60405180910390fd5b5f610e99836107c4565b905081811015610ede576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed5906125e4565b60405180910390fd5b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399c0584a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f49573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f6d9190611fb0565b82610f7891906123a4565b9050600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b65bba186837f089bb7d842de36edecc21465b74cef48534348e20d3d00e20a7b95fd75ab1b876040518463ffffffff1660e01b8152600401610ff893929190612602565b5f604051808303815f87803b15801561100f575f80fd5b505af1158015611021573d5f803e3d5ffd5b50505050611030853086610d1b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8683856110799190612637565b6040518363ffffffff1660e01b815260040161109692919061266a565b6020604051808303815f875af11580156110b2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d6919061214d565b5050506110e161044e565b7f000000000000000000000000000000000000000000000000000000000000000061110a610a02565b6111149190612233565b61111e91906123a4565b6006819055505f60055411801561114a5750600554600361113f9190612233565b611147610a02565b10155b156111a9575f61115861044e565b60646005546111679190612233565b61117191906123a4565b90505f6005819055505f60648261118661044e565b6111909190612233565b61119a91906123a4565b90506111a63082611a2b565b50505b505050565b7f00000000000000000000000000000000000000000000000000000000000000008211611210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611207906126db565b60405180910390fd5b5f8111611252576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112499061257c565b60405180910390fd5b817f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016112ac9190611f83565b602060405180830381865afa1580156112c7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112eb9190611fb0565b101561132c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132390612743565b60405180910390fd5b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399c0584a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611397573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113bb9190611fb0565b836113c691906123a4565b90505f6113dd82856113d89190612637565b61091a565b905082811015611422576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611419906125e4565b60405180910390fd5b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b65bba186847f7c8d55ce8db0718485d7c91379503269a2a3a00c80c04cbfb5360e694eefe5656040518463ffffffff1660e01b81526004016114a093929190612602565b5f604051808303815f87803b1580156114b7575f80fd5b505af11580156114c9573d5f803e3d5ffd5b5050505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c357ea998684876115179190612637565b6040518363ffffffff1660e01b815260040161153492919061266a565b5f604051808303815f87803b15801561154b575f80fd5b505af115801561155d573d5f803e3d5ffd5b5050505061156c308683610d1b565b505061157661044e565b7f000000000000000000000000000000000000000000000000000000000000000061159f610a02565b6115a99190612233565b6115b391906123a4565b6006819055505f6005541180156115df575060055460036115d49190612233565b6115dc610a02565b10155b1561163e575f6115ed61044e565b60646005546115fc9190612233565b61160691906123a4565b90505f6005819055505f60648261161b61044e565b6116259190612233565b61162f91906123a4565b905061163b3082611a2b565b50505b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036116b3575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016116aa9190611f83565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611723575f6040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161171a9190611f83565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550801561180c578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516118039190611ac2565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611862578060025f8282546118569190612274565b92505081905550611930565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156118eb578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016118e29392919061246f565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611977578060025f82825403925050819055506119c1565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a1e9190611ac2565b60405180910390a3505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611a9b575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611a929190611f83565b60405180910390fd5b611aa6825f83611812565b5050565b5f819050919050565b611abc81611aaa565b82525050565b5f602082019050611ad55f830184611ab3565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611b1d82611adb565b611b278185611ae5565b9350611b37818560208601611af5565b611b4081611b03565b840191505092915050565b5f6020820190508181035f830152611b638184611b13565b905092915050565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611b9c82611b73565b9050919050565b611bac81611b92565b8114611bb6575f80fd5b50565b5f81359050611bc781611ba3565b92915050565b611bd681611aaa565b8114611be0575f80fd5b50565b5f81359050611bf181611bcd565b92915050565b5f8060408385031215611c0d57611c0c611b6b565b5b5f611c1a85828601611bb9565b9250506020611c2b85828601611be3565b9150509250929050565b5f8115159050919050565b611c4981611c35565b82525050565b5f602082019050611c625f830184611c40565b92915050565b5f805f60608486031215611c7f57611c7e611b6b565b5b5f611c8c86828701611bb9565b9350506020611c9d86828701611bb9565b9250506040611cae86828701611be3565b9150509250925092565b5f819050919050565b5f611cdb611cd6611cd184611b73565b611cb8565b611b73565b9050919050565b5f611cec82611cc1565b9050919050565b5f611cfd82611ce2565b9050919050565b611d0d81611cf3565b82525050565b5f602082019050611d265f830184611d04565b92915050565b5f60ff82169050919050565b611d4181611d2c565b82525050565b5f602082019050611d5a5f830184611d38565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f840112611d8157611d80611d60565b5b8235905067ffffffffffffffff811115611d9e57611d9d611d64565b5b602083019150836001820283011115611dba57611db9611d68565b5b9250929050565b5f805f805f60808688031215611dda57611dd9611b6b565b5b5f611de788828901611bb9565b9550506020611df888828901611be3565b9450506040611e0988828901611be3565b935050606086013567ffffffffffffffff811115611e2a57611e29611b6f565b5b611e3688828901611d6c565b92509250509295509295909350565b5f60208284031215611e5a57611e59611b6b565b5b5f611e6784828501611bb9565b91505092915050565b5f60208284031215611e8557611e84611b6b565b5b5f611e9284828501611be3565b91505092915050565b5f8060408385031215611eb157611eb0611b6b565b5b5f611ebe85828601611be3565b9250506020611ecf85828601611be3565b9150509250929050565b5f8060408385031215611eef57611eee611b6b565b5b5f611efc85828601611bb9565b9250506020611f0d85828601611bb9565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611f5b57607f821691505b602082108103611f6e57611f6d611f17565b5b50919050565b611f7d81611b92565b82525050565b5f602082019050611f965f830184611f74565b92915050565b5f81519050611faa81611bcd565b92915050565b5f60208284031215611fc557611fc4611b6b565b5b5f611fd284828501611f9c565b91505092915050565b5f819050919050565b611ff5611ff082611aaa565b611fdb565b82525050565b5f6120068285611fe4565b6020820191506120168284611fe4565b6020820191508190509392505050565b7f73656c6c000000000000000000000000000000000000000000000000000000005f82015250565b5f61205a600483611ae5565b915061206582612026565b602082019050919050565b5f819050919050565b61208281612070565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f6120b18385612088565b93506120be838584612098565b6120c783611b03565b840190509392505050565b5f6080820190506120e55f830187611f74565b81810360208301526120f68161204e565b90506121056040830186612079565b81810360608301526121188184866120a6565b905095945050505050565b61212c81611c35565b8114612136575f80fd5b50565b5f8151905061214781612123565b92915050565b5f6020828403121561216257612161611b6b565b5b5f61216f84828501612139565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f6121d2602d83611ae5565b91506121dd82612178565b604082019050919050565b5f6020820190508181035f8301526121ff816121c6565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61223d82611aaa565b915061224883611aaa565b925082820261225681611aaa565b9150828204841483151761226d5761226c612206565b5b5092915050565b5f61227e82611aaa565b915061228983611aaa565b92508282019050808211156122a1576122a0612206565b5b92915050565b7f4d617468656d61746963616c206f766572666c6f7700000000000000000000005f82015250565b5f6122db601583611ae5565b91506122e6826122a7565b602082019050919050565b5f6020820190508181035f830152612308816122cf565b9050919050565b7f4469766973696f6e206279207a65726f000000000000000000000000000000005f82015250565b5f612343601083611ae5565b915061234e8261230f565b602082019050919050565b5f6020820190508181035f83015261237081612337565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6123ae82611aaa565b91506123b983611aaa565b9250826123c9576123c8612377565b5b828204905092915050565b7f62757900000000000000000000000000000000000000000000000000000000005f82015250565b5f612408600383611ae5565b9150612413826123d4565b602082019050919050565b5f6080820190506124315f830187611f74565b8181036020830152612442816123fc565b90506124516040830186612079565b81810360608301526124648184866120a6565b905095945050505050565b5f6060820190506124825f830186611f74565b61248f6020830185611ab3565b61249c6040830184611ab3565b949350505050565b7f66726178496e206d7573742062652067726561746572207468616e20300000005f82015250565b5f6124d8601d83611ae5565b91506124e3826124a4565b602082019050919050565b5f6020820190508181035f830152612505816124cc565b9050919050565b7f616d6f756e744f75744d696e206d7573742062652067726561746572207468615f8201527f6e20300000000000000000000000000000000000000000000000000000000000602082015250565b5f612566602383611ae5565b91506125718261250c565b604082019050919050565b5f6020820190508181035f8301526125938161255a565b9050919050565b7f536c69707061676520746f6c6572616e636520657863656564656400000000005f82015250565b5f6125ce601b83611ae5565b91506125d98261259a565b602082019050919050565b5f6020820190508181035f8301526125fb816125c2565b9050919050565b5f6060820190506126155f830186611f74565b6126226020830185611ab3565b61262f6040830184612079565b949350505050565b5f61264182611aaa565b915061264c83611aaa565b925082820390508181111561266457612663612206565b5b92915050565b5f60408201905061267d5f830185611f74565b61268a6020830184611ab3565b9392505050565b7f66726178496e206d7573742062652067726561746572207468616e20310000005f82015250565b5f6126c5601d83611ae5565b91506126d082612691565b602082019050919050565b5f6020820190508181035f8301526126f2816126b9565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f61272d601483611ae5565b9150612738826126f9565b602082019050919050565b5f6020820190508181035f83015261275a81612721565b905091905056fea2646970667358221220f4ea68e9122e34d6e44c16a863c9734ccd500cc05d0e10da84a6bdbe6f1e961f64736f6c634300081a0033",
  RadioOrchestrator: "0x60e060405234801561000f575f80fd5b50335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610081575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161007891906102e4565b60405180910390fd5b610090816101ca60201b60201c565b5060405161009d9061028b565b604051809103905ff0801580156100b6573d5f803e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610135573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101599190610337565b600a61016591906104c7565b60c0818152505060405161017890610298565b604051809103905ff080158015610191573d5f803e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050610511565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611c00806155b983390190565b610b4b806171b983390190565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102ce826102a5565b9050919050565b6102de816102c4565b82525050565b5f6020820190506102f75f8301846102d5565b92915050565b5f80fd5b5f60ff82169050919050565b61031681610301565b8114610320575f80fd5b50565b5f815190506103318161030d565b92915050565b5f6020828403121561034c5761034b6102fd565b5b5f61035984828501610323565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f808291508390505b60018511156103e4578086048111156103c0576103bf610362565b5b60018516156103cf5780820291505b80810290506103dd8561038f565b94506103a4565b94509492505050565b5f826103fc57600190506104b7565b81610409575f90506104b7565b816001811461041f576002811461042957610458565b60019150506104b7565b60ff84111561043b5761043a610362565b5b8360020a91508482111561045257610451610362565b5b506104b7565b5060208310610133831016604e8410600b841016171561048d5782820a90508381111561048857610487610362565b5b6104b7565b61049a848484600161039b565b925090508184048111156104b1576104b0610362565b5b81810290505b9392505050565b5f819050919050565b5f6104d1826104be565b91506104dc83610301565b92506105097fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846103ed565b905092915050565b60805160a05160c0516150626105575f395f61075a01525f818161025a0152818161057f015261066101525f8181610310015281816103b201526104e601526150625ff3fe608060405234801561000f575f80fd5b50600436106100b2575f3560e01c80638da5cb5b1161006f5780638da5cb5b14610178578063ae2669c314610196578063af4a5d80146101a0578063b39a6e02146101d0578063bb5fac41146101ec578063f2fde38b1461020a576100b2565b80632ae803f5146100b65780632d2e4bfc146100e657806355b5d88b14610116578063715018a614610134578063844f347c1461013e5780638a4d786b1461015a575b5f80fd5b6100d060048036038101906100cb9190610aa1565b610226565b6040516100dd9190610ae6565b60405180910390f35b61010060048036038101906100fb9190610aa1565b610243565b60405161010d9190610b17565b60405180910390f35b61011e610258565b60405161012b9190610b8b565b60405180910390f35b61013c61027c565b005b61015860048036038101906101539190610bce565b61028f565b005b6101626103b0565b60405161016f9190610c2c565b60405180910390f35b6101806103d4565b60405161018d9190610c54565b60405180910390f35b61019e6103fb565b005b6101ba60048036038101906101b59190610e39565b610495565b6040516101c79190610ae6565b60405180910390f35b6101ea60048036038101906101e59190610ed9565b610630565b005b6101f4610758565b6040516102019190610b17565b60405180910390f35b610224600480360381019061021f9190610aa1565b61077c565b005b6001602052805f5260405f205f915054906101000a900460ff1681565b6002602052805f5260405f205f915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b610284610800565b61028d5f610887565b565b5f60025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541161030e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030590611043565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd8333846040518463ffffffff1660e01b815260040161036b93929190611061565b6020604051808303815f875af1158015610387573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103ab91906110c0565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f151560015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1615151461048a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048190611135565b60405180910390fd5b61049333610948565b565b5f805f90505f60025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205411156104e457600190505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361053c57600190505b8061057c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105739061119d565b60405180910390fd5b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166330cf1e6889338a8a8a8a6040518763ffffffff1660e01b81526004016105e096959493929190611256565b6020604051808303815f875af11580156105fc573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061062091906110c0565b9050809250505095945050505050565b5f858585604051602001610646939291906112f1565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166330cf1e6889308588886040518663ffffffff1660e01b81526004016106c095949392919061136b565b6020604051808303815f875af11580156106dc573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061070091906110c0565b905080610742576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107399061143a565b60405180910390fd5b61074e3388888861099f565b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610784610800565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107f4575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107eb9190610c54565b60405180910390fd5b6107fd81610887565b50565b610808610a22565b73ffffffffffffffffffffffffffffffffffffffff166108266103d4565b73ffffffffffffffffffffffffffffffffffffffff161461088557610849610a22565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161087c9190610c54565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555050565b5f848484846040516109b090610a29565b6109bd9493929190611458565b604051809103905ff0801580156109d6573d5f803e3d5ffd5b5090504360025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505050505050565b5f33905090565b613b7c806114b183390190565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a7082610a47565b9050919050565b610a8081610a66565b8114610a8a575f80fd5b50565b5f81359050610a9b81610a77565b92915050565b5f60208284031215610ab657610ab5610a3f565b5b5f610ac384828501610a8d565b91505092915050565b5f8115159050919050565b610ae081610acc565b82525050565b5f602082019050610af95f830184610ad7565b92915050565b5f819050919050565b610b1181610aff565b82525050565b5f602082019050610b2a5f830184610b08565b92915050565b5f819050919050565b5f610b53610b4e610b4984610a47565b610b30565b610a47565b9050919050565b5f610b6482610b39565b9050919050565b5f610b7582610b5a565b9050919050565b610b8581610b6b565b82525050565b5f602082019050610b9e5f830184610b7c565b92915050565b610bad81610aff565b8114610bb7575f80fd5b50565b5f81359050610bc881610ba4565b92915050565b5f8060408385031215610be457610be3610a3f565b5b5f610bf185828601610a8d565b9250506020610c0285828601610bba565b9150509250929050565b5f610c1682610b5a565b9050919050565b610c2681610c0c565b82525050565b5f602082019050610c3f5f830184610c1d565b92915050565b610c4e81610a66565b82525050565b5f602082019050610c675f830184610c45565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610cbb82610c75565b810181811067ffffffffffffffff82111715610cda57610cd9610c85565b5b80604052505050565b5f610cec610a36565b9050610cf88282610cb2565b919050565b5f67ffffffffffffffff821115610d1757610d16610c85565b5b610d2082610c75565b9050602081019050919050565b828183375f83830152505050565b5f610d4d610d4884610cfd565b610ce3565b905082815260208101848484011115610d6957610d68610c71565b5b610d74848285610d2d565b509392505050565b5f82601f830112610d9057610d8f610c6d565b5b8135610da0848260208601610d3b565b91505092915050565b5f819050919050565b610dbb81610da9565b8114610dc5575f80fd5b50565b5f81359050610dd681610db2565b92915050565b5f80fd5b5f80fd5b5f8083601f840112610df957610df8610c6d565b5b8235905067ffffffffffffffff811115610e1657610e15610ddc565b5b602083019150836001820283011115610e3257610e31610de0565b5b9250929050565b5f805f805f60808688031215610e5257610e51610a3f565b5b5f610e5f88828901610a8d565b955050602086013567ffffffffffffffff811115610e8057610e7f610a43565b5b610e8c88828901610d7c565b9450506040610e9d88828901610dc8565b935050606086013567ffffffffffffffff811115610ebe57610ebd610a43565b5b610eca88828901610de4565b92509250509295509295909350565b5f805f805f8060a08789031215610ef357610ef2610a3f565b5b5f610f0089828a01610a8d565b965050602087013567ffffffffffffffff811115610f2157610f20610a43565b5b610f2d89828a01610d7c565b955050604087013567ffffffffffffffff811115610f4e57610f4d610a43565b5b610f5a89828a01610d7c565b945050606087013567ffffffffffffffff811115610f7b57610f7a610a43565b5b610f8789828a01610d7c565b935050608087013567ffffffffffffffff811115610fa857610fa7610a43565b5b610fb489828a01610de4565b92509250509295509295509295565b5f82825260208201905092915050565b7f4f6e6c7920546f6b656e20436f6e7472616374732063616e2063616c6c2074685f8201527f6973206d6574686f640000000000000000000000000000000000000000000000602082015250565b5f61102d602983610fc3565b915061103882610fd3565b604082019050919050565b5f6020820190508181035f83015261105a81611021565b9050919050565b5f6060820190506110745f830186610c45565b6110816020830185610c45565b61108e6040830184610b08565b949350505050565b61109f81610acc565b81146110a9575f80fd5b50565b5f815190506110ba81611096565b92915050565b5f602082840312156110d5576110d4610a3f565b5b5f6110e2848285016110ac565b91505092915050565b7f416c7265616479207265676973746572656400000000000000000000000000005f82015250565b5f61111f601283610fc3565b915061112a826110eb565b602082019050919050565b5f6020820190508181035f83015261114c81611113565b9050919050565b7f4e6f7420616c6c6f77656420746f2065786563757465206d65746120747800005f82015250565b5f611187601e83610fc3565b915061119282611153565b602082019050919050565b5f6020820190508181035f8301526111b48161117b565b9050919050565b5f81519050919050565b8281835e5f83830152505050565b5f6111dd826111bb565b6111e78185610fc3565b93506111f78185602086016111c5565b61120081610c75565b840191505092915050565b61121481610da9565b82525050565b5f82825260208201905092915050565b5f611235838561121a565b9350611242838584610d2d565b61124b83610c75565b840190509392505050565b5f60a0820190506112695f830189610c45565b6112766020830188610c45565b818103604083015261128881876111d3565b9050611297606083018661120b565b81810360808301526112aa81848661122a565b9050979650505050505050565b5f81905092915050565b5f6112cb826111bb565b6112d581856112b7565b93506112e58185602086016111c5565b80840191505092915050565b5f6112fc82866112c1565b915061130882856112c1565b915061131482846112c1565b9150819050949350505050565b7f6c61756e6368546f6b656e0000000000000000000000000000000000000000005f82015250565b5f611355600b83610fc3565b915061136082611321565b602082019050919050565b5f60a08201905061137e5f830188610c45565b61138b6020830187610c45565b818103604083015261139c81611349565b90506113ab606083018661120b565b81810360808301526113be81848661122a565b90509695505050505050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f611424602d83610fc3565b915061142f826113ca565b604082019050919050565b5f6020820190508181035f83015261145181611418565b9050919050565b5f60808201905061146b5f830187610c45565b818103602083015261147d81866111d3565b9050818103604083015261149181856111d3565b905081810360608301526114a581846111d3565b90509594505050505056fe60e060405234801561000f575f80fd5b50604051613b7c380380613b7c83398181016040528101906100319190610b7f565b828281600390816100429190610e44565b5080600490816100529190610e44565b5050503360095f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376c16abe6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100ff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101239190610f4e565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101a1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c59190610faf565b60ff1660c08160ff168152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630f11081f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561023c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102609190611004565b60a0818152505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636999b3776040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102f5919061106a565b600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600890816103839190610e44565b5061043a3060c051600a61039791906111f1565b60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b0c81b36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610401573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104259190611004565b61042f919061123b565b6105ba60201b60201c565b60a05160095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad3dc0136040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104cb9190611004565b6104d5919061123b565b6005819055506104e961063f60201b60201c565b60a0516104fa61065460201b60201c565b610504919061123b565b61050e91906112a9565b6006819055505f6005541180156105405750600554600361052f919061123b565b61053d61065460201b60201c565b10155b156105b1575f61055461063f60201b60201c565b6064600554610563919061123b565b61056d91906112a9565b90505f6005819055505f60648261058861063f60201b60201c565b610592919061123b565b61059c91906112a9565b90506105ae308261067560201b60201c565b50505b50505050611391565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361062a575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161062191906112e8565b60405180910390fd5b61063b5f83836106fa60201b60201c565b5050565b5f61064f3061091360201b60201c565b905090565b5f61066361095860201b60201c565b6005546106709190611301565b905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106e5575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106dc91906112e8565b60405180910390fd5b6106f6825f836106fa60201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361074a578060025f82825461073e9190611301565b92505081905550610818565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156107d3578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016107ca93929190611343565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361085f578060025f82825403925050819055506108a9565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516109069190611378565b60405180910390a3505050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f60805173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161099491906112e8565b602060405180830381865afa1580156109af573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109d39190611004565b905090565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a12826109e9565b9050919050565b610a2281610a08565b8114610a2c575f80fd5b50565b5f81519050610a3d81610a19565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610a9182610a4b565b810181811067ffffffffffffffff82111715610ab057610aaf610a5b565b5b80604052505050565b5f610ac26109d8565b9050610ace8282610a88565b919050565b5f67ffffffffffffffff821115610aed57610aec610a5b565b5b610af682610a4b565b9050602081019050919050565b8281835e5f83830152505050565b5f610b23610b1e84610ad3565b610ab9565b905082815260208101848484011115610b3f57610b3e610a47565b5b610b4a848285610b03565b509392505050565b5f82601f830112610b6657610b65610a43565b5b8151610b76848260208601610b11565b91505092915050565b5f805f8060808587031215610b9757610b966109e1565b5b5f610ba487828801610a2f565b945050602085015167ffffffffffffffff811115610bc557610bc46109e5565b5b610bd187828801610b52565b935050604085015167ffffffffffffffff811115610bf257610bf16109e5565b5b610bfe87828801610b52565b925050606085015167ffffffffffffffff811115610c1f57610c1e6109e5565b5b610c2b87828801610b52565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610c8557607f821691505b602082108103610c9857610c97610c41565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610cfa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610cbf565b610d048683610cbf565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f610d48610d43610d3e84610d1c565b610d25565b610d1c565b9050919050565b5f819050919050565b610d6183610d2e565b610d75610d6d82610d4f565b848454610ccb565b825550505050565b5f90565b610d89610d7d565b610d94818484610d58565b505050565b5b81811015610db757610dac5f82610d81565b600181019050610d9a565b5050565b601f821115610dfc57610dcd81610c9e565b610dd684610cb0565b81016020851015610de5578190505b610df9610df185610cb0565b830182610d99565b50505b505050565b5f82821c905092915050565b5f610e1c5f1984600802610e01565b1980831691505092915050565b5f610e348383610e0d565b9150826002028217905092915050565b610e4d82610c37565b67ffffffffffffffff811115610e6657610e65610a5b565b5b610e708254610c6e565b610e7b828285610dbb565b5f60209050601f831160018114610eac575f8415610e9a578287015190505b610ea48582610e29565b865550610f0b565b601f198416610eba86610c9e565b5f5b82811015610ee157848901518255600182019150602085019450602081019050610ebc565b86831015610efe5784890151610efa601f891682610e0d565b8355505b6001600288020188555050505b505050505050565b5f610f1d82610a08565b9050919050565b610f2d81610f13565b8114610f37575f80fd5b50565b5f81519050610f4881610f24565b92915050565b5f60208284031215610f6357610f626109e1565b5b5f610f7084828501610f3a565b91505092915050565b5f60ff82169050919050565b610f8e81610f79565b8114610f98575f80fd5b50565b5f81519050610fa981610f85565b92915050565b5f60208284031215610fc457610fc36109e1565b5b5f610fd184828501610f9b565b91505092915050565b610fe381610d1c565b8114610fed575f80fd5b50565b5f81519050610ffe81610fda565b92915050565b5f60208284031215611019576110186109e1565b5b5f61102684828501610ff0565b91505092915050565b5f61103982610a08565b9050919050565b6110498161102f565b8114611053575f80fd5b50565b5f8151905061106481611040565b92915050565b5f6020828403121561107f5761107e6109e1565b5b5f61108c84828501611056565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f808291508390505b6001851115611117578086048111156110f3576110f2611095565b5b60018516156111025780820291505b8081029050611110856110c2565b94506110d7565b94509492505050565b5f8261112f57600190506111ea565b8161113c575f90506111ea565b8160018114611152576002811461115c5761118b565b60019150506111ea565b60ff84111561116e5761116d611095565b5b8360020a91508482111561118557611184611095565b5b506111ea565b5060208310610133831016604e8410600b84101617156111c05782820a9050838111156111bb576111ba611095565b5b6111ea565b6111cd84848460016110ce565b925090508184048111156111e4576111e3611095565b5b81810290505b9392505050565b5f6111fb82610d1c565b915061120683610f79565b92506112337fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611120565b905092915050565b5f61124582610d1c565b915061125083610d1c565b925082820261125e81610d1c565b9150828204841483151761127557611274611095565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6112b382610d1c565b91506112be83610d1c565b9250826112ce576112cd61127c565b5b828204905092915050565b6112e281610a08565b82525050565b5f6020820190506112fb5f8301846112d9565b92915050565b5f61130b82610d1c565b915061131683610d1c565b925082820190508082111561132e5761132d611095565b5b92915050565b61133d81610d1c565b82525050565b5f6060820190506113565f8301866112d9565b6113636020830185611334565b6113706040830184611334565b949350505050565b5f60208201905061138b5f830184611334565b92915050565b60805160a05160c0516127976113e55f395f61062f01525f8181610511015281816110e3015281816111b0015261157801525f818161053f0152818161060a01528181611032015261125501526127975ff3fe608060405234801561000f575f80fd5b5060043610610140575f3560e01c80637ff9b596116100b6578063cd3293de1161007a578063cd3293de1461038e578063ce20d840146103ac578063d6febde8146103c8578063d79875eb146103e4578063dd62ed3e14610400578063eac989f81461043057610140565b80637ff9b596146102c257806387d12a3f146102e057806395d89b41146103105780639721f2901461032e578063a9059cbb1461035e57610140565b80631a686502116101085780631a686502146101ec57806323b872dd1461020a5780632c41d85d1461023a578063313ce56714610258578063503cb67d1461027657806370a082311461029257610140565b8063047fc9aa1461014457806306fdde0314610162578063095ea7b3146101805780630f11081f146101b057806318160ddd146101ce575b5f80fd5b61014c61044e565b6040516101599190611ac2565b60405180910390f35b61016a61045d565b6040516101779190611b4b565b60405180910390f35b61019a60048036038101906101959190611bf7565b6104ed565b6040516101a79190611c4f565b60405180910390f35b6101b861050f565b6040516101c59190611ac2565b60405180910390f35b6101d6610533565b6040516101e39190611ac2565b60405180910390f35b6101f461053c565b6040516102019190611ac2565b60405180910390f35b610224600480360381019061021f9190611c68565b6105da565b6040516102319190611c4f565b60405180910390f35b610242610608565b60405161024f9190611d13565b60405180910390f35b61026061062c565b60405161026d9190611d47565b60405180910390f35b610290600480360381019061028b9190611dc1565b610653565b005b6102ac60048036038101906102a79190611e45565b610776565b6040516102b99190611ac2565b60405180910390f35b6102ca6107bb565b6040516102d79190611ac2565b60405180910390f35b6102fa60048036038101906102f59190611e70565b6107c4565b6040516103079190611ac2565b60405180910390f35b61031861088a565b6040516103259190611b4b565b60405180910390f35b61034860048036038101906103439190611e70565b61091a565b6040516103559190611ac2565b60405180910390f35b61037860048036038101906103739190611bf7565b6109e0565b6040516103859190611c4f565b60405180910390f35b610396610a02565b6040516103a39190611ac2565b60405180910390f35b6103c660048036038101906103c19190611dc1565b610a1d565b005b6103e260048036038101906103dd9190611e9b565b610b40565b005b6103fe60048036038101906103f99190611e9b565b610b4f565b005b61041a60048036038101906104159190611ed9565b610b5e565b6040516104279190611ac2565b60405180910390f35b610438610be0565b6040516104459190611b4b565b60405180910390f35b5f61045830610776565b905090565b60606003805461046c90611f44565b80601f016020809104026020016040519081016040528092919081815260200182805461049890611f44565b80156104e35780601f106104ba576101008083540402835291602001916104e3565b820191905f5260205f20905b8154815290600101906020018083116104c657829003601f168201915b5050505050905090565b5f806104f7610c70565b9050610504818585610c77565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f600254905090565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105969190611f83565b602060405180830381865afa1580156105b1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105d59190611fb0565b905090565b5f806105e4610c70565b90506105f1858285610c89565b6105fc858585610d1b565b60019150509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f8484604051602001610667929190611ffb565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016106e094939291906120d2565b6020604051808303815f875af11580156106fc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610720919061214d565b905080610762576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610759906121e8565b60405180910390fd5b61076d878787610e0b565b50505050505050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f600654905090565b5f80826107cf610a02565b6107d99190612233565b90505f836107e561044e565b6107ef9190612274565b9050818110610833576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082a906122f1565b60405180910390fd5b5f8103610875576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086c90612359565b60405180910390fd5b808261088191906123a4565b92505050919050565b60606004805461089990611f44565b80601f01602080910402602001604051908101604052809291908181526020018280546108c590611f44565b80156109105780601f106108e757610100808354040283529160200191610910565b820191905f5260205f20905b8154815290600101906020018083116108f357829003601f168201915b5050505050905090565b5f808261092561044e565b61092f9190612233565b90505f8361093b610a02565b6109459190612274565b9050818110610989576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610980906122f1565b60405180910390fd5b5f81036109cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c290612359565b60405180910390fd5b80826109d791906123a4565b92505050919050565b5f806109ea610c70565b90506109f7818585610d1b565b600191505092915050565b5f610a0b61053c565b600554610a189190612274565b905090565b5f8484604051602001610a31929190611ffb565b6040516020818303038152906040528051906020012090505f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b8152600401610aaa949392919061241e565b6020604051808303815f875af1158015610ac6573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aea919061214d565b905080610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b23906121e8565b60405180910390fd5b610b378787876111ae565b50505050505050565b610b4b3383836111ae565b5050565b610b5a338383610e0b565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b606060088054610bef90611f44565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1b90611f44565b8015610c665780601f10610c3d57610100808354040283529160200191610c66565b820191905f5260205f20905b815481529060010190602001808311610c4957829003601f168201915b5050505050905090565b5f33905090565b610c848383836001611643565b505050565b5f610c948484610b5e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d155781811015610d06578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610cfd9392919061246f565b60405180910390fd5b610d1484848484035f611643565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d8b575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d829190611f83565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dfb575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610df29190611f83565b60405180910390fd5b610e06838383611812565b505050565b5f8211610e4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e44906124ee565b60405180910390fd5b5f8111610e8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e869061257c565b60405180910390fd5b5f610e99836107c4565b905081811015610ede576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed5906125e4565b60405180910390fd5b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399c0584a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f49573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f6d9190611fb0565b82610f7891906123a4565b9050600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b65bba186837f089bb7d842de36edecc21465b74cef48534348e20d3d00e20a7b95fd75ab1b876040518463ffffffff1660e01b8152600401610ff893929190612602565b5f604051808303815f87803b15801561100f575f80fd5b505af1158015611021573d5f803e3d5ffd5b50505050611030853086610d1b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8683856110799190612637565b6040518363ffffffff1660e01b815260040161109692919061266a565b6020604051808303815f875af11580156110b2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d6919061214d565b5050506110e161044e565b7f000000000000000000000000000000000000000000000000000000000000000061110a610a02565b6111149190612233565b61111e91906123a4565b6006819055505f60055411801561114a5750600554600361113f9190612233565b611147610a02565b10155b156111a9575f61115861044e565b60646005546111679190612233565b61117191906123a4565b90505f6005819055505f60648261118661044e565b6111909190612233565b61119a91906123a4565b90506111a63082611a2b565b50505b505050565b7f00000000000000000000000000000000000000000000000000000000000000008211611210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611207906126db565b60405180910390fd5b5f8111611252576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112499061257c565b60405180910390fd5b817f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016112ac9190611f83565b602060405180830381865afa1580156112c7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112eb9190611fb0565b101561132c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132390612743565b60405180910390fd5b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399c0584a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611397573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113bb9190611fb0565b836113c691906123a4565b90505f6113dd82856113d89190612637565b61091a565b905082811015611422576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611419906125e4565b60405180910390fd5b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b65bba186847f7c8d55ce8db0718485d7c91379503269a2a3a00c80c04cbfb5360e694eefe5656040518463ffffffff1660e01b81526004016114a093929190612602565b5f604051808303815f87803b1580156114b7575f80fd5b505af11580156114c9573d5f803e3d5ffd5b5050505060095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c357ea998684876115179190612637565b6040518363ffffffff1660e01b815260040161153492919061266a565b5f604051808303815f87803b15801561154b575f80fd5b505af115801561155d573d5f803e3d5ffd5b5050505061156c308683610d1b565b505061157661044e565b7f000000000000000000000000000000000000000000000000000000000000000061159f610a02565b6115a99190612233565b6115b391906123a4565b6006819055505f6005541180156115df575060055460036115d49190612233565b6115dc610a02565b10155b1561163e575f6115ed61044e565b60646005546115fc9190612233565b61160691906123a4565b90505f6005819055505f60648261161b61044e565b6116259190612233565b61162f91906123a4565b905061163b3082611a2b565b50505b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036116b3575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016116aa9190611f83565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611723575f6040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161171a9190611f83565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550801561180c578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516118039190611ac2565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611862578060025f8282546118569190612274565b92505081905550611930565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156118eb578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016118e29392919061246f565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611977578060025f82825403925050819055506119c1565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a1e9190611ac2565b60405180910390a3505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611a9b575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611a929190611f83565b60405180910390fd5b611aa6825f83611812565b5050565b5f819050919050565b611abc81611aaa565b82525050565b5f602082019050611ad55f830184611ab3565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611b1d82611adb565b611b278185611ae5565b9350611b37818560208601611af5565b611b4081611b03565b840191505092915050565b5f6020820190508181035f830152611b638184611b13565b905092915050565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611b9c82611b73565b9050919050565b611bac81611b92565b8114611bb6575f80fd5b50565b5f81359050611bc781611ba3565b92915050565b611bd681611aaa565b8114611be0575f80fd5b50565b5f81359050611bf181611bcd565b92915050565b5f8060408385031215611c0d57611c0c611b6b565b5b5f611c1a85828601611bb9565b9250506020611c2b85828601611be3565b9150509250929050565b5f8115159050919050565b611c4981611c35565b82525050565b5f602082019050611c625f830184611c40565b92915050565b5f805f60608486031215611c7f57611c7e611b6b565b5b5f611c8c86828701611bb9565b9350506020611c9d86828701611bb9565b9250506040611cae86828701611be3565b9150509250925092565b5f819050919050565b5f611cdb611cd6611cd184611b73565b611cb8565b611b73565b9050919050565b5f611cec82611cc1565b9050919050565b5f611cfd82611ce2565b9050919050565b611d0d81611cf3565b82525050565b5f602082019050611d265f830184611d04565b92915050565b5f60ff82169050919050565b611d4181611d2c565b82525050565b5f602082019050611d5a5f830184611d38565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f840112611d8157611d80611d60565b5b8235905067ffffffffffffffff811115611d9e57611d9d611d64565b5b602083019150836001820283011115611dba57611db9611d68565b5b9250929050565b5f805f805f60808688031215611dda57611dd9611b6b565b5b5f611de788828901611bb9565b9550506020611df888828901611be3565b9450506040611e0988828901611be3565b935050606086013567ffffffffffffffff811115611e2a57611e29611b6f565b5b611e3688828901611d6c565b92509250509295509295909350565b5f60208284031215611e5a57611e59611b6b565b5b5f611e6784828501611bb9565b91505092915050565b5f60208284031215611e8557611e84611b6b565b5b5f611e9284828501611be3565b91505092915050565b5f8060408385031215611eb157611eb0611b6b565b5b5f611ebe85828601611be3565b9250506020611ecf85828601611be3565b9150509250929050565b5f8060408385031215611eef57611eee611b6b565b5b5f611efc85828601611bb9565b9250506020611f0d85828601611bb9565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611f5b57607f821691505b602082108103611f6e57611f6d611f17565b5b50919050565b611f7d81611b92565b82525050565b5f602082019050611f965f830184611f74565b92915050565b5f81519050611faa81611bcd565b92915050565b5f60208284031215611fc557611fc4611b6b565b5b5f611fd284828501611f9c565b91505092915050565b5f819050919050565b611ff5611ff082611aaa565b611fdb565b82525050565b5f6120068285611fe4565b6020820191506120168284611fe4565b6020820191508190509392505050565b7f73656c6c000000000000000000000000000000000000000000000000000000005f82015250565b5f61205a600483611ae5565b915061206582612026565b602082019050919050565b5f819050919050565b61208281612070565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f6120b18385612088565b93506120be838584612098565b6120c783611b03565b840190509392505050565b5f6080820190506120e55f830187611f74565b81810360208301526120f68161204e565b90506121056040830186612079565b81810360608301526121188184866120a6565b905095945050505050565b61212c81611c35565b8114612136575f80fd5b50565b5f8151905061214781612123565b92915050565b5f6020828403121561216257612161611b6b565b5b5f61216f84828501612139565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f6121d2602d83611ae5565b91506121dd82612178565b604082019050919050565b5f6020820190508181035f8301526121ff816121c6565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61223d82611aaa565b915061224883611aaa565b925082820261225681611aaa565b9150828204841483151761226d5761226c612206565b5b5092915050565b5f61227e82611aaa565b915061228983611aaa565b92508282019050808211156122a1576122a0612206565b5b92915050565b7f4d617468656d61746963616c206f766572666c6f7700000000000000000000005f82015250565b5f6122db601583611ae5565b91506122e6826122a7565b602082019050919050565b5f6020820190508181035f830152612308816122cf565b9050919050565b7f4469766973696f6e206279207a65726f000000000000000000000000000000005f82015250565b5f612343601083611ae5565b915061234e8261230f565b602082019050919050565b5f6020820190508181035f83015261237081612337565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6123ae82611aaa565b91506123b983611aaa565b9250826123c9576123c8612377565b5b828204905092915050565b7f62757900000000000000000000000000000000000000000000000000000000005f82015250565b5f612408600383611ae5565b9150612413826123d4565b602082019050919050565b5f6080820190506124315f830187611f74565b8181036020830152612442816123fc565b90506124516040830186612079565b81810360608301526124648184866120a6565b905095945050505050565b5f6060820190506124825f830186611f74565b61248f6020830185611ab3565b61249c6040830184611ab3565b949350505050565b7f66726178496e206d7573742062652067726561746572207468616e20300000005f82015250565b5f6124d8601d83611ae5565b91506124e3826124a4565b602082019050919050565b5f6020820190508181035f830152612505816124cc565b9050919050565b7f616d6f756e744f75744d696e206d7573742062652067726561746572207468615f8201527f6e20300000000000000000000000000000000000000000000000000000000000602082015250565b5f612566602383611ae5565b91506125718261250c565b604082019050919050565b5f6020820190508181035f8301526125938161255a565b9050919050565b7f536c69707061676520746f6c6572616e636520657863656564656400000000005f82015250565b5f6125ce601b83611ae5565b91506125d98261259a565b602082019050919050565b5f6020820190508181035f8301526125fb816125c2565b9050919050565b5f6060820190506126155f830186611f74565b6126226020830185611ab3565b61262f6040830184612079565b949350505050565b5f61264182611aaa565b915061264c83611aaa565b925082820390508181111561266457612663612206565b5b92915050565b5f60408201905061267d5f830185611f74565b61268a6020830184611ab3565b9392505050565b7f66726178496e206d7573742062652067726561746572207468616e20310000005f82015250565b5f6126c5601d83611ae5565b91506126d082612691565b602082019050919050565b5f6020820190508181035f8301526126f2816126b9565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f61272d601483611ae5565b9150612738826126f9565b602082019050919050565b5f6020820190508181035f83015261275a81612721565b905091905056fea2646970667358221220f4ea68e9122e34d6e44c16a863c9734ccd500cc05d0e10da84a6bdbe6f1e961f64736f6c634300081a0033a26469706673582212208196d8a1d06bdb20b5e174c11203c32b9ad4825e3f25cc0546b003f3edc347f564736f6c634300081a003360c060405234801561000f575f80fd5b506040518060400160405280600a81526020017f74657374555344432e65000000000000000000000000000000000000000000008152506040518060400160405280600a81526020017f74657374555344432e6500000000000000000000000000000000000000000000815250816003908161008b9190610366565b50806004908161009b9190610366565b5050506100ac61012560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506100ed61012560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050610435565b5f33905090565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806101a757607f821691505b6020821081036101ba576101b9610163565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261021c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826101e1565b61022686836101e1565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61026a6102656102608461023e565b610247565b61023e565b9050919050565b5f819050919050565b61028383610250565b61029761028f82610271565b8484546101ed565b825550505050565b5f90565b6102ab61029f565b6102b681848461027a565b505050565b5b818110156102d9576102ce5f826102a3565b6001810190506102bc565b5050565b601f82111561031e576102ef816101c0565b6102f8846101d2565b81016020851015610307578190505b61031b610313856101d2565b8301826102bb565b50505b505050565b5f82821c905092915050565b5f61033e5f1984600802610323565b1980831691505092915050565b5f610356838361032f565b9150826002028217905092915050565b61036f8261012c565b67ffffffffffffffff81111561038857610387610136565b5b6103928254610190565b61039d8282856102dd565b5f60209050601f8311600181146103ce575f84156103bc578287015190505b6103c6858261034b565b86555061042d565b601f1984166103dc866101c0565b5f5b82811015610403578489015182556001820191506020850194506020810190506103de565b86831015610420578489015161041c601f89168261032f565b8355505b6001600288020188555050505b505050505050565b60805160a05161179c6104645f395f8181610543015281816106d201526107c701525f61039e015261179c5ff3fe608060405234801561000f575f80fd5b50600436106100cd575f3560e01c806370a082311161008a578063a9059cbb11610064578063a9059cbb14610211578063b7009f5514610241578063b74795d91461025d578063dd62ed3e1461027b576100cd565b806370a08231146101a757806395d89b41146101d7578063a6dedeb5146101f5576100cd565b806306fdde03146100d1578063095ea7b3146100ef57806318160ddd1461011f57806323b872dd1461013d578063313ce5671461016d578063449a52f81461018b575b5f80fd5b6100d96102ab565b6040516100e69190610edd565b60405180910390f35b61010960048036038101906101049190610f92565b61033b565b6040516101169190610fea565b60405180910390f35b61012761035d565b6040516101349190611012565b60405180910390f35b6101576004803603810190610152919061102b565b610366565b6040516101649190610fea565b60405180910390f35b610175610394565b6040516101829190611096565b60405180910390f35b6101a560048036038101906101a09190610f92565b61039c565b005b6101c160048036038101906101bc91906110af565b61043f565b6040516101ce9190611012565b60405180910390f35b6101df610484565b6040516101ec9190610edd565b60405180910390f35b61020f600480360381019061020a919061113b565b610514565b005b61022b60048036038101906102269190610f92565b610681565b6040516102389190610fea565b60405180910390f35b61025b6004803603810190610256919061113b565b6106a3565b005b6102656107c5565b604051610272919061121a565b60405180910390f35b61029560048036038101906102909190611233565b6107e9565b6040516102a29190611012565b60405180910390f35b6060600380546102ba9061129e565b80601f01602080910402602001604051908101604052809291908181526020018280546102e69061129e565b80156103315780601f1061030857610100808354040283529160200191610331565b820191905f5260205f20905b81548152906001019060200180831161031457829003601f168201915b5050505050905090565b5f8061034561086b565b9050610352818585610872565b600191505092915050565b5f600254905090565b5f8061037061086b565b905061037d858285610884565b610388858585610916565b60019150509392505050565b5f6006905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166103db61086b565b73ffffffffffffffffffffffffffffffffffffffff1614610431576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042890611318565b60405180910390fd5b61043b8282610a06565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6060600480546104939061129e565b80601f01602080910402602001604051908101604052809291908181526020018280546104bf9061129e565b801561050a5780601f106104e15761010080835404028352916020019161050a565b820191905f5260205f20905b8154815290600101906020018083116104ed57829003601f168201915b5050505050905090565b5f848460405160200161052892919061139b565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016105a09493929190611481565b6020604051808303815f875af11580156105bc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105e091906114fc565b905080610622576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061990611597565b60405180910390fd5b61062b8761043f565b85111561066d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610664906115ff565b60405180910390fd5b610678878787610916565b50505050505050565b5f8061068b61086b565b9050610698818585610916565b600191505092915050565b5f84846040516020016106b792919061139b565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b815260040161072f9493929190611667565b6020604051808303815f875af115801561074b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061076f91906114fc565b9050806107b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a890611597565b60405180910390fd5b6107bc878787610872565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b61087f8383836001610a85565b505050565b5f61088f84846107e9565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109105781811015610901578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016108f8939291906116b8565b60405180910390fd5b61090f84848484035f610a85565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610986575f6040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161097d91906116ed565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109f6575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109ed91906116ed565b60405180910390fd5b610a01838383610c54565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a76575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a6d91906116ed565b60405180910390fd5b610a815f8383610c54565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610af5575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610aec91906116ed565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b65575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b5c91906116ed565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610c4e578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c459190611012565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ca4578060025f828254610c989190611733565b92505081905550610d72565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610d2d578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610d24939291906116b8565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610db9578060025f8282540392505081905550610e03565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e609190611012565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610eaf82610e6d565b610eb98185610e77565b9350610ec9818560208601610e87565b610ed281610e95565b840191505092915050565b5f6020820190508181035f830152610ef58184610ea5565b905092915050565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610f2e82610f05565b9050919050565b610f3e81610f24565b8114610f48575f80fd5b50565b5f81359050610f5981610f35565b92915050565b5f819050919050565b610f7181610f5f565b8114610f7b575f80fd5b50565b5f81359050610f8c81610f68565b92915050565b5f8060408385031215610fa857610fa7610efd565b5b5f610fb585828601610f4b565b9250506020610fc685828601610f7e565b9150509250929050565b5f8115159050919050565b610fe481610fd0565b82525050565b5f602082019050610ffd5f830184610fdb565b92915050565b61100c81610f5f565b82525050565b5f6020820190506110255f830184611003565b92915050565b5f805f6060848603121561104257611041610efd565b5b5f61104f86828701610f4b565b935050602061106086828701610f4b565b925050604061107186828701610f7e565b9150509250925092565b5f60ff82169050919050565b6110908161107b565b82525050565b5f6020820190506110a95f830184611087565b92915050565b5f602082840312156110c4576110c3610efd565b5b5f6110d184828501610f4b565b91505092915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f8401126110fb576110fa6110da565b5b8235905067ffffffffffffffff811115611118576111176110de565b5b602083019150836001820283011115611134576111336110e2565b5b9250929050565b5f805f805f6080868803121561115457611153610efd565b5b5f61116188828901610f4b565b955050602061117288828901610f4b565b945050604061118388828901610f7e565b935050606086013567ffffffffffffffff8111156111a4576111a3610f01565b5b6111b0888289016110e6565b92509250509295509295909350565b5f819050919050565b5f6111e26111dd6111d884610f05565b6111bf565b610f05565b9050919050565b5f6111f3826111c8565b9050919050565b5f611204826111e9565b9050919050565b611214816111fa565b82525050565b5f60208201905061122d5f83018461120b565b92915050565b5f806040838503121561124957611248610efd565b5b5f61125685828601610f4b565b925050602061126785828601610f4b565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806112b557607f821691505b6020821081036112c8576112c7611271565b5b50919050565b7f4f6e6c79204d696e7465722063616e206d696e740000000000000000000000005f82015250565b5f611302601483610e77565b915061130d826112ce565b602082019050919050565b5f6020820190508181035f83015261132f816112f6565b9050919050565b5f8160601b9050919050565b5f61134c82611336565b9050919050565b5f61135d82611342565b9050919050565b61137561137082610f24565b611353565b82525050565b5f819050919050565b61139561139082610f5f565b61137b565b82525050565b5f6113a68285611364565b6014820191506113b68284611384565b6020820191508190509392505050565b6113cf81610f24565b82525050565b7f7472616e736665720000000000000000000000000000000000000000000000005f82015250565b5f611409600883610e77565b9150611414826113d5565b602082019050919050565b5f819050919050565b6114318161141f565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f6114608385611437565b935061146d838584611447565b61147683610e95565b840190509392505050565b5f6080820190506114945f8301876113c6565b81810360208301526114a5816113fd565b90506114b46040830186611428565b81810360608301526114c7818486611455565b905095945050505050565b6114db81610fd0565b81146114e5575f80fd5b50565b5f815190506114f6816114d2565b92915050565b5f6020828403121561151157611510610efd565b5b5f61151e848285016114e8565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f611581602d83610e77565b915061158c82611527565b604082019050919050565b5f6020820190508181035f8301526115ae81611575565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f6115e9601483610e77565b91506115f4826115b5565b602082019050919050565b5f6020820190508181035f830152611616816115dd565b9050919050565b7f617070726f7665000000000000000000000000000000000000000000000000005f82015250565b5f611651600783610e77565b915061165c8261161d565b602082019050919050565b5f60808201905061167a5f8301876113c6565b818103602083015261168b81611645565b905061169a6040830186611428565b81810360608301526116ad818486611455565b905095945050505050565b5f6060820190506116cb5f8301866113c6565b6116d86020830185611003565b6116e56040830184611003565b949350505050565b5f6020820190506117005f8301846113c6565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61173d82610f5f565b915061174883610f5f565b92508282019050808211156117605761175f611706565b5b9291505056fea264697066735822122091c2a7536e3bb18f97b852d6c30f415c23bbec8a5181522b0378c671d90e65f364736f6c634300081a00336080604052348015600e575f80fd5b50610b2f8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610055575f3560e01c8063017519981461005957806330cf1e68146100895780638cf4ab92146100b9578063d087d288146100e9578063ed2a2d6414610107575b5f80fd5b610073600480360381019061006e919061057a565b610137565b6040516100809190610605565b60405180910390f35b6100a3600480360381019061009e9190610673565b61017b565b6040516100b09190610605565b60405180910390f35b6100d360048036038101906100ce9190610673565b61022e565b6040516100e09190610605565b60405180910390f35b6100f16102be565b6040516100fe9190610742565b60405180910390f35b610121600480360381019061011c919061075b565b610301565b60405161012e9190610742565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff1661015a858585610346565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f8061018c8989898989898961022e565b9050806101ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c590610806565b60405180910390fd5b5f808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f81548092919061021a90610851565b919050555080915050979650505050505050565b5f805f808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f89898989898660405160200161028b96959493929190610959565b6040516020818303038152906040528051906020012090506102af8a828787610137565b92505050979650505050505050565b5f805f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905090565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f808460405160200161035991906109ff565b6040516020818303038152906040528051906020012090505f805f6103c087878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505061041f565b9250925092506001848285856040515f81526020016040526040516103e89493929190610a4e565b6020604051602081039080840390855afa158015610408573d5f803e3d5ffd5b505050602060405103519450505050509392505050565b5f805f6041845114610466576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045d90610adb565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104b58261048c565b9050919050565b6104c5816104ab565b81146104cf575f80fd5b50565b5f813590506104e0816104bc565b92915050565b5f819050919050565b6104f8816104e6565b8114610502575f80fd5b50565b5f81359050610513816104ef565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011261053a57610539610519565b5b8235905067ffffffffffffffff8111156105575761055661051d565b5b60208301915083600182028301111561057357610572610521565b5b9250929050565b5f805f806060858703121561059257610591610484565b5b5f61059f878288016104d2565b94505060206105b087828801610505565b935050604085013567ffffffffffffffff8111156105d1576105d0610488565b5b6105dd87828801610525565b925092505092959194509250565b5f8115159050919050565b6105ff816105eb565b82525050565b5f6020820190506106185f8301846105f6565b92915050565b5f8083601f84011261063357610632610519565b5b8235905067ffffffffffffffff8111156106505761064f61051d565b5b60208301915083600182028301111561066c5761066b610521565b5b9250929050565b5f805f805f805f60a0888a03121561068e5761068d610484565b5b5f61069b8a828b016104d2565b97505060206106ac8a828b016104d2565b965050604088013567ffffffffffffffff8111156106cd576106cc610488565b5b6106d98a828b0161061e565b955095505060606106ec8a828b01610505565b935050608088013567ffffffffffffffff81111561070d5761070c610488565b5b6107198a828b01610525565b925092505092959891949750929550565b5f819050919050565b61073c8161072a565b82525050565b5f6020820190506107555f830184610733565b92915050565b5f602082840312156107705761076f610484565b5b5f61077d848285016104d2565b91505092915050565b5f82825260208201905092915050565b7f496e76616c6964205369676e6174757265206f7220496e76616c6964204578655f8201527f637574696f6e2052657175657374000000000000000000000000000000000000602082015250565b5f6107f0602e83610786565b91506107fb82610796565b604082019050919050565b5f6020820190508181035f83015261081d816107e4565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61085b8261072a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361088d5761088c610824565b5b600182019050919050565b5f8160601b9050919050565b5f6108ae82610898565b9050919050565b5f6108bf826108a4565b9050919050565b6108d76108d2826104ab565b6108b5565b82525050565b5f81905092915050565b828183375f83830152505050565b5f61090083856108dd565b935061090d8385846108e7565b82840190509392505050565b5f819050919050565b61093361092e826104e6565b610919565b82525050565b5f819050919050565b61095361094e8261072a565b610939565b82525050565b5f61096482896108c6565b60148201915061097482886108c6565b6014820191506109858286886108f5565b91506109918285610922565b6020820191506109a18284610942565b602082019150819050979650505050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f6109e9601c836108dd565b91506109f4826109b5565b601c82019050919050565b5f610a09826109dd565b9150610a158284610922565b60208201915081905092915050565b610a2d816104e6565b82525050565b5f60ff82169050919050565b610a4881610a33565b82525050565b5f608082019050610a615f830187610a24565b610a6e6020830186610a3f565b610a7b6040830185610a24565b610a886060830184610a24565b95945050505050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f610ac5601883610786565b9150610ad082610a91565b602082019050919050565b5f6020820190508181035f830152610af281610ab9565b905091905056fea2646970667358221220edd326c8e176a961dbb7333512e7d3d5adbf1b1b40d8524c4a27dddeb4ce0f6464736f6c634300081a0033",
  RelayManager: "0x6080604052348015600e575f80fd5b50610b2f8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610055575f3560e01c8063017519981461005957806330cf1e68146100895780638cf4ab92146100b9578063d087d288146100e9578063ed2a2d6414610107575b5f80fd5b610073600480360381019061006e919061057a565b610137565b6040516100809190610605565b60405180910390f35b6100a3600480360381019061009e9190610673565b61017b565b6040516100b09190610605565b60405180910390f35b6100d360048036038101906100ce9190610673565b61022e565b6040516100e09190610605565b60405180910390f35b6100f16102be565b6040516100fe9190610742565b60405180910390f35b610121600480360381019061011c919061075b565b610301565b60405161012e9190610742565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff1661015a858585610346565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f8061018c8989898989898961022e565b9050806101ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c590610806565b60405180910390fd5b5f808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f81548092919061021a90610851565b919050555080915050979650505050505050565b5f805f808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f89898989898660405160200161028b96959493929190610959565b6040516020818303038152906040528051906020012090506102af8a828787610137565b92505050979650505050505050565b5f805f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905090565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f808460405160200161035991906109ff565b6040516020818303038152906040528051906020012090505f805f6103c087878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505061041f565b9250925092506001848285856040515f81526020016040526040516103e89493929190610a4e565b6020604051602081039080840390855afa158015610408573d5f803e3d5ffd5b505050602060405103519450505050509392505050565b5f805f6041845114610466576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045d90610adb565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104b58261048c565b9050919050565b6104c5816104ab565b81146104cf575f80fd5b50565b5f813590506104e0816104bc565b92915050565b5f819050919050565b6104f8816104e6565b8114610502575f80fd5b50565b5f81359050610513816104ef565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011261053a57610539610519565b5b8235905067ffffffffffffffff8111156105575761055661051d565b5b60208301915083600182028301111561057357610572610521565b5b9250929050565b5f805f806060858703121561059257610591610484565b5b5f61059f878288016104d2565b94505060206105b087828801610505565b935050604085013567ffffffffffffffff8111156105d1576105d0610488565b5b6105dd87828801610525565b925092505092959194509250565b5f8115159050919050565b6105ff816105eb565b82525050565b5f6020820190506106185f8301846105f6565b92915050565b5f8083601f84011261063357610632610519565b5b8235905067ffffffffffffffff8111156106505761064f61051d565b5b60208301915083600182028301111561066c5761066b610521565b5b9250929050565b5f805f805f805f60a0888a03121561068e5761068d610484565b5b5f61069b8a828b016104d2565b97505060206106ac8a828b016104d2565b965050604088013567ffffffffffffffff8111156106cd576106cc610488565b5b6106d98a828b0161061e565b955095505060606106ec8a828b01610505565b935050608088013567ffffffffffffffff81111561070d5761070c610488565b5b6107198a828b01610525565b925092505092959891949750929550565b5f819050919050565b61073c8161072a565b82525050565b5f6020820190506107555f830184610733565b92915050565b5f602082840312156107705761076f610484565b5b5f61077d848285016104d2565b91505092915050565b5f82825260208201905092915050565b7f496e76616c6964205369676e6174757265206f7220496e76616c6964204578655f8201527f637574696f6e2052657175657374000000000000000000000000000000000000602082015250565b5f6107f0602e83610786565b91506107fb82610796565b604082019050919050565b5f6020820190508181035f83015261081d816107e4565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61085b8261072a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361088d5761088c610824565b5b600182019050919050565b5f8160601b9050919050565b5f6108ae82610898565b9050919050565b5f6108bf826108a4565b9050919050565b6108d76108d2826104ab565b6108b5565b82525050565b5f81905092915050565b828183375f83830152505050565b5f61090083856108dd565b935061090d8385846108e7565b82840190509392505050565b5f819050919050565b61093361092e826104e6565b610919565b82525050565b5f819050919050565b61095361094e8261072a565b610939565b82525050565b5f61096482896108c6565b60148201915061097482886108c6565b6014820191506109858286886108f5565b91506109918285610922565b6020820191506109a18284610942565b602082019150819050979650505050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f6109e9601c836108dd565b91506109f4826109b5565b601c82019050919050565b5f610a09826109dd565b9150610a158284610922565b60208201915081905092915050565b610a2d816104e6565b82525050565b5f60ff82169050919050565b610a4881610a33565b82525050565b5f608082019050610a615f830187610a24565b610a6e6020830186610a3f565b610a7b6040830185610a24565b610a886060830184610a24565b95945050505050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f610ac5601883610786565b9150610ad082610a91565b602082019050919050565b5f6020820190508181035f830152610af281610ab9565b905091905056fea2646970667358221220edd326c8e176a961dbb7333512e7d3d5adbf1b1b40d8524c4a27dddeb4ce0f6464736f6c634300081a0033",
  SignatureVerifier: "0x6080604052348015600e575f80fd5b5061052d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063017519981461002d575b5f80fd5b610047600480360381019061004291906102d5565b61005d565b6040516100549190610360565b60405180910390f35b5f8473ffffffffffffffffffffffffffffffffffffffff166100808585856100a1565b73ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f80846040516020016100b491906103ed565b6040516020818303038152906040528051906020012090505f805f61011b87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505061017a565b9250925092506001848285856040515f8152602001604052604051610143949392919061043c565b6020604051602081039080840390855afa158015610163573d5f803e3d5ffd5b505050602060405103519450505050509392505050565b5f805f60418451146101c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b8906104d9565b60405180910390fd5b602084015192506040840151915060608401515f1a90509193909250565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610210826101e7565b9050919050565b61022081610206565b811461022a575f80fd5b50565b5f8135905061023b81610217565b92915050565b5f819050919050565b61025381610241565b811461025d575f80fd5b50565b5f8135905061026e8161024a565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011261029557610294610274565b5b8235905067ffffffffffffffff8111156102b2576102b1610278565b5b6020830191508360018202830111156102ce576102cd61027c565b5b9250929050565b5f805f80606085870312156102ed576102ec6101df565b5b5f6102fa8782880161022d565b945050602061030b87828801610260565b935050604085013567ffffffffffffffff81111561032c5761032b6101e3565b5b61033887828801610280565b925092505092959194509250565b5f8115159050919050565b61035a81610346565b82525050565b5f6020820190506103735f830184610351565b92915050565b5f81905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f82015250565b5f6103b7601c83610379565b91506103c282610383565b601c82019050919050565b5f819050919050565b6103e76103e282610241565b6103cd565b82525050565b5f6103f7826103ab565b915061040382846103d6565b60208201915081905092915050565b61041b81610241565b82525050565b5f60ff82169050919050565b61043681610421565b82525050565b5f60808201905061044f5f830187610412565b61045c602083018661042d565b6104696040830185610412565b6104766060830184610412565b95945050505050565b5f82825260208201905092915050565b7f696e76616c6964207369676e6174757265206c656e67746800000000000000005f82015250565b5f6104c360188361047f565b91506104ce8261048f565b602082019050919050565b5f6020820190508181035f8301526104f0816104b7565b905091905056fea2646970667358221220b92d008be799bac292fac429e9448af954fba2f5c6084303a47bf905da6e817e64736f6c634300081a0033",
  testUSDCe: "0x60c060405234801561000f575f80fd5b506040518060400160405280600a81526020017f74657374555344432e65000000000000000000000000000000000000000000008152506040518060400160405280600a81526020017f74657374555344432e6500000000000000000000000000000000000000000000815250816003908161008b9190610366565b50806004908161009b9190610366565b5050506100ac61012560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506100ed61012560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050610435565b5f33905090565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806101a757607f821691505b6020821081036101ba576101b9610163565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261021c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826101e1565b61022686836101e1565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61026a6102656102608461023e565b610247565b61023e565b9050919050565b5f819050919050565b61028383610250565b61029761028f82610271565b8484546101ed565b825550505050565b5f90565b6102ab61029f565b6102b681848461027a565b505050565b5b818110156102d9576102ce5f826102a3565b6001810190506102bc565b5050565b601f82111561031e576102ef816101c0565b6102f8846101d2565b81016020851015610307578190505b61031b610313856101d2565b8301826102bb565b50505b505050565b5f82821c905092915050565b5f61033e5f1984600802610323565b1980831691505092915050565b5f610356838361032f565b9150826002028217905092915050565b61036f8261012c565b67ffffffffffffffff81111561038857610387610136565b5b6103928254610190565b61039d8282856102dd565b5f60209050601f8311600181146103ce575f84156103bc578287015190505b6103c6858261034b565b86555061042d565b601f1984166103dc866101c0565b5f5b82811015610403578489015182556001820191506020850194506020810190506103de565b86831015610420578489015161041c601f89168261032f565b8355505b6001600288020188555050505b505050505050565b60805160a05161179c6104645f395f8181610543015281816106d201526107c701525f61039e015261179c5ff3fe608060405234801561000f575f80fd5b50600436106100cd575f3560e01c806370a082311161008a578063a9059cbb11610064578063a9059cbb14610211578063b7009f5514610241578063b74795d91461025d578063dd62ed3e1461027b576100cd565b806370a08231146101a757806395d89b41146101d7578063a6dedeb5146101f5576100cd565b806306fdde03146100d1578063095ea7b3146100ef57806318160ddd1461011f57806323b872dd1461013d578063313ce5671461016d578063449a52f81461018b575b5f80fd5b6100d96102ab565b6040516100e69190610edd565b60405180910390f35b61010960048036038101906101049190610f92565b61033b565b6040516101169190610fea565b60405180910390f35b61012761035d565b6040516101349190611012565b60405180910390f35b6101576004803603810190610152919061102b565b610366565b6040516101649190610fea565b60405180910390f35b610175610394565b6040516101829190611096565b60405180910390f35b6101a560048036038101906101a09190610f92565b61039c565b005b6101c160048036038101906101bc91906110af565b61043f565b6040516101ce9190611012565b60405180910390f35b6101df610484565b6040516101ec9190610edd565b60405180910390f35b61020f600480360381019061020a919061113b565b610514565b005b61022b60048036038101906102269190610f92565b610681565b6040516102389190610fea565b60405180910390f35b61025b6004803603810190610256919061113b565b6106a3565b005b6102656107c5565b604051610272919061121a565b60405180910390f35b61029560048036038101906102909190611233565b6107e9565b6040516102a29190611012565b60405180910390f35b6060600380546102ba9061129e565b80601f01602080910402602001604051908101604052809291908181526020018280546102e69061129e565b80156103315780601f1061030857610100808354040283529160200191610331565b820191905f5260205f20905b81548152906001019060200180831161031457829003601f168201915b5050505050905090565b5f8061034561086b565b9050610352818585610872565b600191505092915050565b5f600254905090565b5f8061037061086b565b905061037d858285610884565b610388858585610916565b60019150509392505050565b5f6006905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166103db61086b565b73ffffffffffffffffffffffffffffffffffffffff1614610431576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042890611318565b60405180910390fd5b61043b8282610a06565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6060600480546104939061129e565b80601f01602080910402602001604051908101604052809291908181526020018280546104bf9061129e565b801561050a5780601f106104e15761010080835404028352916020019161050a565b820191905f5260205f20905b8154815290600101906020018083116104ed57829003601f168201915b5050505050905090565b5f848460405160200161052892919061139b565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b81526004016105a09493929190611481565b6020604051808303815f875af11580156105bc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105e091906114fc565b905080610622576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061990611597565b60405180910390fd5b61062b8761043f565b85111561066d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610664906115ff565b60405180910390fd5b610678878787610916565b50505050505050565b5f8061068b61086b565b9050610698818585610916565b600191505092915050565b5f84846040516020016106b792919061139b565b6040516020818303038152906040528051906020012090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663af4a5d80888487876040518563ffffffff1660e01b815260040161072f9493929190611667565b6020604051808303815f875af115801561074b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061076f91906114fc565b9050806107b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a890611597565b60405180910390fd5b6107bc878787610872565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b61087f8383836001610a85565b505050565b5f61088f84846107e9565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109105781811015610901578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016108f8939291906116b8565b60405180910390fd5b61090f84848484035f610a85565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610986575f6040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161097d91906116ed565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109f6575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109ed91906116ed565b60405180910390fd5b610a01838383610c54565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a76575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a6d91906116ed565b60405180910390fd5b610a815f8383610c54565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610af5575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610aec91906116ed565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b65575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b5c91906116ed565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610c4e578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c459190611012565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ca4578060025f828254610c989190611733565b92505081905550610d72565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610d2d578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610d24939291906116b8565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610db9578060025f8282540392505081905550610e03565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e609190611012565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610eaf82610e6d565b610eb98185610e77565b9350610ec9818560208601610e87565b610ed281610e95565b840191505092915050565b5f6020820190508181035f830152610ef58184610ea5565b905092915050565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610f2e82610f05565b9050919050565b610f3e81610f24565b8114610f48575f80fd5b50565b5f81359050610f5981610f35565b92915050565b5f819050919050565b610f7181610f5f565b8114610f7b575f80fd5b50565b5f81359050610f8c81610f68565b92915050565b5f8060408385031215610fa857610fa7610efd565b5b5f610fb585828601610f4b565b9250506020610fc685828601610f7e565b9150509250929050565b5f8115159050919050565b610fe481610fd0565b82525050565b5f602082019050610ffd5f830184610fdb565b92915050565b61100c81610f5f565b82525050565b5f6020820190506110255f830184611003565b92915050565b5f805f6060848603121561104257611041610efd565b5b5f61104f86828701610f4b565b935050602061106086828701610f4b565b925050604061107186828701610f7e565b9150509250925092565b5f60ff82169050919050565b6110908161107b565b82525050565b5f6020820190506110a95f830184611087565b92915050565b5f602082840312156110c4576110c3610efd565b5b5f6110d184828501610f4b565b91505092915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f8401126110fb576110fa6110da565b5b8235905067ffffffffffffffff811115611118576111176110de565b5b602083019150836001820283011115611134576111336110e2565b5b9250929050565b5f805f805f6080868803121561115457611153610efd565b5b5f61116188828901610f4b565b955050602061117288828901610f4b565b945050604061118388828901610f7e565b935050606086013567ffffffffffffffff8111156111a4576111a3610f01565b5b6111b0888289016110e6565b92509250509295509295909350565b5f819050919050565b5f6111e26111dd6111d884610f05565b6111bf565b610f05565b9050919050565b5f6111f3826111c8565b9050919050565b5f611204826111e9565b9050919050565b611214816111fa565b82525050565b5f60208201905061122d5f83018461120b565b92915050565b5f806040838503121561124957611248610efd565b5b5f61125685828601610f4b565b925050602061126785828601610f4b565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806112b557607f821691505b6020821081036112c8576112c7611271565b5b50919050565b7f4f6e6c79204d696e7465722063616e206d696e740000000000000000000000005f82015250565b5f611302601483610e77565b915061130d826112ce565b602082019050919050565b5f6020820190508181035f83015261132f816112f6565b9050919050565b5f8160601b9050919050565b5f61134c82611336565b9050919050565b5f61135d82611342565b9050919050565b61137561137082610f24565b611353565b82525050565b5f819050919050565b61139561139082610f5f565b61137b565b82525050565b5f6113a68285611364565b6014820191506113b68284611384565b6020820191508190509392505050565b6113cf81610f24565b82525050565b7f7472616e736665720000000000000000000000000000000000000000000000005f82015250565b5f611409600883610e77565b9150611414826113d5565b602082019050919050565b5f819050919050565b6114318161141f565b82525050565b5f82825260208201905092915050565b828183375f83830152505050565b5f6114608385611437565b935061146d838584611447565b61147683610e95565b840190509392505050565b5f6080820190506114945f8301876113c6565b81810360208301526114a5816113fd565b90506114b46040830186611428565b81810360608301526114c7818486611455565b905095945050505050565b6114db81610fd0565b81146114e5575f80fd5b50565b5f815190506114f6816114d2565b92915050565b5f6020828403121561151157611510610efd565b5b5f61151e848285016114e8565b91505092915050565b7f457865637574696f6e204661696c65643b20496e76616c6964617465642062795f8201527f2052656c61794d616e6167657200000000000000000000000000000000000000602082015250565b5f611581602d83610e77565b915061158c82611527565b604082019050919050565b5f6020820190508181035f8301526115ae81611575565b9050919050565b7f496e73756666696369656e742042616c616e63650000000000000000000000005f82015250565b5f6115e9601483610e77565b91506115f4826115b5565b602082019050919050565b5f6020820190508181035f830152611616816115dd565b9050919050565b7f617070726f7665000000000000000000000000000000000000000000000000005f82015250565b5f611651600783610e77565b915061165c8261161d565b602082019050919050565b5f60808201905061167a5f8301876113c6565b818103602083015261168b81611645565b905061169a6040830186611428565b81810360608301526116ad818486611455565b905095945050505050565b5f6060820190506116cb5f8301866113c6565b6116d86020830185611003565b6116e56040830184611003565b949350505050565b5f6020820190506117005f8301846113c6565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61173d82610f5f565b915061174883610f5f565b92508282019050808211156117605761175f611706565b5b9291505056fea264697066735822122091c2a7536e3bb18f97b852d6c30f415c23bbec8a5181522b0378c671d90e65f364736f6c634300081a0033"
} as const;

export type ContractName = keyof typeof abi;

export default { abi, bytecode };
