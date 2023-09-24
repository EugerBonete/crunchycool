import React from "react";

export default function Title({ text }: { text: any }) {
  return (
    <>{typeof text === "string" ? text : text?.userPreferred || text?.romaji}</>
  );
}
