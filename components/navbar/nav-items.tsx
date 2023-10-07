import {
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Genres, Navigation } from "@/lib/constants";
import Link from "next/link";

export default function NavItems() {
  return (
    <NavbarContent className="hidden md:flex" justify="center">
      <NavbarItem className="flex">
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <Button
              variant="ghost"
              className="flex text-sm items-center cursor-pointer"
            >
              Browse <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex">
              <div className="flex flex-col pr-2 border-r">
                {Navigation.map((item: string) => (
                  <Link href={`/${item}`} key={item}>
                    <Button variant="ghost" className="w-full justify-start">
                      {item}
                    </Button>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs text-muted-foreground font-semibold ml-4 pt-1 my-2 uppercase">
                  Genres
                </h3>
                <div className="grid grid-cols-3">
                  {Genres.map((item: string) => (
                    <Link href={`genre?q=${item}`} key={item}>
                      <Button variant="ghost" className="w-full justify-start">
                        {item}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Link className="text-sm" href="#" aria-current="page">
          <Button variant="ghost">Manga</Button>
        </Link>
        <Link className="text-sm" color="foreground" href="#">
          <Button variant="ghost">Movies</Button>
        </Link>
        <Popover placement="bottom" showArrow={true} radius="none">
          <PopoverTrigger>
            <Button
              variant="ghost"
              className="flex text-sm items-center cursor-pointer"
            >
              News <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex">
              <div className="flex flex-col">
                {Navigation.map((item: string) => (
                  <Button variant="ghost" className="w-full justify-start">
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarItem>
    </NavbarContent>
  );
}
