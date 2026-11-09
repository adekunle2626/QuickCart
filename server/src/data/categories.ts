// categories.ts
// the 8 shop departments from the Home page. "icon" is the Material icon name the website shows.

// Step 10: write the demo data/API
// the demo data lives in plain ts files: categories here, products, reviews, promo codes and users next to it. edit them to change the shop's content.

export const categories = [
  { name: "Electronics", slug: "electronics", icon: "devices" },
  { name: "Fashion", slug: "fashion", icon: "checkroom" },
  { name: "Home & Living", slug: "home-living", icon: "chair" },
  { name: "Beauty", slug: "beauty", icon: "spa" },
  { name: "Sports", slug: "sports", icon: "fitness_center" },
  { name: "Books", slug: "books", icon: "menu_book" },
  { name: "Office", slug: "office", icon: "desk" },
  { name: "Kitchen", slug: "kitchen", icon: "soup_kitchen" },
];

// part of step 10 is to develop the products API -> server/src/data/products.ts

// Next: step 11: (put the demo data in the db) -> server/src/data/demoData.ts