"use client";

import { UseScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toglle";

export const Navbar = () => {
  const scrolled = UseScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed dark:bg-[#1F1F1F] top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="w-full md:ml-auto  md:justify-end justify-between flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
