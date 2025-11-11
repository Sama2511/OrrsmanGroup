import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu } from "lucide-react";
import Image from "next/image";
import services from "@/lib/services";
export default function Home() {
  return (
    <div className="bg-background h-screen">
      <section className="relative hidden md:block">
        <img src="/Hero10.png" alt="Hero" className="m-auto mt-40 w-full" />
        <div className="bg-card absolute -bottom-14 left-14 z-0 mt-8 max-w-[40%] p-8 xl:p-12 2xl:p-20">
          <h1 className="text-foreground mb-4 text-[2.9vw] leading-tight font-bold xl:mb-6 xl:text-[2.9vw] 2xl:mb-8 2xl:text-[3vw]">
            Global Freight & Logistics Solutions
          </h1>
          <h2 className="text-foreground text-sm leading-relaxed xl:text-base 2xl:text-lg">
            Connecting Australia to the world through reliable sea and air
            freight, customs clearance, and specialised logistics services with
            Orrsman Group
          </h2>
          <div className="mt-6 flex gap-3 xl:mt-8 2xl:mt-10">
            <Button className="p-4 text-base font-semibold xl:p-5 xl:text-lg">
              Our services
            </Button>
            <Button
              variant="outline"
              className="p-4 text-base font-semibold xl:p-5 xl:text-lg"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>
      <section className="relative md:hidden">
        <img
          src="/MobileHero2.png"
          alt="MobileHero.png"
          className="mt-40 w-full"
        />
        <div className="@container">
          <div className="bg-card absolute -bottom-75 left-1/2 z-0 mt-8 min-w-[80%] -translate-x-1/2 p-6 xl:p-12 2xl:p-20 @[400]:-bottom-55">
            <h1 className="text-foreground mb-4 text-3xl leading-tight font-bold @[600]:text-4xl">
              Global Freight &
              <br />
              Logistics Solutions
            </h1>
            <h2 className="text-foreground text-sm leading-relaxed @[600]:text-[18px]">
              Connecting Australia to the world through reliable sea and air
              freight, customs clearance, and specialised logistics services
              with Orrsman Group
            </h2>
            <div className="mt-6 flex gap-3 xl:mt-8 2xl:mt-10">
              <Button className="p-4 text-base font-semibold">
                Our services
              </Button>
              <Button variant="outline" className="p-4 text-base font-semibold">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="m-auto mt-100 mb-20 max-w-[90%] space-y-3 text-center md:mt-50">
          <h1 className="text-5xl font-semibold">Our Services</h1>
          <p className="">
            Comprehensive logistics solutions for businesses across Australia
            and globally
          </p>
        </div>
        <div className="m-auto grid max-w-[90%] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-6 md:max-w-[1000px]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
