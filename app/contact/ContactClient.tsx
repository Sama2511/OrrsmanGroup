"use client";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactClient() {
  return (
    <div className="my-50">
      <div className="m-auto mb-10 w-fit">
        <motion.h1
          className="text-foreground font-outfit text-4xl md:text-5xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact our Team
        </motion.h1>
        <motion.div
          className="bg-primary h-1"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      <div className="flex flex-col gap-20 lg:flex-row lg:justify-center">
        <div className="">
          <ContactForm />
        </div>
        <Card className="m-auto h-fit w-fit max-w-[90%] lg:m-0">
          <CardHeader>
            <CardTitle className="font-outfit text-xl">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-3">
                <Phone className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Phone</h3>
                <p className="text-secondary-foreground text-sm">
                  0451 919 253
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-3">
                <Mail className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Email</h3>
                <p className="text-secondary-foreground text-[15px]">
                  tarik@orrsman.com.au
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-3">
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Address</h3>
                <p className="text-secondary-foreground text-[15px]">
                  707/289 King St Mascot NSW 2020
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-3">
                <Clock className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">
                  Business Hours
                </h3>
                <div className="text-secondary-foreground space-y-1 text-[15px]">
                  <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
                  <p>Saturday: 08:30 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
