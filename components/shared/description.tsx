import React from "react";

export default function Description({ text = "" }: { text: string }) {
  return <>{text.replace(/<[^>]*>/g, "")}</>;
}
