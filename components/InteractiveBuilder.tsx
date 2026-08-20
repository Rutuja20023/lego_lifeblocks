"use client";

import React, { useState } from "react";
import { LEGO_BLOCKS } from "@/lib/data";
import { LegoBlockData } from "@/lib/types";
import { useCart } from "@/lib/CartContext";
import { soundManager } from "@/lib/audio";
import {
  Plus,
  Trash2,
  Sparkles,
  Zap,
  Check,
  AlertCircle,
  ShoppingBag,
  RotateCcw,
  ArrowRight,
  ShieldAlert,
  Flame,
  Layers,
} from "lucide-react";

export const InteractiveBuilder: React.FC = () => {
  const { addItem, formatPrice } = useCart();
  // Initial stack of blocks on the baseplate
  const [deskStack, setDeskStack] = useState<string[]>([
    "goal",
    "focus",
    "break",
    "work",
    "health",
  ]);

  const maxCapacity = 6;

  const handleAddBlock = (blockId: string) => {
    if (deskStack.length >= maxCapacity) {
      soundManager.playClick();
      return;
    }
    soundManager.playSnap();
    setDeskStack((prev) => [...prev, blockId]);
  };

  const handleRemoveBlock = (index: number) => {
    soundManager.playClick();
    setDeskStack((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClear = () => {
    soundManager.playClick();
    setDeskStack([]);
  };

  const loadPreset = (presetName: "engineer" | "founder" | "student") => {
    soundManager.playSuccess();
    if (presetName === "engineer") {
      setDeskStack(["goal", "focus", "break", "work", "work", "health"]);
    } else if (presetName === "founder") {
      setDeskStack(["goal", "admin", "focus", "break", "work"]);
    } else if (presetName === "student") {
      setDeskStack(["focus", "break", "focus", "break", "health"]);
    }
  };

  // Calculations
  const resolvedBlocks = deskStack
    .map((id) => LEGO_BLOCKS.find((b) => b.id === id))
    .filter(Boolean) as LegoBlockData[];

  const focusCount = resolvedBlocks.filter((b) => b.category === "focus" || b.category === "work").length;
  const breakCount = resolvedBlocks.filter((b) => b.category === "break" || b.category === "health").length;
  const hasGoal = resolvedBlocks.some((b) => b.category === "goal");

  // Calculate Focus Score & Burnout status
  let focusScore = Math.min(100, Math.round((focusCount * 22 + (hasGoal ? 20 : 0) + (breakCount >= 1 ? 16 : 0))));
  if (deskStack.length === 0) focusScore = 0;

  // Approximate minutes
  const totalMinutes = resolvedBlocks.reduce((acc, b) => {
    if (b.id === "focus") return acc + 90;
    if (b.id === "work") return acc + 60;
    if (b.id === "health") return acc + 45;
    if (b.id === "break") return acc + 20;
    if (b.id === "admin") return acc + 30;
    return acc;
  }, 0);

  const hours = (totalMinutes / 60).toFixed(1);

  // Status & Guidance message
  let statusMessage = "Add blocks to begin building your day.";
  let statusType: "good" | "warning" | "perfect" = "good";

  if (deskStack.length === 0) {
    statusMessage = "Your baseplate is empty. Snap blocks from below to architect your day.";
  } else if (focusCount >= 3 && breakCount === 0) {
    statusMessage = "⚠️ High burnout risk! You have multiple deep sessions with 0 break blocks. Snap a 20m Break block.";
    statusType = "warning";
  } else if (!hasGoal) {
    statusMessage = "💡 Pro Tip: Snap a North Star Crown block to anchor your #1 daily victory.";
    statusType = "good";
  } else if (focusCount >= 2 && breakCount >= 1 && hasGoal) {
    statusMessage = "✨ Perfect Flow Equilibrium! Optimal dopamine rhythm and cognitive stamina.";
    statusType = "perfect";
  }

  return (
    <section id="simulator" className="py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-lego-yellow text-neutral-950 text-xs font-black uppercase tracking-wider font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Desk Workbench</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            SIMULATE YOUR DAILY STACK.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Click blocks to snap them onto your virtual magnetic baseplate. Test different cognitive rhythms and see your real-time Focus Score.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs font-mono text-neutral-500 font-bold mr-2">
              Try Presets:
            </span>
            <button
              onClick={() => loadPreset("engineer")}
              className="px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-bold text-neutral-800 transition"
            >
              💻 Senior Engineer Setup
            </button>
            <button
              onClick={() => loadPreset("founder")}
              className="px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-bold text-neutral-800 transition"
            >
              🚀 Startup Founder Setup
            </button>
            <button
              onClick={() => loadPreset("student")}
              className="px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-bold text-neutral-800 transition"
            >
              📚 Deep Study Setup
            </button>
          </div>
        </div>

        {/* The Live Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: The Virtual Baseplate (Desk Area) */}
          <div className="lg:col-span-7 bg-[#F4EFE6] rounded-3xl p-6 sm:p-8 border-2 border-[#DFD8C8] shadow-tactile-lg relative overflow-hidden bg-baseplate-pattern">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DFD8C8]">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-lego-red shadow-sm" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                  Magnetic Baseplate ({deskStack.length}/{maxCapacity} Slots Filled)
                </span>
              </div>
              <button
                onClick={handleClear}
                disabled={deskStack.length === 0}
                className="text-xs font-mono text-neutral-500 hover:text-red-600 disabled:opacity-30 flex items-center space-x-1 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Grid</span>
              </button>
            </div>

            {/* Baseplate Snap Canvas */}
            <div className="bg-[#EBE4D5] rounded-2xl p-4 sm:p-6 border-2 border-[#D5CCBA] min-h-[360px] flex flex-col justify-center space-y-3 relative shadow-inner">
              
              {deskStack.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center text-neutral-500">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-300/60 flex items-center justify-center text-neutral-600 mb-3">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-neutral-800 font-display">
                    Your Baseplate is Ready
                  </span>
                  <span className="text-xs text-neutral-500 mt-1 max-w-xs">
                    Select any block from the bottom palette to snap it into your morning sequence.
                  </span>
                </div>
              ) : (
                resolvedBlocks.map((block, idx) => (
                  <div
                    key={`${block.id}-${idx}`}
                    className="animate-snap relative group flex items-center justify-between rounded-xl p-3.5 text-white shadow-block-sm transition-transform"
                    style={{
                      backgroundColor: block.colorHex,
                      color: block.id === "focus" ? "#121214" : "#FFFFFF",
                    }}
                  >
                    {/* Top Studs Accent */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-white/40 pointer-events-none rounded-t-xl" />

                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-lg bg-black/15 flex items-center justify-center text-xs font-black">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-black uppercase tracking-wider font-display">
                          {block.name}
                        </div>
                        <div className="text-[11px] font-mono opacity-80 font-semibold">
                          {block.tagline}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono font-black bg-black/15 px-2.5 py-1 rounded-lg">
                        {block.duration}
                      </span>
                      <button
                        onClick={() => handleRemoveBlock(idx)}
                        title="Remove from baseplate"
                        className="w-7 h-7 rounded-lg bg-black/20 hover:bg-red-600 hover:text-white flex items-center justify-center text-current opacity-70 hover:opacity-100 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}

            </div>

            {/* Live Advice Banner */}
            <div
              className={`mt-4 p-4 rounded-2xl border text-xs font-medium flex items-start space-x-3 ${
                statusType === "perfect"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                  : statusType === "warning"
                  ? "bg-amber-50 border-amber-200 text-amber-900"
                  : "bg-white border-neutral-200 text-neutral-800"
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {statusType === "perfect" && <Check className="w-4 h-4 text-emerald-600" />}
                {statusType === "warning" && <ShieldAlert className="w-4 h-4 text-amber-600" />}
                {statusType === "good" && <Sparkles className="w-4 h-4 text-neutral-600" />}
              </div>
              <div>{statusMessage}</div>
            </div>

            {/* Block Palette: Click to Add */}
            <div className="mt-6 pt-6 border-t border-[#DFD8C8]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 mb-3 flex items-center justify-between">
                <span>Available Blocks Palette (Click to Snap)</span>
                <span className="text-neutral-500 font-normal">Tactile sound enabled</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {LEGO_BLOCKS.map((block) => (
                  <button
                    key={block.id}
                    onClick={() => handleAddBlock(block.id)}
                    disabled={deskStack.length >= maxCapacity}
                    className="p-2.5 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 disabled:opacity-40 text-left transition flex items-center justify-between group shadow-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0 shadow-inner"
                        style={{ backgroundColor: block.colorHex }}
                      />
                      <div className="truncate">
                        <div className="text-xs font-bold text-neutral-900 truncate">
                          {block.name}
                        </div>
                        <div className="text-[10px] font-mono text-neutral-500">
                          {block.duration}
                        </div>
                      </div>
                    </div>
                    <Plus className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:scale-110 transition shrink-0" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Live Cognitive Score & 1-Click Order */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Scorecard Box */}
            <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-neutral-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lego-yellow/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  REAL-TIME COGNITIVE METRICS
                </span>
                <span className="text-xs font-mono text-lego-yellow font-bold">
                  {deskStack.length} Blocks Staged
                </span>
              </div>

              {/* Focus Meter Ring / Bar */}
              <div className="my-6">
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block">
                      Focus Equilibrium Rating
                    </span>
                    <span className="text-4xl font-black font-display text-white">
                      {focusScore}%
                    </span>
                  </div>
                  <span
                    className={`text-xs font-bold font-mono px-2.5 py-1 rounded-full ${
                      focusScore >= 80
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : focusScore >= 50
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        : "bg-neutral-800 text-neutral-400"
                    }`}
                  >
                    {focusScore >= 80 ? "Optimal Rhythm" : focusScore >= 50 ? "Moderate Flow" : "Unstructured"}
                  </span>
                </div>

                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden p-0.5 border border-neutral-700">
                  <div
                    className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-lego-yellow via-lego-orange to-emerald-400"
                    style={{ width: `${focusScore}%` }}
                  />
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-neutral-800/80 border border-neutral-700">
                  <div className="text-[11px] font-mono text-neutral-400">Planned Flow Time</div>
                  <div className="text-lg font-black text-white font-mono mt-0.5">
                    {hours} Hours
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-neutral-800/80 border border-neutral-700">
                  <div className="text-[11px] font-mono text-neutral-400">Rest & Recovery</div>
                  <div className="text-lg font-black text-emerald-400 font-mono mt-0.5">
                    {breakCount} Sessions
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Order Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-neutral-200 shadow-tactile">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider font-mono text-lego-red mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Custom Configuration Ready</span>
              </div>

              <h3 className="text-xl font-black text-neutral-900 font-display">
                Bring This Physical Stack To Your Desk
              </h3>

              <p className="text-xs text-neutral-600 mt-1 mb-6">
                Includes your customized {deskStack.length || 5} LifeBlocks, magnetic CNC baseplate, and travel case.
              </p>

              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-2xl sm:text-3xl font-black text-neutral-950 font-mono">
                  {formatPrice(2499, 29)}
                </span>
                <span className="text-xs font-mono text-neutral-400 line-through">
                  {formatPrice(3499, 42)}
                </span>
                <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  SAVE 30%
                </span>
              </div>

              <button
                onClick={() => addItem("starter", deskStack)}
                className="w-full py-4 rounded-2xl font-black uppercase tracking-wider text-xs font-display btn-tactile btn-tactile-yellow flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order My Custom Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center mt-3 text-[11px] font-mono text-neutral-500">
                🔒 Free Shipping Across India • 30-Day Tactile Guarantee
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
