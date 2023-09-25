"use client";

import HeroSlider from "@/components/hero/hero";
import AnimeSlider from "@/components/slider/anime-slider";
import { useGetAnilistsport } from "@/context/sport-anilist";

export default function Home() {
  const { data: sports, isLoading: sportsLoading } = useGetAnilistsport(1);

  return (
    <>
      <section className="min-h-screen">
        <HeroSlider />
        <AnimeSlider
          data={sports}
          isLoading={sportsLoading}
          headline={{
            title: "The School of Life",
            subtitle: "Academics come first for these studious students!",
          }}
        />

        <AnimeSlider
          data={sports}
          isLoading={sportsLoading}
          headline={{
            title: "The School of Life",
            subtitle: "Academics come first for these studious students!",
          }}
        />
      </section>
    </>
  );
}
