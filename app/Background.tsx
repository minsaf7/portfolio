"use client";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GlowingGradient = () => {
  const { theme, setTheme } = useAppContext();

  const theme_one =
    "conic-gradient(from 120deg at 50% 50%, #0F3A5E 0deg, #1D4C6C 90deg, #2A5D7A 180deg, #3A6F8A 270deg, #4B81A0 360deg)";
  const theme_two =
    "conic-gradient(from 120deg at 50% 50%, #718355 0deg, #8B9B6D 90deg, #A0B785 180deg, #B7D39C 270deg, #C9E1B2 360deg)";
  const theme_three =
    "conic-gradient(from 120deg at 50% 50%, #CEA0AA 0deg, #D5A7B8 90deg, #E0B1C1 180deg, #F0C7D1 270deg, #F7D9E2 360deg)";
  const theme_four =
    "conic-gradient(from 120deg at 50% 50%, #F2CC8F 0deg, #F3D79B 90deg, #F5E1A5 180deg, #F9E8B3 270deg, #FCEBAE 360deg)";
  const theme_five =
    "conic-gradient(from 120deg at 50% 50%, #0A2344 0deg, #1A3556 90deg, #2B4D69 180deg, #3C667A 270deg, #4E7F8C 360deg)";
  const theme_six =
    "conic-gradient(from 120deg at 50% 50%, #FFC24B 0deg, #FEC75D 90deg, #F7D466 180deg, #F0E16F 270deg, #E9E87A 360deg)";

  const getGradientColor = () => {
    switch (theme) {
      case "theme1":
        return theme_one;
      case "theme2":
        return theme_two;
      case "theme3":
        return theme_three;
      case "theme4":
        return theme_four;
      case "theme5":
        return theme_five;
      case "theme6":
        return theme_six;

      default:
        return theme_one;
    }
  };

  return (
    <>
      <motion.div
        className="absolute rounded-full blur-[120px]" // Softer, glowing effect
        style={{
          width: "80vw", // Covers most of the screen
          height: "80vh",
          background: getGradientColor(),
          backgroundSize: "cover", // Ensures the noise covers the entire background
        }}
        animate={{
          scale: [1, 1.3, 1], // Expanding & contracting effect
          x: ["-40vw", "40vw", "-40vw", "40vw"], // Moves to all four corners
          y: ["-40vh", "-40vh", "40vh", "40vh"], // Moves up and down
          rotate: [0, 180, 360, 0], // Smooth full rotation effect
        }}
        transition={{
          duration: 15, // Slow and fluid movement
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.2, // Adjust opacity for a subtle effect
          pointerEvents: "none", // Ensure it doesn't block interactions
        }}
      />
    </>
  );
};

export default GlowingGradient;
