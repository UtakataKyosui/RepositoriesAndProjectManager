import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="flex-1 mr-4">
            <div>
              <Skeleton className="h-9 w-64 mb-2" />
              <Skeleton className="h-5 w-96" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <Card className="lg:col-span-2 flex flex-col">
            <CardHeader>
              <CardTitle>Roadmap Graph</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-[500px] bg-muted/10 rounded-md p-0 relative">
              <div className="flex items-center justify-center h-full">
                <Skeleton className="h-[200px] w-full" />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 border rounded-md"
                    >
                      <Skeleton className="h-5 w-5 rounded-full mt-0.5" />
                      <Skeleton className="h-5 flex-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
