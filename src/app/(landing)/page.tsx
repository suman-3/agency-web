import Navbar from "@/components/shared/navbar";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="absolute inset-x-0 top-[200px] h-[250px] max-md:hidden"
        style={{
          background:
            "repeating-linear-gradient(to right, hsl(var(--border)), transparent 1px, transparent 50px), repeating-linear-gradient(to bottom, hsl(var(--border)), transparent 1px, transparent 50px)",
        }}
      />
    </>
  );
};

export default LandingPage;
