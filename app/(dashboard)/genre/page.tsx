"use client";
import CardGrid from "@/components/card-grid";
import CardGridLoader from "@/components/loaders/card-grid-loader";
import { useGetAnilistGenre } from "@/context/genre-anilist";
import { useSearchParams } from "next/navigation";

export default function Genre() {
  const server = "anilist";
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";

  const { data, isFetching, isFetched } = useGetAnilistGenre({
    genre: q,
  });

  return (
    <div className="min-h-[300px] px-5 md:px-10 max-w-5xl mx-auto py-5 space-y-3 md:space-y-5">
      {isFetched && <p className="px-2 md:px-4">Top Results</p>}
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
}
