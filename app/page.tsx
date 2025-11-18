import { briefServices, AirService, HomeInfo } from "@/actions/services";
import ExpressAir from "@/components/ExpressAir";
import HeroSection from "@/components/HeroSection";
import { HomeClient } from "@/components/HomeClient";

export default async function Home() {
  const services = await briefServices();
  const expressAir = await AirService();
  const home = await HomeInfo();
  return (
    <div className="bg-background">
      <HeroSection home={home} />
      <ExpressAir expressAir={expressAir} />
      <HomeClient services={services} home={home} />
    </div>
  );
}
