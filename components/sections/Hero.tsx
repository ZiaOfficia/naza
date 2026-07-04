"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Store, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#030B1A] flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-[#2563EB]/30 border-t-[#2563EB] rounded-full animate-spin" />
    </div>
  ),
});

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#030B1A] overflow-hidden flex items-center"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid-bg opacity-100 pointer-events-none" />

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"
        style={{ animation: "orb-float-1 12s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none"
        style={{ animation: "orb-float-2 15s ease-in-out infinite" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-0 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen">
        {/* Left — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:pr-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="flex items-center gap-2 bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#60A5FA] text-xs font-semibold px-4 py-2 rounded-full">
              <Store className="w-3.5 h-3.5" />
              Lucknow&apos;s #1 Tech Market
            </span>
            <span className="flex items-center gap-1.5 bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-3 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
              Open Now
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Discover{" "}
            <span className="text-gradient">
              Naza
            </span>
            <br />
            Market
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/55 leading-relaxed mb-8 max-w-xl"
          >
            Lucknow&apos;s premier destination for computers, laptops, gaming
            PCs, accessories, repairs, and all things electronics — 120+ shops
            under one roof.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              { value: "120+", label: "Stores" },
              { value: "25+", label: "Years" },
              { value: "5K+", label: "Products" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-sm"
              >
                <span className="text-[#60A5FA] font-bold text-lg">{s.value}</span>
                <span className="text-white/50 text-sm ml-1.5">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("categories")}
              className="group flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-7 py-3.5 rounded-2xl transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95"
            >
              Explore Market
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("shops")}
              className="flex items-center gap-2.5 bg-white/8 border border-white/15 hover:bg-white/12 text-white font-semibold px-7 py-3.5 rounded-2xl backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
            >
              <Zap className="w-4 h-4 text-[#FACC15]" />
              View Shops
            </button>
          </motion.div>
        </motion.div>

        {/* Right — Three.js */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[480px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/8 shadow-2xl"
        >
          <HeroScene />
          {/* overlay gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#030B1A] to-transparent pointer-events-none" />
          {/* corner badge */}
          <div className="absolute top-4 right-4 bg-[#030B1A]/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
            <span className="text-white/70 text-xs font-medium">3D Live Preview</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
