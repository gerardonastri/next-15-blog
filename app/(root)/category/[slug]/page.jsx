import CategoryPosts from "../_components/category-posts";
import client from "@/lib/contentful";

export default async function CategoryPage({ params }) {
  const slug = (await params).slug;

  const entry = await client.getEntries({
    content_type: "post",
    "fields.category": slug,
  });

  return (
    <main>
      <CategoryPosts posts={entry.items} slug={slug} />
    </main>
  );
}
