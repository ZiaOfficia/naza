"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { RotateCcw, ZoomIn, Layers } from "lucide-react";

const ShowcaseScene = dynamic(() => import("@/components/three/ShowcaseScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#030B1A] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-[#2563EB]/30 border-t-[#2563EB] rounded-full animate-spin" />
    </div>
  ),
});

const hints = [
  { icon: RotateCcw, text: "Drag to rotate" },
  { icon: ZoomIn, text: "Scroll to zoom" },
  { icon: Layers, text: "Explore the build" },
];

export default function Showcase3D() {
  return (
    <section className="py-24 lg:py-32 bg-[#030B1A] relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-5">
              Interactive Showcase
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Explore products
              <br />
              in{" "}
              <span className="text-gradient">
                full 3D
              </span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Get a closer look at the tech you love. Rotate, inspect, and
              discover every angle of the products available at Naza Market.
            </p>

            {/* Hint chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {hints.map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                >
                  <h.icon className="w-4 h-4 text-[#60A5FA]" />
                  <span className="text-white/70 text-sm font-medium">{h.text}</span>
                </div>
              ))}
            </div>

            {/* Product tags */}
            <div className="space-y-3">
              {[
                { label: "NVIDIA RTX 4090", sub: "Graphics Card", color: "#22C55E" },
                { label: "AMD Ryzen 9 7950X", sub: "Processor", color: "#2563EB" },
                { label: "Samsung 990 Pro", sub: "NVMe SSD", color: "#FACC15" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-white/4 border border-white/8 rounded-2xl px-5 py-3.5 hover:bg-white/7 transition-colors cursor-pointer group"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: item.color }}
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-white/40 text-xs">{item.sub}</div>
                  </div>
                  <div className="ml-auto text-white/25 group-hover:text-white/60 transition-colors">
                    →
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/8"
          >
            <ShowcaseScene />
            {/* Corner labels */}
            <div className="absolute top-4 left-4 bg-[#030B1A]/80 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2">
              <span className="text-white/60 text-xs font-medium">GPU Showcase</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#2563EB]/90 backdrop-blur-md rounded-xl px-3.5 py-2">
              <span className="text-white text-xs font-semibold">Available at Naza</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
