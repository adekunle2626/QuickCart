// notFound
// Runs when no route matches the request, and replies with a 404 message.

import { Request, Response } from "express";

// step 4: handle unknown urls and errors
// runs when no route matched: replies 404 as json. errorHandler.ts (same step) turns any thrown error into a json reply instead of crashing

export const notFound = (req: Request, res: Response) => {
  res
    .status(404)
    .json({ message: `Not found: ${req.method} ${req.originalUrl}` });
};

// next: step 5 (join the routes and add a health check) -> server/src/routes/index.ts