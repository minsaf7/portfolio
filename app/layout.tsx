// import React from "react"
// import type { Metadata, Viewport } from "next"
// import { Inter, Fira_Code } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"

// import "./globals.css"

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
// const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" })

// export const metadata: Metadata = {
//   title: "Mohamed Minsaf | Senior Software Engineer",
//   description:
//     "Senior Software Engineer with 4+ years of experience designing and building scalable frontend and full-stack applications in fintech and ERP domains.",
// }

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
//     { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
//   ],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
//       >
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem

//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const siteConfig = {
  name: "Mohamed Minsaf",
  title: "Mohamed Minsaf | Senior Software Engineer",
  description:
    "Senior Software Engineer with 4+ years of experience designing and building scalable frontend and full-stack applications in fintech and ERP domains.",
  url: "https://minsaaf.tech",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/minsaf7",
    linkedin: "https://www.linkedin.com/in/mohamed-minsaaf/",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: siteConfig.url },

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Senior Software Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Fintech",
    "Software Engineer Portfolio",
    "Web Developer",
    "DirectFN",
  ],

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
