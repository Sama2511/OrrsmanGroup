"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Contact us", href: "/contact" },
  ];
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`bg-card/20 fixed top-0 left-1/2 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col justify-center border-2 py-2 backdrop-blur-lg md:rounded-full ${isOpen ? "rounded-sm" : "rounded-full"}`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-10 flex w-full items-center justify-between">
          <Link href="/">
            <Image
              src="/LogoNoBg.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/"></Link>
          <div className="text-foreground mr-10 hidden space-x-5 font-semibold md:block">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary font-switzer transition-colors ${
                  isActive(link.href)
                    ? "text-primary border-primary border-b-2 pb-1"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              onClick={() => setIsOpen(false)}
              href={link.href}
              className={`w-full rounded-lg py-2 text-center transition-colors ${
                isActive(link.href)
                  ? "text-primary bg-primary/10 font-bold"
                  : "hover:bg-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
