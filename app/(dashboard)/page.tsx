"use client";

import Banner from "@/components/banner";
import HeroSlider from "@/components/hero/hero";
import AnimeSlider from "@/components/slider/anime-slider-container";
import { useGetAnilistGenre } from "@/context/genre-anilist";
import { useGetGogoRecent } from "@/context/recent-gogoanime";
import { useGetGogoTopAiring } from "@/context/trending-gogoanime";

export default function Home() {
  const { data: romance, isLoading: romanceLoading } = useGetAnilistGenre({
    genre: "Romance",
  });

  const { data: mecha, isLoading: mechaLoading } = useGetAnilistGenre({
    genre: "Mecha",
  });
  const { data: trendingGo, isLoading: trendingGoLoading } =
    useGetGogoTopAiring(1);

  const { data: recentGo, isLoading: recentGoLoading } = useGetGogoRecent(1);

  return (
    <>
      <section className="min-h-screen pb-20">
        <HeroSlider />

        <AnimeSlider
          data={recentGo}
          isLoading={recentGoLoading}
          headline={{
            title: "New Episodes",
            subtitle: "The newest anime just for you.",
          }}
        />

        <AnimeSlider
          data={trendingGo}
          isLoading={trendingGoLoading}
          headline={{
            title: "Trending Train",
            subtitle: "Check out the latest trending anime!!",
          }}
        />

        <Banner />

        <AnimeSlider
          data={romance}
          isLoading={romanceLoading}
          headline={{
            title: "Romance",
            subtitle: "Make your heart skip a beat.",
          }}
        />

        <AnimeSlider
          data={mecha}
          isLoading={mechaLoading}
          headline={{
            title: "Robots",
            subtitle: "Pick your mech.",
          }}
        />
      </section>
    </>
  );
}
