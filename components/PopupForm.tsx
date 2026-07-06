"use client";

import {
  useEffect,
  useState,
  type SubmitEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Store,
  MessageCircle,
  User,
  Phone,
  Tag,
  ChevronDown,
  Loader2,
  CheckCircle2,
  Send,
  type LucideIcon,
} from "lucide-react";
import { usePopupForm, type PopupFormMode } from "./PopupFormContext";

const categories = [
  "Laptops & Computers",
  "Gaming PCs & Components",
  "Networking & CCTV",
  "Mobile & Accessories",
  "Repairs & Service",
  "Other",
];

type Status = "idle" | "submitting" | "success";

const vendorInitial = { name: "", shopName: "", category: "", phone: "" };
const contactInitial = { name: "", contact: "", message: "" };

function TextField({
  icon: Icon,
  ...props
}: { icon: LucideIcon } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
      <input
        {...props}
        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30 transition-all"
      />
    </div>
  );
}

function PhoneField({
  value,
  onChange,
}: {
  value: string;
  onChange: (digits: string) => void;
}) {
  return (
    <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/30 transition-all">
      <Phone className="absolute left-3.5 w-4 h-4 text-white/40 pointer-events-none" />
      <span className="pl-11 pr-3 py-3 text-white/70 text-sm border-r border-white/10 select-none">
        +91
      </span>
      <input
        type="tel"
        inputMode="numeric"
        required
        pattern="[0-9]{10}"
        title="Enter a 10-digit phone number"
        maxLength={10}
        placeholder="98765 43210"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 10))}
        className="flex-1 min-w-0 bg-transparent pl-3 pr-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none"
      />
    </div>
  );
}

function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30 transition-all resize-none"
    />
  );
}

export default function PopupForm() {
  const { isOpen, mode, setMode, closeForm } = usePopupForm();
  const [status, setStatus] = useState<Status>("idle");
  const [vendorData, setVendorData] = useState(vendorInitial);
  const [contactData, setContactData] = useState(contactInitial);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeForm();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeForm]);

  const handleExitComplete = () => {
    setStatus("idle");
    setVendorData(vendorInitial);
    setContactData(contactInitial);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => closeForm(), 1900);
    }, 1100);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeForm();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-[#030B1A] rounded-3xl border border-white/10 shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative max-h-[85vh] overflow-y-auto p-7 sm:p-8">
              <button
                onClick={closeForm}
                aria-label="Close form"
                className="absolute top-5 right-5 sm:right-6 sm:top-6 w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait" initial={false}>
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 18 }}
                      className="w-16 h-16 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center mb-5"
                    >
                      <CheckCircle2 className="w-8 h-8 text-[#22C55E]" />
                    </motion.div>
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {mode === "vendor" ? "Application received!" : "Message sent!"}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                      {mode === "vendor"
                        ? "Our team will reach out to you shortly to onboard your shop."
                        : "Thanks for reaching out — we'll get back to you soon."}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="mb-6 pr-8">
                      <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center mb-4">
                        {mode === "vendor" ? (
                          <Store className="w-5 h-5 text-[#60A5FA]" />
                        ) : (
                          <MessageCircle className="w-5 h-5 text-[#60A5FA]" />
                        )}
                      </div>
                      <h3
                        className="text-2xl font-bold text-white mb-1.5"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {mode === "vendor" ? "List your shop" : "Get in touch"}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {mode === "vendor"
                          ? "Join 120+ shops already thriving at Naza Market."
                          : "Have a question or need help? Send us a message."}
                      </p>
                    </div>

                    {/* Toggle */}
                    <div className="relative grid grid-cols-2 gap-1.5 bg-white/5 border border-white/10 rounded-2xl p-1.5 mb-7">
                      {(["vendor", "contact"] as PopupFormMode[]).map((m) => {
                        const active = mode === m;
                        return (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setMode(m)}
                            className={`relative z-10 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                              active ? "text-white" : "text-white/50 hover:text-white/80"
                            }`}
                          >
                            {active && (
                              <motion.span
                                layoutId="popup-toggle-pill"
                                className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] shadow-lg shadow-blue-500/30"
                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                              />
                            )}
                            {m === "vendor" ? (
                              <Store className="w-4 h-4" />
                            ) : (
                              <MessageCircle className="w-4 h-4" />
                            )}
                            {m === "vendor" ? "Vendor" : "Contact"}
                          </button>
                        );
                      })}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <AnimatePresence mode="wait" initial={false}>
                        {mode === "vendor" ? (
                          <motion.div
                            key="vendor-fields"
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 12 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-4"
                          >
                            <TextField
                              icon={User}
                              type="text"
                              required
                              placeholder="Full name"
                              value={vendorData.name}
                              onChange={(e) =>
                                setVendorData({ ...vendorData, name: e.target.value })
                              }
                            />
                            <TextField
                              icon={Store}
                              type="text"
                              required
                              placeholder="Shop name"
                              value={vendorData.shopName}
                              onChange={(e) =>
                                setVendorData({ ...vendorData, shopName: e.target.value })
                              }
                            />
                            <div className="relative">
                              <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none z-10" />
                              <select
                                required
                                value={vendorData.category}
                                onChange={(e) =>
                                  setVendorData({ ...vendorData, category: e.target.value })
                                }
                                className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl pl-11 pr-10 py-3 text-white text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30 transition-all [&>option]:bg-[#0F172A]"
                              >
                                <option value="" disabled>
                                  Shop category
                                </option>
                                {categories.map((c) => (
                                  <option key={c} value={c}>
                                    {c}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                            </div>
                            <PhoneField
                              value={vendorData.phone}
                              onChange={(phone) => setVendorData({ ...vendorData, phone })}
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="contact-fields"
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-4"
                          >
                            <TextField
                              icon={User}
                              type="text"
                              required
                              placeholder="Full name"
                              value={contactData.name}
                              onChange={(e) =>
                                setContactData({ ...contactData, name: e.target.value })
                              }
                            />
                            <TextField
                              icon={Phone}
                              type="text"
                              required
                              placeholder="Phone or email"
                              value={contactData.contact}
                              onChange={(e) =>
                                setContactData({ ...contactData, contact: e.target.value })
                              }
                            />
                            <TextArea
                              required
                              rows={4}
                              placeholder="How can we help?"
                              value={contactData.message}
                              onChange={(e) =>
                                setContactData({ ...contactData, message: e.target.value })
                              }
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.01] active:scale-[0.99] mt-2"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            {mode === "vendor" ? "Submit application" : "Send message"}
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
