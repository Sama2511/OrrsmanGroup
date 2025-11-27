"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const StarIcon = () => (
  <Star className="size-4 fill-gray-800 text-gray-800" aria-hidden="true" />
);

const getInitials = (name: string) => {
  const names = name.split(" ");
  const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
  const lastInitial = names[names.length - 1]?.charAt(0).toUpperCase() || "";
  return firstInitial + lastInitial;
};

const testimonials = [
  {
    name: "Sarah Mitchell",
    date: "12 Jan 2025",
    text: "Orrsman logistics delivered our shipment ahead of schedule. Their team knew how to navigate customs smoothly and kept us informed every step of the way. Highly professional service.",
  },
  {
    name: "James Chen",
    date: "15 Mar 2025",
    text: "We've worked with Orrsman logistics for a while now on various international shipments. Their reliability and competitive pricing make them our go-to logistics partner for all our imports.",
  },
  {
    name: "Emma Thompson",
    date: "20 Feb 2025",
    text: "The attention to detail and customer service is exceptional. From air freight to customs clearance, they handle everything seamlessly. Our business has grown thanks to their efficient logistics solutions.",
  },
];

export default function Testimonials() {
  return (
    <section className="pt-20 pb-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl">
            Check reviews,
            <br className="mt-2"></br>
            <strong>ship with confidence</strong>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-popover grid w-full max-w-88 grid-rows-subgrid rounded-md border border-gray-200 p-6 text-gray-500 transition-all duration-300 hover:-translate-y-1"
              style={{ gridRow: "span 3" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-sm">{testimonial.date}</p>
              </div>

              <p className="text-sm leading-relaxed">{testimonial.text}</p>

              <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-700">
                  {getInitials(testimonial.name)}
                </div>
                <p className="font-medium text-gray-800">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
