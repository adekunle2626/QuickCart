// Product model
// something the shop sells. prices and whole naira, eg 5400 = ₦45,500

import { model, Schema, Types } from "mongoose";
import { Category } from "./Category";

export interface IProductColor {
  name: string; // eg "Midnight Black"
  hex: string; // eg "#1f2937"
}

export interface IProductSpec {
  group: string; // eg audio & connectivity
  label: string; // eg "Driver Size"
  value: string; // eg 40mm neodymium
}

export interface IProductHighlight {
  icon: string; // material icon name, eg "hearing"
  title: string; // "hybrid" active noise cancellating
  text: string; // one or two sentences
}

// STEP 8: the product model
//  everything about a product: name, slug, price (whole naira), stock, image colors, specs, rating...

export interface IProduct {
  name: string;
  slug: string;
  description: string;
  tagline?: string; // one short line for small card eg "braided 1.8m lossless wire"
  priceNote?: string; // short line under the price on small cards eg "free shipping"
  features: string[]; // shprt bullet points shown on the product page
  specs: IProductSpec[]; // the "full specifications" table
  category: Types.ObjectId; // points to a category
  brand: string;
  sku: string; // stock code, eg "QC-AU-9042"
  price: number;
  oldPrice?: number; // crossed-out price when on sale
  costPrice?: number; // what the shop paid(admin only)
  trackStock: boolean; // false = never sells out and stock isnt counted down (eg made to order)
  stock: number;
  lowStockThreshold: number;
  images: string[]; // images[0] is the photo on product cards
  colors: IProductColor[];
  gallery: string[];
  tags: string[];
  badge?: string; //eg "SALE", "TOP SELLER", "NEW"
  highlights: IProductHighlight[]; //eg the three features cards under the photos on the products page
  ratings: number; // average star rating 0-5
  reviewCount: number;
  ratingCounts: number[]; // how many 5, 4, 3, 2, 1 start ratings (in that order)
  sold: number; // how many have been sold (used for "Best Sellers")
  flashSaleStock?: number; // units offered in the flash sales, used to show "Claimed: 82%"
  bundleProducts: Types.ObjectId[]; // "Frequently Bought Together" product
  relatedProducts: Types.ObjectId[]; //"Related Products" (empty = same category)
  status: "published" | "draft" | "scheduled";
  publishAt?: Date; // for "scheduled": the product goes live at this time
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    description: { type: String, default: "" },

    tagline: { type: String },

    priceNote: { type: String },

    features: [{ type: String }],

    specs: [{ group: String, label: String, value: String }],

    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },

    brand: { type: String, default: "" },

    sku: { type: String, required: true, unique: true },

    price: { type: Number, required: true, min: 0 },

    oldPrice: { type: Number, min: 0 },

    costPrice: { type: Number, min: 0 },

    trackStock: { type: Boolean, default: true },

    stock: { type: Number, required: true, min: 0, default: 0 },

    lowStockThreshold: { type: Number, default: 10 },

    images: [{ type: String }],

    gallery: [{ type: String }],

    colors: [{ name: String, hex: String }],

    tags: [{ type: String }],

    badge: { type: String },

    highlights: [{ icon: String, title: String, text: String }],

    ratings: { type: Number, default: 0, min: 0, max: 5 },

    reviewCount: { type: Number, default: 0 },

    ratingCounts: [{ type: Number }],

    sold: { type: Number, default: 0, min: 0 },

    flashSaleStock: { type: Number, min: 0 },

    bundleProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],

    relatedProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],

    status: {
      type: String,
      enum: ["published", "draft", "scheduled"],
      default: "published",
    },

    publishAt: { type: Date },
  },
  { timestamps: true },
);

// STEP: 8(part of this step): the product model
// the filter every public product query uses.

// Products shoppers can see right now: published, or scheduled with their time alreadu passed.
// Use it in every public query

export const liveProducts = () => {
  return {
    $or: [
      { status: "published" },
      { status: "scheduled", publishAt: { $lte: new Date() } },
    ],
  };
};

export const Product = model<IProduct>("Product", productSchema);

// STEP 9(Make web-friendly names {slugs}) -> server/src/utils/slugify
