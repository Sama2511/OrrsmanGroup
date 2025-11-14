import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

import services from "@/lib/services";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />

      <section>
        <div className="m-auto mt-50 mb-20 max-w-[90%] space-y-3 text-center md:mt-50">
          <h1 className="text-5xl font-semibold">Our Services</h1>
          <p className="">
            Comprehensive logistics solutions for businesses across Australia
            and globally
          </p>
        </div>
        <div className="mx-auto grid max-w-[90%] grid-cols-1 gap-10 md:max-w-6xl md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-primary relative border-l-4 py-4 pl-8 text-left transition-colors hover:border-blue-700"
            >
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {service.description}
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
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="flex-1">
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
                <li className="text-center">
                  <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">
                    15+
                  </div>
                  <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase md:text-base">
                    Years Experience
                  </div>
                </li>
                <li className="text-center">
                  <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">
                    50+
                  </div>
                  <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase md:text-base">
                    Countries Served
                  </div>
                </li>
                <li className="text-center">
                  <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">
                    1000+
                  </div>
                  <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase md:text-base">
                    Happy Clients
                  </div>
                </li>
              </ul>

              <Button
                variant="outline"
                className="px-8 py-6 text-base font-semibold"
              >
                Learn More
              </Button>
            </div>

            {/* Right Image */}
            <div className="hidden flex-1 justify-center lg:flex">
              <img
                src="/section3.png"
                alt="Logistics"
                className="w-full max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
