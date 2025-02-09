import { Hono } from "hono";
import { verifyMessage } from "viem";

const router = new Hono().basePath("/funds");

const nonceStore: Record<string, string> = {};

router.post("/create", async (c) => {
  
  try {
    // Verify signature
    // Parse request body
    const body = await c.req.json();

    if (!body.user || !body.data || !body.sign) {
      return c.json({ success: false, error: "Missing required fields" }, 400);
    }

    // Check if nonce exists for the user
    if (!nonceStore[body.user]) {
      return c.json({ success: false, error: "Invalid nonce or session expired" }, 401);
    }

    // Verify the signature
    const isVerified = await verifyMessage({
      address: body.user,
      message: `${JSON.stringify(body.data)}${nonceStore[body.user]}`,
      signature: body.sign,
    });

    if (!isVerified) {
      return c.json({ success: false, error: "Signature verification failed" }, 403);
    }

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