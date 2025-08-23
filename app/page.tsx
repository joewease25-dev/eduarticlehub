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
