
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import StarsCanvas from "@/components/ui/StarBackground";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
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
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <StarsCanvas /> */}
          {/* <Background /> */}
        
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// components/Background.tsx
const Background = () => {
  return (
    <div className="fixed inset-0 bg-[#111933] bg-brighten">
      {/* You can add more elements here if needed */}
    </div>
  );
};
