import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ name: "Hello Hono!" });
});

const port = 9090;

console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port,
});
