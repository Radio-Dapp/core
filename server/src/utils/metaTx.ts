import * as viem from "viem";

export default async function metaTxRequest<
  A extends Readonly<Parameters<typeof viem.encodePacked>>
>(parameters: {
  signer: viem.Address;
  signature: string;
  contract: viem.Address;
  functionName: string;
  args: A;
  nonce?: bigint;
}) {
  const { signer, args, contract, functionName } = parameters;

  const msg = viem.keccak256(viem.encodePacked(args[0], args[1]));

  const digest = viem.keccak256(
    viem.encodePacked(
      ["address", "address", "string", "bytes32", "uint"],
      [signer, contract, functionName.toString(), msg, parameters.nonce || 0n]
    )
  );

  return viem.hexToBytes(digest);
}