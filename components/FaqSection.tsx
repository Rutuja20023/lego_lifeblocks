"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/data";
import { soundManager } from "@/lib/audio";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Philosophy", "Hardware", "Usage", "Shipping"];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (idx: number) => {
    soundManager.playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-black uppercase tracking-wider font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-display leading-tight mb-4">
            FREQUENTLY ASKED QUESTIONS.
          </h2>

          <p className="text-base text-neutral-600">
            Everything you need to know about the LifeBlocks tactile productivity system.
          </p>

          {/* Search Bar & Category Tags */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. shipping, magnets, notion)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-neutral-300 text-xs font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 shadow-sm"
              />
            </div>

            <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    soundManager.playClick();
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-neutral-500 text-sm border border-neutral-200">
              No questions found matching “{searchQuery}”.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border-2 border-neutral-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 hover:bg-neutral-50/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-lego-yellow shrink-0" />
                      <span className="font-bold text-neutral-950 font-display text-sm sm:text-base">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-neutral-950" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-snap">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
