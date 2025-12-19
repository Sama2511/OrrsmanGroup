import { ServicesClient } from "@/components/ServicesClient";
import { FullServices } from "@/actions/services";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { servicesSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive international logistics services including air freight, sea freight, customs clearance, warehousing, and supply chain management. Connecting Australian businesses to global markets with expert freight forwarding solutions.",
  openGraph: {
    title: "Logistics Services | Orrsman Express Logistic",
    description:
      "Expert freight forwarding services: air freight, sea freight, customs clearance, warehousing, and complete supply chain solutions for Australian businesses.",
    images: ["/OpenGraphImage.png"],
  },
};

export default async function ServicesPage() {
  const services = await FullServices();

  return (
    <>
      <StructuredData data={servicesSchema} />
      <ServicesClient services={services} />
    </>
  );
}
