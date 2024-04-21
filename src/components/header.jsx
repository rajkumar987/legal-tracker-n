"use client";
import React from "react";
import Link from "next/link";
import { CircleUser, LogOut, Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { menu } from "..//constants/navbar-data";
import { Avatar } from "@radix-ui/react-avatar";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex h-14  justify-between items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 fixed w-full bg-white z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold mb-5"
            ></Link>
            {menu.map((nav) => (
              <SheetTrigger asChild key={nav.key}>
                <Link
                  href={nav.url}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  {nav.name}
                </Link>
              </SheetTrigger>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div></div>
      <DropdownMenu className="ml-[]">
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="flex items-center gap-2 ">
            <Avatar>
              <CircleUser />
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>user@gmail.com</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                deleteCookie("isAuthenticated");
                router.replace("/login");
              }}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
