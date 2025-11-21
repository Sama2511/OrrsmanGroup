"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services({ services }: { services: SanityDocument[] }) {
  const containerImages = [
    "/blueContainer.png",
    "/orangeContainer.png",
    "/redContainer.png",
    "/greenContainer.png",
    "/grayContainer.png",
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <motion.h1
        className="text-foreground mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      <ul className="mx-auto grid md:grid-cols-2">
        {services.map((service, index) => {
          const containerImage =
            containerImages[index % containerImages.length];

          const isLeftColumn = index % 2 === 0;
          const slideFrom = isLeftColumn ? -100 : 100;

          return (
            <motion.li
              key={index}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, x: slideFrom }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="relative h-[450px] w-full md:h-[500px] lg:h-[550px]">
                <Image
                  src={containerImage}
                  alt={`${service.title} container`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12">
                <h2 className="mb-4 text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl">
                  {service.title}
                </h2>
                <p className="mb-6 line-clamp-3 text-base leading-relaxed text-white/95 drop-shadow-md md:text-lg lg:max-w-[80%]">
                  {service.description}
                </p>
                <div>
                  <Link href="/services">
                    <Button
                      variant="default"
                      size="lg"
                      className="shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
