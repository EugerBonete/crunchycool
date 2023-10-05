import { Card, Skeleton } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
export default function InfoLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10">
      <Card className="w-full space-y-5" radius="none">
        <Skeleton className="rounded-none">
          <div className="h-52 rounded-none bg-default-300"></div>
        </Skeleton>
      </Card>
      <Spinner size="lg" className="mt-20" />
    </div>
  );
}
