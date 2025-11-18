import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
type ExpressType = {
  expressAir: SanityDocument[];
};
export default function ExpressAir(expressAir: ExpressType) {
  return (
    <section className="from-secondary to-background mt-20 bg-[linear-gradient(164deg,var(--tw-gradient-from)_50%,var(--tw-gradient-to)_50%)] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 text-white">
            <Button className="bg-secondary-foreground text-blue- rounded-full px-4 py-1 text-sm font-bold">
              FEATURED SERVICE
            </Button>
            <h2 className="text-foreground my-6 text-4xl font-bold md:text-5xl">
              {expressAir.expressAir[0].title}
            </h2>
            <p className="text-foreground/90 mb-8 text-xl">
              {expressAir.expressAir[0].subtitle}
            </p>
            <ul className="mb-8 space-y-3">
              {expressAir.expressAir[0].checkpoints.map((point: string) => (
                <li className="text-secondary-foreground flex items-center gap-3">
                  <Check className="text-primary h-6 w-6" />
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg">Get Express Quote</Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-foreground border-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src={urlFor(expressAir.expressAir[0].image).url()}
              alt="Air Express"
              className="rounded-lg shadow-2xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
