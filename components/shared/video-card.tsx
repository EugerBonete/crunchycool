import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";

export default function VideoCard({ text }: { text: string }) {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="bg-muted flex justify-center items-center"
    >
      {text}
    </AspectRatio>
  );
}
