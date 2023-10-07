"use client";
import React from "react";
import CardGrid from "@/components/card-grid";
import CardGridLoader from "@/components/loaders/card-grid-loader";
import { useGetAnilistGenre } from "@/context/genre-anilist";
import { useSearchParams } from "next/navigation";
import { TbMapQuestion, TbBrandFunimation } from "react-icons/tb";
import { AiFillFire } from "react-icons/ai";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { PiRobotDuotone } from "react-icons/pi";
import {
  GiBroadsword,
  GiCurvyKnife,
  GiPumpkinLantern,
  GiUfo,
} from "react-icons/gi";
import { FiMusic } from "react-icons/fi";
import { BiSolidGhost } from "react-icons/bi";
import { RiMentalHealthLine } from "react-icons/ri";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdFootball } from "react-icons/io";
// Define a mapping of genres to their corresponding data (icon, heading, subheading)

const genreData: Record<
  string,
  { icon: string; heading: string; subheading: string }
> = {
  Action: {
    icon: AiFillFire,
    heading: "Action",
    subheading: "For all your fist flying and huge explosion needs!",
  },
  Adventure: {
    icon: TbMapQuestion,
    heading: "Adventure",
    subheading: "Venture forth with heroes who hope to achieve their dreams!",
  },
  Comedy: {
    icon: TbBrandFunimation,
    heading: "Comedy",
    subheading:
      "Find lots of laughs from classic slapstick to the in-too-deep cult classics.",
  },
  Drama: {
    icon: FaHeartBroken,
    heading: "Drama",
    subheading:
      "Experience gripping narratives, intense emotions, and unforgettable moments.",
  },
  Fantasy: {
    icon: GiBroadsword,
    heading: "Fantasy",
    subheading: "It's time to get deep and act one more time... with feeling! ",
  },
  Horror: {
    icon: GiPumpkinLantern,
    heading: "Horror",
    subheading:
      "Get ready to be scared out of your wits with spine-chilling tales and terrifying nightmares.",
  },
  ["Mahou Shoujo"]: {
    icon: GiPumpkinLantern,
    heading: "Mahou Shoujo",
    subheading:
      "Join the enchanting world of magical girls and embark on fantastical adventures filled with magic and wonder.",
  },
  Mecha: {
    icon: PiRobotDuotone,
    heading: "Mecha",
    subheading:
      "Enter the realm of colossal machines and high-tech battles in the world of mecha warfare.",
  },
  Music: {
    icon: FiMusic,
    heading: "Music",
    subheading:
      "Immerse yourself in the melodious world of rhythm, harmony, and soulful tunes.",
  },
  Mystery: {
    icon: BiSolidGhost,
    heading: "Mystery",
    subheading:
      "Unravel perplexing enigmas, solve intricate puzzles, and dive into the world of suspense and intrigue.",
  },
  Psychological: {
    icon: RiMentalHealthLine,
    heading: "Psychological",
    subheading:
      "Delve into the depths of the human mind, explore complex psyches, and navigate the twists of mental intrigue.",
  },
  Romance: {
    icon: FaHeart,
    heading: "Romance",
    subheading:
      "Experience the sweet embrace of love, heartwarming connections, and passionate journeys of the heart.",
  },
  ["Sci-Fi"]: {
    icon: GiUfo,
    heading: "Sci-Fi",
    subheading:
      "Embark on futuristic adventures, explore the unknown, and journey through the realms of science fiction.",
  },
  ["Slice of Life"]: {
    icon: BsCalendarDate,
    heading: "Slice of Life",
    subheading: "Slow and steady? That's exactly my kind of vibe.",
  },
  Sports: {
    icon: IoMdFootball,
    heading: "Sports",
    subheading: "Ball (and other forms of physical activity) is life! ",
  },
  Supernatural: {
    icon: BiSolidGhost,
    heading: "Supernatural",
    subheading: "Ghouls, Ghosts, Goblins, and many more creatures abound!",
  },
  Thriller: {
    icon: GiCurvyKnife,
    heading: "Thriller",
    subheading: `A perfect selection of shows to feel that tingle down your spine and scream at the screen "Don't go that way!"`,
  },
};

const Genre: React.FC = () => {
  const server = "anilist";
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";
  const genreInfo = genreData[q] || {
    icon: "default-icon.png",
    heading: q,
    subheading: "Top Results",
  };

  const { data, isFetching, isFetched } = useGetAnilistGenre({
    genre: q,
  });

  return (
    <div className="min-h-[300px] px-5 md:px-10 max-w-5xl mx-auto py-5 space-y-3 md:space-y-5">
      <div className="flex justify-center flex-col items-center py-5">
        <div className="flex items-center gap-2 text-2xl">
          <genreInfo.icon /> <h3>{genreInfo.heading}</h3>
        </div>
        <p className="text-sm">{genreInfo.subheading}</p>
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
