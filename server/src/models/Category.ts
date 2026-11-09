//  Category model
// A shop department, eg Electronics, Fashion, Home & Living

import { model, Schema } from "mongoose";

// STEP 7: The category model
// A model describes what one record looks like in the db. ICategory is the ts type; the schema tells mongoDB the rules (required, unique...)

export interface ICategory {
  name: string;
  slug: string; // used in links, eg "home-living"
  icon: string; // name of the icon shown on the website
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    icon: { type: String, default: "" },
  },

  { timestamps: true },
);

export const Category = model<ICategory>("Category", categorySchema)
// Next: Step 8 (the product model) -> server/src/models/Product.ts