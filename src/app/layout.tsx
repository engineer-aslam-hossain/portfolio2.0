import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const inter = Inter({ subsets: ["latin"] });
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

export const metadata: Metadata = {
  title: "Aslam Hossain",
  description:
    "Experienced front-end wizardry (React, Next.js) to backend mastery (Express, Nest.js, MongoDB), and mobile app magic with Flutter, I craft innovative solutions that shine brighter than the Finnish sun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
