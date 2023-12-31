import { Collection } from "@/models/Collection/components/Collection";

export default async function Home() {
  return (
    <main>
      <Collection title="My Collection" count={3} />
    </main>
  );
}
