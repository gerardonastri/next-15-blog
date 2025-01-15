import client from "@/lib/contentful";
import HeroItems from "./HeroItems";

export async function HeroSection() {
  const entries = await client.getEntries({
    content_type: "post", // Sostituisci con il tuo tipo di contenuto
    "fields.featured": true,
  });

  return (
    <div className="container mx-auto px-6 pt-32 pb-12">
      <HeroItems items={entries.items} />
    </div>
  );
}
