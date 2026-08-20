"use client";

import React, { useState } from "react";
import { LEGO_BLOCKS } from "@/lib/data";
import { LegoBlockData } from "@/lib/types";
import { LegoBlockSvg } from "./LegoBlockSvg";
import { soundManager } from "@/lib/audio";
import {
  Zap,
  Cpu,
  HeartPulse,
  Coffee,
  Target,
  Inbox,
  Layers,
  Sparkles,
  ShieldCheck,
  Magnet,
  Scale,
  Ruler,
} from "lucide-react";

export const ProductShowcase: React.FC = () => {
  const [selectedBlockId, setSelectedBlockId] = useState<string>("focus");

  const activeBlock: LegoBlockData =
    LEGO_BLOCKS.find((b) => b.id === selectedBlockId) || LEGO_BLOCKS[0];

  const handleSelect = (id: string) => {
    setSelectedBlockId(id);
    soundManager.playSnap();
  };

  return (
    <section id="blocks" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lego-yellow/20 border border-lego-yellow/40 text-neutral-900 text-xs font-black uppercase tracking-wider font-mono mb-4">
            <Layers className="w-3.5 h-3.5 text-neutral-900" />
            <span>The Modular Hardware System</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            SIX BLOCKS. INFINITE CLARITY.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Every block represents a distinct cognitive mode. Weighted, bead-blasted, and magnetically balanced to turn abstract intentions into tangible commitments.
          </p>
        </div>

        {/* Horizontal Block Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-3 no-scrollbar">
          {LEGO_BLOCKS.map((block) => {
            const isSelected = block.id === selectedBlockId;
            return (
              <button
                key={block.id}
                onClick={() => handleSelect(block.id)}
                className={`px-4 py-3 rounded-2xl font-display font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all flex items-center space-x-2 border-2 ${
                  isSelected
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-tactile transform -translate-y-1"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0 shadow-inner"
                  style={{ backgroundColor: block.colorHex }}
                />
                <span>{block.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {block.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Block Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-neutral-200 shadow-tactile-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: 3D Render & Interactive Preview */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#F4EFE6] border border-[#DFD8C8] relative overflow-hidden bg-baseplate-pattern">
            <div className="absolute top-3 left-3 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">
              HARDWARE SPEC • {activeBlock.id.toUpperCase()}
            </div>

            {/* Giant Centered Tactile LEGO Block */}
            <div className="my-8 animate-snap" key={activeBlock.id}>
              <LegoBlockSvg
                block={activeBlock}
                size="xl"
                className="transform hover:scale-105 transition-transform"
              />
            </div>

            {/* Stud Close-up indicator */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-600 pt-4 border-t border-neutral-300">
              <div className="flex items-center space-x-1">
                <Magnet className="w-3.5 h-3.5 text-neutral-800" />
                <span>Neodymium N52 Core</span>
              </div>
              <div className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-800" />
                <span>100% Recycled ABS</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs & Cognitive Science Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider font-mono text-neutral-950"
                  style={{ backgroundColor: activeBlock.colorHex }}
                >
                  {activeBlock.duration} INTENTION
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Catalog #{activeBlock.id.toUpperCase()}-01
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-neutral-950 font-display">
                {activeBlock.name}
              </h3>

              <p className="text-base text-neutral-800 font-bold mt-1">
                “{activeBlock.tagline}”
              </p>

              <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                {activeBlock.description}
              </p>
            </div>

            {/* Cognitive Impact Callout */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-xl bg-lego-yellow/30 text-neutral-900 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  🧠
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-neutral-900 font-display">
                    Cognitive Impact
                  </div>
                  <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed">
                    {activeBlock.cognitiveBenefit}
                  </p>
                </div>
              </div>
            </div>

            {/* Hardware Specification Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <div className="flex items-center space-x-1 text-neutral-400 text-[11px] font-mono">
                  <Ruler className="w-3 h-3" />
                  <span>Dimensions</span>
                </div>
                <div className="text-xs font-bold text-neutral-900 mt-1 font-mono">
                  {activeBlock.dimensions}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <div className="flex items-center space-x-1 text-neutral-400 text-[11px] font-mono">
                  <Scale className="w-3 h-3" />
                  <span>Tactile Weight</span>
                </div>
                <div className="text-xs font-bold text-neutral-900 mt-1 font-mono">
                  {activeBlock.weight}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm col-span-2 sm:col-span-1">
                <div className="flex items-center space-x-1 text-neutral-400 text-[11px] font-mono">
                  <Sparkles className="w-3 h-3" />
                  <span>Studs Count</span>
                </div>
                <div className="text-xs font-bold text-neutral-900 mt-1 font-mono">
                  {activeBlock.studs} Tactile Studs
                </div>
              </div>
            </div>

            {/* Material & Finish */}
            <div className="text-xs text-neutral-500 font-mono flex items-center space-x-2">
              <span className="font-bold text-neutral-700">Material Finish:</span>
              <span>{activeBlock.material}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
