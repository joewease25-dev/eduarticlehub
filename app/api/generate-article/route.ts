import { config } from 'dotenv';
config(); // Load environment variables from .env
import { HfInference } from '@huggingface/inference';
const hf = new HfInference(process.env.HF_TOKEN);

const topics = [
  "adventure-games", "botany", "anime-cosplay", "anime-manga", "architecture", "art", "baking-desserts",
  "barbecues", "business-finance", "businessnews-discussion", "career", "terrariums", "home-cleaning",
  "cosplay", "crypto", "Bmx", "deer-hunting", "conspiracy", "digitalart", "diy-crafts", "economics",
  "termux-tutorial", "esports", "filmmaking", "food-recipes", "Travel-Destination", "Linux", "Money-saver",
  "gardening-farming", "home-improve", "Fishing-guide", "Pet-care", "Urban-gardening", "mental-health",
  "Tech-reviews", "wild-life", "terrariumhub", "pencilart", "personalfinance", "photography", "deepsea",
  "studying-education", "sustainable-living", "3d-printing"
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get('topic');
  if (!topic || !topics.includes(topic)) {
    return Response.json({ error: "Invalid topic" }, { status: 400 });
  }

  const prompt = `Write a 1000-word article on ${topic}, include keywords [${topic}, guide], 2 sources (e.g., https://example.com), 2 image alt texts (e.g., "${topic} guide image"). #eduarticlehub`;
  const response = await hf.textGeneration({
    model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
    prompt,
    max_tokens: 1000,
  });

  return Response.json({ topic, article: response.generated_text });
}
