"use client";

import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { Category } from "@prisma/client";
import React, { useEffect, useRef } from "react";

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const categoryRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = items.findIndex((item) => item.id === categoryActiveId);
    const activeRef = categoryRefs.current[activeIndex];

    if (activeRef) {
      activeRef.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [categoryActiveId, items]);

  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl overflow-x-auto scrollbar-hide ml-4 mr-4",
        className
      )}
    >
      {items.map(({ name, id }, index) => (
        <a
          ref={(el) => {
            categoryRefs.current[index] = el;
          }}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5 whitespace-nowrap",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
