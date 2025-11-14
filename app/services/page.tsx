import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";
import Image from "next/image";

const services = [
  {
    image: "/newhomeimage.jpg", // Replace with your image paths
    title: "Sea Freight Services",
    description:
      "Cost-effective ocean freight solutions for businesses transporting goods internationally. We handle both FCL and LCL shipments with competitive rates and worldwide port coverage.",
    features: [
      "FCL and LCL services",
      "Door-to-door delivery",
      "Real-time cargo tracking",
      "Worldwide port coverage",
    ],
    benefits: [
      { title: "Cost Effective", desc: "Most economical for large shipments" },
      {
        title: "Reliable",
        desc: "Established schedules with trusted carriers",
      },
      { title: "Global Network", desc: "Access to major ports worldwide" },
    ],
  },
  {
    image: "/airFreight.jpg",
    title: "Air Freight Services",
    description:
      "Fast and reliable air cargo services for time-sensitive shipments. Our air freight solutions ensure your goods reach their destination quickly and safely with 24/7 monitoring.",
    features: [
      "Express and standard options",
      "Temperature-controlled handling",
      "Dangerous goods certified",
      "Priority urgent shipments",
    ],
    benefits: [
      { title: "Speed", desc: "Fastest method for urgent deliveries" },
      { title: "Security", desc: "Enhanced measures for valuable cargo" },
      { title: "Flexibility", desc: "Multiple daily flights available" },
    ],
  },
  {
    image: "/clearance.png",
    title: "Customs Clearance",
    description:
      "Expert customs brokerage services to navigate complex regulations. We handle all documentation and compliance requirements for smooth border crossings and minimal delays.",
    features: [
      "Import/export documentation",
      "Duty and tax calculations",
      "Compliance consulting",
      "Electronic lodgement systems",
    ],
    benefits: [
      { title: "Compliance", desc: "All regulations met correctly" },
      { title: "Efficiency", desc: "Minimised delays and processing time" },
      { title: "Cost Savings", desc: "Optimised duty obligations" },
    ],
  },
  {
    image: "/carExport.jpg",
    title: "Vehicle Import Services",
    description:
      "Specialised vehicle importation including compliance, registration, and delivery. We handle cars, motorcycles, and commercial vehicles with expert knowledge of Australian regulations.",
    features: [
      "Compliance certification",
      "SEVS and RAV processing",
      "Registration assistance",
      "Door-to-door delivery",
    ],
    benefits: [
      { title: "Expertise", desc: "Deep regulatory knowledge" },
      { title: "End-to-End", desc: "Purchase to registration service" },
      { title: "Peace of Mind", desc: "Full legal compliance" },
    ],
  },
  {
    image: "/logitic.jpg",
    title: "FMCG Logistics",
    description:
      "Fast-moving consumer goods logistics with specialised handling and distribution. Our solutions ensure products reach retailers efficiently with quality maintained throughout.",
    features: [
      "Temperature-controlled storage",
      "Inventory management",
      "Last-mile delivery",
      "Retail distribution networks",
    ],
    benefits: [
      { title: "Speed to Market", desc: "Rapid retail distribution" },
      { title: "Quality Control", desc: "Product integrity maintained" },
      { title: "Scalability", desc: "Flexible seasonal solutions" },
    ],
  },
  {
    image: "/meatlogistic.jpg",
    title: "Meat Export & Trading",
    description:
      "Specialised meat export with strict temperature control and international food safety compliance. We ensure quality from farm to table with complete cold chain management.",
    features: [
      "Cold chain management",
      "HACCP compliance",
      "Export certification",
      "Reefer container services",
    ],
    benefits: [
      { title: "Quality Assurance", desc: "Maintained cold chain compliance" },
      { title: "Certification", desc: "Full export documentation" },
      { title: "Global Reach", desc: "Major international markets" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="mt-40 mb-20">
      {/* Header */}
      <div className="mx-auto mb-20 max-w-3xl px-4 text-center">
        <div className="m-auto mb-4 w-fit">
          <h1 className="text-foreground text-4xl font-bold md:text-5xl">
            Our Services
          </h1>
          <div className="bg-primary h-1"></div>
        </div>

        <p className="text-lg text-gray-600">
          Comprehensive logistics solutions tailored to your business needs
        </p>
      </div>

      {/* Services */}
      <div className="mx-auto max-w-[95%] space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-12`}
          >
            {/* Image */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative h-[300px] overflow-hidden rounded-[2px] shadow-xl md:h-[540px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="border-foreground w-full max-w-[90%] space-y-6 border-b-2 pb-10 lg:w-1/2">
              <h2 className="text-foreground text-3xl font-bold md:text-4xl">
                {service.title}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                {service.description}
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="mt-5 flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <Card className="w-fit border-0 bg-gray-50">
                  <CardContent className="px-6">
                    <CardTitle>
                      <h3 className="text-foreground mb-4 text-lg font-bold">
                        Key Benefits
                      </h3>
                    </CardTitle>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx}>
                          <h4 className="text-primary mb-1 font-semibold">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {benefit.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button className="bg-primary px-8 py-3 hover:bg-blue-700">
                Get a Quote
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mx-auto mt-24 max-w-4xl px-4">
        <Card className="bg-primary border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Need a Custom Solution?
            </h2>
            <p className="mb-6 text-lg text-blue-100">
              Our team can create tailored logistics solutions for your specific
              requirements
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="text-primary bg-white hover:bg-gray-100"
            >
              Contact Our Team
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
