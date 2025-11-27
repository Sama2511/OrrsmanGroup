import { Metadata } from "next";
import AboutClient from "./AboutClient";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Orrsman Express Group International Logistics. Founded with over 15 years of experience in international trade, we connect Australian businesses to global markets with reliable, expert logistics solutions.",
  openGraph: {
    title:
      "About Orrsman Express Group | Australian International Logistics Experts",
    description:
      "Over 15 years of experience connecting Australian businesses to global markets. Learn about our mission, vision, and commitment to exceptional logistics service.",
    images: ["/OpenGraphImage.png"],
  },
};

interface AboutData {
  title: string;
  description: string;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  mission: string;
  vision: string;
}

async function getAboutData(): Promise<AboutData | null> {
  const query = `*[_type == "About"][0]{
    title,
    description,
    image1,
    image2,
    image3,
    image4,
    mission,
    vision
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function AboutPage() {
  const aboutData = await getAboutData();

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return <AboutClient data={aboutData} />;
}
