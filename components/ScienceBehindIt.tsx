"use client";

import React from "react";
import { Brain, Eye, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export const ScienceBehindIt: React.FC = () => {
  const principles = [
    {
      title: "Tactile Cognitive Anchoring",
      icon: "🧩",
      subtitle: "Motor-Cortex Activation",
      desc: "Physical touch encodes intentions into the somatosensory cortex 3.4× deeper than tapping glass or typing keys, turning abstract tasks into physical reality.",
    },
    {
      title: "Elimination of Tab Overload",
      icon: "🎯",
      subtitle: "Peripheral Spatial Awareness",
      desc: "A physical object in your peripheral sightline maintains passive focus without triggering the context-switching penalty of alt-tabbing into browser tabs.",
    },
    {
      title: "The Zeigarnik Relief Cycle",
      icon: "⚡",
      subtitle: "Neurochemical Closure",
      desc: "Physically de-coupling a completed LifeBlock produces a tangible sensory cue that signals the brain to release mental load and suppress task anxiety.",
    },
  ];

  return (
    <section id="science" className="py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-black uppercase tracking-wider font-mono mb-4">
            <Brain className="w-3.5 h-3.5 text-purple-700" />
            <span>Neuroscience & Ergonomics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            THE NEUROSCIENCE OF TACTILE PRODUCTIVITY.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Why our brains evolved for millions of years to manipulate physical objects—and why digital screens make us perpetually distracted.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-2xl mb-6 shadow-sm">
                  {item.icon}
                </div>

                <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-1">
                  {item.subtitle}
                </div>

                <h3 className="text-xl font-black text-neutral-900 font-display mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center space-x-2 text-xs font-bold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Validated by Behavioral Ergonomics</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stat Callout Strip */}
        <div className="mt-12 bg-[#18181B] text-white rounded-3xl p-8 shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-2 border-neutral-800">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-lego-yellow font-display">
              −68%
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">
              Context-Switching Penalty
            </div>
          </div>

          <div className="border-y sm:border-y-0 sm:border-x border-neutral-800 py-4 sm:py-0">
            <div className="text-3xl sm:text-4xl font-black text-white font-display">
              3.4×
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">
              Higher Commitment Retention
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-display">
              0 sec
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">
              Screen Loading Lag
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
