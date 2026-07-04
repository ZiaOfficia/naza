"use client";

import { motion } from "framer-motion";
import { Store, Cpu, Wrench } from "lucide-react";

const cards = [
  {
    icon: Store,
    title: "Lucknow's Largest",
    description:
      "Since 1995, Naza Market has been the cornerstone of Lucknow's technology scene. With 120+ shops packed into one iconic destination, we've grown into the city's ultimate electronics hub.",
    tag: "Est. 1995",
    tagColor: "text-[#2563EB] bg-[#EFF6FF]",
    gradient: "from-[#2563EB]/5 to-[#60A5FA]/5",
    iconBg: "bg-[#2563EB]/10 text-[#2563EB]",
  },
  {
    icon: Cpu,
    title: "Everything Tech",
    description:
      "From brand-new laptops and custom gaming rigs to networking gear, surveillance systems, mobile accessories, and storage devices — every tech need is met under one roof.",
    tag: "5000+ Products",
    tagColor: "text-[#22C55E] bg-[#DCFCE7]",
    gradient: "from-[#22C55E]/5 to-[#86EFAC]/5",
    iconBg: "bg-[#22C55E]/10 text-[#22C55E]",
  },
  {
    icon: Wrench,
    title: "Expert Service",
    description:
      "Certified technicians for laptop repairs, hardware upgrades, networking setups, custom PC builds, and software solutions. Honest work, fair pricing, trusted by thousands.",
    tag: "Certified Experts",
    tagColor: "text-[#FACC15] bg-[#FEF9C3]",
    gradient: "from-[#FACC15]/5 to-[#FDE68A]/5",
    iconBg: "bg-[#FACC15]/15 text-[#CA8A04]",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
            About Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-5"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            More than a market.
            <br />
            <span className="text-gradient">A tech ecosystem.</span>
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Naza Market isn&apos;t just a shopping destination — it&apos;s
            where Lucknow comes to solve every technology challenge, big or
            small.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative bg-white border border-[#E5E7EB] rounded-3xl p-8 overflow-hidden group hover:shadow-xl hover:shadow-black/5 hover:border-transparent transition-all duration-300`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 ${card.iconBg}`}
                >
                  <card.icon className="w-6 h-6" />
                </div>

                <div className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4 ${card.tagColor}`}>
                  {card.tag}
                </div>

                <h3
                  className="text-xl font-bold text-[#0F172A] mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {card.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
