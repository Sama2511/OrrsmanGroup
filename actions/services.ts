import { client } from "@/lib/sanity";
import { SanityDocument } from "next-sanity";

export default async function briefServices() {
  const POSTS_QUERY = `*[_type == "service"]{
        title,
        briefDescription,
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
