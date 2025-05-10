import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  onSubmit,
  className,
  loading,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex md:flex-row lg:flex-row flex-col w-full rounded-2xl overflow-hidden"
      )}
    >
      {/* Image section */}
      <div className="flex-1 flex items-center justify-center bg-white p-4 overflow-hidden">
        <img src={imageUrl} alt={name} className="object-contain" />
      </div>

      {/* Info section */}
      <div className="md:flex-1 bg-[#f7f6f5] px-4 py-6 sm:px-7 sm:py-7 flex flex-col">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart for {price} $
        </Button>
      </div>
    </div>
  );
};
