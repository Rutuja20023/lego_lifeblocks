"use client";

import React, { useState } from "react";
import { soundManager } from "@/lib/audio";
import {
  AlertTriangle,
  Sparkles,
  XCircle,
  CheckCircle2,
  Layers,
  Smartphone,
  Eye,
  Maximize2,
} from "lucide-react";

export const TheProblem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"comparison" | "stats">("comparison");

  return (
    <section id="philosophy" className="py-24 bg-white border-y border-neutral-200 relative overflow-hidden">
      {/* Background Accent Grids */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-lego-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lego-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lego-red/10 text-lego-red text-xs font-black uppercase tracking-wider font-mono mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Screen Fatigue Trap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-6">
            YOUR TO-DO LIST IS INVISIBLE.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Notifications disappear in seconds. Digital apps get buried under 40 browser tabs.
            When everything is behind glass, your priorities don’t feel real.
            <strong className="text-neutral-900 font-semibold block mt-2">
              So we took LEGO’s iconic modular design and transformed it into a physical daily operating system.
            </strong>
          </p>
        </div>

        {/* Interactive Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: The Digital Screen Problem */}
          <div className="rounded-3xl p-6 sm:p-8 bg-neutral-50 border-2 border-neutral-200 flex flex-col justify-between relative overflow-hidden group hover:border-red-300 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-neutral-900 font-display">
                      The Digital App Trap
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono">
                      Notion, Todoist, Apple Notes, Asana
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono uppercase bg-red-100 text-red-700 px-2.5 py-1 rounded-full">
                  Friction High
                </span>
              </div>

              <div className="space-y-4 text-sm text-neutral-700">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-white/80 border border-neutral-200/80">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-semibold">
                      Out of sight, out of mind
                    </strong>
                    Minimized behind code editors and browser windows. You forget what you planned by 11 AM.
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-white/80 border border-neutral-200/80">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-semibold">
                      Infinite list bloat & task guilt
                    </strong>
                    Easy to dump 60 tasks into a list that never gets done, generating daily subconscious stress.
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-white/80 border border-neutral-200/80">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-semibold">
                      Dopamine trapdoor
                    </strong>
                    Unlocking your phone to check a task leads straight into Instagram, Twitter, and email loops.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 text-xs font-mono text-neutral-500 flex items-center justify-between">
              <span>Attention Fragmentation: High</span>
              <span className="text-red-600 font-bold">−4.2h Productive Flow</span>
            </div>
          </div>

          {/* Card 2: The Physical LEGO LifeBlocks Solution */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#18181B] text-white flex flex-col justify-between relative overflow-hidden shadow-2xl group border-2 border-neutral-800 hover:border-lego-yellow transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-lego-yellow/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-lego-yellow text-neutral-950 flex items-center justify-center font-black">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white font-display">
                      LEGO LifeBlocks™
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono">
                      Physical Modular Desk Baseplate
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black font-mono uppercase bg-lego-yellow text-neutral-950 px-2.5 py-1 rounded-full">
                  Zero Screen Friction
                </span>
              </div>

              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-lego-yellow shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">
                      Permanent peripheral presence
                    </strong>
                    Resting directly below your display. You see what matters without touching a keyboard or phone.
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-lego-yellow shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">
                      Tactile spatial constraint
                    </strong>
                    The baseplate physically holds only 4-6 blocks. You are forced to commit to what actually moves the needle.
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-lego-yellow shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">
                      Dopamine from physical completion
                    </strong>
                    The sensory ritual of physically snapping off a completed block gives your brain real completion closure.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Clarity: Permanent</span>
              <span className="text-lego-yellow font-bold">+3.5 hrs Deep Focus / Day</span>
            </div>
          </div>

        </div>

        {/* Key Philosophical Insight Quote */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4EFE6] border border-[#DFD8C8] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-lego-red text-white flex items-center justify-center font-black text-lg shadow-block-sm shrink-0">
              💡
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900 font-display">
                “When you physically build your morning plan with your hands, your brain forms a spatial memory map. You don't have to 'remember' to stay on track—your desk holds the plan for you.”
              </p>
              <span className="text-xs text-neutral-500 font-mono mt-1 block">
                — LEGO Life Design Philosophy, Billund Research Lab
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
