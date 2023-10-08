"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Accordion,
  AccordionItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import {
  UserCircle2,
  Bookmark,
  Search,
  Crown,
  ChevronDown,
} from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { Button, buttonVariants } from "../ui/button";
import Logo from "../logo";
import { useTheme } from "next-themes";
import PremiumBtn from "./premium-button";
import { cn } from "@/lib/utils";
import { Genres, Navigation } from "@/lib/constants";
import NavItems from "./nav-items";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen} isBlurred={false}>
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      {/* left */}
      <NavItems />

      {/* right */}
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex items-center gap-0.5 md:gap-2">
            <PremiumBtn />
            <Link
              href="/search"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Search className="h-5 md:w-5" />
            </Link>
            <Button
              color="primary"
              size="icon"
              variant="ghost"
              className="hidden md:inline-flex"
            >
              <Bookmark className="h-5 md:w-5" />
            </Button>

            <Dropdown
              size="lg"
              className="h-screen p-2 flex items-start justify-start rounded-none"
            >
              <DropdownTrigger>
                <Button size="icon" variant="ghost">
                  <UserCircle2 className="h-5 md:w-5" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Static Actions"
                className="p-0"
              >
                <DropdownItem
                  key="new"
                  description="Join for free or go Premium."
                  className="py-4 rounded-none"
                >
                  Create Account
                </DropdownItem>
                <DropdownItem
                  key="new"
                  description="Already joined Shuriken? Welcome back."
                  className="py-4 rounded-none"
                >
                  Log In
                </DropdownItem>
                <DropdownItem
                  onClick={handleToggle}
                  key="theme"
                  description="Switch between dark & light mode."
                  className="py-4 rounded-none"
                >
                  Theme
                </DropdownItem>

                <DropdownItem
                  key="new"
                  className="py-4 rounded-none bg-premium"
                >
                  <div className="flex items-center gap-2 font-semibold uppercase justify-center">
                    <Crown /> 14-day free trial
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
            <h3 className="text-muted-foreground text-sm uppercase font-semibold">
              Browse
            </h3>
            {Navigation.map((item: string) => (
              <p className="text-md">{item}</p>
            ))}
            <Accordion className="m-0 p-0">
              <AccordionItem key="1" aria-label="Genres" title="Genres">
                {Genres.map((genre: string) => (
                  <Link href={`/genre?q=${genre}`} className="w-full">
                    <Button variant="ghost" className="w-full justify-start">
                      {genre}
                    </Button>
                  </Link>
                ))}
              </AccordionItem>
            </Accordion>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
