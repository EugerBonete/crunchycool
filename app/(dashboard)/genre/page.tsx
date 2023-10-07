"use client";
import React from "react";
import CardGrid from "@/components/card-grid";
import CardGridLoader from "@/components/loaders/card-grid-loader";
import { useGetAnilistGenre } from "@/context/genre-anilist";
import { useRouter, useSearchParams } from "next/navigation";
import { genreData } from "@/lib/genres";
import { Pagination } from "@nextui-org/react";

const Genre: React.FC = () => {
  const server = "anilist";
  const searchParams = useSearchParams();
  const router = useRouter();

  let q = searchParams.get("q") || "";
  const page = searchParams.get("page") || 1;
  const genreInfo = genreData[q] || {
    icon: "default-icon.png",
    heading: q,
    subheading: "Top Results",
  };

  const { data, isFetching, isFetched } = useGetAnilistGenre({
    genre: q,
    page: page as number,
  });
  return (
    <div className="min-h-[300px] px-5 md:px-10 max-w-6xl mx-auto py-5">
      <div className="flex justify-center flex-col items-center py-5">
        <div className="flex items-center gap-2 text-2xl">
          <genreInfo.icon /> <h3>{genreInfo.heading}</h3>
        </div>
        <p className="text-sm">{genreInfo.subheading}</p>
        <Pagination
          isCompact
          onChange={(e) => router.push(`/genre?q=${q}&page=${e}`)}
          total={data?.totalPages > 10 ? 10 : 3}
          initialPage={1}
          page={page as number}
          className="mt-5"
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
