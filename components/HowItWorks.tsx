"use client";

import React from "react";
import { soundManager } from "@/lib/audio";
import {
  Sparkles,
  MousePointer,
  Layers,
  Flame,
  Sunset,
  ArrowRight,
} from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "PICK",
      subtitle: "Morning Selection Ritual",
      description:
        "Before turning on your monitor, choose 3 to 5 weighted LifeBlocks from your storage dock that represent your non-negotiable commitments today.",
      color: "bg-lego-yellow text-neutral-950",
      border: "border-yellow-400",
      badge: "08:30 AM",
      icon: "🎯",
    },
    {
      number: "02",
      title: "BUILD",
      subtitle: "Snap Onto Magnetic Baseplate",
      description:
        "Assemble your blocks in chronological order. Feel the magnetic Neodymium lock and hear the crisp LEGO tactile snap that seals your commitment.",
      color: "bg-lego-red text-white",
      border: "border-red-400",
      badge: "08:35 AM",
      icon: "🧱",
    },
    {
      number: "03",
      title: "DO",
      subtitle: "Execute In Unbroken Flow",
      description:
        "Work on the active block directly beneath your eyes. When finished, physically flip or remove the block to trigger a dopamine completion circuit.",
      color: "bg-lego-blue text-white",
      border: "border-blue-400",
      badge: "09:00 AM - 05:00 PM",
      icon: "⚡",
    },
    {
      number: "04",
      title: "RESET",
      subtitle: "The Sunset Disconnect",
      description:
        "At the end of your workday, wipe your baseplate clean. Close your workspace with zero lingering task guilt and zero open loop tabs.",
      color: "bg-neutral-900 text-white",
      border: "border-neutral-700",
      badge: "06:00 PM",
      icon: "🌅",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lego-blue/10 text-lego-blue text-xs font-black uppercase tracking-wider font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>The Daily Ritual</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            PICK → BUILD → DO → RESET.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Four simple physical steps to replace digital overwhelm with effortless single-task flow.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-neutral-200 shadow-tactile flex flex-col justify-between relative group hover:border-neutral-950 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stud Top Highlight */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <span className="text-xs font-mono font-bold text-neutral-400">
                  STEP {step.number}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
                  {step.badge}
                </span>
              </div>

              {/* Center Content */}
              <div className="my-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 shadow-block-sm bg-neutral-100">
                  {step.icon}
                </div>

                <h3 className="text-xl font-black text-neutral-950 font-display tracking-tight">
                  {step.title}
                </h3>

                <h4 className="text-xs font-bold text-neutral-500 font-mono mt-0.5 uppercase tracking-wider">
                  {step.subtitle}
                </h4>

                <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Stud Line */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full bg-neutral-200 shadow-inner"
                    />
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
