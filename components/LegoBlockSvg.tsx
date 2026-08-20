"use client";

import React from "react";
import { LegoBlockData } from "@/lib/types";
import { Zap, Cpu, HeartPulse, Coffee, Target, Inbox, LucideIcon } from "lucide-react";

interface LegoBlockSvgProps {
  block: LegoBlockData;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showDetails?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  active?: boolean;
}

const ICONS: Record<string, LucideIcon> = {
  Zap,
  Cpu,
  HeartPulse,
  Coffee,
  Target,
  Inbox,
};

export const LegoBlockSvg: React.FC<LegoBlockSvgProps> = ({
  block,
  size = "md",
  className = "",
  showDetails = false,
  interactive = false,
  onClick,
  active = false,
}) => {
  const IconComponent = ICONS[block.iconName] || Zap;

  // Size scale mappings
  const heightClasses = {
    sm: "h-16 w-32",
    md: "h-24 w-44",
    lg: "h-32 w-60",
    xl: "h-40 w-72",
  }[size];

  return (
    <div
      onClick={onClick}
      className={`relative select-none transition-all duration-300 ${
        interactive ? "cursor-pointer hover:-translate-y-1 hover:brightness-105 active:translate-y-1" : ""
      } ${active ? "ring-4 ring-black/40 shadow-tactile-lg" : ""} ${className}`}
    >
      {/* 3D Tactile LEGO Block Container */}
      <div
        className={`relative rounded-2xl p-4 flex flex-col justify-between overflow-hidden transition-shadow ${heightClasses}`}
        style={{
          backgroundColor: block.colorHex,
          boxShadow: `0 8px 0 0 ${block.shadowHex}, 0 20px 25px -5px rgba(0,0,0,0.25)`,
        }}
      >
        {/* Top Highlight Bevel */}
        <div className="absolute top-0 inset-x-0 h-1 bg-white/40 pointer-events-none" />

        {/* Stud Row at the Top */}
        <div className="flex items-center justify-between px-2 pt-0.5">
          {Array.from({ length: block.studs || 4 }).map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border border-black/10 shadow-stud flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundColor: block.accentHex,
              }}
            >
              <span className="text-[6px] font-black tracking-tighter text-black/40 uppercase">
                LEGO
              </span>
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="flex items-center justify-between mt-2 z-10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-black/15 flex items-center justify-center text-black/80 shadow-inner">
              <IconComponent className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs font-black tracking-wider uppercase text-black/90 font-display">
                {block.name}
              </div>
              <div className="text-[10px] font-bold text-black/60 font-mono tracking-tight">
                {block.duration}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom edge shadow */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-black/20 pointer-events-none" />
      </div>

      {showDetails && (
        <div className="mt-3 text-center">
          <div className="text-xs font-bold text-neutral-800">{block.tagline}</div>
          <div className="text-[11px] text-neutral-500 mt-0.5">{block.cognitiveBenefit}</div>
        </div>
      )}
    </div>
  );
};
