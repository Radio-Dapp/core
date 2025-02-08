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

    const formattedData = await Promise.all(
      Object.entries(data).map(async ([market, values]) => {
        const currentPrice = values.c;
        const openPrice = values.o;
        const change = ((currentPrice - openPrice) / openPrice) * 100;

        // Extract the base asset (e.g., BTC from BTC-USD)
        const baseAsset = market.split("-")[0].toLowerCase();

        // Fetch the logo URL from CryptoCompare
        let logoUrl = null;
        try {
          const logoResponse = await fetch(
            `https://data-api.cryptocompare.com/asset/v1/search?search_string=${baseAsset}`
          );

          if (logoResponse.ok) {
            const logoData = await logoResponse.json();
            if (logoData.Data && logoData.Data.LIST.length > 0) {
              logoUrl = logoData.Data.LIST[0].LOGO_URL;
            }
          }
        } catch (error) {
          console.error(`Failed to fetch logo for ${baseAsset}:`, error);
        }

        return {
          baseAsset,
          current_price: currentPrice,
          change_24hr: `${change.toFixed(2)}%`,
          logo_url: logoUrl || "N/A",
        };
      })
    );

    return c.json(formattedData);
  } catch (error) {
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

export default router;
