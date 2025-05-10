"use client";

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/shared/components/ui/sheet";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Filters } from "./filters";

export const FiltersDrawer: React.FC = () => {
  return (
    <>
      {/* Mobile bar with burger icon */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="block md:hidden">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-6 h-6" />
              <span className="text-base font-medium">Filters</span>
            </div>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[95%] max-w-sm bg-white p-4 overflow-y-auto max-h-screen"
        >
          <Filters />
        </SheetContent>
      </Sheet>

      {/* Desktop filters visible always */}
      <div className="hidden md:block">
        <Filters />
      </div>
    </>
  );
};
