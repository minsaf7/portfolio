"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div>about</div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-4 h-[50%] bg-white">
        {/* Grid 1: Green (2 cols wide x 2 rows tall) */}
        <div className="bg-green-700 rounded-xl lg:col-span-2 lg:row-span-2 h-40 lg:h-auto" />

        {/* Grid 2: Blue */}
        <div className="bg-blue-400 rounded-xl lg:col-span-2 h-40" />

        {/* Grid 3: Pink */}
        <div className="bg-pink-300 rounded-xl lg:col-span-2 h-40" />

        {/* Grid 4: Brown */}
        <div className="bg-amber-700 rounded-xl lg:col-span-1 h-40" />

        {/* Grid 5: Peach */}
        <div className="bg-rose-300 rounded-xl lg:col-span-1 h-40" />

        {/* Grid 6: Dark brown (square-like block) */}
        <div className="bg-neutral-800 rounded-xl lg:col-span-2 lg:row-span-2 h-40 lg:h-auto" />
      </div>
    </section>
  );
}

import React from "react";

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-4 h-[50%] bg-white">
      {/* Grid 1: Green (2 cols wide x 2 rows tall) */}
      <div className="bg-green-700 rounded-xl lg:col-span-2 lg:row-span-2 h-40 lg:h-auto" />

      {/* Grid 2: Blue */}
      <div className="bg-blue-400 rounded-xl lg:col-span-2 h-40" />

      {/* Grid 3: Pink */}
      <div className="bg-pink-300 rounded-xl lg:col-span-2 h-40" />

      {/* Grid 4: Brown */}
      <div className="bg-amber-700 rounded-xl lg:col-span-1 h-40" />

      {/* Grid 5: Peach */}
      <div className="bg-rose-300 rounded-xl lg:col-span-1 h-40" />

      {/* Grid 6: Dark brown (square-like block) */}
      <div className="bg-neutral-800 rounded-xl lg:col-span-2 lg:row-span-2 h-40 lg:h-auto" />
    </div>
  );
};
