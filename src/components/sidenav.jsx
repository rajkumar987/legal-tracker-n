"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { menu } from "../constants/navbar-data";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 md:block fixed h-screen w-[18vw] 2xl:w-[15vw] bg-white z-20">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="">Legal Tracker</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-5 gap-1">
            {menu.map((nav) => (
              <Link
                key={nav.key}
                href={nav.url}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all   ${
                  pathname == nav.url &&
                  "bg-black text-gray-50 hover:text-white"
                }`}
              >
                {/* <LineChart className="h-4 w-4" /> */}
                {nav.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
