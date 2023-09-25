import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IAnimeResult } from "@/types";
import { Chip } from "@nextui-org/react";

import Link from "next/link";
import Title from "../shared/title";
import { Button } from "../ui/button";
import { Bookmark, Play, Plus } from "lucide-react";

interface CardSliderProps {
  data: IAnimeResult;
  prevId: string;
  nextId: string;
}

export default function CardSlider({ data, nextId, prevId }: CardSliderProps) {
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
          <SwiperSlide key={anime.id} className="relative">
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
      className="flex flex-col gap-2 h-80 md:h-96 cursor-pointer group relative"
    >
      <img
        src={anime.image || ""}
        alt="anime cover"
        height={500}
        width={500}
        className="object-cover max-w-[200px] w-full h-60 md:h-72"
      />
      <h3 className="text-sm line-clamp-2 group-hover:underline h-10">
        <Title text={anime.title} />
      </h3>
      {anime.episodeNumber && (
        <p className="text-xs text-muted-foreground">
          EP {anime.episodeNumber}
        </p>
      )}

      {/* hover effect */}
      <div className="absolute inset-0 bg-black hidden group-hover:flex flex-col p-4 gap-4">
        {/* Title inside the overlay div */}
        <h3 className="text-md text-white">
          <Title text={anime.title} />
        </h3>

        <div className="flex flex-wrap gap-2 overflow-y-visible">
          {anime?.genres?.length &&
            anime.genres.map((item: string, index: number) => (
              <Chip key={index}>{item}</Chip>
            ))}

          {anime.episodeNumber && <Chip> EP {anime.episodeNumber}</Chip>}
          <Button
            variant="link"
            size="icon"
            className="absolute bottom-1 left-1 text-white"
          >
            <Play />
          </Button>

          <Button
            variant="link"
            size="icon"
            className="absolute bottom-1 left-9 text-white"
          >
            <Bookmark />
          </Button>

          <Button
            variant="link"
            size="icon"
            className="absolute bottom-1 left-16 text-white"
          >
            <Plus />
          </Button>
        </div>
      </div>
    </Link>
  );
}
