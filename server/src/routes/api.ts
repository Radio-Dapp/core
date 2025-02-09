import { Hono } from "hono";
import { isAddress } from "viem";

const router = new Hono().basePath("/api");

router.get("/check-approval", async (c) => {
  try {
    
    
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
