// uploadImages.ts
// sends every product photo in a folder on ur computer to cloudinary, into "quickcart/products"
// a file called "smart-watch-ultra-1.jpeg" becomes the photo "quickcart/products/smart-watch-watch-ultra-1"

//step 11: put the demo products on Cloudinary
// run it from the server folder: npm run upload-images -- "C:/Users/ADEKUNLE/Desktop/quickcart-product-photos"
//everything after "--" is handed to this script; process.argv[2] is the folder.

// only these files types are photos; anything else in the folder (eg desktop.ini) is skipped

import path from "path";
import {
  CLOUDINARY_MISSING,
  isCloudinaryReady,
  PHOTO_FOLDER,
  photoUrl,
  uploadPhoto,
} from "../config/cloudinary";
import fs from "fs";

const PHOTO_TYPES = [".jpg", ".jpeg", ".png", ".webp"];

const uploadImages = async () => {
  const folder = process.argv[2];

  // 1. check we have everything before we start
  if (!folder) {
    console.error(
      'Say where photos are: npm run upload-images -- "C:/path/to/photos"',
    );
    process.exit(1);
  }

  if (!isCloudinaryReady) {
    console.error(CLOUDINARY_MISSING);
    process.exit(1);
  }

  if (!fs.existsSync(folder)) {
    console.error(`Folder not found: ${folder}`);
  }

  //2. list the photo files in the folder
  const files = fs.readdirSync(folder).filter((file) => {
    return PHOTO_TYPES.includes(path.extname(file).toLowerCase());
  });
  console.log(`Uploading ${files.length} photos to Cloudinary...`);

  //3. upload them one at a time (simple, and kind to a slow connection)
  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    // "smart-watch-ultra-1.jpeg" -> "smart-watch-ultra-1(trim remives stray spaces)"
    const name = path.parse(file).name.trim().toLowerCase();
    const bytes = fs.readFileSync(path.join(folder, file));

    try {
      const publicId = await uploadPhoto(bytes, `${PHOTO_FOLDER}/${name}`);
      uploaded++;
      console.log(`${uploaded}/${files.length}  ${photoUrl(publicId)}`);
    } catch (error) {
      failed++;
      console.error(`failed: ${file} -> ${(error as Error).message}`);
    }
  }
  console.log(`Done ${uploaded} uploaded, ${failed} failed.`);
};

uploadImages();
