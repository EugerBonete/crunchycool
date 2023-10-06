"use client";
import { Image, Input, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

export default function Search() {
  const [selected, setSelected] = useState("gogoanime");
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="min-h-[300px] px-5 md:px-10 max-w-5xl mx-auto sticky left-0 top-0">
      <RadioGroup
        label="What do you want to search?"
        className="my-5"
        value={selected}
        onValueChange={setSelected}
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
    </div>
  );
}
