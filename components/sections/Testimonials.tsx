"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Software Engineer",
    initials: "AS",
    gradient: "from-[#2563EB] to-[#0EA5E9]",
    rating: 5,
    text: "Got my custom gaming PC built at Naza Market. The technicians were incredibly knowledgeable and the build quality exceeded my expectations. Best price in Lucknow!",
  },
  {
    name: "Priya Gupta",
    role: "Graphic Designer",
    initials: "PG",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    rating: 5,
    text: "Bought a MacBook Pro and got my old laptop repaired here. Lightning-fast service, genuine parts, and very honest pricing. My go-to place for everything tech.",
  },
  {
    name: "Rohit Verma",
    role: "Business Owner",
    initials: "RV",
    gradient: "from-[#22C55E] to-[#16A34A]",
    rating: 5,
    text: "Set up entire office networking through Naza Market. Professional installation, great after-sales support. The CCTV system works flawlessly even 2 years later.",
  },
  {
    name: "Sneha Patel",
    role: "Medical Student",
    initials: "SP",
    gradient: "from-[#F59E0B] to-[#D97706]",
    rating: 5,
    text: "Needed an affordable laptop urgently. Found amazing options within budget. The staff spent an hour helping me pick the right one. Zero pressure selling.",
  },
  {
    name: "Vikram Singh",
    role: "Photographer",
    initials: "VS",
    gradient: "from-[#DC2626] to-[#B91C1C]",
    rating: 5,
    text: "Storage and memory upgrade for my editing PC done in under 2 hours. Professional service, great prices. The NVMe SSD made a huge difference in render times.",
  },
  {
    name: "Kavya Mishra",
    role: "College Student",
    initials: "KM",
    gradient: "from-[#0891B2] to-[#0E7490]",
    rating: 5,
    text: "Replaced my cracked laptop screen at a very reasonable price. The repair was perfect. You honestly can't tell it was ever damaged. Highly recommend!",
  },
  {
    name: "Aditya Kumar",
    role: "Game Developer",
    initials: "AK",
    gradient: "from-[#DB2777] to-[#BE185D]",
    rating: 5,
    text: "Best GPU prices in Lucknow by far. Staff knows their hardware inside out. Helped me compare cards for my workload. Walked out with exactly what I needed.",
  },
  {
    name: "Meera Joshi",
    role: "HR Manager",
    initials: "MJ",
    gradient: "from-[#7C3AED] to-[#6D28D9]",
    rating: 5,
    text: "Sourced 15 laptops for our company through Naza Market. Bulk pricing, proper invoices, warranty support. They handled everything professionally.",
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border border-[#E5E7EB] rounded-3xl p-6 mx-3 hover:shadow-lg hover:shadow-black/5 hover:border-[#2563EB]/20 transition-all duration-300">
      <Quote className="w-6 h-6 text-[#2563EB]/30 mb-4" />
      <p className="text-[#334155] text-sm leading-relaxed mb-6">"{item.text}"</p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
        >
          {item.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[#0F172A] text-sm">{item.name}</div>
          <div className="text-[#94A3B8] text-xs">{item.role}</div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: item.rating }, (_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#FACC15] text-[#FACC15]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section className="py-24 lg:py-32 bg-[#EFF6FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What customers say
          </h2>
          <p className="text-[#64748B] text-lg max-w-md mx-auto">
            Real experiences from real people who shop at Naza Market every
            day.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scroll left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-left" style={{ width: "max-content" }}>
          {[...row1, ...row1].map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#EFF6FF] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#EFF6FF] to-transparent pointer-events-none z-10" />
      </div>

      {/* Row 2 — scroll right */}
      <div className="relative">
        <div className="flex animate-marquee-right" style={{ width: "max-content" }}>
          {[...row2, ...row2].map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#EFF6FF] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#EFF6FF] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
