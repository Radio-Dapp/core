import {
    createPublicClient,
    createWalletClient,
    http,
    publicActions,
} from "viem";
import { flareTestnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

if (!process.env.PRIVATE_KEY) throw "no key wtf";
if (!process.env.PRIVATE_KEY.startsWith("0x")) throw "wrong key wtf";

const account = privateKeyToAccount(process.env.PRIVATE_KEY as "0x");
const client = createWalletClient({
    transport: http(flareTestnet.rpcUrls.default.http[0]),
    account,
    chain: flareTestnet,
}).extend(publicActions);

const web3Client = client;

export default web3Client;
