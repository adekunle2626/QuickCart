// slugify
// turns a name into a web-friendly id, eg "Hom & Living" -> "home-living"

// Step 9: make web-friendly names (slugs)

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")  //anything that is not a letter or number becomes "-"
    .replace(/^-+|-+$/g, "");   //remove "-" at the start or end
};


// step 10(write the demo data) -> server/src/data/categories.ts