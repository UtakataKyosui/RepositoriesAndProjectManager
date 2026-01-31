import { connection } from "next/server";
import { getPublicRoadmaps } from "@/actions/roadmap";
import { RoadmapCard } from "@/components/roadmap/roadmap-card";

// ビルド時ではなくリクエスト時にデータベースアクセスする

export default async function RoadmapPage() {
  await connection();

  const roadmaps = await getPublicRoadmaps();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12">
        <section className="flex justify-between items-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Roadmaps
            </h2>
            <p className="text-muted-foreground">
              Manage your project goals and milestones.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
          {roadmaps.length === 0 && (
            <div className="col-span-full text-center py-20 bg-muted/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">No roadmaps yet</h3>
              <p className="text-muted-foreground">
                Create your first roadmap to get started!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
