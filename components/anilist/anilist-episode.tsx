"use client";
import { IAnimeEpisode, IAnimeResult } from "@/types";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import Title from "../shared/title";
import { cn } from "@/lib/utils";
import AnilistCard from "./anilist-card";
interface AnilistEpisodeProps {
  data: IAnimeResult;
}

const episodesPerPage = 10; // Adjust the number of episodes to load initially
const initialVisibleEpisodes = episodesPerPage;

function AnilistEpisode({ data }: AnilistEpisodeProps) {
  const [visibleEpisodes, setVisibleEpisodes] = useState(
    initialVisibleEpisodes
  );
  const [isDescendingOrder, setIsDescendingOrder] = useState(false); // Default to ascending order

  const totalEpisodes = data.episodes.length;

  const handleShowMore = () => {
    const newVisibleEpisodes = visibleEpisodes + episodesPerPage;
    setVisibleEpisodes(Math.min(newVisibleEpisodes, totalEpisodes));
  };

  // Sort episodes based on the selected order (ascending or descending)
  const sortedEpisodes = isDescendingOrder
    ? [...data.episodes].reverse()
    : data.episodes;

  return (
    <div className="px-5 max-w-5xl md:mx-auto my-10 flex gap-2 flex-col">
      <div className="flex justify-between mb-2">
        <h3>
          <Title text={data.title} />
        </h3>
        <Dropdown className="rounded-none">
          <DropdownTrigger>
            <Button variant="ghost">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {isDescendingOrder ? "Latest" : "Oldest"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              onClick={() => setIsDescendingOrder(true)}
              className={cn(
                "rounded-none",
                isDescendingOrder && "bg-secondary text-secondary-foreground"
              )}
              key="Latest"
            >
              Latest
            </DropdownItem>
            <DropdownItem
              onClick={() => setIsDescendingOrder(false)}
              className={cn(
                "rounded-none",
                !isDescendingOrder && "bg-secondary text-secondary-foreground"
              )}
              key="Oldest"
            >
              Oldest
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5">
        {sortedEpisodes
          .slice(0, visibleEpisodes)
          .map((episode: IAnimeEpisode) => (
            <AnilistCard
              episode={episode}
              data={data}
              isDescendingOrder={isDescendingOrder}
            />
          ))}
      </div>
      {visibleEpisodes < totalEpisodes && (
        <Button
          className="show-more-button mt-10"
          size="sm"
          onClick={handleShowMore}
        >
          Show More
        </Button>
      )}
    </div>
  );
}

export default AnilistEpisode;
