"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { SanityDocument } from "next-sanity";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

type HeroSectionProps = {
  home: SanityDocument[];
};

export default function HeroSection(home: HeroSectionProps) {
  return (
    <section className="relative mt-10 flex h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#e7e5e4]">
      <Image
        src="/Homepageimage.png"
        alt="Global logistics illustration"
        fill
        priority
        className="object-cover opacity-90 md:object-scale-down"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#e7e5e4]/60 to-[#e7e5e4]/80"></div>

      <div className="relative z-10 max-w-3xl px-4 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-outfit mb-6 text-3xl font-semibold text-[#1e293b] md:text-5xl lg:text-6xl">
            {home.home[0].heroTitle}
          </h1>
        </motion.div>
        <p className="font-switzer font- mb-8 text-base text-[#1e293b]/80 md:text-lg">
          {home.home[0].heroSub}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button className="bg-primary cursor-pointer px-10 py-6 text-base transition md:text-lg">
              Get Quote
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="bg-secondary cursor-pointer border-none px-8 py-6 text-base text-[#1e293b] transition md:text-lg"
            >
              Our Services
            </Button>
          </Link>
        </div>
        <div className="bg-card/80 mt-8 w-full max-w-3xl rounded-2xl border-2 px-6 py-4 backdrop-blur-sm">
          <h2 className="font-outfit mb-4 text-start text-xl font-semibold text-[#1e293b] md:text-2xl">
            Track Your Shipment
          </h2>
          <div className="flex items-center gap-0">
            <Input
              className="bg-background h-12 flex-1 rounded-l-xl rounded-r-none border-r-0 text-base md:text-lg"
              placeholder="Enter tracking number"
            />
            <Button className="font-outfit bg-secondary-foreground h-12 cursor-pointer rounded-l-none rounded-r-xl px-8 text-base md:text-lg">
              Track
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
