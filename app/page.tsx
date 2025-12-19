import { briefServices, HomeInfo } from "@/actions/services";
import Services from "@/components/Services";
import HeroSection from "@/components/HeroSection";
import ImageBanner from "@/components/ImageBanner";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Orrsman Express Logistic - Your trusted partner for international logistics. We offer air freight, sea freight, customs clearance, and comprehensive supply chain solutions for Australian businesses expanding globally.",
  openGraph: {
    title:
      "Orrsman Express Logistic | International Logistics & Freight Solutions",
    description:
      "Your trusted partner for international logistics. Expert air freight, sea freight, customs clearance, and supply chain solutions for Australian businesses.",
    images: ["/OpenGraphImage.png"],
  },
};

export default async function Home() {
  const services = await briefServices();
  const home = await HomeInfo();
  return (
    <div>
      <HeroSection home={home} />
      <ImageBanner />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}
