const DA_LAYER_URL = "https://ctn2-data-availability.flare.network/api/v0/";

export default async function (request: any, roundId: number) {
    const proofAndData = await fetch(
        `${DA_LAYER_URL}api/v0/fdc/get-proof-round-id-bytes`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "XXX",
            },
            body: JSON.stringify({
                votingRoundId: roundId,
                requestBytes: request.abiEncodedRequest,
            }),
        },
    );
    return await proofAndData.json();
}
