"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        your Ideas ,Documents,& Plans,Unified,Welcome to
        <span className="underline">Real Notion Docs</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Real Notion Docs is the connected workspace where better, faster works
        happens.
      </h3>

      <Button size="sm">
        Get Docs Free <ArrowRight className="h-5 w-4 ml-2" />
      </Button>
    </div>
  );
};
