"use client";

import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import cn from "@/lib/cn";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main
      className={cn(
        "sm:p-24 max-sm:p-8",
        isDark ? "bg-[hsla(36,31%,90%,1)]" : "bg-[hsla(158,23%,18%,1)]"
      )}
    >
      <div className="container mx-auto">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Banner isDark={isDark} />
        <Experience isDark={isDark} />
        <Projects isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </main>
  );
}
