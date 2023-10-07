"use client";
import CardGridLoader from "@/components/loaders/card-grid-loader";
import Title from "@/components/shared/title";
import { useSearch } from "@/context/use-search";
import { IAnimeResult } from "@/types";
import { Image, Input, Radio, RadioGroup } from "@nextui-org/react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Search() {
  const [server, setServer] = useState("gogoanime");
  const [query, setQuery] = useState("");

  const type =
    server === "gogoanime"
      ? "anime"
      : server === "anilist"
      ? "meta"
      : server === "movies"
      ? "movies"
      : "manga-ts-react";

  const { data, isFetching, refetch, isFetched } = useSearch({
    id: query,
    server: server,
    type: type,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    refetch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[300px] px-5 md:px-10 max-w-5xl mx-auto space-y-5 md:space-y-10"
    >
      <RadioGroup
        label="What do you want to search?"
        className="my-5"
        value={server}
        onValueChange={setServer}
      >
        <Radio value="gogoanime">Server 1</Radio>
        <Radio value="anilist">Server 2</Radio>
      </RadioGroup>

      <Input
        radius="none"
        size="lg"
        type="text"
        placeholder="Search..."
        className=""
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        isRequired
        isClearable
      />
      {data?.results?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {data.results.map((data: IAnimeResult) => (
            <Link
              href={`/${
                server === "gogoanime"
                  ? "gogo"
                  : server === "anilist"
                  ? "anilist"
                  : server === "movies"
                  ? "movies"
                  : "manga-ts-react"
              }?anime=${data.id}`}
              key={data.id}
              className="p-2 md:p-4"
            >
              <div>
                <Image
                  src={data.image}
                  alt="Anime Image"
                  className="h-32 lg:h-40 w-72 object-cover"
                  radius="none"
                />
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold mt-2">
                    <Title text={data.title} />
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {data.subOrDub === "sub" ? "Subtitled" : "Sub | Dub"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
      {isFetching && <CardGridLoader />}
      {isFetched && data?.results?.length === 0 && (
        <div className="text-center my-10 md:my-20">
          <p>No results found.</p>
          <p>Try a different server.</p>
        </div>
      )}
    </form>
  );
}
