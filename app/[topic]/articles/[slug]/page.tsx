export default function ArticlePage({ params }: { params: { topic: string, slug: string } }) {
  return <h1>{params.topic} - {params.slug} #eduarticlehub</h1>;
}

