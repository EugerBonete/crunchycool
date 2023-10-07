"use client";
import CardGrid from "@/components/card-grid";
import CardGridLoader from "@/components/loaders/card-grid-loader";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/context/use-search";
import { Image, Input, Radio, RadioGroup } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
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
      className="min-h-[300px] px-5 md:px-10 max-w-5xl mx-auto py-5 space-y-3 md:space-y-5"
    >
      <RadioGroup
        label="What do you want to search?"
        className="px-2 md:px-4"
        value={server}
        onValueChange={setServer}
      >
        <Radio value="gogoanime">Server 1</Radio>
        <Radio value="anilist">Server 2</Radio>
      </RadioGroup>

      <div className="flex items-center">
        <Input
          radius="none"
          type="text"
          placeholder="Search..."
          className="px-2 md:px-4"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          isRequired
          isClearable
        />
        <Button size="icon">
          <SearchIcon />
        </Button>
      </div>
      {isFetched && <p className="px-2 md:px-4">Top Results</p>}
      {data?.results?.length ? <CardGrid data={data} server={server} /> : ""}
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
