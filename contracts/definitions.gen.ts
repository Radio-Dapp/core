
export const abi = {
  FundFactory: [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "feedIds",
    "outputs": [
      {
        "internalType": "bytes21",
        "name": "",
        "type": "bytes21"
      }
    ],
    "stateMutability": "view",
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
    "stateMutability": "view",
    "type": "function"
  }
] as const,
  RadioOrchestration: [
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
  }
] as const,
  RadioPeriphery: [] as const
} as const;

export const bytecode = {
  FundFactory: "0x6080346101eb5760608101906001600160401b03808311828410176101d5576040928352665193148bd554d160c21b825266509510cbd554d160c21b602080840191909152665155120bd554d160c21b8385015260018054600380835594908086106101ab575b5093600094828652838620865b8381106101975750505050508351908082019181835260068682015265233a39b7ab1960d11b6060820152606081526080810192818410858511176101715783875281519020630ac9aa5160e11b84526084820152818360248173ad67fe66660fb8dfe9d6b1b4240d8650e30f60195afa93841561018d578594610122575b505083546001600160a01b0319166001600160a01b0393909316929092179092555050516103e890816101f18239f35b909180939450903d8411610185575b601f8201601f19168301608001908111858210176101715786528101031261016d57516001600160a01b038116810361016d57388080806100f2565b5080fd5b634e487b7160e01b86526041600452602486fd5b3d9150610131565b86513d87823e3d90fd5b825160581c82820155918501918401610073565b6000838152838786832093840193015b8381106101ca57505050610066565b8281550184906101bb565b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604090808252600436101561001557600080fd5b600090813560e01c908163b7f433d1146102e2575063f601bc8b1461003957600080fd5b346102df57806003193601126102df5773ffffffffffffffffffffffffffffffffffffffff815416918051907f4c375745000000000000000000000000000000000000000000000000000000008252602482018383602096876004830152600193845480915260448301908585527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf690855b878c8383106102b557505050505082809103915afa9485156102ab57849085948697610175575b50949190835195606087016060885282518091528160808901930190855b8181106101625750505086820381880152808087519384815201960193805b83821061014b5767ffffffffffffffff8a16878a015288880389f35b8551810b885296820196948201949084019061012f565b8251855293830193918301918501610110565b94509550503d8085853e6101898185610349565b83016060848203126102a75783519367ffffffffffffffff948581116102a35781019082601f830112156102a3578151916101c38361039a565b926101d087519485610349565b808452898085019160051b8301019185831161028c57908a809201905b83821061029457505090508101518681116102905781019280601f8501121561029057835161021b8161039a565b9461022888519687610349565b8186528a8087019260051b82010192831161028c57908a8894939201905b828210610268575050500151948516850361026457909395386100f2565b8580fd5b90809293945051808b0b8103610288578152879392918b01908b01610246565b8a80fd5b8980fd5b8780fd5b815181529082019082016101ed565b8680fd5b8480fd5b82513d86823e3d90fd5b845460581b6affffffffffffffffffffff191686528c98508b9750949094019392830192016100cb565b80fd5b90503461034557602036600319011261034557600435600154811015610341576001602093526affffffffffffffffffffff19907fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6015460581b168152f35b8280fd5b5080fd5b90601f8019910116810190811067ffffffffffffffff82111761036b57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161036b5760051b6020019056fea264697066735822122059213908907d66b11486c40d2d40ed50a813ae8bac07ba73ecaee9d6909f7a0264736f6c63430008130033",
  RadioOrchestration: "0x6080604090808252346200048a5762000032906200091e8038038091620000278285620004ab565b8339810190620004cf565b8151610120810191906001600160401b03908184118185101762000474578385526200005e846200048f565b6003938481526223262960e91b610140830152815284519162000081836200048f565b8483526020926229a3a160e91b84820152838301528551620000a3816200048f565b8581526242544360e81b84820152868301528551620000c2816200048f565b8581526205852560ec1b8482015260608301528551620000e2816200048f565b858152624c544360e81b848201526080830152855162000102816200048f565b85815262584c4d60e81b8482015260a083015285519162000123836200048f565b60049283815263444f474560e01b8582015260c0820152865162000147816200048f565b8681526241444160e81b8582015260e0820152865162000167816200048f565b83815263414c474f60e01b858201526101008201526002549060099182600255808310620003f6575b50600096600288528588209088925b848410620002c657505050505060018060a01b03928360018060a01b03199516856001541617600155865192818401908282526013898601527f4674736f466565644964436f6e76657274657200000000000000000000000000606086015260608552608085019385851090851117620002b3575082885283519020630ac9aa5160e11b83526084840152808260248173ad67fe66660fb8dfe9d6b1b4240d8650e30f60195afa928315620002a95786936200026f575b5050501690825416179055516103d79081620005478239f35b62000297935090608091813d10620002a0575b6200028e8285620004ab565b010190620004cf565b38808062000256565b3d915062000282565b87513d88823e3d90fd5b634e487b7160e01b885260419052602487fd5b8051805190878211620003e357908991620002e28654620004f0565b908d601f9285848211620003a8575b5050508d849284116001146200033d57926001959281928796959262000331575b505060001982881b1c191690841b1786555b019301930192916200019f565b01519050388062000312565b9190601f198416888452858420935b8181106200038f575091600196939185889796941062000376575b505050831b8301865562000324565b015160001983891b60f8161c1916905538808062000367565b8284015185558e9660019095019493840193016200034c565b828a620003d0945220600585808801821c830193898910620003d9575b01901c01906200052d565b8d3885620002f1565b93508293620003c5565b634e487b7160e01b8c526041895260248cfd5b6000600281528387822092830192015b8281106200041657505062000190565b80826200042660019354620004f0565b8062000436575b50500162000406565b601f80821185146200044f57505081555b82386200042d565b6200046a908484528c8420920160051c82018583016200052d565b8183555562000447565b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b038211176200047457604052565b601f909101601f19168101906001600160401b038211908210176200047457604052565b908160209103126200048a57516001600160a01b03811681036200048a5790565b90600182811c9216801562000522575b60208310146200050c57565b634e487b7160e01b600052602260045260246000fd5b91607f169162000500565b81811062000539575050565b600081556001016200052d56fe608060408181526004908136101561001657600080fd5b600091823560e01c63840128de1461002d57600080fd5b602090816003193601126102565780359460ff861686036102aa5773ffffffffffffffffffffffffffffffffffffffff9560019187835416978754169160025481101561035657600288527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace018781549182861c92868116801561034c575b898510811461033957918893918a8794918260001461031a5750506001146102d7575b508895935093847f2f5553440000000000000000000000000000000000000000000000000000000061010e949398965203601b19810187520185610369565b86519384927ff8b7a82400000000000000000000000000000000000000000000000000000000845286840152876024840152805190816044850152895b8281106102bf575050606483828b83839584010152601f801991011681010301915afa9081156102b557859161026e575b50906024606092855197889384927f93e9f8060000000000000000000000000000000000000000000000000000000084526affffffffffffffffffffff19169083015234905af19384156102625783809181966101f5575b50916060959167ffffffffffffffff9385519687520b908501521690820152f35b94509450506060833d821161025a575b8161021260609383610369565b81010312610256578251818401519384860b8503610252578301519067ffffffffffffffff8216820361025257909490939067ffffffffffffffff6101d4565b8580fd5b8380fd5b3d9150610205565b505051903d90823e3d90fd5b90508281813d83116102ae575b6102858183610369565b810103126102aa57516affffffffffffffffffffff19811681036102aa57602461017c565b8480fd5b503d61027b565b84513d87823e3d90fd5b8181018601518782016064015288958795500161014b565b925050508852848287808b20878c915b8683106102fe5750505061010e93820101386100cf565b91945091925080548385880101520191018784918789946102e7565b60ff19168582015261010e968015150285010192503891506100cf9050565b60248c60228b634e487b7160e01b835252fd5b93607f16936100ac565b602488603287634e487b7160e01b835252fd5b90601f8019910116810190811067ffffffffffffffff82111761038b57604052565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220dd66cea558debb4abe34a476d1bd87a160c091fbfd2bb7a568906e95b945d37a64736f6c63430008130033",
  RadioPeriphery: "0x60808060405234601357603a908160198239f35b600080fdfe600080fdfea264697066735822122085633ada5680a137733c68858351b23c0f8aef92d5453a1f27d07e433e00d20864736f6c63430008130033"
} as const;

export type ContractName = keyof typeof abi;

export default { abi, bytecode };
