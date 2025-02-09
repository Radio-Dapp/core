import { Hono } from "hono";
import metaTxRequest from "../utils/metaTx";
import { writeContract } from "../evm";
import { isAddress } from "viem";

const router = new Hono().basePath("/funds");

router.post("/approve", async (c) => {
  try {
    // Verify signature
    const body: {
      amount: number;
      spender: string;
      signature: string;
    } = await c.req.json()

    if(!body.spender || !isAddress(body.spender) || !isAddress(body.signature)) {
      return c.json({
        success: false,
        error: "Spender address not provided",
      }, 400);
    }

    return c.json({
      success: true,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return c.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      500
    );
  }
});

export default router;
