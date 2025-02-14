import type { Metadata } from "next";
import { Inter,Open_Sans, Roboto, Montserrat, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NavigationDock } from "@/components/NavigationDock/NavigationDock";
import { Header } from "@/components/header";
import GlowingGradient from "./Background";
import { AppProvider } from "@/context/appContext";

export const metadata: Metadata = {
  title: "Mohamed Minsaf",
  description: "Minsaf's Portfolio",
};

const inter = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="!scroll-smooth h-full w-full bg-primary overflow-hidden"
    >
      <body
        className={`${inter.className} relative h-full w-full  overflow-hidden`}
      >
        <AppProvider>
          <GlowingGradient />
          <Header />
          <main className="relative z-10">{children}</main>
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
            <NavigationDock />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
