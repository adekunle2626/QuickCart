// app.ts
// creates the Express app: settings first, then all the /api routes, then the "not found" and error handlers.
// it does not start listening: server.ts does that

import express from "express";
import cors from "cors";
import { env } from "./config/env";
import routes from "./routes";
import { notFound } from "./middleware/notFound";

// STEP 3 : create the Express app
// the express app: allow the website to call us(cors), read json bodies, server uploaded photos, put every route under /api, then the 404 ad error handlers.
const app = express();

app.use(cors({ origin: env.clientUrl, credentials: true })); //lets the website(CLIENT_URL) call the API
app.use(express.json());

app.use("/api", routes); // every route lives under api, eg /api/health

app.use(notFound); //must come after the routes: runs only when nothing above matched

export default app;

// Next: Step 4 (Handle unknown urls and errors) -> server/src/middleware/notFound.ts
