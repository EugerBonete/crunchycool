"use client";

import { useGetAnilistInfo } from "@/context/info-anilist";
import { Image } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

export default function AnilistPage() {
  const searchParams = useSearchParams();
  console.log(searchParams);

  const anime = searchParams.get("anime");

  const { data, isLoading } = useGetAnilistInfo(anime as string);

  if (isLoading) {
    return "Loading...";
  }
  console.log(data);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-52 w-full bg-red-500 relative">
        <div className="relative h-full">
          <img src={data.cover!} className="h-full w-full object-cover" />
          <div className="absolute bg-black/70 inset-0"></div>
        </div>

        <img
          src={data.cover!}
          className="absolute inset-0 mx-auto h-full w-96 object-cover"
        />
      </div>
      <div className="h-96 bg-green-500 mx-40"></div>
    </div>
  );
}
