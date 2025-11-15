import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function page() {
  return (
    <div className="my-50">
      <div className="m-auto mb-15 w-fit">
        <h1 className="text-center text-4xl font-bold md:text-5xl">
          Contact Our Team
        </h1>
        <div className="bg-primary h-1"></div>
      </div>

      <div className="flex flex-col gap-20 lg:flex-row lg:justify-center">
        <div className="">
          <ContactForm />
        </div>
        <Card className="m-auto h-fit w-fit max-w-[90%] lg:m-0">
          <CardHeader>
            <CardTitle className="text-xl">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-3">
                <Phone className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Phone</h3>
                <p className="text-secondary-foreground">+61 2 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-3">
                <Mail className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Email</h3>
                <p className="text-secondary-foreground">
                  support@ljmhospice.com.au
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-3">
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Address</h3>
                <p className="text-secondary-foreground">
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
                <div className="text-secondary-foreground space-y-1">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
