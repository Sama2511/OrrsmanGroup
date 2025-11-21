import { client } from "@/lib/sanity";
import { SanityDocument } from "next-sanity";

export async function briefServices() {
  const POSTS_QUERY = `*[_type == "service"]{
        title,
        description,
        }`;
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return posts;
}

export async function FullServices() {
  const POSTS_QUERY = `*[_type == "service"]{
  title,
  description,
  serviceImage,
  features,
  benefits
}`;
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return posts;
}
export async function AirService() {
  const POSTS_QUERY = `*[_type == "expressAir"]{
  title,
  subtitle,
  checkpoints,
    image
}`;
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return posts;
}

export async function HomeInfo() {
  const POSTS_QUERY = `*[_type == "home"]{
  heroTitle,
  heroSub,
    bottomTitle, 
    bottomSubtitle,
    bottomImage,
    stats
}`;
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return posts;
}
