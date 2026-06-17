'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} id="brand-logo">
      {/* Golden Shield & Lion Crest SVG */}
      <div className="relative w-12 h-12 flex-shrink-0 bg-black rounded-full border border-[#c5a85c]/30 flex items-center justify-center shadow-lg shadow-gold/10">
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 text-[#d4af37]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Outer Shield Shield */}
          <path
            d="M 50 15 
               C 50 15, 75 18, 78 40 
               C 81 65, 50 85, 50 85 
               C 50 85, 19 65, 22 40 
               C 25 18, 50 15, 50 15 Z"
            fill="currentColor"
            fillOpacity="0.08"
            stroke="#d4af37"
            strokeWidth="3.5"
          />
          {/* Lion Face Simplified Details */}
          <path
            d="M 40 45 L 43 41 L 47 41 M 60 45 L 57 41 L 53 41" 
            stroke="#d4af37"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Nose & Snout */}
          <path
            d="M 50 49 L 47 55 L 53 55 Z"
            fill="#d4af37"
          />
          {/* Mane outlines */}
          <path
            d="M 33 42 C 30 50, 31 60, 38 65 C 41 68, 45 70, 50 70 C 55 70, 59 68, 62 65 C 69 60, 70 50, 67 42"
            stroke="#d4af37"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Crown */}
          <path
            d="M 38 31 L 43 36 L 50 30 L 57 36 L 62 31 L 59 40 L 41 40 Z"
            fill="#d4af37"
            stroke="#c5a85c"
            strokeWidth="1"
          />
          <circle cx="38" cy="29" r="1.5" fill="#d4af37" />
          <circle cx="50" cy="27" r="1.5" fill="#d4af37" />
          <circle cx="62" cy="29" r="1.5" fill="#d4af37" />
        </svg>
      </div>

      {/* Brand Text Details */}
      <div className="flex flex-col select-none" id="brand-logo-text">
        <span 
          className="font-display font-black text-xl md:text-2xl tracking-tighter leading-none text-neutral-950 dark:text-white uppercase"
        >
          EMPIRE
        </span>
        <span 
          className="font-mono font-bold text-[10px] md:text-xs tracking-[0.22em] text-[#c5a85c] leading-tight uppercase -mt-0.5"
        >
          CLOTHING HUB
        </span>
        {showTagline && (
          <span 
            className="text-[8px] text-zinc-500 dark:text-zinc-500 font-mono tracking-widest uppercase mt-0.5"
          >
            A UNIT BY VIPIN BAISLA
          </span>
        )}
      </div>
    </div>
  );
}
