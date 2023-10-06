"use client";
import { useSearch } from "@/context/use-search";
import { IAnimeResult } from "@/types";
import { Image, Input, Radio, RadioGroup } from "@nextui-org/react";
import { FormEvent, useState } from "react";

export default function Search() {
  const [server, setServer] = useState("gogoanime");
  const [query, setQuery] = useState("");

  const { data, isLoading, isFetching, isError, refetch } = useSearch({
    id: query,
    server: server,
    type: "anime",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    refetch();
  };

  console.log(data);
  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[300px] px-5 md:px-10 max-w-5xl mx-auto sticky left-0 top-0"
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
        required
      />
      {data?.results?.length && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.results.map((data: IAnimeResult) => (
            <div key={data.id}>
              <img src={data.image} alt="" />
            </div>
          ))}
        </div>
      )}
      {isFetching && "..."}
    </form>
  );
}
