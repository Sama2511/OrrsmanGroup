import React from "react";
import Image from "next/image";

export default function ImageBanner() {
  return (
    <section className="bg-background relative mx-auto mt-20 mb-30 w-full max-w-[1600px] lg:h-[500px]">
      <div className="absolute inset-0">
        <Image
          src="/largeImage.jpg"
          alt="Global Logistics Operations"
          fill
          className="object-cover"
          priority
        />
        <div className="bg-secondary/30 absolute inset-0" />
      </div>

      <div className="relative top-40 z-10 flex h-full items-center px-6 sm:top-30 md:top-21 md:px-0">
        <div className="max-w-2xl">
          <div className="bg-foreground/90 p-8 backdrop-blur-sm md:p-10">
            <h2 className="font-outfit mb-4 text-xl leading-tight font-semibold text-white md:text-2xl lg:text-5xl">
              Your Trusted Global Logistics Partner
            </h2>
            <p className="font-switzer text-sm leading-relaxed font-thin text-white/95 md:text-lg">
              Connecting Australian businesses to the world with reliable,
              cost-effective freight solutions. From air and sea freight to
              customs clearance and warehousing, we handle every aspect of your
              supply chain with precision and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
