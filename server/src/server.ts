// server.ts



import app from "./app";
import { connectDB } from "./config/database";
import { env } from "./config/env";

// the starting point of the api: connect to MongoDB, then start listening for requests.

// step 6: Start the server
// the starting point: connect to mongoDB first, then start listening on the port. If the db can't be reached, show the error and stop

const startServer = async () => {
  try {
    await connectDB(); //uses MONGO_URI from the .env file

    app.listen(env.port, () => {
      console.log(`QuickCart Api running on http://localhost:${env.port}`);
    });
  } catch (error) {
    console.error("Could not connect to MongoDB", (error as Error).message);
    process.exit(1);
  }
};

startServer()

// Next: 7 (the category model) -> server/src/model/category.ts