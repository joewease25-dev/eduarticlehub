export default function Home() {
  const topics = ["math", "history" /* add 48 more */];
  return (
    <div className="p-4">
      <h1>EduArticleHub</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic}><a href={`/${topic}`} className="text-blue-500">{topic} #eduarticlehub</a></li>
        ))}
      </ul>
    </div>
  );
}
