import { Hono } from "hono";
import { generateRandomHex } from "../utils/utils";

const router = new Hono().basePath("/user");

const userNonceStore: Record<string, string> = {};

router.post("/request-nonce", async (ctx) => {
    const { address } = await ctx.req.json();
    userNonceStore[address] = generateRandomHex(32);
    return ctx.json({ nonce: userNonceStore[address] });
  });
  

