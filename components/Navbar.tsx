"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Store, Menu, X, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Shops", href: "#shops" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "w-[calc(100%-2rem)] max-w-5xl"
            : "w-[calc(100%-3rem)] max-w-5xl"
        }`}
      >
        <div
          className={`rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5"
              : "bg-[#030B1A]/60 backdrop-blur-xl border border-white/10"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Store className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-[#0F172A]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Naza Market
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                  scrolled
                    ? activeSection === link.href.slice(1)
                      ? "text-[#2563EB]"
                      : "text-[#475569] hover:text-[#0F172A]"
                    : activeSection === link.href.slice(1)
                    ? "text-[#60A5FA]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      scrolled ? "bg-[#2563EB]" : "bg-[#60A5FA]"
                    }`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#about")}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-white/70 hover:text-white"
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              Lucknow
            </button>
            <button
              onClick={() => scrollTo("#categories")}
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            >
              Explore
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#0F172A] hover:bg-[#F1F5F9]" : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl border border-[#E5E7EB] rounded-2xl shadow-xl shadow-black/10 p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "bg-[#EFF6FF] text-[#2563EB]"
                      : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-2 border-t border-[#E5E7EB]">
                <button
                  onClick={() => scrollTo("#categories")}
                  className="w-full bg-[#2563EB] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#1d4ed8] transition-colors"
                >
                  Explore Market
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
