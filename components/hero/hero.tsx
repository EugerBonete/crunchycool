"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAnilistTrending } from "@/context/trending-anilist";
import { IAnimeResult } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Play, Bookmark } from "lucide-react";
import { Tooltip } from "@nextui-org/react";
import HeroSliderLoader from "./hero-slider-loader";
import { Button, buttonVariants } from "../ui/button";
import Title from "../shared/title";
import Description from "../shared/description";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HeroSlider() {
  const { data: trending, isLoading } = useGetAnilistTrending(1);

  const pagination = {
    clickable: true,
    // @ts-ignore
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };

  if (isLoading) {
    return <HeroSliderLoader />;
  }
  return (
    <div className="w-screen max-w-[1500px] mx-auto mb-5 md:mb-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={pagination}
        loop={true}
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        className="relative"
      >
        <Button
          variant="link"
          size="icon"
          className="image-swiper-button-prev hidden sm:flex absolute left-1 top-1/2 transform -translate-y-1/2 z-10 text-white"
        >
          <ChevronLeft className="md:h-10 md:w-10" />
        </Button>
        <Button
          variant="link"
          size="icon"
          className="image-swiper-button-next hidden sm:flex absolute right-1 top-1/2 transform -translate-y-1/2 z-10 text-white"
        >
          <ChevronRight className="md:h-10 md:w-10" />
        </Button>

        {trending?.results
          ?.slice(3, 8)
          ?.map((anime: IAnimeResult, index: number) => {
            if (index !== 2) {
              // Skip the element at index 2 (third element)
              return (
                <SwiperSlide key={anime.id} className="relative">
                  <SwiperCard anime={anime} />
                </SwiperSlide>
              );
            }
            return null; // Render null for the third element to skip it
          })}
      </Swiper>
    </div>
  );
}

function SwiperCard({ anime }: { anime: IAnimeResult }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent p-5 md:p-10 hidden sm:flex w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent p-5 md:p-10 flex sm:hidden " />
      <div className="absolute inset-0 px-5 py-8 sm:p-10 flex md:mx-5">
        <div className="flex-1 flex flex-col gap-4 justify-between sm:justify-center">
          <Link
            href={`anilist?anime=${anime.id}`}
            className="text-center sm:text-left text-xl md:text-2xl font-bold text-white"
          >
            <Title text={anime.title} />
          </Link>
          <p className="hidden sm:inline text-xs text-white/70">
            {anime.genres.map((genre: string, index: number) => (
              <span key={index}>
                {genre}
                {index !== anime.genres.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <div className="hidden md:inline md:w-1/2 max-w-[500px]">
            <p className="text-sm line-clamp-4 text-white">
              <Description text={anime.description} />
            </p>
          </div>
          <div className="flex items-center gap-2 mt-10 md:mt-0">
            <Link
              href={`anilist?anime=${anime.id}`}
              className={cn(
                buttonVariants(),
                "uppercase w-full sm:w-fit text-sm md:text-medium min-w-[180px]"
              )}
            >
              <Play className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Start watching e1</span>
              <span className="inline sm:hidden">Start watching</span>
            </Link>
            <Tooltip showArrow={true} content="Add to Watchlist">
              <Button size="icon" variant="outline" className="min-w-[40px]">
                <Bookmark className="h-5 w-5" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>

      <img
        src={anime.cover || ""}
        alt="anime cover"
        className="hidden sm:block object-cover w-full h-[500px]"
      />

      <img
        src={anime.image || ""}
        alt="anime image"
        className="block sm:hidden object-cover object-top w-full h-[450px]"
      />
    </>
  );
}
