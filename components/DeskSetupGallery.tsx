"use client";

import React, { useState } from "react";
import Image from "next/image";
import { soundManager } from "@/lib/audio";
import { Sparkles, Eye, Monitor, ShieldCheck, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/CartContext";

export const DeskSetupGallery: React.FC = () => {
  const { addItem } = useCart();
  const setups = [
    {
      title: "The Staff Engineer Setup",
      location: "Bengaluru, India",
      builder: "Aarav S. • Backend & Rust",
      kitUsed: "Creator Pro (Dual-Track)",
      kitId: "creator-pro",
      image:
        "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80",
      quote: "Sits right between my split keyboard and OLED monitor. I never open my browser to-do tab anymore.",
      blocksOnDesk: "2× Focus (90m), 1× Break, 2× Deep Work",
    },
    {
      title: "The Product Architect Setup",
      location: "San Francisco, USA",
      builder: "Sophia C. • Design Lead",
      kitUsed: "Executive Studio Matrix",
      kitId: "executive-studio",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80",
      quote: "The contrast between the walnut trim and vibrant primary blocks makes planning feel like pure art.",
      blocksOnDesk: "1× North Star Crown, 3× Deep Work, 1× Reset",
    },
    {
      title: "The Deep Study Residency",
      location: "New Delhi, India",
      builder: "Dr. Meera N. • Neuro AIIMS",
      kitUsed: "Starter Kit",
      kitId: "starter",
      image:
        "https://images.unsplash.com/photo-1507842229451-79b1be886a20?w=800&auto=format&fit=crop&q=80",
      quote: "Studying 12 hours without burnout requires physical pace anchors. LifeBlocks saves my stamina.",
      blocksOnDesk: "2× Focus, 2× Buffer Break, 1× Health",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-black uppercase tracking-wider font-mono mb-4">
            <Monitor className="w-3.5 h-3.5 text-lego-yellow" />
            <span>Real Workspace Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            HOW TOP BUILDERS ORGANIZE THEIR DESKS.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Engineers, researchers, and founders replacing chaotic digital tabs with clean physical baseplates.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {setups.map((setup, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border-2 border-neutral-200 shadow-tactile flex flex-col justify-between group hover:border-neutral-900 transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-100">
                <img
                  src={setup.image}
                  alt={setup.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full">
                  {setup.location}
                </div>
                <div className="absolute bottom-3 right-3 bg-lego-yellow text-neutral-950 text-[11px] font-bold font-mono px-2.5 py-0.5 rounded shadow">
                  {setup.kitUsed}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-neutral-950 font-display">
                    {setup.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-500 mt-0.5">
                    {setup.builder}
                  </div>

                  <p className="text-xs text-neutral-700 italic mt-3 leading-relaxed">
                    “{setup.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-neutral-500">
                    <span className="font-bold text-neutral-800">Stack: </span>
                    {setup.blocksOnDesk}
                  </div>
                  <button
                    onClick={() => addItem(setup.kitId)}
                    className="p-2 rounded-xl bg-neutral-100 hover:bg-lego-yellow text-neutral-900 transition shrink-0 ml-2"
                    title="Get this kit"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
