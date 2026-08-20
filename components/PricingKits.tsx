"use client";

import React from "react";
import { PRICING_KITS } from "@/lib/data";
import { useCart } from "@/lib/CartContext";
import { soundManager } from "@/lib/audio";
import {
  Check,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Flame,
  Star,
  ArrowRight,
} from "lucide-react";

export const PricingKits: React.FC = () => {
  const { addItem, formatPrice, currency, setCurrency } = useCart();

  const handleBuy = (kitId: string) => {
    addItem(kitId);
  };

  return (
    <section id="pricing" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-lego-yellow text-neutral-950 text-xs font-black uppercase tracking-wider font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Batch #01 Now Open</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            CHOOSE YOUR DESK SYSTEM.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            One-time hardware investment. Lifetime of spatial focus. Backed by our 30-day tactile satisfaction guarantee.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center bg-neutral-200 p-1 rounded-2xl mt-6 text-xs font-bold font-mono">
            <button
              onClick={() => {
                setCurrency("INR");
                soundManager.playClick();
              }}
              className={`px-4 py-2 rounded-xl transition-all ${
                currency === "INR"
                  ? "bg-white text-neutral-950 shadow-sm font-black"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              🇮🇳 India Pricing (₹ INR)
            </button>
            <button
              onClick={() => {
                setCurrency("USD");
                soundManager.playClick();
              }}
              className={`px-4 py-2 rounded-xl transition-all ${
                currency === "USD"
                  ? "bg-white text-neutral-950 shadow-sm font-black"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              🌎 Global Pricing ($ USD)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_KITS.map((kit) => {
            const priceFormatted = formatPrice(kit.priceINR, kit.priceUSD);
            const originalPriceFormatted = formatPrice(
              kit.originalPriceINR,
              kit.originalPriceUSD
            );

            return (
              <div
                key={kit.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  kit.popular
                    ? "bg-neutral-950 text-white border-2 border-lego-yellow shadow-2xl scale-[1.02] lg:-translate-y-2"
                    : "bg-white text-neutral-900 border-2 border-neutral-200 shadow-tactile hover:border-neutral-400"
                }`}
              >
                {/* Popular / Collector Badge */}
                {kit.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-lego-yellow text-neutral-950 px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider font-mono shadow-md flex items-center space-x-1">
                    <Flame className="w-3 h-3 fill-neutral-950" />
                    <span>{kit.badge}</span>
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <div className="flex items-center justify-between mt-2">
                    <h3
                      className={`text-xl font-black font-display ${
                        kit.popular ? "text-white" : "text-neutral-950"
                      }`}
                    >
                      {kit.name}
                    </h3>
                  </div>

                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      kit.popular ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {kit.subtitle}
                  </p>

                  {/* Pricing Display */}
                  <div className="my-6 pt-4 border-t border-neutral-200/20 flex items-baseline space-x-2">
                    <span
                      className={`text-3xl sm:text-4xl font-black font-mono ${
                        kit.popular ? "text-white" : "text-neutral-950"
                      }`}
                    >
                      {priceFormatted}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 line-through">
                      {originalPriceFormatted}
                    </span>
                    <span className="text-[10px] font-bold font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                      SAVE 25%
                    </span>
                  </div>

                  {/* Stock counter */}
                  <div className="flex items-center space-x-2 text-xs font-mono mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className={kit.popular ? "text-neutral-300" : "text-neutral-600"}>
                      Only <strong className="text-lego-yellow">{kit.stockCount} kits</strong> remaining in this batch
                    </span>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-3 text-xs">
                    <div
                      className={`font-mono font-bold uppercase tracking-wider text-[11px] ${
                        kit.popular ? "text-lego-yellow" : "text-neutral-700"
                      }`}
                    >
                      What's Included in the Box:
                    </div>

                    {kit.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            kit.popular
                              ? "bg-lego-yellow text-neutral-950"
                              : "bg-neutral-900 text-white"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span
                          className={
                            kit.popular ? "text-neutral-300" : "text-neutral-700"
                          }
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buy Button */}
                <div className="mt-8 pt-6 border-t border-neutral-200/20">
                  <button
                    onClick={() => handleBuy(kit.id)}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-xs font-display flex items-center justify-center space-x-2 btn-tactile ${
                      kit.popular
                        ? "btn-tactile-yellow"
                        : "btn-tactile-dark"
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Pre-Order {kit.name.split(" ")[1]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div
                    className={`text-center mt-3 text-[11px] font-mono ${
                      kit.popular ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    📦 Free Tracked Shipping • 30-Day Guarantee
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border-2 border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl shrink-0">
              🛡️
            </div>
            <div>
              <h4 className="text-base font-black text-neutral-950 font-display">
                The 30-Day Tactile Focus Guarantee
              </h4>
              <p className="text-xs text-neutral-600 mt-1 max-w-xl">
                Unbox LifeBlocks, place them on your desk, and use them for 30 mornings. If you don’t feel noticeably calmer, more focused, and free from digital distraction, send them back for a 100% immediate refund. We cover return shipping.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono text-neutral-500 shrink-0">
            <div className="flex items-center space-x-1.5">
              <Truck className="w-4 h-4 text-neutral-800" />
              <span>Ships in 24h</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-neutral-800" />
              <span>Lifetime Magnets</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
