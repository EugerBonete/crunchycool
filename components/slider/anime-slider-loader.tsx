import { Card, Skeleton } from "@nextui-org/react";

export default function AnimeSliderLoader() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Card
            key={index}
            className={`w-full sm:w-[calc(50% - 1rem)] md:w-[calc(33.333% - 1rem)] lg:w-[calc(25% - 1rem)] xl:w-[calc(20% - 1rem)] space-y-5 p-4`}
            radius="none"
          >
            <Skeleton className="rounded-lg">
              <div className="h-40 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        ))}
    </div>
  );
}
