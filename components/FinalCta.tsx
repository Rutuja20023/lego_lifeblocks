"use client";

import React from "react";
import { useCart } from "@/lib/CartContext";
import { soundManager } from "@/lib/audio";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

export const FinalCta: React.FC = () => {
  const { addItem, formatPrice } = useCart();

  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient & Stud Mesh */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 bg-lego-red/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 bg-lego-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-baseplate-dark/30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-lego-yellow text-xs font-black uppercase tracking-wider font-mono mb-8 shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch Batch #01 Shipping Now</span>
        </div>

        {/* Massive Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight font-display leading-[0.95] mb-6">
          STOP MANAGING YOUR DAY.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lego-yellow via-amber-400 to-lego-red">
            START BUILDING IT.
          </span>
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          No notifications. No battery anxiety. No 40 open browser tabs.
          Just you, your magnetic baseplate, and the physical blocks that move the needle.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            onClick={() => {
              addItem("creator-pro");
              soundManager.playSnap();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-wider font-display btn-tactile btn-tactile-yellow flex items-center justify-center space-x-2 shadow-xl"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Get Creator Pro Kit ({formatPrice(4499, 54)})</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              addItem("starter");
              soundManager.playSnap();
            }}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl text-xs font-bold font-mono text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 transition"
          >
            Or Starter Kit ({formatPrice(2499, 29)})
          </button>
        </div>

        {/* Reassurance Footer Badges */}
        <div className="pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-neutral-400">
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4 text-lego-yellow" />
            <span>Free Priority Courier Dispatch</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>30-Day Tactile Money-Back Trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Lifetime Magnet Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
