"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Camera } from "lucide-react";

const galleryItems = [
  { id: 1, label: "Market Entrance", sub: "Main atrium", span: "row-span-2", gradient: "from-[#1e3a8a] to-[#2563EB]", icon: "🏬" },
  { id: 2, label: "Gaming Zone", sub: "RTX & AMD GPUs", span: "", gradient: "from-[#4c1d95] to-[#7C3AED]", icon: "🎮" },
  { id: 3, label: "Laptop Gallery", sub: "All brands", span: "", gradient: "from-[#064e3b] to-[#059669]", icon: "💻" },
  { id: 4, label: "Repair Center", sub: "Expert technicians", span: "col-span-2", gradient: "from-[#78350f] to-[#D97706]", icon: "🔧" },
  { id: 5, label: "Networking Hub", sub: "Enterprise solutions", span: "", gradient: "from-[#0c4a6e] to-[#0891B2]", icon: "🌐" },
  { id: 6, label: "Accessories Floor", sub: "Thousands of items", span: "row-span-2", gradient: "from-[#831843] to-[#DB2777]", icon: "🖱️" },
  { id: 7, label: "CCTV Showroom", sub: "Security cameras", span: "", gradient: "from-[#1e1b4b] to-[#4F46E5]", icon: "📷" },
  { id: 8, label: "Storage Solutions", sub: "SSD, HDD, NVMe", span: "", gradient: "from-[#14532d] to-[#16A34A]", icon: "💾" },
  { id: 9, label: "Mobile Corner", sub: "All accessories", span: "", gradient: "from-[#7f1d1d] to-[#DC2626]", icon: "📱" },
  { id: 10, label: "Custom Builds", sub: "High-end gaming PCs", span: "col-span-2", gradient: "from-[#0f172a] to-[#1e3a8a]", icon: "⚡" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
              Gallery
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0F172A]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Inside
              <br />
              Naza Market
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#64748B] text-sm">
            <Camera className="w-4 h-4" />
            Click to explore
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(item)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br ${item.gradient} ${item.span}`}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl mb-3 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-7 h-7 text-white" />
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white font-semibold text-sm">{item.label}</div>
                <div className="text-white/60 text-xs">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-xl aspect-video rounded-3xl bg-gradient-to-br ${selected.gradient} flex flex-col items-center justify-center relative overflow-hidden`}
            >
              <span className="text-8xl mb-4">{selected.icon}</span>
              <h3
                className="text-white text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {selected.label}
              </h3>
              <p className="text-white/60">{selected.sub}</p>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
