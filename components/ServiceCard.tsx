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
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden rounded-lg border-l-4 border-l-blue-600 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <CardContent className="px-6 pt-6 pb-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
