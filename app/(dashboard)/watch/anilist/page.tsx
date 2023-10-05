"use client";

import AnilistEpisode from "@/components/anilist/anilist-episode";
import InfoLoader from "@/components/loaders/loader";
import Title from "@/components/shared/title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import VideoPlayer from "@/components/video-player";
import { useGetAnilistEpisode } from "@/context/episode-anilist";
import { useGetAnilistInfo } from "@/context/info-anilist";
import { IAnimeResult } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Watch() {
  const searchParams = useSearchParams();
  const anime = searchParams.get("anime");
  const episode = searchParams.get("episode");

  const { data: info, isLoading: infoLoading } = useGetAnilistInfo(
    anime as string
  );

  const { data, isLoading } = useGetAnilistEpisode(episode as string);

  if (isLoading) return <InfoLoader />;
  if (infoLoading) return <InfoLoader />;

  const currentEpisodeInfo = info?.episodes.find(
    (id: IAnimeResult) => episode === id.id
  );
  console.log(currentEpisodeInfo);
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-2 px-5 md:px-0">
      <div>{data?.sources && <VideoPlayer episode={data} />}</div>

      <Link href={`/anilist?anime=${info.id}`} className="text-orange">
        <Title text={info.title} />
      </Link>
      <p>
        {currentEpisodeInfo.number && (
          <span>Episode {currentEpisodeInfo.number}</span>
        )}
        {currentEpisodeInfo.title && <span> : {currentEpisodeInfo.title}</span>}
      </p>
      {info.episodes.length ? (
        <AnilistEpisode data={info} />
      ) : (
        <p className="text-center my-10 md:my-20">No episodes available</p>
      )}
    </div>
  );
}
