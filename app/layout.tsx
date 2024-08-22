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
const colorCodes = {
  // #122537, #2D4459, #9498A1, #74563B, #4E433B
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#0f172a] text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

        {/* <StarsCanvas /> */}
        {/* <ThemeContextProvider> */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          {/* <Toaster position="top-right" />
            <ThemeSwitch /> */}
        </ActiveSectionContextProvider>
        {/* </ThemeContextProvider> */}
      </body>
    </html>
  );
}
