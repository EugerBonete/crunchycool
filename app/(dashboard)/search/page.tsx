"use client";
import InfoLoader from "@/components/loaders/loader";
import Title from "@/components/shared/title";
import { useSearch } from "@/context/use-search";
import { IAnimeResult } from "@/types";
import {
  Card,
  Image,
  Input,
  Radio,
  RadioGroup,
  Skeleton,
} from "@nextui-org/react";
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

  const { data, isLoading, isFetching, isError, refetch } = useSearch({
    id: query,
    server: server,
    type: type,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
        <Radio value="gogoanime">Anime Server 1</Radio>
        <Radio value="anilist">Anime Server 2</Radio>
        <Radio value="manga">Manga</Radio>
        <Radio value="movies">Movies</Radio>
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
      {data?.results?.length && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
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
              <div className="shadow-md">
                <img
                  src={data.image}
                  alt="Anime Image"
                  className="w-full h-52 md:h-72 object-cover"
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
      )}
      {isFetching && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Card key={idx} className="w-[200px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          ))}
        </div>
      )}
    </form>
  );
}
