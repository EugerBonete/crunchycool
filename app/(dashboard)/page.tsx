"use client";

import HeroSlider from "@/components/hero/hero";
import AnimeSlider from "@/components/slider/anime-slider-container";
import { useGetAnilistMecha } from "@/context/mecha-anilist";
import { useGetAnilistRomance } from "@/context/romance-anilist";
import { useGetAnilistsport } from "@/context/sport-anilist";

export default function Home() {
  const { data: sports, isLoading: sportsLoading } = useGetAnilistsport(1);
  const { data: romance, isLoading: romanceLoading } = useGetAnilistRomance(1);
  const { data: mecha, isLoading: mechaLoading } = useGetAnilistMecha(1);

  return (
    <>
      <section className="min-h-screen pb-20">
        <HeroSlider />

        <AnimeSlider
          data={mecha}
          isLoading={mechaLoading}
          headline={{
            title: "Mecha Madness",
            subtitle: "Get in the robot!!",
          }}
        />

        <AnimeSlider
          data={romance}
          isLoading={romanceLoading}
          headline={{
            title: "Romance",
            subtitle: "Make your heart skip a beat.",
          }}
        />

        <AnimeSlider
          data={sports}
          isLoading={sportsLoading}
          headline={{
            title: "Sports",
            subtitle: "Root for your favorite team!",
          }}
        />
      </section>
    </>
  );
}
