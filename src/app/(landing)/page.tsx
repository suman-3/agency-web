import Navbar from "@/components/shared/navbar";
import { StarsIcon } from "lucide-react";
import React from "react";
import Hero from "./_components/hero";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="absolute inset-x-0 top-[200px] h-[400px] max-md:hidden "
        style={{
          background:
            "repeating-linear-gradient(to right, hsl(var(--border)), transparent 1px, transparent 50px), repeating-linear-gradient(to bottom, hsl(var(--border)), transparent 1px, transparent 50px)",
        }}
      />

<main className="container mb-[80px] top-[70px] relative max-w-[1100px] px-2 py-4 lg:py-16">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)",
          }}
        >
          <div className="relative">
            <StarsIcon
              className="absolute -left-2 -top-2 z-10 size-4 xl:scale-[200%]"
              stroke="none"
              fill="currentColor"
            />
            <StarsIcon
              className="absolute -bottom-2 -right-2 z-10 size-4 xl:scale-[200%]"
              stroke="none"
              fill="currentColor"
            />
            <Hero />
          </div>
   
        </div>
      </main>
    </>
  );
};

export default LandingPage;
