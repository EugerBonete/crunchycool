import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

export default function HeroSliderLoader() {
  return (
    <Card className="w-screen space-y-5" radius="none">
      <Skeleton>
        <div className="h-80 rounded-lg bg-default-300"></div>
      </Skeleton>
    </Card>
  );
}
