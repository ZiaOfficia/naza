"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Store, Clock, Package, Users } from "lucide-react";

const stats = [
  { icon: Store, value: 120, suffix: "+", label: "Shops & Stores", description: "Electronics retailers" },
  { icon: Clock, value: 25, suffix: "+", label: "Years of Legacy", description: "Trusted since 1995" },
  { icon: Package, value: 5000, suffix: "+", label: "Products", description: "Ready for you today" },
  { icon: Users, value: 10000, suffix: "+", label: "Customers Served", description: "Every single month" },
];

function Counter({ end, suffix, started }: { end: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, end]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2563EB]/8 rounded-full blur-[80px]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-4 block">
            By the Numbers
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Naza Market in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/4 border border-white/8 rounded-3xl p-8 text-center hover:bg-white/6 hover:border-[#2563EB]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2563EB]/15 rounded-2xl mb-5 group-hover:bg-[#2563EB]/25 transition-colors">
                  <stat.icon className="w-6 h-6 text-[#60A5FA]" />
                </div>

                {/* Counter */}
                <div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  <Counter end={stat.value} suffix={stat.suffix} started={inView} />
                </div>

                {/* Label */}
                <div className="text-[#94A3B8] font-semibold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-[#475569] text-xs">
                  {stat.description}
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
