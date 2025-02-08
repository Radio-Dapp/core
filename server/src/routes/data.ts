import { Hono } from "hono";

const router = new Hono().basePath("/data");


interface TickerData {
    t: number;
    o: number;
    h: number;
    l: number;
    c: number;
  }
type TickerResponse = Record<string, TickerData>;

router.get("/get-assets", async (c) => {
    try {
      const response = await fetch("https://perp-api.sparkdex.ai/tickers");
      if (!response.ok) {
        return c.json({ error: "Failed to fetch market data" }, 500);
      }
  
      const data: TickerResponse = await response.json();
  
      const formattedData = Object.entries(data).map(([market, values]) => {
        const currentPrice = values.c;
        const openPrice = values.o;
        const change = ((currentPrice - openPrice) / openPrice) * 100;
  
        return {
          market,
          current_price: currentPrice,
          change_24hr: `${change.toFixed(2)}%`,
        };
      });
  
      return c.json(formattedData);
    } catch (error) {
      return c.json({ error: "Internal Server Error" }, 500);
    }
  });


export default router;