import { useState } from "react";
import Description from "@/components/shared/description";
import Title from "@/components/shared/title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Accordion, AccordionItem } from "@nextui-org/react";
import AnilistAccordion from "@/components/anilist/anilist-accordion";
import { cn } from "@/lib/utils";
import { Bookmark, Plus, Share2, Star } from "lucide-react";
import Image from "next/image";
import { IAnimeResult } from "@/types";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function AnilistInfo({ data }: { data: IAnimeResult }) {
  const [isClamped, setIsClamped] = useState(true);

  return (
    <>
      <div className="px-5 max-w-5xl md:mx-auto my-10 flex gap-10">
        <div className="w-full md:w-2/3 space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl md:text-3xl font-bold ml-2">
              <Title text={data.title} />
            </h3>
            <Share2 className=" h-4 w-4" />
          </div>

          <p className="text-xs text-muted-foreground ml-2 mt-5">Subtitled</p>
          <div className="ml-2 gap-1 flex md:hidden">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="flex h-5 items-center space-x-4 text-xs">
            <div className=" gap-1 hidden md:flex ml-0 md:ml-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <Separator orientation="vertical" className="hidden md:flex" />
            <div>Average Rating: {data.rating! / 50} (331.5k) </div>
            <Separator orientation="vertical" />
            <div>3,841 Reviews</div>
          </div>

          <div className="flex ml-2 gap-5">
            <Button
              variant="outline"
              className="uppercase border-2 border-foreground  w-full sm:w-fit"
              size="sm"
            >
              <Bookmark className="mr-2 h-4 w-4" /> Add to Watchlist
            </Button>

            <Button className="uppercase" variant="ghost" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Add to Crunchylist</span>
            </Button>
          </div>

          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              subtitle={
                <p
                  className={cn(
                    "text-medium text-foreground",
                    isClamped && "line-clamp-3"
                  )}
                >
                  <Description text={data.description} />
                </p>
              }
              onPress={() => setIsClamped(!isClamped)}
            >
              <AnilistAccordion data={data} />
            </AccordionItem>
          </Accordion>
        </div>

        <div className="hidden md:block md:w-1/3 space-y-4">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={data.image!}
              alt="Anime Image"
              fill
              className="object-cover object-top"
            />
          </AspectRatio>
          <Button className="uppercase w-full" size="sm">
            {data.episodes.length ? (
              <>
                <Plus className="mr-2 h-4 w-4" /> Start Watching EP{" "}
                {data.episodes[data.episodes?.length - 1].number}
              </>
            ) : (
              "No episodes available"
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
