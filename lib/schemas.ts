import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "Your name is required")
    .min(3, "Your name must be at least 3 characters"),

  email: z
    .email({ message: "Please enter a valid email address" })
    .min(1, "Email is required"),

  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9\s\-\+\(\)]+$/, "Please enter a valid phone number")
    .min(8, "Phone number must be at least 8 digits"),

  companyName: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters"),

  originCountryCity: z
    .string()
    .min(1, "Origin country/city is required")
    .min(3, "Please enter a valid location"),

  destinationCountryCity: z
    .string()
    .min(1, "Destination country/city is required")
    .min(3, "Please enter a valid location"),

  message: z
    .string()
    .min(1, "Message is required")
    .min(
      10,
      "Please provide at least 10 characters describing your requirements",
    )
    .max(500, "Message must not exceed 500 characters"),
  // serviceRequired: z.enum([
  //   "Sea Freight",
  //   "Air Freight",
  //   "Customs Clearance",
  //   "Vehicle Imports",
  //   "FMCG Logistics",
  //   "Meat Trading",
  //   "Other / Multiple Services",
  // ]),
  serviceRequired: z.string().min(1, "Please select a service"),
});
