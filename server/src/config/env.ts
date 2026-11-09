// env.ts
// reads the settings from the .env file in one place, so the rest of the code uses `env.port`, `env.mongoUri`, etc.

import dotenv from "dotenv";

dotenv.config({ quiet: true });

// ===STEP 1: Read the settings from .env
// All settings (port, database address, jwt secret...) are read from .env here, once, so the rest of the code uses env.port, env.mongoUri and so on.

// Next: STEP 2 (connect to MongoDb) -> server/src/config/database.ts

export const env = {
  port: Number(process.env.PORT) || 5000,
  mongoUri:
    process.env.mongoURI ||
    "mongodb+srv://opeadekunle04_db_user:ofnx1OBwG4yMawG3@cluster0.tenvikz.mongodb.net/QuickCart",
  jwtSecret: process.env.JWT_SECRET || "dev-secret-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "15d", // remain logged in for 15days
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
};
