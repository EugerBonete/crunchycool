"use client";

import HeroSlider from "@/components/hero/hero";
import AnimeSlider from "@/components/slider/anime-slider-container";
import { useGetAnilistMecha } from "@/context/mecha-anilist";
import { useGetGogoRecent } from "@/context/recent-gogoanime";
import { useGetAnilistRomance } from "@/context/romance-anilist";
import { useGetAnilistsport } from "@/context/sport-anilist";
import { useGetGogoTopAiring } from "@/context/trending-gogoanime";

export default function Home() {
  const { data: sports, isLoading: sportsLoading } = useGetAnilistsport(1);
  const { data: romance, isLoading: romanceLoading } = useGetAnilistRomance(1);
  const { data: mecha, isLoading: mechaLoading } = useGetAnilistMecha(1);
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
