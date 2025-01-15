import NewsletterSection from "@/components/Newsletter";
import client from "@/lib/contentful";
import SinglePage from "../_components/singlePage";

export default async function BlogArticle({ params }) {
  const slug = (await params).id;

  const entry = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
    limit: 1, // Assicurati di ottenere solo una entry
  });

  console.log(entry.items);

  return (
    <article className="relative min-h-screen mb-20">
      {/* Newsletter section */}
      <SinglePage item={entry.items[0]} />
      <NewsletterSection />
    </article>
  );
}
