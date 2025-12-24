"use client";
import React from "react";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { motion } from "framer-motion";
import {
  Plane,
  Ship,
  FileText,
  Package,
  Warehouse,
  Car,
  ArrowRight,
  PlaneIcon,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Services({ services }: { services: SanityDocument[] }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto px-6 md:px-12 xl:max-w-[85%]">
        <ul className="grid gap-6 lg:grid-cols-2">
          <motion.li
            className="bg-background flex flex-col justify-between rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-foreground font-outfit mb-3 w-fit text-3xl font-semibold md:text-4xl lg:text-5xl">
                Our Services
                <span className="bg-primary block h-1 w-full"></span>
              </h2>
              <p className="text-muted-foreground font-switzer mb-5 text-base leading-relaxed md:text-lg">
                Expert logistics solutions tailored to your business needs,
                delivering efficiency and reliability across every mile.
              </p>
            </div>
          </motion.li>

          {services.map((service, index) => {
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <Link href="/services">
                  <div className="bg-secondary group h-full rounded-[2px] border border-gray-200 p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <h2 className="text-foreground font-outfit mb-3 text-xl font-medium md:text-2xl">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground font-switzer mb-6 line-clamp-3 text-sm leading-relaxed md:text-base">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 underline">
                      Learn More
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
