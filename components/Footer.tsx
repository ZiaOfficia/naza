"use client";

import { Store, MapPin, Phone, Mail, Clock } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-md shadow-blue-500/30">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Naza Market
              </span>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-5">
              Lucknow&apos;s premier technology marketplace since 1995. 120+
              shops, 25+ years of trust.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Fb", title: "Facebook" },
                { label: "Tw", title: "Twitter" },
                { label: "In", title: "Instagram" },
                { label: "Yt", title: "YouTube" },
              ].map((s) => (
                <button
                  key={s.title}
                  aria-label={s.title}
                  className="w-9 h-9 bg-white/5 hover:bg-[#2563EB] border border-white/8 hover:border-[#2563EB] rounded-xl flex items-center justify-center text-[#64748B] hover:text-white text-xs font-bold transition-all duration-200"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Categories", id: "categories" },
                { label: "Featured Shops", id: "shops" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-[#64748B] hover:text-[#60A5FA] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                "Laptops",
                "Gaming PCs",
                "Desktop Computers",
                "Networking",
                "Repairs & Service",
                "CCTV & Security",
              ].map((cat) => (
                <li key={cat}>
                  <span className="text-[#64748B] hover:text-[#60A5FA] text-sm cursor-pointer transition-colors">
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                <span className="text-[#64748B] text-sm leading-relaxed">
                  Naza Market, Lucknow,
                  <br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span className="text-[#64748B] text-sm">Mon – Sat, 10 AM – 8 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span className="text-[#64748B] text-sm">Contact any shop directly</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span className="text-[#64748B] text-sm">info@nazamarket.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © {year} Naza Market, Lucknow. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <span key={t} className="text-[#475569] hover:text-[#60A5FA] text-sm cursor-pointer transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
