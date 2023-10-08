"use client";
import React from "react";
import CardGrid from "@/components/card-grid";
import CardGridLoader from "@/components/loaders/card-grid-loader";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@nextui-org/react";
import { useGetGogo } from "@/context/gogo";

const Genre: React.FC = () => {
  const server = "anilist";
  const searchParams = useSearchParams();
  const router = useRouter();

  const typeMap: Record<string, string> = {
    New: "recent-episodes",
    Trending: "top-airing",
    Popular: "popular",
  };

  const q = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const type: string = typeMap[q] || "";

  const { data, isFetching, isFetched } = useGetGogo({
    type: type,
    page: page as number,
  });

  return (
    <div className="min-h-[300px] px-5 md:px-10 max-w-6xl mx-auto py-5">
      <div className="flex justify-between px-2 md:px-4 items-center py-5">
        <h3 className="text-2xl">{q}</h3>
        <Pagination
          isCompact
          onChange={(e) => router.push(`/video?q=${q}&page=${e}`)}
          total={data?.totalPages > 10 ? 10 : 10}
          initialPage={1}
          page={page as number}
        />
      </div>
      {data?.results?.length ? <CardGrid data={data} server={server} /> : ""}
      {isFetching && <CardGridLoader />}
      {isFetched && data?.results?.length === 0 && (
        <div className="text-center my-10 md:my-20">
          <p>No results found.</p>
          <p>Try a different server.</p>
        </div>
      )}
    </div>
  );
};

export default Genre;
