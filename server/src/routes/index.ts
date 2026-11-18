//  routes/index.ts
// joins all the route files together app.ts puts these under /api

import { Router } from "express";
import categoryRoutes from "./categoryRoutes";
import productRoutes from "./productRoutes";
import accountRoutes from "./accountRoutes";
import promoRoutes from "./promoRoutes";
import orderRoutes from "./orderRoutes";
import reviewRoutes from "./reviewRoutes";
import newsLetterRoutes from "./newsLetterRoutes";
import adminRoutes from "./adminRoutes";

// step 5: join the routes and add a health check
// one router joins all the route fies. app.ts mounts it at /api, so a route like "/products" becomes /api/products

const router = Router();

// GET /api/health: a quick check that the api is running
router.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "QuickCart Api is running" });
});

router.use("/categories", categoryRoutes); // /api/categories...

router.use("/products", productRoutes); // /api/products...

router.use("/account", accountRoutes); // /api/account...

router.use("/promo-codes", promoRoutes); // /api/promo-codes...

router.use("/orders", orderRoutes); // /api/orders...

router.use("/reviews", reviewRoutes); // /api/reviews...

router.use("/newsletter", newsLetterRoutes); // /api/newsletter...

router.use("/admin", adminRoutes); // /api/admin... (admins only)

export default router;

// next: step 6 (start the server) => server/src/Server.ts
