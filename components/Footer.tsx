import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-muted-foreground py-12 text-[#e5e7eb]">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <div className="flex items-center space-x-3">
            <Image
              src="/LogoFooter.png"
              width={150}
              height={150}
              alt="Orrsman Group Logo"
              className=""
            />
          </div>
          <p className="max-w-[60%] text-center text-sm text-[#d1d5db] md:text-left">
            Providing reliable and cost-effective logistics solutions connecting
            Australian businesses to global markets.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 md:items-start">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <Link href="/" className="transition-colors hover:text-[#7174f1]">
            Home
          </Link>
          <a
            href="/services"
            className="transition-colors hover:text-[#7174f1]"
          >
            Services
          </a>
          <a href="/about" className="transition-colors hover:text-[#7174f1]">
            About Us
          </a>
          <a href="/contact" className="transition-colors hover:text-[#7174f1]">
            Contact Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="text-sm text-[#d1d5db]">
            📍 707/289 King St Mascot NSW 2020
          </p>
          <p className="text-sm text-[#d1d5db]">✉️ info@orrsmangroup.com</p>
          <p className="text-sm text-[#d1d5db]">📞 +61 2 1234 5678</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-[#9ca3af]">
        &copy; {new Date().getFullYear()} Orrsman Group. All rights reserved.
      </div>
    </footer>
  );
}
