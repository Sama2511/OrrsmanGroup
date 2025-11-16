"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const imagesRef = useRef(null);
  const imagesInView = useInView(imagesRef, { once: true, margin: "-100px" });

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });

  return (
    <div className="mt-40 min-h-screen">
      <section className="m-auto max-w-[90%]">
        <div className="flex flex-col gap-8 lg:gap-12 xl:flex-row">
          <motion.div
            ref={headerRef}
            className="mt-10 space-y-6 lg:flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-fit space-y-1">
              <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                About Orrsman Group
              </h1>
              <motion.div
                className="bg-primary h-1"
                initial={{ width: 0 }}
                animate={headerInView ? { width: "100%" } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </div>
            <p className="leading-relaxed text-gray-600 lg:max-w-[90%]">
              Orrsman Group International Logistics (OG) was founded with a
              vision to bridge the gap between Australian businesses and global
              markets. With over 15 years of experience in international trade
              and logistics, we have built a reputation for reliability,
              expertise, and exceptional customer service. Based in Sydney,
              Orrsman Group serves clients across Australia and maintains strong
              partnerships with logistics providers worldwide. Our deep
              understanding of Australian import/export regulations, combined
              with our global network, makes us the ideal partner for businesses
              looking to expand internationally. From small family businesses to
              large corporations, Orrsman Group tailors our services to meet the
              unique needs of each client, ensuring their goods move efficiently
              and cost-effectively across borders.
            </p>
          </motion.div>

          <motion.div
            ref={imagesRef}
            className="m-auto hidden grid-cols-6 grid-rows-[repeat(auto-fit,_minmax(200px,_1fr))] space-y-15 sm:grid"
            initial={{ opacity: 0, x: 50 }}
            animate={imagesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/about2.jpg"
              alt="picture of a box"
              width={400}
              height={350}
              className="col-span-5 col-start-2 row-start-1 rounded-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300"
            />
            <Image
              src="/about1.jpg"
              alt="picture of a box"
              width={300}
              height={250}
              className="col-span-3 col-start-1 row-start-2 rounded-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300"
            />
            <Image
              src="/about3.jpg"
              alt="picture of a box"
              width={350}
              height={300}
              className="col-span-3 col-start-4 row-start-2 rounded-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300"
            />
          </motion.div>
          <div className="sm:hidden">
            <Image
              src="/about3.jpg"
              alt="picture of a box"
              width={500}
              height={400}
              className="rounded-[2px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300"
            />
          </div>
        </div>
      </section>
      <section className="bg-secondary mt-20 py-12 pb-40" ref={missionRef}>
        <div className="container mx-auto flex max-w-[85%] flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/about5.jpg"
              width={500}
              height={500}
              className="h-full w-full rounded-[2px] object-cover"
              alt="Orrsman Group Logistics"
            />
          </motion.div>
          <motion.div
            className="max-w-[500px] flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h1 className="text-3xl font-bold text-[#1e293b]">Our Mission</h1>
              <p className="mt-2 text-[#475569]">
                To provide comprehensive, reliable, and cost-effective logistics
                solutions that enable Australian businesses to compete
                successfully in global markets whilst maintaining the highest
                standards of service and compliance through Orrsman Group&apos;s
                expertise.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#1e293b]">Our Vision</h1>
              <p className="mt-2 text-[#475569]">
                To be Australia&apos;s most trusted international logistics
                partner, known for our expertise, innovation, and commitment to
                client success in connecting businesses to global opportunities
                through Orrsman Group International Logistics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
