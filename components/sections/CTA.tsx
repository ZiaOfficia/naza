"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, Sparkles, Store } from "lucide-react";
import { usePopupForm } from "@/components/PopupFormContext";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function CTA() {
  const { openForm } = usePopupForm();

  return (
    <section className="py-24 lg:py-32 bg-[#030B1A] relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22C55E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#60A5FA] text-sm font-semibold px-5 py-2.5 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4" />
            120+ Shops Waiting for You
          </motion.div>

          {/* Headline */}
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Ready to Explore
            <br />
            <span className="text-gradient">Naza Market?</span>
          </h2>

          {/* Subtext */}
          <p className="text-white/55 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you&apos;re building a gaming rig, upgrading your laptop, or
            setting up an office — Naza Market has everything you need at
            prices you&apos;ll love.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mb-14"
          >
            <button className="group flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95 text-base">
              <MapPin className="w-5 h-5" />
              Visit Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => openForm("contact")}
              className="flex items-center gap-2.5 bg-white/8 border border-white/15 hover:bg-white/12 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all hover:scale-105 active:scale-95 text-base"
            >
              <Phone className="w-5 h-5 text-[#22C55E]" />
              Contact Shops
            </button>
          </motion.div>

          {/* Vendor link */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
            onClick={() => openForm("vendor")}
            className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-14 transition-colors"
          >
            <Store className="w-4 h-4 text-[#60A5FA]" />
            Own a shop here? List it on Naza Market
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Info strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-8 justify-center"
          >
            {[
              { icon: MapPin, label: "Naza Market, Lucknow, UP" },
              { icon: Phone, label: "Available 10 AM – 8 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-white/50">
                <item.icon className="w-4 h-4 text-[#60A5FA]" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
