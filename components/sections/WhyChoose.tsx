"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Wrench,
  Cpu,
  BadgeCheck,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Shops",
    description:
      "Every shop in Naza Market has years of reputation. Our vendors are vetted and reviewed by thousands of satisfied customers.",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    icon: TrendingUp,
    title: "Affordable Prices",
    description:
      "Direct-from-distributor pricing with no hidden markups. Competitive rates across 120+ shops ensures you always get the best deal.",
    color: "#22C55E",
    bg: "#DCFCE7",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    description:
      "Our certified repair technicians handle everything from screen replacements to motherboard-level repairs with precision.",
    color: "#FACC15",
    bg: "#FEF9C3",
  },
  {
    icon: Cpu,
    title: "Latest Products",
    description:
      "Be first to get the newest laptops, components, and tech accessories. We receive fresh inventory weekly from top brands.",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: BadgeCheck,
    title: "Warranty Support",
    description:
      "All products come with official manufacturer warranties. Extended protection plans available from select shops.",
    color: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Centrally located in Lucknow with easy access, ample parking, and a one-stop-shop experience for all tech needs.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFF6FF] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F0FDF4] rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
              Why Naza Market
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Why thousands choose
              <br />
              <span className="text-gradient">Naza Market</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-[#64748B] text-lg leading-relaxed lg:pt-16"
          >
            From students to enterprises, from home users to gamers — Naza
            Market serves every tech need with consistency, quality, and care
            built over 25+ years.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="group bg-[#F8FAFC] hover:bg-white border border-[#E5E7EB] hover:border-transparent rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-black/5"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: feat.bg }}
              >
                <feat.icon className="w-6 h-6" style={{ color: feat.color }} />
              </div>
              <h3
                className="font-bold text-[#0F172A] text-lg mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {feat.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                {feat.description}
              </p>
              {/* Bottom accent */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                style={{ background: feat.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
