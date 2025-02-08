import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import StarsCanvas from "@/components/ui/StarBackground";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ActiveSectionContextProvider from "@/context/useActiveSectionContext";
import Header from "@/components/header";
import ThemeContextProvider from "@/context/useTheme";
import StarsCanvas from "@/components/starCanvas";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Minsaf",
  description: "Minsaf's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth bg-black bg-opacity-80 ">
      <body
        className={`${inter.className} bg-black bg-opacity-30 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
 
  );
}



