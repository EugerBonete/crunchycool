"use client";

import HeroSlider from "@/components/hero/hero";
import AnimeSlider from "@/components/slider/anime-slider-container";
import { useGetGogoRecent } from "@/context/recent-gogoanime";
import { useGetAnilistRomance } from "@/context/romance-anilist";
import { useGetGogoTopAiring } from "@/context/trending-gogoanime";

export default function Home() {
  const { data: romance, isLoading: romanceLoading } = useGetAnilistRomance(1);
  const { data: trendingGo, isLoading: trendingGoLoading } =
    useGetGogoTopAiring(1);

  const { data: recentGo, isLoading: recentGoLoading } = useGetGogoRecent(1);

  return (
    <>
      <section className="min-h-screen pb-20">
        <HeroSlider />

        <AnimeSlider
          data={trendingGo}
          isLoading={trendingGoLoading}
          headline={{
            title: "Trending Train",
            subtitle: "Check out the latest trending anime!!",
          }}
        />

        <AnimeSlider
          data={recentGo}
          isLoading={recentGoLoading}
          headline={{
            title: "Latest Release",
            subtitle: "The newest anime just for you.",
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
      </section>
    </>
  );
}
