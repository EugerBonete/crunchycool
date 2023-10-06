import { Tooltip } from "@nextui-org/react";
import { Crown } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function PremiumBtn() {
  return (
    <Tooltip
      showArrow={true}
      content={
        <div className="px-1 py-2">
          <div className="flex items-center gap-2 font-semibold uppercase justify-center">
            <Crown /> 14-day free trial
          </div>
          <p className="w-[300px] text-tiny">
            Premium access includes unlimited anime, no ads, and new episodes
            shortly after they air in Japan. Try it now!
          </p>
        </div>
      }
    >
      <>
        <Button className="hidden md:flex">
          <Crown className="h-5 md:w-5 mr-1" />
          Premium
        </Button>
        <Button size="icon" className="flex md:hidden">
          <Crown className="h-5 md:w-5" />
        </Button>
      </>
    </Tooltip>
  );
}
