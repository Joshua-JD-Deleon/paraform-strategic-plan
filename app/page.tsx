import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ExecutiveOverview } from "@/components/sections/ExecutiveOverview";
import { Timeline } from "@/components/sections/Timeline";
import { FrameworkShowcase } from "@/components/sections/FrameworkShowcase";
import { SalesMethodology } from "@/components/sections/SalesMethodology";
import { ICP } from "@/components/sections/ICP";
import { Testimonials } from "@/components/sections/Testimonials";
import { MobileResumeCTA } from "@/components/sections/MobileResumeCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Hero />
        <div className="bg-stone-50">
          <ExecutiveOverview />
        </div>
        <div id="methodology" className="bg-white">
          <SalesMethodology />
        </div>
        <div id="timeline" className="bg-stone-50">
          <Timeline />
        </div>
        <div id="framework" className="bg-white">
          <FrameworkShowcase />
        </div>
        <div id="icp" className="bg-stone-50">
          <ICP />
        </div>
        <div id="testimonials" className="bg-white">
          <Testimonials />
        </div>
      </main>
      <MobileResumeCTA />
      <Footer />
    </>
  );
}
