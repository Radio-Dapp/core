import "dotenv/config"
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { flare, data } from "./routes/index";


const app = new Hono();

app.get("/", (c) => {
  return c.json({ name: "Hello Hono!" });
});

app.route("/", flare);

app.route("/", data)

const port = 9090;

console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port,
});
