"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SanityDocument } from "next-sanity";
import { urlFor } from "@/lib/sanity";

function ServiceSection({
  service,
  index,
}: {
  service: SanityDocument;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-12`}
    >
      <motion.div
        className="w-full px-4 lg:w-1/2"
        initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative h-[300px] overflow-hidden rounded-[2px] shadow-xl md:h-[540px]">
          <Image
            src={urlFor(service.serviceImage).url()}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="border-foreground w-full max-w-[90%] space-y-6 border-b-2 pb-10 lg:w-1/2"
        initial={{ opacity: 0, x: isReversed ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h2
          className="text-foreground font-outfit text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {service.title}
        </motion.h2>

        <motion.p
          className="font-switzer text-lg leading-relaxed text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {service.description}
        </motion.p>

        <motion.div
          className="flex flex-col gap-5 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="space-y-3">
            {service.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                className="mt-5 flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                <span className="font-switzer text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          <Card className="w-fit border-0 bg-gray-50">
            <CardContent className="px-6">
              <CardTitle>
                <h3 className="text-foreground font-outfit mb-4 text-lg font-bold">
                  Key Benefits
                </h3>
              </CardTitle>
              <div className="space-y-4">
                {service.benefits.map(
                  (
                    benefit: { title: string; description: string },
                    index: number,
                  ) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      <h4 className="text-primary font-outfit mb-1 font-semibold">
                        {benefit.title}
                      </h4>
                      <p className="font-switzer text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary cursor-pointer px-8 py-3 transition-transform hover:scale-105"
            >
              Get a Quote
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ServicesClient({ services }: { services: SanityDocument[] }) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <section className="mt-40 mb-20 overflow-hidden">
      <motion.div
        ref={headerRef}
        className="mx-auto mb-20 max-w-3xl px-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="m-auto mb-4 w-fit">
          <motion.h1
            className="text-foreground font-outfit text-4xl font-semibold md:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="bg-primary h-1"
            initial={{ width: 0 }}
            animate={headerInView ? { width: "100%" } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>

        <motion.p
          className="font-switzer text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Comprehensive logistics solutions tailored to your business needs
        </motion.p>
      </motion.div>

      <div className="mx-auto max-w-[95%] space-y-20">
        {services.map((service: SanityDocument, index: number) => (
          <ServiceSection key={index} service={service} index={index} />
        ))}
      </div>

      <motion.div
        ref={ctaRef}
        className="mx-auto mt-24 max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <Card className="bg-primary border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <motion.h2
              className="font-outfit mb-4 text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Need a Custom Solution?
            </motion.h2>
            <motion.p
              className="font-switzer mb-6 text-lg text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our team can create tailored logistics solutions for your specific
              requirements
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  Contact Our Team
                </Button>
              </Link>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
