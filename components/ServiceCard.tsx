"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex h-full w-full max-w-sm flex-col justify-between rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        <CardHeader className="flex flex-col items-center space-y-3 text-center">
          <div className="text-4xl text-[#7174f1]">{icon}</div>
          <h2 className="text-foreground text-xl font-semibold">{title}</h2>
        </CardHeader>

        <CardContent className="flex-1 text-center">
          <p className="text-secondary-foreground text-sm leading-relaxed md:text-base">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
