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
