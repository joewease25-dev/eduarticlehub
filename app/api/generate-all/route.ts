import { config } from 'dotenv';
config(); // Load environment variables from .env
import { NextResponse } from 'next/server';

const topics = [
  "adventure-games", "botany", "anime-cosplay", "anime-manga", "architecture", "art", "baking-desserts",
  "barbecues", "business-finance", "businessnews-discussion", "career", "terrariums", "home-cleaning",
  "cosplay", "crypto", "Bmx", "deer-hunting", "conspiracy", "digitalart", "diy-crafts", "economics",
  "termux-tutorial", "esports", "filmmaking", "food-recipes", "Travel-Destination", "Linux", "Money-saver",
  "gardening-farming", "home-improve", "Fishing-guide", "Pet-care", "Urban-gardening", "mental-health",
  "Tech-reviews", "wild-life", "terrariumhub", "pencilart", "personalfinance", "photography", "deepsea",
  "studying-education", "sustainable-living", "3d-printing"
];

export async function GET() {
  for (const topic of topics) {
    const res = await fetch(`${process.env.VERCEL_URL}/api/generate-article?topic=${topic}`, {
      method: 'GET',
    });
    const data = await res.json();
    if (!res.ok) continue;
    console.log(`Generated for ${topic}:`, data.article.substring(0, 50) + "...");
  }
  return NextResponse.json({ message: "Generation scheduled for all topics" });
}
