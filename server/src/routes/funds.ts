import { Hono } from "hono";
import prepareEVMTransactionAttestationRequest from "../utils/prepareEVMTransactionAttenstationRequest.js";
import submitRequest from "../utils/submitRequest.js";
import getMerkleProof from "../utils/getMerkeProof.js";
import { generateRandomHex } from "../utils/utils.js";
import { verifyMessage } from "viem";

const router = new Hono().basePath("/funds");

const nonceStore: Record<string, string> = {};

router.get("/get-nonce", async(c) => {
    const address = c.req.query("address");
    nonceStore[address] = generateRandomHex(32);

    return c.json({ nonce: nonceStore[address] });
})

router.post("/create", async (c) => {
  try {
    // Verify signature
    const body = c.req.parseBody;

    // const verified = await verifyMessage({
    //     address: body.user,
    //     message: `${JSON.stringify(body.data)}${nonceStore[body.user]}`,
    //     signature: body.sign,
    //   });
    
    // Creation Logic
    
    return c.json({
      success: true,
      data: {
        "message": "Funds created successfully"
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return c.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }, 500);
  }
})

export default router;