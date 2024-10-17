"use client";

import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Divide } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import Link from "next/link";
import { Spinner } from "@/components/spinner";
export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton mode="modal">
          <Button size="sm">
            Get docs free <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignUpButton>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Real Docs <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};
