import { Hono } from "hono";
import prepareEVMTransactionAttestationRequest from "../utils/prepareEVMTransactionAttenstationRequest.js";
import submitRequest from "../utils/submitRequest.js";
import getMerkleProof from "../utils/getMerkeProof.js";

const router = new Hono().basePath("/flare");

router.get("/att", async (ctx) => {
  try {
    // Get transaction ID from query params
    const txId = ctx.req.query("txId");
    if (!txId) {
      return ctx.json({ error: "Transaction ID is required" }, 400);
    }

    // Step 1: Prepare the attestation request
    const preparedRequest = await prepareEVMTransactionAttestationRequest(txId);

    // Step 2: Submit the request and get round ID
    const roundId = await submitRequest(preparedRequest);
    
    // Step 3: Get Merkle proof
    // const proof = await getMerkleProof(preparedRequest, roundId);

    // return ctx.json({
    //   success: true,
    //   data: {
    //     roundId,
    //     proof
    //   }
    // });
    
  } catch (error) {
    console.error('Error processing request:', error);
    return ctx.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }, 500);
  }
});

export default router;
