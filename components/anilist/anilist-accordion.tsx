import { IAnimeResult } from "@/types";
import { Chip } from "@nextui-org/react";
import React from "react";

export default function AnilistAccordion({ data }: { data: IAnimeResult }) {
  return (
    <>
      <div className="flex mb-5">
        {data?.genres?.slice(0, 5)?.map((genre: string) => (
          <Chip radius="none" className="mr-2">
            {genre}
          </Chip>
        ))}
      </div>

      {data.cover && (
        <div className="flex justify-between border-b-2 py-3 text-sm">
          <p>Publisher</p>
          <p>
            {data.studios.map((studio: string) => (
              <span>{studio}</span>
            ))}
          </p>
        </div>
      )}

      <div className="flex justify-between border-b-2 py-3 text-sm">
        <p>Audio</p>
        <p>{data.subOrDub === "sub" ? "Japanese" : "English"}</p>
      </div>

      <div className="flex justify-between border-b-2 py-3 text-sm">
        <p>Subtitles</p>
        <p>English</p>
      </div>
    </>
  );
}
