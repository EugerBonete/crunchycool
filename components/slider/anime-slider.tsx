import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IAnimeResult } from "@/types";
import { Chip, Tooltip } from "@nextui-org/react";

import Link from "next/link";
import Title from "../shared/title";
import { Button } from "../ui/button";
import { Bookmark, Play, Plus } from "lucide-react";

interface AnimeSliderProps {
  data: IAnimeResult;
  prevId: string;
  nextId: string;
}

export default function AnimeSlider({
  data,
  nextId,
  prevId,
}: AnimeSliderProps) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.1}
      grabCursor={true}
      modules={[Navigation, Autoplay]}
      navigation={{
        nextEl: `.${nextId}`,
        prevEl: `.${prevId}`,
        disabledClass: "swiper-button-disabled",
      }}
      breakpoints={{
        550: {
          slidesPerView: 3.2,
        },
        900: {
          slidesPerView: 4.1,
        },
        1080: {
          slidesPerView: 5.1,
        },
      }}
    >
      {data?.results?.map((anime: IAnimeResult) => {
        return (
          <SwiperSlide key={anime.id}>
            <SwiperCard anime={anime} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

function SwiperCard({ anime }: { anime: IAnimeResult }) {
  return (
    <Link
      href={`/gogo?anime=${anime.id}`}
      className="flex flex-col gap-2 h-80 md:h-96 hover:h-80 cursor-pointer group relative  max-w-[200px] "
    >
      <img
        src={anime.image || ""}
        alt="anime cover"
        height={500}
        width={500}
        className="object-cover w-full h-60 md:h-72"
      />

      <h3 className="text-sm line-clamp-2 group-hover:hidden h-10">
        <Title text={anime.title} />
      </h3>
      {anime.episodeNumber && (
        <p className="text-xs text-muted-foreground">
          EP {anime.episodeNumber}
        </p>
      )}

      {/* hover effect */}
      <div className="absolute inset-0 bg-black hidden group-hover:flex flex-col p-4 gap-4 transition-opacity opacity-0 hover:opacity-100">
        {/* Title inside the overlay div */}
        <h3 className="text-md text-white">
          <Title text={anime.title} />
        </h3>

        <div className="flex flex-wrap gap-2 overflow-y-visible">
          {anime?.genres?.length &&
            anime.genres.map((item: string, index: number) => (
              <Chip size="sm" key={index}>
                {item}
              </Chip>
            ))}

          {anime.episodeNumber && <Chip> EP {anime.episodeNumber}</Chip>}

          <Tooltip showArrow={true} content="Play S1 E1">
            <Button
              variant="link"
              size="icon"
              className="absolute bottom-1 left-1 text-white"
            >
              <Play className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Tooltip>

          <Tooltip showArrow={true} content="Add to Watchlist">
            <Button
              variant="link"
              size="icon"
              className="absolute bottom-1 left-9 text-white"
            >
              <Bookmark className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Tooltip>

          <Tooltip showArrow={true} content="Add to Crunchylist">
            <Button
              variant="link"
              size="icon"
              className="absolute bottom-1 left-16 text-white"
            >
              <Plus className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </Link>
  );
}
