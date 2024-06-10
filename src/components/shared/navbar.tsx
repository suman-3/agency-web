import Link from "next/link";

import { ThemeSwitch } from "@/components/modal/theme-switch";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight, CircleUser } from "lucide-react";

const Navbar = async () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full border-b bg-transparent backdrop-blur-md">
      <div className="py-4 flex md:px-14 px-4 justify-between">
        <div>
          <Link href="/">
            <h1 className="tracking-tighter font-bold text-xl  md:text-2xl lg:text-3xl">
              Extion Infotech
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-3">
          <Button size="sm" variant="gooeyRight">
            Log In
            <CircleUser className="ml-2 size-4 shrink-0" />
          </Button>

          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
