export default function Home() {
  const topics = [
    "adventure-games", "botany", "anime-cosplay", "anime-manga", "architecture", "art", "baking-desserts",
    "barbecues", "business-finance", "businessnews-discussion", "career", "terrariums", "home-cleaning",
    "cosplay", "crypto", "Bmx", "deer-hunting", "conspiracy", "digitalart", "diy-crafts", "economics",
    "termux-tutorial", "esports", "filmmaking", "food-recipes", "Travel-Destination", "Linux", "Money-saver",
    "gardening-farming", "home-improve", "Fishing-guide", "Pet-care", "Urban-gardening", "mental-health",
    "Tech-reviews", "wild-life", "terrariumhub", "pencilart", "personalfinance", "photography", "deepsea",
    "studying-education", "sustainable-living", "3d-printing"
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">EduArticleHub #eduarticlehub</h1>
      <ul className="list-disc pl-5 mt-4">
        {topics.map((topic) => (
          <li key={topic} className="my-2">
            <a href={`/${topic}`} className="text-blue-500 hover:underline">
              {topic}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
