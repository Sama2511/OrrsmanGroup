import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Orrsman Express Logistic. Located in Mascot, Sydney. Contact us for quotes, inquiries, or to discuss your international freight forwarding needs.",
  openGraph: {
    title: "Contact Orrsman Express Logistic | Get A Quote",
    description:
      "Contact our logistics experts in Sydney. Get a quote for international freight, customs clearance, and supply chain solutions. We're here to help your business grow globally.",
    images: ["/OpenGraphImage.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
