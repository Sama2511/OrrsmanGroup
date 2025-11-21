import React from "react";
import Image from "next/image";

export default function ImageBanner() {
  return (
    <section className="relative mt-20 h-[500px] w-full overflow-hidden md:h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/largeImage.jpg"
          alt="Global Logistics Operations"
          fill
          className="object-cover"
          priority
        />
        <div className="bg-secondary/20 absolute inset-0" />
      </div>

      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <div className="max-w-2xl">
          <div className="bg-primary/90 p-8 backdrop-blur-sm md:p-10">
            <h2 className="mb-4 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Your Trusted Global Logistics Partner
            </h2>
            <p className="text-lg leading-relaxed text-white/95 md:text-xl">
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
