import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import { PopupFormProvider } from "@/components/PopupFormContext";
import PopupForm from "@/components/PopupForm";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naza Market — Lucknow's Premier Tech Destination",
  description:
    "Discover Naza Market, Lucknow's largest marketplace for computers, laptops, gaming PCs, accessories, repairs, and electronics. 120+ shops under one roof.",
  keywords: [
    "Naza Market",
    "Lucknow electronics",
    "computer market",
    "laptop shop Lucknow",
    "gaming PC",
    "IT market",
  ],
  openGraph: {
    title: "Naza Market — Lucknow's Premier Tech Destination",
    description:
      "120+ shops. 25+ years. Everything tech in one place.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "opDyShb6r74jYScQSNw-2H39RaMmuDefqOH241DcgFo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-full bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
        <PopupFormProvider>
          <LenisProvider>{children}</LenisProvider>
          <PopupForm />
        </PopupFormProvider>
      </body>
    </html>
  );
}
