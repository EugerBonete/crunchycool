import { IAnimeResult } from "@/types";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import Title from "./shared/title";

interface CardGridProps {
  data: IAnimeResult;
  server: string;
}

export default function CardGrid({ data, server }: CardGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {data.results.map((data: IAnimeResult) => (
        <Link
          href={`/${
            server === "gogoanime"
              ? "gogo"
              : server === "anilist"
              ? "anilist"
              : server === "k-drama"
              ? "k-drama"
              : "manga-ts-react"
          }?anime=${data.id}`}
          key={data.id}
          className="p-2 md:p-4"
        >
          <div>
            <Image
              src={data.image}
              alt="Anime Image"
              className="h-52 md:h-72 w-72 object-cover"
              radius="none"
            />
            <div className="space-y-2">
              <h3 className="text-sm font-semibold mt-2">
                <Title text={data.title} />
              </h3>
              <p className="text-xs text-muted-foreground">
                {data.subOrDub === "sub" ? "Subtitled" : "Sub | Dub"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
