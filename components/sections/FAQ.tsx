"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Where is Naza Market located?",
    a: "Naza Market is located in the heart of Lucknow, Uttar Pradesh. It is one of the most well-known electronics markets in the region, easily accessible by road and public transport. Exact pin locations are available on Google Maps by searching 'Naza Market Lucknow'.",
  },
  {
    q: "What kinds of products can I find at Naza Market?",
    a: "Naza Market has 120+ shops covering laptops, desktop computers, custom gaming PCs, processors, graphics cards, motherboards, RAM, storage devices (SSD, HDD, NVMe), networking equipment (routers, switches, fiber), CCTV cameras, mobile accessories, printers, and much more.",
  },
  {
    q: "Are the products at Naza Market genuine and under warranty?",
    a: "Yes. All authorized shops at Naza Market sell genuine products with official manufacturer warranties. Many shops are authorized resellers for brands like Dell, HP, Lenovo, ASUS, TP-Link, Hikvision, and more. Always ask for a proper invoice and warranty card.",
  },
  {
    q: "Do shops at Naza Market offer PC repair and upgrade services?",
    a: "Absolutely. Multiple specialized repair shops offer laptop screen replacement, battery replacement, keyboard repair, motherboard-level repair, RAM/SSD upgrades, software installation, networking setup, and custom PC building services.",
  },
  {
    q: "Can I get a custom gaming PC built at Naza Market?",
    a: "Yes! Several shops specialize in custom gaming PC builds. You can choose your own components (CPU, GPU, RAM, SSD, case, PSU, cooling) and get a professionally assembled, cable-managed build at competitive prices. Shops also offer AMC packages.",
  },
  {
    q: "What are the market's operating hours?",
    a: "Most shops at Naza Market operate Monday to Saturday, from 10:00 AM to 8:00 PM. Some shops also open on Sundays. It is advisable to call ahead for specific shops, especially during public holidays.",
  },
  {
    q: "Do shops offer corporate or bulk purchasing options?",
    a: "Yes. Several shops at Naza Market cater to bulk and corporate orders for laptops, computers, networking equipment, and accessories. Special pricing, GST invoicing, and delivery arrangements can be made for bulk orders. Contact individual shops directly.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 self-start"
          >
            <span className="inline-block text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-5">
              FAQ
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Frequently asked
              <br />
              <span className="text-gradient">questions</span>
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              Everything you need to know about Naza Market. Can&apos;t find
              an answer? Reach out to any of our shops directly.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <span className="text-[#2563EB] text-lg">?</span>
              </div>
              <div>
                <div className="font-semibold text-[#0F172A] text-sm">Still have questions?</div>
                <div className="text-[#64748B] text-sm">Visit any shop at Naza Market</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={i}
                  className="bg-white border border-[#E5E7EB] rounded-2xl px-6 data-open:border-[#2563EB]/30 data-open:shadow-md data-open:shadow-blue-500/5 transition-all duration-300"
                >
                  <AccordionTrigger className="py-5 text-[#0F172A] font-semibold text-sm text-left no-underline hover:no-underline hover:text-[#2563EB] transition-colors aria-expanded:text-[#2563EB]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748B] text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
