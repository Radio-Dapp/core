import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { flare, data, funds, api } from "./routes/index.js";
import mongoose from "mongoose";
import { cors } from 'hono/cors'

const MONG_URI = process.env.MONG_URI;
const app = new Hono();
app.use('/*', cors());

mongoose
  .connect(MONG_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (c) => {
  return c.json({ name: "Hello Hono!" });
});

app.route("/", flare);
app.route("/", funds);
app.route("/", api);

app.route("/", data)

const port = 9090;

console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port,
});
