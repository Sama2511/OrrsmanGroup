import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
export default function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-[#e7e5e4]">
      <Image
        src="/Homepageimage.png"
        alt="Global logistics illustration"
        fill
        priority
        className="object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#e7e5e4]/60 to-[#e7e5e4]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 text-center md:px-10">
        <h1 className="mb-6 text-3xl font-bold text-[#1e293b] md:text-5xl">
          Global Freight & Logistics Solutions
        </h1>
        <p className="mb-8 text-base text-[#1e293b]/80 md:text-lg">
          Connecting Australia to the world through reliable sea and air
          freight, customs clearance, and specialised logistics services with
          Orrsman Group
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button className="bg-primary px-8 py-3 text-base transition md:text-lg">
            Get Quote
          </Button>
          <Button
            variant="outline"
            className="bg-secondary border-none px-8 py-3 text-base text-[#1e293b] transition md:text-lg"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
