"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { soundManager } from "@/lib/audio";
import { LEGO_BLOCKS } from "@/lib/data";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Sparkles,
  Zap,
  MousePointerClick,
  Layers,
} from "lucide-react";

export const Hero: React.FC = () => {
  const { addItem, formatPrice } = useCart();
  const [activeHeroBlock, setActiveHeroBlock] = useState<string>("focus");

  const currentBlock =
    LEGO_BLOCKS.find((b) => b.id === activeHeroBlock) || LEGO_BLOCKS[0];

  const handleBlockSelect = (id: string) => {
    setActiveHeroBlock(id);
    soundManager.playSnap();
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-baseplate-pattern">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-lego-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-lego-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-gradient-to-b from-lego-yellow/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 shadow-sm text-xs font-bold text-neutral-800 mb-6 animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-lego-red" />
              <span className="uppercase tracking-wider font-mono text-[11px]">
                The Anti-App Movement
              </span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-500 font-medium">Reimagined by LEGO Life</span>
            </div>

            {/* Giant Bold Geometric Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-neutral-950 font-display leading-[0.95] mb-6">
              BUILD YOUR DAY.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lego-red via-lego-orange to-lego-yellow">
                ONE BLOCK AT A TIME.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-neutral-700 font-normal leading-relaxed max-w-2xl mb-8">
              Your day doesn’t need another digital to-do app lost in 50 browser tabs. It needs something you can{" "}
              <strong className="text-neutral-950 font-semibold underline decoration-lego-yellow decoration-4 underline-offset-2">
                actually see, touch, and assemble
              </strong>{" "}
              on your desk.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-10">
              <a
                href="#pricing"
                onClick={() => {
                  soundManager.playSnap();
                }}
                className="px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-wider font-display btn-tactile btn-tactile-yellow flex items-center justify-center space-x-2"
              >
                <span>Build Your System</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#simulator"
                onClick={() => soundManager.playClick()}
                className="px-6 py-4 rounded-2xl text-sm font-bold text-neutral-800 bg-white border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 flex items-center justify-center space-x-2 shadow-sm transition"
              >
                <Layers className="w-4 h-4 text-neutral-500" />
                <span>Try Live Desk Simulator</span>
              </a>
            </div>

            {/* Micro Trust Proof */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-300/80 w-full text-xs font-semibold text-neutral-700">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Weighted ABS & Brass Cores</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Neodymium Snap Base</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                </div>
                <span>4.98/5 by 2,800+ Devs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Tactile Desk Assembly Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-tactile-lg border-2 border-neutral-200">
              
              {/* Top Desk Header Indicator */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500">
                    DESK BASEPLATE 01 • ACTIVE DAY
                  </span>
                </div>
                <div className="flex items-center text-xs font-mono text-neutral-400">
                  <MousePointerClick className="w-3.5 h-3.5 mr-1" />
                  <span>Click block to test snap</span>
                </div>
              </div>

              {/* Physical Magnetic Desk Baseplate Representation */}
              <div className="bg-[#DFD8C8] rounded-2xl p-4 shadow-inner border border-[#C8BEAB] relative overflow-hidden bg-baseplate-dark/10">
                
                {/* Dot Grid studs on plate */}
                <div className="grid grid-cols-6 gap-2 mb-3">
                  {Array.from({ length: 18 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-4 h-4 rounded-full bg-[#C8BFA9] shadow-inner flex items-center justify-center opacity-60 mx-auto"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                  ))}
                </div>

                {/* The Assembled LifeBlocks Daily Stack */}
                <div className="flex flex-col space-y-3 relative z-10">
                  
                  {/* North Star Crown Block */}
                  <div
                    onClick={() => handleBlockSelect("goal")}
                    className={`cursor-pointer transition-all duration-200 transform ${
                      activeHeroBlock === "goal" ? "scale-[1.03] ring-2 ring-purple-600" : "hover:scale-[1.01]"
                    }`}
                  >
                    <div className="bg-lego-purple rounded-xl p-3 shadow-block-sm text-white flex items-center justify-between relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-white/30" />
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center font-bold">
                          👑
                        </div>
                        <div>
                          <div className="text-xs font-black uppercase tracking-wider font-display">
                            NORTH STAR CROWN
                          </div>
                          <div className="text-[10px] text-white/80 font-mono">
                            Ship Next.js Landing Page to Vercel
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
                        1 GOAL
                      </span>
                    </div>
                  </div>

                  {/* 90m Focus Block */}
                  <div
                    onClick={() => handleBlockSelect("focus")}
                    className={`cursor-pointer transition-all duration-200 transform ${
                      activeHeroBlock === "focus" ? "scale-[1.03] ring-2 ring-yellow-500" : "hover:scale-[1.01]"
                    }`}
                  >
                    <div className="bg-lego-yellow rounded-xl p-3 shadow-block-yellow text-neutral-950 flex items-center justify-between relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-white/50" />
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-lg bg-black/10 flex items-center justify-center font-black">
                          ⚡
                        </div>
                        <div>
                          <div className="text-xs font-black uppercase tracking-wider font-display">
                            90M DEEP FOCUS
                          </div>
                          <div className="text-[10px] text-neutral-800 font-mono">
                            Core Architecture & Motion Effects
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-black bg-black/10 px-2 py-0.5 rounded">
                        09:00 - 10:30
                      </span>
                    </div>
                  </div>

                  {/* 20m Break Block */}
                  <div
                    onClick={() => handleBlockSelect("break")}
                    className={`cursor-pointer transition-all duration-200 transform ${
                      activeHeroBlock === "break" ? "scale-[1.03] ring-2 ring-red-500" : "hover:scale-[1.01]"
                    }`}
                  >
                    <div className="bg-lego-red rounded-xl p-2.5 shadow-block-red text-white flex items-center justify-between relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-white/30" />
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">☕</span>
                        <span className="text-xs font-bold font-display uppercase tracking-wide">
                          20M RESET • Cold Brew & Sunlight
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
                        10:30 - 10:50
                      </span>
                    </div>
                  </div>

                  {/* 60m Deep Work Block */}
                  <div
                    onClick={() => handleBlockSelect("work")}
                    className={`cursor-pointer transition-all duration-200 transform ${
                      activeHeroBlock === "work" ? "scale-[1.03] ring-2 ring-blue-500" : "hover:scale-[1.01]"
                    }`}
                  >
                    <div className="bg-lego-blue rounded-xl p-3 shadow-block-blue text-white flex items-center justify-between relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-white/30" />
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-black">
                          💻
                        </div>
                        <div>
                          <div className="text-xs font-black uppercase tracking-wider font-display">
                            60M DEEP EXECUTION
                          </div>
                          <div className="text-[10px] text-white/80 font-mono">
                            Interactive Simulator & Responsive Polish
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
                        11:00 - 12:00
                      </span>
                    </div>
                  </div>

                  {/* 45m Health Block */}
                  <div
                    onClick={() => handleBlockSelect("health")}
                    className={`cursor-pointer transition-all duration-200 transform ${
                      activeHeroBlock === "health" ? "scale-[1.03] ring-2 ring-emerald-500" : "hover:scale-[1.01]"
                    }`}
                  >
                    <div className="bg-lego-green rounded-xl p-2.5 shadow-block-green text-white flex items-center justify-between relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-white/30" />
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">🏃</span>
                        <span className="text-xs font-bold font-display uppercase tracking-wide">
                          45M MOVEMENT & HYDRATION
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
                        12:30 - 01:15
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Live Selected Block Detail Callout */}
              <div className="mt-4 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start space-x-3">
                <div
                  className="w-4 h-4 rounded-full mt-0.5 shrink-0"
                  style={{ backgroundColor: currentBlock.colorHex }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-neutral-900 font-display">
                      {currentBlock.name} ({currentBlock.duration})
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {currentBlock.weight}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-snug">
                    {currentBlock.cognitiveBenefit}
                  </p>
                </div>
              </div>

              {/* Instant 1-Click Buy in Hero */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-neutral-500 font-medium">Starter Kit + Baseplate</div>
                  <div className="text-base font-black text-neutral-900 font-mono">
                    {formatPrice(2499, 29)}
                  </div>
                </div>
                <button
                  onClick={() => addItem("starter")}
                  className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider font-display btn-tactile btn-tactile-dark"
                >
                  Quick Pre-Order
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
