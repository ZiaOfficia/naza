"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import {
  Laptop,
  Monitor,
  Cpu,
  Mouse,
  Router,
  HardDrive,
  Wrench,
  Camera,
  Smartphone,
} from "lucide-react";

const categories = [
  { icon: Laptop, label: "Laptops", count: "200+ options", color: "#2563EB", bg: "#EFF6FF" },
  { icon: Monitor, label: "Gaming PCs", count: "Custom builds", color: "#8B5CF6", bg: "#F5F3FF" },
  { icon: Cpu, label: "Desktops", count: "All budgets", color: "#0891B2", bg: "#ECFEFF" },
  { icon: Mouse, label: "Accessories", count: "1000+ items", color: "#059669", bg: "#ECFDF5" },
  { icon: Router, label: "Networking", count: "Enterprise grade", color: "#DC2626", bg: "#FEF2F2" },
  { icon: HardDrive, label: "Storage", count: "SSD, HDD, NVMe", color: "#D97706", bg: "#FFFBEB" },
  { icon: Wrench, label: "Repairs", count: "Same day", color: "#DB2777", bg: "#FDF2F8" },
  { icon: Camera, label: "CCTV", count: "HD & 4K", color: "#7C3AED", bg: "#F5F3FF" },
  { icon: Smartphone, label: "Mobile Acc.", count: "All brands", color: "#16A34A", bg: "#F0FDF4" },
];

function CategoryCard({
  icon: Icon,
  label,
  count,
  color,
  bg,
  index,
}: (typeof categories)[0] & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    my.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="group cursor-pointer"
    >
      <div
        className="relative bg-white border border-[#E5E7EB] rounded-3xl p-7 text-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/8 group-hover:border-transparent h-full"
      >
        {/* Hover bg */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
          style={{ background: `${bg}` }}
        />

        {/* Glow border on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: `inset 0 0 0 1.5px ${color}30` }}
        />

        <div className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-300"
            style={{ background: bg }}
          >
            <Icon className="w-7 h-7" style={{ color }} />
          </motion.div>

          <h3
            className="font-bold text-[#0F172A] text-base mb-1.5"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {label}
          </h3>
          <p className="text-[#64748B] text-xs font-medium">{count}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
            Browse by Category
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-5"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What are you
            <br />
            looking for?
          </h2>
          <p className="text-[#64748B] text-lg max-w-lg mx-auto">
            Explore our wide range of technology categories — from everyday
            essentials to professional-grade equipment.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.label} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
