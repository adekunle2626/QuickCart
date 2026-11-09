// database.ts
// connects to MongoDb using the MONGO_URI from the .env file

import { log } from "console";
import mongoose from "mongoose";
import { env } from "./env";

// STEP:2 connect to MongoDb
// connectDB() opens the connection to MongoDB with the address from .env .server.ts calls it before the api starts.

export const connectDB = async () => {
  const connection = await mongoose.connect(env.mongoUri);
  console.log(`MongoDb connected : ${connection.connection.host}`);
};

// Next: STEP 3: (Create the Express app) -> server/src/app.ts
