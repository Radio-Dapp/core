import web3Client from "./web3Client";
import { abi } from "./definitions.gen";
import * as viem from "viem";

const address: Record<string, viem.Address> = {
    USDCe: "0x",
    RadioOrchestrator: "0x",
};

const USDCe = {
    address: address.USDCe,
    abi: abi.testUSDCe,
    chain: web3Client.chain,
    account: web3Client.account,
};

const RadioOrchestrator = {
    address: address.RadioOrchestrator,
    abi: abi.RadioOrchestrator,
    chain: web3Client.chain,
    account: web3Client.account,
};

const definitions = { USDCe, RadioOrchestrator };

export async function waitForTransactionReceipt(hash: viem.Address) {
    const reciept = await web3Client.waitForTransactionReceipt({
        hash
    });
    return reciept;
}

export function readContract<
    C extends keyof typeof definitions,
    const abi extends typeof definitions[C]["abi"], //extends viem.Abi | readonly unknown[],
    Fn extends viem.ContractFunctionName<abi, "pure" | "view">,
    const Args extends viem.ContractFunctionArgs<abi, "pure" | "view", Fn>,
>(contract: C, functionName: Fn, args: Args) {
    return web3Client.readContract({
        ...definitions[contract],
        //@ts-ignore
        functionName,
        //@ts-ignore
        args,
    });
}

export function writeContract<
    C extends keyof typeof definitions,
    const abi extends typeof definitions[C]["abi"], //extends viem.Abi | readonly unknown[],
    Fn extends viem.ContractFunctionName<abi, "payable" | "nonpayable">,
    const Args extends viem.ContractFunctionArgs<
        abi,
        "payable" | "nonpayable",
        Fn
    >,
>(contract: C, functionName: Fn, args: Args) {
    return web3Client.writeContract({
        ...definitions[contract],
        //@ts-ignore
        functionName,
        //@ts-ignore
        args,
    });
}

export const evmActions = { readContract, writeContract, waitForTransactionReceipt };
