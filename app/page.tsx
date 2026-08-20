import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { ProductShowcase } from "@/components/ProductShowcase";
import { InteractiveBuilder } from "@/components/InteractiveBuilder";
import { HowItWorks } from "@/components/HowItWorks";
import { DeskSetupGallery } from "@/components/DeskSetupGallery";
import { ScienceBehindIt } from "@/components/ScienceBehindIt";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingKits } from "@/components/PricingKits";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-neutral-900 flex flex-col justify-between">
      {/* 01 Navigation Bar */}
      <Navbar />

      {/* 02 Hero Section */}
      <Hero />

      {/* 03 The Problem (Screen Distraction vs Physical Presence) */}
      <TheProblem />

      {/* 04 The 6 Modular Blocks Showcase */}
      <ProductShowcase />

      {/* 05 Interactive Desk Workbench / Day Simulator */}
      <InteractiveBuilder />

      {/* 06 How It Works (Pick -> Build -> Do -> Reset) */}
      <HowItWorks />

      {/* 07 Workspace Lookbook & Real Setup Gallery */}
      <DeskSetupGallery />

      {/* 08 Cognitive Science & Ergonomics */}
      <ScienceBehindIt />

      {/* 09 Comparison Table vs Notion & Paper */}
      <ComparisonTable />

      {/* 10 Product Kits & Transparent Pricing */}
      <PricingKits />

      {/* 11 Verified Testimonials */}
      <Testimonials />

      {/* 12 FAQ Accordion */}
      <FaqSection />

      {/* 13 High-Impact Final CTA */}
      <FinalCta />

      {/* 14 Minimalist Footer */}
      <Footer />
    </main>
  );
}
