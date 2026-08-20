"use client";

import React from "react";
import { Check, X, Sparkles, Layers } from "lucide-react";

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      feature: "Physical Peripheral Visibility",
      lego: true,
      notion: false,
      paper: false,
      sticky: true,
      note: "LifeBlocks sits directly under your screen, impossible to minimize.",
    },
    {
      feature: "Zero Digital Distraction / Tab Loss",
      lego: true,
      notion: false,
      paper: true,
      sticky: true,
      note: "No browser tabs, no notifications, no dopamine trapdoors.",
    },
    {
      feature: "Strict Anti-Bloat Physical Limit",
      lego: true,
      notion: false,
      paper: false,
      sticky: false,
      note: "Baseplate fits 4-6 blocks. Forces ruthless daily prioritization.",
    },
    {
      feature: "Tactile Dopamine Completion Ritual",
      lego: true,
      notion: false,
      paper: false,
      sticky: false,
      note: "Physical snap-off release activates somatosensory closure.",
    },
    {
      feature: "Desk Aesthetic & Industrial Design",
      lego: true,
      notion: false,
      paper: false,
      sticky: false,
      note: "CNC Anodized Aluminum + Bead-blasted weighted ABS blocks.",
    },
    {
      feature: "Zero Battery, Zero Sync Bugs",
      lego: true,
      notion: false,
      paper: true,
      sticky: true,
      note: "Works 100% offline, forever.",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-black uppercase tracking-wider font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lego-yellow" />
            <span>Honest Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            HOW LIFEBLOCKS COMPARES.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Why high-performers are retiring infinite digital task managers in favor of tactile hardware.
          </p>
        </div>

        {/* Responsive Table Card */}
        <div className="bg-[#FAF8F5] rounded-3xl p-4 sm:p-8 border-2 border-neutral-200 shadow-tactile overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-neutral-300">
                <th className="py-4 px-4 text-xs font-black uppercase tracking-wider font-mono text-neutral-500 w-1/3">
                  Productivity Metric
                </th>
                <th className="py-4 px-4 text-center bg-lego-yellow/30 rounded-t-2xl border-x border-t border-lego-yellow/50">
                  <div className="flex items-center justify-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-lego-red" />
                    <span className="text-xs sm:text-sm font-black uppercase tracking-tight text-neutral-950 font-display">
                      LEGO LifeBlocks™
                    </span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center text-xs font-bold font-mono text-neutral-600">
                  Digital Apps (Notion/Todoist)
                </th>
                <th className="py-4 px-4 text-center text-xs font-bold font-mono text-neutral-600">
                  Paper Planners
                </th>
                <th className="py-4 px-4 text-center text-xs font-bold font-mono text-neutral-600">
                  Sticky Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/60 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-neutral-900 font-display">
                      {row.feature}
                    </div>
                    <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                      {row.note}
                    </div>
                  </td>

                  {/* LEGO LifeBlocks Column */}
                  <td className="py-4 px-4 text-center bg-lego-yellow/20 border-x border-lego-yellow/40">
                    <div className="w-7 h-7 rounded-full bg-lego-yellow text-neutral-950 flex items-center justify-center mx-auto shadow-sm">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  </td>

                  {/* Notion/Todoist */}
                  <td className="py-4 px-4 text-center">
                    {row.notion ? (
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-400 mx-auto" />
                    )}
                  </td>

                  {/* Paper Planners */}
                  <td className="py-4 px-4 text-center">
                    {row.paper ? (
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-400 mx-auto" />
                    )}
                  </td>

                  {/* Sticky Notes */}
                  <td className="py-4 px-4 text-center">
                    {row.sticky ? (
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
