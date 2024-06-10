import React from "react";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* navbar */}
      <main className="flex max-w-screen-2xl min-w-screen flex-col  dark:bg-black bg-white justify-between dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        {children}
      </main>
      {/* footer */}
    </>
  );
};
