import { Hono } from "hono";
import { isAddress } from "viem";
import FundsModel from "../models/funds";
import UserModel from "../models/user";
import { generateRandomAddress, generateTokenSymbol } from "../utils/utils";
import { waitForTransactionReceipt, writeContract } from "../evm";
import { getTransactionReceipt } from "viem/_types/actions/public/getTransactionReceipt";

const router = new Hono().basePath("/api");

router.get("/check-approval", async (c) => {
  try {
    const address = c.req.query("address");
    const res = await UserModel.findOne({ address });

    if (res) {
      return c.json({ usdcApproved: res.usdcApproved });
    } else {
      return c.json({ usdcApproved: false });
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

router.post("/update-approval", async (c) => {
  try {
    const body: { address: string; usdcApproved: boolean } = await c.req.json();
    const { address, usdcApproved } = body;
    const user = await UserModel.findOne({ address });

    if (user) {
      user.usdcApproved = usdcApproved;
      await user.save();
      return c.json({ success: true });
    } else {
      return c.json({ success: false, error: "User not found" }, 404);
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

router.post("/create-fund", async (c) => {
  console.log("POST /create-fund");

  try {
    const {
      meta,
      assets,
    }: {
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

    const fundSymbol = generateTokenSymbol(meta.name);

    if (!isAddress(meta.creator)) {
      return c.json({ success: false, error: "Invalid creator address" }, 400);
    }

    // const txHash = await writeContract(
    //   "RadioOrchestrator",
    //   "serverEnforcedFabrication",
    //   [meta.creator, meta.name, fundSymbol]
    // );

    // setTimeout(() => {
    //   console.log("Waiting for transaction receipt...");
    // }, 10000);

    // console.log("Waiting for transaction receipt...", txHash);

    // const reciept =  await waitForTransactionReceipt(txHash);

    // console.log("Transaction receipt:", reciept);
    // return c.json({ success: true, reciept });

    const res = new FundsModel({
      address: generateRandomAddress(),
      symbol: fundSymbol,
      name: meta.name,
      image:
        "https://www.shutterstock.com/image-illustration/top-10-mixed-cryptocurrency-tokens-600nw-2455104089.jpg",
      type: meta.type,
      description: meta.description,
      minimum_investment: meta.minimum_investment,
      maximum_investment: meta.maximum_investment,
      creator: meta.creator,
      assets: assets,
    });

    await res.save();
    return c.json(res);
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

router.get("/get-funds", async (c) => {
  try {
    const funds = await FundsModel.find();
    return c.json(funds);
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

router.get("/get-fund", async (c) => {
  try {
    const address = c.req.query("address");
    const fund = await FundsModel.findOne({ address });
    return c.json(fund);
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
