import { IAnimeEpisode, IAnimeResult } from "@/types";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Title from "../shared/title";
import { Calendar, Play, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface AnilistCardProps {
  episode: IAnimeEpisode;
  data: IAnimeResult;
  isDescendingOrder: boolean;
}

export default function AnilistCard({
  episode,
  data,
  isDescendingOrder,
}: AnilistCardProps) {
  return (
    <Link
      href={`/watch/anilist?anime=${data.id}&episode=${episode.id}`}
      key={episode.id}
      className="space-y-2 my-2 md:my-5 relative group cursor-pointer"
    >
      <div className="absolute inset-0 bg-secondary group-hover:flex justify-between hidden z-10 flex-col p-2 md:p-4 gap-2">
        <div className="flex flex-col gap-5">
          <p className="text-xs text-muted-foreground">
            <Title text={data.title} />
          </p>

          <p className={cn("text-sm", isDescendingOrder && "md:w-[230px]")}>
            Episode {episode.number}{" "}
            {episode.title
              ? ` : ${episode.title}`
              : " : No description available"}
          </p>

          {episode.createdAt && (
            <div className="text-xs font-semibold flex">
              <Calendar className="mr-1 w-4 h-4" />
              <p>{new Date(episode.createdAt).toLocaleDateString()}</p>
            </div>
          )}
        </div>

        <Link
          href="#"
          className="flex items-center font-semibold text-sm text-orange"
        >
          <Play className="w-4 h-4 mr-1" />
          <p>PLAY EP {episode.number}</p>
        </Link>
      </div>
      <p
        className={cn(
          "hidden md:inline text-xs text-muted-foreground line-clamp-1",
          isDescendingOrder && "md:w-[230px]"
        )}
      >
        <Title text={data.title} />
      </p>
      <AspectRatio ratio={16 / 9} className="relative">
        <img
          src={episode.image}
          alt={`Episode ${episode.number}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute group-hover:hidden inset-0 z-10 flex items-center justify-center">
          <PlayCircle className="h-10 w-10 text-white bg-black rounded-full" />
        </div>
      </AspectRatio>
      <p
        className={cn(
          "text-sm h-10 md:h-14 line-clamp-2",
          isDescendingOrder && "md:w-[230px]"
        )}
      >
        Episode {episode.number} {episode.title && `:${episode.title}`}
      </p>
      {data.subOrDub === "sub" && (
        <p className="text-xs text-muted-foreground">Subtitled</p>
      )}
    </Link>
  );
}
