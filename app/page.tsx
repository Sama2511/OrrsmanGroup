import briefServices from "@/actions/services";
import HeroSection from "@/components/HeroSection";
import { HomeClient } from "@/components/HomeClient";

export default async function Home() {
  const services = await briefServices();

  return (
    <div className="bg-background">
      <HeroSection />
      <HomeClient services={services} />
    </div>
  );
}
