import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import CardSliderLoader from "./card-slider-loader";
import CardSlider from "./card-slider";

interface AnimeSliderProps {
  data: any;
  headline: {
    title: string;
    subtitle: string;
  };
  isLoading: boolean;
}

export default function AnimeSlider({
  data,
  headline,
  isLoading,
}: AnimeSliderProps) {
  return (
    <div className="pt-2 md:pt-5 w-screen relative">
      <Button
        variant="ghost"
        size="icon"
        className="gogo-recent-image-swiper-button-prev absolute left-1 top-1/2 transform -translate-y-1/2 z-10"
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="gogo-recent-image-swiper-button-next absolute right-1 top-1/2 transform -translate-y-1/2 z-10"
      >
        <ChevronRight />
      </Button>

      <div className="px-5 md:px-10">
        <h3 className="text-xl md:text-2xl font-bold">{headline.title}</h3>
        <p className="text-muted-foreground text-sm md:text-base pb-2">
          {headline.subtitle}
        </p>

        {isLoading ? (
          <CardSliderLoader />
        ) : (
          <CardSlider
            data={data}
            prevId="gogo-recent-image-swiper-button-prev"
            nextId="gogo-recent-image-swiper-button-next"
          />
        )}
      </div>
    </div>
  );
}
