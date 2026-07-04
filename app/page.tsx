import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Categories from "@/components/sections/Categories";
import WhyChoose from "@/components/sections/WhyChoose";
import Showcase3D from "@/components/sections/Showcase3D";
import FeaturedShops from "@/components/sections/FeaturedShops";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Categories />
        <WhyChoose />
        <Showcase3D />
        <FeaturedShops />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
