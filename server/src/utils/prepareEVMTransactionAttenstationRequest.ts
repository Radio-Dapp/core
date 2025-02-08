import { toHex } from "./utils.js";

const {
    VERIFIER_URL_TESTNET,
} = process.env;

export default async function (txId: string) {
    const attestationType = "0x" + toHex("EVMTransaction");
    const sourceType = "0x" + toHex("testETH");
    const requestData = {
        attestationType: attestationType,
        sourceId: sourceType,
        requestBody: {
            transactionHash: txId,
            requiredConfirmations: "1",
            provideInput: true,
            listEvents: true,
            logIndices: [],
        },
    };
    console.log(requestData)
    const response = await fetch(
        `${VERIFIER_URL_TESTNET}verifier/eth/EVMTransaction/prepareRequest`,
        {
            method: "POST",
            headers: {
                "X-API-KEY": "XXX",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        },
    );
    const data = await response.json();
    console.log(data);
    return data;
}
