import { ServicesClient } from "@/components/ServicesClient";
import { FullServices } from "@/actions/services";

export default async function ServicesPage() {
  const services = await FullServices();

  return <ServicesClient services={services} />;
}
