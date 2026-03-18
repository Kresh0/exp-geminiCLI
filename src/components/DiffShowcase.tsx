'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Wand2, Info } from 'lucide-react';

const BEFORE_CODE = `// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, description }) => {
  return (
    <div className="card-container">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <button className="card-btn">Click Me</button>
    </div>
  );
};

export default Card;

/* Card.css */
.card-container {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.card-title { font-size: 1.25rem; font-weight: bold; }
.card-desc { color: #666; margin-top: 10px; }
.card-btn { background: #3b82f6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }`;

const AFTER_CODE = `// src/components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-white/10 hover:border-primary/50 transition-colors group">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2.5 text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg glow-primary transition-all active:scale-95">
        Click Me
      </button>
    </div>
  );
};`;

export default function DiffShowcase() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <Wand2 size={14} />
          Autonomous Refactoring
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent">
          Legacy to Modern in Seconds
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Gemini CLI doesn't just copy-paste. It understands your codebase architecture, 
          converts CSS to Tailwind 4, adds TypeScript safety, and follows modern best practices.
        </p>
      </div>

      <div 
        className="relative h-[600px] rounded-2xl overflow-hidden glass border-white/5 cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
      >
        {/* After (Bottom Layer) */}
        <div className="absolute inset-0 bg-[#0a0a0b] p-8 overflow-auto">
          <div className="flex items-center gap-2 mb-4 text-emerald-400">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-400/30 bg-emerald-400/10">AFTER</span>
            <span className="text-xs font-mono">Next.js 16 + Tailwind v4 + TS</span>
          </div>
          <pre className="font-mono text-sm leading-relaxed text-gray-300">
            {AFTER_CODE}
          </pre>
        </div>

        {/* Before (Top Layer) */}
        <div 
          className="absolute inset-0 bg-[#1a1a1c] p-8 overflow-auto border-r border-primary/50"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="flex items-center gap-2 mb-4 text-amber-400">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-400/30 bg-amber-400/10 uppercase">Before</span>
            <span className="text-xs font-mono opacity-60">Messy JS + External CSS</span>
          </div>
          <pre className="font-mono text-sm leading-relaxed text-gray-500 italic">
            {BEFORE_CODE}
          </pre>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-primary glow-primary flex items-center justify-center text-white border-4 border-[#050505] z-10">
            <div className="flex gap-0.5">
              <ChevronLeft size={16} />
              <ChevronRight size={16} />
            </div>
          </div>
        </div>

        {/* Floating Intelligence Note */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 right-8 max-w-xs glass p-4 rounded-xl border-accent/30 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 p-1 rounded bg-accent/20 text-accent">
              <Info size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-accent uppercase mb-1">Agent Strategy</p>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                "Detected legacy .css import. Identified 4 component classes. Consolidated into Tailwind utility classes. Injected TypeScript interfaces based on prop usage."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
