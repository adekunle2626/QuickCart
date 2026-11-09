// app.ts
// creates the Express app: settings first, then all the /api routes, then the "not found" and error handlers.
// it does not start listening: server.ts does that

import express from "express";
import { env } from "./config/env";

// STEP 3 : create the Express app
// the express app: allow the website to call us(cors), read json bodies, server uploaded photos, put every route under /api, then the 404 ad error handlers.
const app = express();

app.use(express.json());

export default app;

// Next: Step 4 (Handle unknown urls and errors) -> server/src/middleware/notFound.ts
