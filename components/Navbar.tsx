"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import { soundManager } from "@/lib/audio";
import {
  ShoppingBag,
  Volume2,
  VolumeX,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const {
    currency,
    setCurrency,
    soundEnabled,
    setSoundEnabled,
    setIsCartOpen,
    itemCount,
    addItem,
  } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The System", href: "#blocks" },
    { label: "Simulator", href: "#simulator" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Science", href: "#science" },
    { label: "Kits & Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-lego-charcoal text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium flex items-center justify-center space-x-2 border-b border-white/10">
        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-lego-red text-white text-[9px] font-black uppercase tracking-wider animate-pulse">
          LAUNCH BATCH #01
        </span>
        <span className="text-white/90">
          Reimagined by LEGO Life • Free Express Shipping on All Starter & Creator Kits
        </span>
        <span className="hidden md:inline-flex items-center text-lego-yellow font-bold ml-2">
          <Sparkles className="w-3 h-3 mr-1" /> Use code <code className="bg-white/20 px-1.5 py-0.2 rounded text-[10px] ml-1 font-mono">FIRSTBUILD15</code>
        </span>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-md py-3 border-b border-neutral-200"
            : "bg-[#FAF8F5]/60 backdrop-blur-sm py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={() => soundManager.playClick()}
            className="flex items-center space-x-3 group cursor-pointer select-none"
          >
            {/* Iconic LEGO Red Tile */}
            <div className="w-10 h-10 rounded-lg bg-lego-red shadow-block-sm flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105">
              <div className="absolute top-0 inset-x-0 h-1 bg-white/40" />
              <span className="font-black text-white text-xs tracking-tighter italic font-display">
                LEGO
              </span>
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-black/20" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-lg font-black tracking-tight text-neutral-900 font-display">
                  LifeBlocks<span className="text-lego-red text-sm">™</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-lego-yellow text-neutral-900 px-1.5 py-0.5 rounded font-mono">
                  LIFE
                </span>
              </div>
              <span className="text-[10px] text-neutral-500 font-medium -mt-1 tracking-tight">
                Build Your Day • Physical Productivity
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => soundManager.playClick()}
                className="hover:text-lego-red transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls: Sound, Currency, Cart, CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Tactile Audio Sound Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                soundManager.playClick();
              }}
              title={soundEnabled ? "Mute tactile sound effects" : "Enable tactile sound effects"}
              className="w-9 h-9 rounded-xl border border-neutral-300 bg-white/80 hover:bg-white flex items-center justify-center text-neutral-700 transition shadow-sm"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-neutral-800" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-400" />
              )}
            </button>

            {/* Currency Switcher */}
            <div className="flex items-center bg-neutral-200/80 p-0.5 rounded-xl text-xs font-bold font-mono">
              <button
                onClick={() => {
                  setCurrency("INR");
                  soundManager.playClick();
                }}
                className={`px-2 py-1 rounded-lg transition-all ${
                  currency === "INR"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => {
                  setCurrency("USD");
                  soundManager.playClick();
                }}
                className={`px-2 py-1 rounded-lg transition-all ${
                  currency === "USD"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Shopping Bag Button */}
            <button
              onClick={() => {
                setIsCartOpen(true);
                soundManager.playClick();
              }}
              className="relative w-10 h-10 rounded-xl bg-white border border-neutral-300 hover:border-neutral-400 flex items-center justify-center text-neutral-800 shadow-sm transition group"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-lego-red text-white text-[10px] font-black flex items-center justify-center animate-bounce shadow">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Quick Order Button */}
            <button
              onClick={() => addItem("creator-pro")}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider font-display btn-tactile btn-tactile-yellow"
            >
              <span>Build My Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl border border-neutral-300 bg-white flex items-center justify-center text-neutral-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl animate-snap">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    soundManager.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg font-semibold text-neutral-800 hover:bg-neutral-100 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex flex-col space-y-2">
              <button
                onClick={() => {
                  addItem("creator-pro");
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs btn-tactile btn-tactile-yellow flex items-center justify-center space-x-2"
              >
                <span>Get Starter Kit (₹2,499 / $29)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
