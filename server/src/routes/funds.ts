import { Hono } from "hono";

const router = new Hono().basePath("/funds");

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