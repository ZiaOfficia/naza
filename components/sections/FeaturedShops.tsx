"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, BadgeCheck } from "lucide-react";

const shops = [
  {
    name: "Techno Hub",
    initials: "TH",
    specialty: "Laptops & Gaming PCs",
    description:
      "Lucknow's go-to destination for premium laptops, custom gaming builds, and professional workstations. Apple Authorized reseller.",
    tags: ["Apple", "ASUS ROG", "Custom Builds"],
    rating: 4.9,
    reviews: 1240,
    since: "2003",
    gradient: "from-[#2563EB] to-[#0EA5E9]",
    textColor: "#2563EB",
    bgColor: "#EFF6FF",
  },
  {
    name: "NetConnect Solutions",
    initials: "NS",
    specialty: "Networking & CCTV",
    description:
      "Enterprise-grade networking solutions for homes and businesses. Cisco, TP-Link, Hikvision installations and service.",
    tags: ["Cisco", "TP-Link", "Hikvision"],
    rating: 4.8,
    reviews: 890,
    since: "2008",
    gradient: "from-[#22C55E] to-[#16A34A]",
    textColor: "#16A34A",
    bgColor: "#F0FDF4",
  },
  {
    name: "Digital World",
    initials: "DW",
    specialty: "Accessories & Mobile",
    description:
      "Thousands of accessories for every device. Cables, peripherals, mobile covers, chargers, and smart home gadgets.",
    tags: ["Peripherals", "Mobile", "Smart Home"],
    rating: 4.7,
    reviews: 2100,
    since: "1998",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    textColor: "#7C3AED",
    bgColor: "#F5F3FF",
  },
  {
    name: "PC Masters",
    initials: "PM",
    specialty: "Custom PC Builds",
    description:
      "Premium custom gaming and workstation PC builds. Expert assembly, cable management, and RGB customization.",
    tags: ["Intel", "AMD", "NVIDIA", "Custom"],
    rating: 4.9,
    reviews: 680,
    since: "2011",
    gradient: "from-[#F59E0B] to-[#D97706]",
    textColor: "#D97706",
    bgColor: "#FFFBEB",
  },
];

export default function FeaturedShops() {
  return (
    <section id="shops" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="inline-block text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
              Featured Shops
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0F172A]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Meet our top
              <br />
              <span className="text-gradient">shops</span>
            </h2>
          </div>
          <p className="text-[#64748B] max-w-sm md:text-right text-sm leading-relaxed">
            Handpicked shops with outstanding reviews, loyal customers, and
            unbeatable expertise.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {shops.map((shop, i) => (
            <motion.div
              key={shop.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group bg-white border border-[#E5E7EB] rounded-3xl p-7 hover:shadow-xl hover:shadow-black/6 hover:border-transparent transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-5 mb-5">
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${shop.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {shop.initials}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3
                      className="font-bold text-[#0F172A] text-lg"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {shop.name}
                    </h3>
                    <BadgeCheck className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  </div>
                  <p className="text-[#64748B] text-sm font-medium">{shop.specialty}</p>
                </div>

                {/* Rating */}
                <div className="flex-shrink-0 text-right">
                  <div className="flex items-center gap-1 justify-end mb-1">
                    <Star className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                    <span className="font-bold text-[#0F172A] text-sm">{shop.rating}</span>
                  </div>
                  <span className="text-[#94A3B8] text-xs">{shop.reviews.toLocaleString()} reviews</span>
                </div>
              </div>

              <p className="text-[#64748B] text-sm leading-relaxed mb-5">
                {shop.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {shop.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{ color: shop.textColor, background: shop.bgColor }}
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#F1F5F9] text-[#64748B]">
                  Est. {shop.since}
                </span>
              </div>

              {/* CTA */}
              <button
                className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                style={{ color: shop.textColor }}
              >
                Visit Shop
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] hover:border-[#2563EB]/30 text-[#0F172A] font-semibold px-8 py-3.5 rounded-2xl transition-all hover:shadow-md hover:shadow-black/5 hover:scale-105 active:scale-95">
            View All 120+ Shops
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
