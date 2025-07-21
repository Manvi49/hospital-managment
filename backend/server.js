// Load environment variables from .env
import dotenv from "dotenv";
dotenv.config();

// Import app and cloudinary
import app from "./app.js";
import { v2 as cloudinary } from "cloudinary"; // ✅ Correct way

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the server on the defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
