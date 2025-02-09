import { Hono } from "hono";
import { isAddress } from "viem";
import FundsModel from "../models/funds";

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

router.post("/create", async (c) => {
  try {
    const body: {
      meta: {
        name: string;
        type: string;
        description: string;
        minimum_investment: number;
        maximum_investment: number;
        creator: string;
      };
      assets: any[];
    } = await c.req.json();

    const { meta, assets } = body;

    const fund = await FundsModel.findOne({ name: meta.name });

    if (!fund) {
      const res = new FundsModel({
        name: meta.name,
        type: meta.type,
        description: meta.description,
        minimum_investment: meta.minimum_investment,
        maximum_investment: meta.maximum_investment,
        creator: meta.creator,
        assets: assets,
      });

      await res.save();
      return c.json({ success: true, data: res });
    } else {
      return c.json({ success: false, error: "Fund already exists" }, 400);
    }
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
