import { toHex } from "./utils.js";

const {
    VERIFIER_URL_TESTNET,
} = process.env;

export default async function (txId: string) {
    const attestationType = toHex("EVMTransaction");
    const sourceType = toHex("testETH");
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

    const response = await fetch(
        `${VERIFIER_URL_TESTNET}verifier/eth/EVMTransaction/prepareRequest`,
        {
            method: "POST",
            headers: {
                "X-API-KEY": "00000000-0000-0000-0000-000000000000",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        },
    );
    const data = await response.json();
    console.log(data);
    return data;
}
