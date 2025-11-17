"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SanityDocument } from "next-sanity";

type HomeClientProps = {
  services: SanityDocument[];
};

export function HomeClient({ services }: HomeClientProps) {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });

  const trustedRef = useRef(null);
  const trustedInView = useInView(trustedRef, { once: true, margin: "-100px" });

  return (
    <>
      <section ref={servicesRef}>
        <motion.div
          className="m-auto mt-50 mb-20 max-w-[90%] space-y-3 text-center md:mt-50"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-semibold">Our Services</h1>
          <p>
            Comprehensive logistics solutions for businesses across Australia
            and globally
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-[90%] grid-cols-1 gap-10 md:max-w-6xl md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border-primary relative border-l-4 py-4 pl-8 text-left transition-colors hover:border-blue-700"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {service.briefDescription}
              </p>
              <Link href="/services">
                <Button
                  variant="link"
                  size="sm"
                  className="text-secondary-foreground cursor-pointer text-sm font-semibold"
                >
                  Learn More →
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-secondary mt-20 py-16 md:py-24" ref={trustedRef}>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={trustedInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-foreground mb-6 text-4xl font-bold md:text-4xl">
                Trusted Logistics Partner
              </h1>
              <p className="mb-12 text-lg leading-relaxed text-gray-600">
                Orrsman Group International Logistics (OG) is a leading
                Australian freight forwarder with extensive experience in
                international trade. We provide end-to-end logistics solutions
                that connect Australian businesses to global markets.
              </p>

              <div className="lg:hidden">
                <img
                  src="/section4.png"
                  alt="Logistics"
                  className="w-full max-w-md lg:max-w-lg"
                />
              </div>

              <ul className="mb-10 flex gap-8 md:gap-12">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "50+", label: "Countries Served" },
                  { number: "1000+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <motion.li
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={trustedInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase md:text-base">
                      {stat.label}
                    </div>
                  </motion.li>
                ))}
              </ul>

              <Link href="/about">
                <Button
                  variant="outline"
                  className="cursor-pointer px-8 py-6 text-base font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="hidden flex-1 justify-center lg:flex"
              initial={{ opacity: 0, x: 50 }}
              animate={trustedInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/section3.png"
                alt="Logistics"
                className="w-full max-w-md lg:max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
