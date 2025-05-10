import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full",
        className
      )}
    >
      <img
        src={imageUrl}
        alt="Logo"
        className={cn(
          "relative left-2 top-2 transition-all z-10 duration-300",
          {
            "w-[200px] h-[200px] md:w-[300px] md:h-[300px]": size === 20,
            "w-[250px] h-[250px] md:w-[350px] md:h-[350px]": size === 30,
            "w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]": size === 40,
          }
        )}
      />
    </div>
  );
};
