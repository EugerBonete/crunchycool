"use client";

import { useGetAnilistInfo } from "@/context/info-anilist";
import { useSearchParams } from "next/navigation";
import AnilistInfo from "@/components/anilist/anilist-info";

export default function AnilistPage() {
  const searchParams = useSearchParams();

  const anime = searchParams.get("anime");

  const { data, isLoading } = useGetAnilistInfo(anime as string);

  if (isLoading) {
    return "Loading...";
  }
  console.log(data);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-52 w-full relative">
        <div className="relative h-full">
          <img src={data.image!} className="h-full w-full object-cover" />
          <div className="absolute bg-black/70 inset-0 backdrop-blur-sm"></div>
        </div>

        <img
          src={data.cover!}
          className="absolute inset-0 mx-auto h-full w-96 object-cover"
        />
      </div>
      <AnilistInfo data={data} />
    </div>
  );
}
