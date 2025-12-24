import { Metadata } from "next";
import AboutClient from "./AboutClient";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Orrsman Express Logistic. We connect Australian businesses to global markets with reliable, expert logistics solutions. Built on expertise, driven by innovation, focused on your success.",
  openGraph: {
    title:
      "About Orrsman Express Logistic | Australian International Logistics Experts",
    description:
      "Connecting Australian businesses to global markets with precision and care. Learn about our mission, vision, and commitment to exceptional logistics service.",
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
    image1{
      asset->{
        _id,
        url,
        metadata{
          lqip,
          dimensions
        }
      }
    },
    image2{
      asset->{
        _id,
        url,
        metadata{
          lqip,
          dimensions
        }
      }
    },
    image3{
      asset->{
        _id,
        url,
        metadata{
          lqip,
          dimensions
        }
      }
    },
    image4{
      asset->{
        _id,
        url,
        metadata{
          lqip,
          dimensions
        }
      }
    },
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
