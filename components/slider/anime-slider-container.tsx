import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import CardSliderLoader from "./anime-slider-loader";
import CardSlider from "./anime-slider";

interface AnimeSliderContainerProps {
  data: any;
  headline: {
    title: string;
    subtitle: string;
  };
  isLoading: boolean;
}

export default function AnimeSliderContainer({
  data,
  headline,
  isLoading,
}: AnimeSliderContainerProps) {
  return (
    <div className="pt-2 md:pt-5 w-screen relative">
      <Button
        variant="link"
        size="icon"
        className="gogo-recent-image-swiper-button-prev absolute left-1 top-1/2 transform -translate-y-1/2 z-10"
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="link"
        size="icon"
        className="gogo-recent-image-swiper-button-next absolute right-1 top-1/2 transform -translate-y-1/2 z-10"
      >
        <ChevronRight />
      </Button>

      <div className="px-5 md:px-10">
        <h3 className="text-xl md:text-2xl font-bold">{headline.title}</h3>
        <p className="text-muted-foreground text-xs md:text-sm pb-2">
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
