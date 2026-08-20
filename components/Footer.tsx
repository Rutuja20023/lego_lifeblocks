"use client";

import React, { useState } from "react";
import { soundManager } from "@/lib/audio";
import {
  Send,
  Heart,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    soundManager.playSuccess();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#121214] text-white pt-20 pb-12 border-t border-neutral-800 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lego-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-lego-red shadow-block-sm flex items-center justify-center">
                <span className="font-black text-white text-xs tracking-tighter italic font-display">
                  LEGO
                </span>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white font-display">
                  LifeBlocks<span className="text-lego-red">™</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-lego-yellow text-neutral-950 px-1.5 py-0.5 rounded font-mono ml-2">
                  LIFE
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              A physical modular desk operating system designed for engineers, creators, and deep workers who are tired of managing their lives through glowing glass screens.
            </p>

            <div className="text-xs font-mono text-neutral-500 pt-2">
              Designed in Billund • Engineered for Deep Flow
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-neutral-900/90 rounded-3xl p-6 sm:p-8 border border-neutral-800">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-lego-yellow mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Tactile Dispatch</span>
              </div>

              <h4 className="text-lg font-black text-white font-display mb-2">
                Get Weekly Flow Rituals & Hardware Drops
              </h4>

              <p className="text-xs text-neutral-400 mb-4">
                Join 14,000+ builders receiving our free Sunday newsletter on attention architecture and desk ergonomics.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email (e.g. builder@gmail.com)"
                    className="flex-1 px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-lego-yellow font-mono"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-lego-yellow text-neutral-950 text-xs font-black uppercase tracking-wider font-display hover:bg-yellow-400 transition shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Welcome aboard! Check your inbox for the Morning Stacking Guide.</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Middle Navigation Links */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Hardware</h5>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#blocks" className="hover:text-white transition">Focus Block (90m)</a></li>
              <li><a href="#blocks" className="hover:text-white transition">Deep Work Block (60m)</a></li>
              <li><a href="#blocks" className="hover:text-white transition">Break & Reset Block</a></li>
              <li><a href="#blocks" className="hover:text-white transition">North Star Crown</a></li>
              <li><a href="#blocks" className="hover:text-white transition">Anodized CNC Baseplate</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Kits & Pricing</h5>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#pricing" className="hover:text-white transition">Starter Kit (₹2,499)</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Creator Pro (₹4,499)</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Executive Studio (₹7,999)</a></li>
              <li><a href="#simulator" className="hover:text-white transition">Custom Stack Builder</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Science & Proof</h5>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#philosophy" className="hover:text-white transition">The Screen Problem</a></li>
              <li><a href="#science" className="hover:text-white transition">Neuroscience of Touch</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">The 4-Step Ritual</a></li>
              <li><a href="#reviews" className="hover:text-white transition">Verified Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Connect & Code</h5>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub Repository</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Track Your Shipment</a></li>
              <li><a href="#faq" className="hover:text-white transition">Return Policy (30 Days)</a></li>
              <li><a href="#faq" className="hover:text-white transition">Help Center & FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Assignment Tribute Note */}
        <div className="pt-8 border-t border-neutral-800 text-[11px] font-mono text-neutral-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-neutral-400">Assignment Note & Brand Reimagination:</strong> LEGO LifeBlocks™ is a conceptual frontend design project created as a response to the creative prompt: <em>“Reimagine a well-known brand as something completely opposite.”</em> LEGO has been thoughtfully transformed from children's plastic building toys into an executive physical productivity & daily ritual operating system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-neutral-400 pt-4 border-t border-neutral-900 gap-2">
            <div>
              © 2026 LEGO LifeBlocks™. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-xs">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-lego-red fill-lego-red" />
              <span>by <strong className="text-white">Rutuja Pakhare</strong></span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
