//  routes/index.ts
// joins all the route files together app.ts puts these under /api

import { Router } from "express";

// step 5: join the routes and add a health check
// one router joins all the route fies. app.ts mounts it at /api, so a route like "/products" becomes /api/products

const router = Router();

// GET /api/health: a quick check that the api is running
router.get("health", (_req, res) => {
  res.json({ status: "ok", message: "QuickCart Api is running" });
});

// next: step 6 (start the server) => server/src/Server.ts