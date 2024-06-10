import Link from "next/link";

import { ThemeSwitch } from "@/components/modal/theme-switch";

const Navbar = async () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full border-b bg-transparent backdrop-blur-md">
      <div className="py-4 flex md:px-20 px-4 justify-between">
        <div>
          <Link href="/">
            <h1 className="tracking-tighter font-bold text-3xl">Lorem</h1>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Navbar;
