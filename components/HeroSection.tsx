import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative flex h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#e7e5e4]">
      <Image
        src="/Homepageimage.png"
        alt="Global logistics illustration"
        fill
        priority
        className="object-cover opacity-90 md:object-scale-down"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#e7e5e4]/60 to-[#e7e5e4]/80"></div>

      <div className="relative z-10 max-w-3xl px-4 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-6 text-3xl font-bold text-[#1e293b] md:text-5xl lg:text-6xl">
            Global Freight & Logistics Solutions
          </h1>
        </motion.div>
        <p className="mb-8 text-base text-[#1e293b]/80 md:text-lg">
          Connecting Australia to the world through reliable sea and air
          freight, customs clearance, and specialised logistics services with
          Orrsman Group
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button className="bg-primary px-10 py-6 text-base font-semibold transition md:text-lg">
              Get Quote
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="bg-secondary border-none px-8 py-6 text-base font-semibold text-[#1e293b] transition md:text-lg"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
