#!/bin/bash

# Define the topics array
topics=(
  "adventure-games" "botany" "anime-cosplay" "anime-manga" "architecture" "art" "baking-desserts"
  "barbecues" "business-finance" "businessnews-discussion" "career" "terrariums" "home-cleaning"
  "cosplay" "crypto" "Bmx" "deer-hunting" "conspiracy" "digitalart" "diy-crafts" "economics"
  "termux-tutorial" "esports" "filmmaking" "food-recipes" "Travel-Destination" "Linux" "Money-saver"
  "gardening-farming" "home-improve" "Fishing-guide" "Pet-care" "Urban-gardening" "mental-health"
  "Tech-reviews" "wild-life" "terrariumhub" "pencilart" "personalfinance" "photography" "deepsea"
  "studying-education" "sustainable-living" "3d-printing"
)

# Update app/page.tsx with the topics list
cat > app/page.tsx << 'EOF'
export default function Home() {
  const topics = ${topics[@]};
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">EduArticleHub #eduarticlehub</h1>
      <ul className="list-disc pl-5 mt-4">
        {topics.map((topic) => (
          <li key={topic} className="my-2">
            <a href={\`/\${topic}\`} className="text-blue-500 hover:underline">
              {topic}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
EOF

# Ensure proper JavaScript syntax by replacing ${topics[@]} with the array
sed -i "s|\${topics[@]}|${topics[*]}|" app/page.tsx

# Create or update app/[topic]/page.tsx for dynamic routes
cat > app/[topic]/page.tsx << 'EOF'
import { useRouter } from 'next/router';

export default function TopicPage() {
  const router = useRouter();
  const { topic } = router.query;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{topic} Articles #eduarticlehub</h1>
      <p>This is the page for {topic}. Content will be generated here soon.</p>
    </div>
  );
}
EOF

echo "Topics added to app/page.tsx and app/[topic]/page.tsx created/updated."
