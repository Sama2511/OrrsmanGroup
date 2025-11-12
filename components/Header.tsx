"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav
      className={`bg-card/20 fixed top-0 left-1/2 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col justify-center border-2 py-5 backdrop-blur-lg md:rounded-full ${isOpen ? "rounded-sm" : "rounded-full"}`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-10 flex w-full items-center justify-between">
          <Link href="/">
            <Image
              src="/LogoOG2.png"
              alt="logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <div className="mr-20 hidden space-x-5 font-semibold text-black md:block">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/">About us</Link>
            <Link href="/">Contact us</Link>
          </div>
        </div>
        <div className="pr-8 md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-3 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/">About us</Link>
          <Link href="/">Contact us</Link>
        </div>
      )}
    </nav>
  );
}
