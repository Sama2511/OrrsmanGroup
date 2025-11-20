import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-muted-foreground py-12 text-[#e5e7eb]">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center space-y-4 border-b border-white/20 pb-8 md:items-start md:border-b-0 md:pb-0">
          <div className="flex items-center space-x-3">
            <Image
              src="/FooterImageTest.png"
              width={150}
              height={150}
              alt="Orrsman Group Logo"
              className=""
            />
          </div>
          <p className="max-w-[60%] text-center text-[16px] text-[#d1d5db] md:text-left">
            Providing reliable and cost-effective logistics solutions connecting
            Australian businesses to global markets.
          </p>
          <p className="text-[16px] text-[#d1d5db]">ABN: 30 645 247 169</p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#7174f1]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#7174f1]"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#7174f1]"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#7174f1]"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 border-b border-white/20 pb-8 md:items-start md:border-b-0 md:pb-0">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <Link href="/" className="transition-colors hover:text-[#7174f1]">
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-[#7174f1]"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="transition-colors hover:text-[#7174f1]"
          >
            Services
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-[#7174f1]"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-[#7174f1]"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-2 border-b border-white/20 pb-8 md:items-start md:border-b-0 md:pb-0">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="text-[16px] text-[#d1d5db]">
            📍 707/289 King St Mascot NSW 2020
          </p>
          <p className="text-[16px] text-[#d1d5db]">✉️ tarik@orrsman.com.au</p>
          <p className="text-[16px] text-[#d1d5db]">📞 0451 919 253</p>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <h2 className="text-lg font-semibold text-white">Business Hours</h2>
          <div className="flex flex-col space-y-1 text-[16px] text-[#d1d5db]">
            <p>
              <strong>Monday</strong>: 8:30am - 5:00pm
            </p>
            <p>
              <strong>Tuesday</strong>: 8:30am - 5:00pm
            </p>
            <p>
              <strong>Wednesday</strong>: 8:30am - 5:00pm
            </p>
            <p>
              <strong>Thursday</strong>: 8:30am - 5:00pm
            </p>
            <p>
              <strong>Friday</strong>: 8:30am - 5:00pm
            </p>
            <p>
              <strong>Saturday</strong>: 8:30am - 12pm
            </p>
            <p>
              <strong>Sunday</strong>: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-white/50 pt-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Orrsman Group. All rights reserved.
      </div>
    </footer>
  );
}
