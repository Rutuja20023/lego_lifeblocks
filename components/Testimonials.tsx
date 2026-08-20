"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star, CheckCircle2, Quote, Sparkles } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider font-mono mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Desk Builders</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            HONEST REVIEWS FROM DEEP WORKERS.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Real developers, founders, and researchers who stopped losing their mornings to 40 browser tabs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border-2 border-neutral-200 shadow-tactile flex flex-col justify-between hover:border-neutral-900 transition-all duration-300 group"
            >
              <div>
                {/* Top User Info & Metric Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-bold text-neutral-950 font-display text-sm">
                          {t.name}
                        </span>
                        {t.verified && (
                          <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                            ✓
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-neutral-500 font-mono">
                        {t.role} • {t.company}
                      </div>
                    </div>
                  </div>

                  {/* Impact Metric Callout */}
                  <div className="bg-white border border-neutral-200 px-3 py-1.5 rounded-2xl shadow-sm text-right">
                    <div className="text-sm font-black font-mono text-neutral-950">
                      {t.metric}
                    </div>
                    <div className="text-[9px] font-mono uppercase text-neutral-400">
                      {t.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-neutral-800 leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              {/* Bottom Setup Spec */}
              <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Kit: <strong className="text-neutral-900">{t.setupType}</strong></span>
                <span className="text-emerald-700 font-semibold">Verified Purchaser</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
