import * as viem from "viem";
import web3Client from "../web3Client";
import { tx } from "./utils";

// In production get the data directly from FlareSystemsManager
const firstVotingRoundStartTs = 1658429955;
const votingEpochDurationSeconds = 90;

const FDC_HUB_ADDRESS = "0x1c78A073E3BD2aCa4cc327d55FB0cD4f0549B55b"; // Valid only on coston. In production get the address from the ContractRegistry

export default async function (requestData: any) {
    const fdcHUB = web3Client.writeContract({
        address: FDC_HUB_ADDRESS,
        abi: [
            {
                inputs: [
                    {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes",
                    },
                ],
                name: "requestAttestation",
                outputs: [],
                stateMutability: "payable",
                type: "function",
            },
        ] as const,
        functionName: "requestAttestation",
        args: [requestData.abiEncodedRequest],
        account: web3Client.account.address,
        value: 1,
        chain: web3Client.chain,
    });

    const txn = await tx(fdcHUB);

    // // Call to the FDC Hub protocol to provide attestation.
    // const tx = await fdcHUB.requestAttestation(requestData.abiEncodedRequest, {
    //     value: ethers.parseEther("1"),
    // });
    // const receipt = await tx.wait();

    // Get block number of the block containing contract call
    // const blockNumber = receipt.blockNumber;
    // const block = await ethers.provider.getBlock(blockNumber);
    console.log(txn)

    // // Calculate roundId
    // const roundId = Math.floor(
    //     (block!.timestamp - firstVotingRoundStartTs) /
    //         votingEpochDurationSeconds,
    // );
    // return roundId;
}
