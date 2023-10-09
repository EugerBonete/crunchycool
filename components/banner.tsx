import { useGetAnilistTrending } from "@/context/trending-anilist";
import { Card, CardHeader, Link, Skeleton, Tooltip } from "@nextui-org/react";
import { Button, buttonVariants } from "./ui/button";
import Title from "./shared/title";
import Description from "./shared/description";
import { cn } from "@/lib/utils";
import { Bookmark, Play } from "lucide-react";
import { IAnimeResult } from "@/types";

export default function Banner() {
  const { data, isLoading } = useGetAnilistTrending(1);

  if (isLoading)
    return (
      <div className="px-5 md:px-10 mx-auto h-[300px] my-5 md:my-10">
        <Skeleton className="w-full h-full" />
      </div>
    );

  const anime1 = data.results[0];
  const anime2 = data.results[1];
  const anime3 = data.results[2];

  return (
    <>
      <div className="px-5 md:px-10 mx-auto my-10 md:my-15 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Card className="max-w-[400px]" radius="none">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col gap-5">
                <p className="text-lg font-semibold">
                  <Title text={anime1.title} />
                </p>
                <Button className="uppercase">Watch now</Button>
              </div>
            </CardHeader>
          </Card>
        </div>
        <img
          src={anime1.cover!}
          alt="Banner Cover"
          className="hidden sm:block object-cover w-full h-full min-h-[250px] md:h-[300px]"
        />
        <img
          src={anime1.image!}
          alt="Banner Cover"
          className="block sm:hidden object-cover object-center w-full h-[250px] md:h-[300px]"
        />
      </div>
      <AnimeStack anime={anime2} />
      <AnimeStack anime={anime3} />
    </>
  );
}

const AnimeStack = ({ anime }: { anime: IAnimeResult }) => (
  <div className="px-5 md:px-10 mx-auto my-10 md:my-15 relative flex gap-7">
    <div className="w-1/2">
      <img
        src={anime.cover!}
        alt="Banner Cover"
        className="hidden sm:block object-cover w-full h-full min-h-[200px] md:h-[300px]"
      />
      <img
        src={anime.image!}
        alt="Banner Cover"
        className="block sm:hidden object-cover object-center w-full h-[200px] md:h-[300px]"
      />
    </div>

    <div className="flex flex-col w-1/2 justify-center gap-3 md:gap-5">
      <h3 className="text-lg md:text-2xl">
        <Title text={anime.title} />
      </h3>
      <p className="line-clamp-3 text-xs md:text-sm">
        <Description text={anime.description} />
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-2 mt-2">
        <Link
          href={`anilist?anime=${anime.id}`}
          className={cn(
            buttonVariants(),
            "uppercase w-full text-sm md:text-medium min-w-[180px]"
          )}
        >
          <Play className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Start watching e1</span>
          <span className="inline sm:hidden">Start watching</span>
        </Link>
        <Tooltip showArrow={true} content="Add to Watchlist">
          <Button variant="outline" className="min-w-[40px] uppercase w-full">
            <Bookmark className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Add to watchlist</span>
            <span className="inline sm:hidden">watchlist</span>
          </Button>
        </Tooltip>
      </div>
    </div>
  </div>
);
