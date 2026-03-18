'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle2, Search, Loader2, Code2, ShieldCheck, ChevronRight } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'info' | 'success' | 'agent';
  content: string;
  agent?: string;
}

const TERMINAL_DATA: TerminalLine[] = [
  { type: 'input', content: 'gemini-cli "refactor legacy CSS to Tailwind CSS v4 in src/components/"' },
  { type: 'agent', agent: 'orchestrator', content: 'Initializing Research phase...' },
  { type: 'info', content: 'Scanning 45 files for CSS patterns...' },
  { type: 'success', content: 'Found 12 legacy stylesheets and 88 inline style objects.' },
  { type: 'agent', agent: 'orchestrator', content: 'Delegating strategy to codebase_investigator...' },
  { type: 'agent', agent: 'investigator', content: 'Mapping dependencies and style hierarchies...' },
  { type: 'info', content: 'Formulating conversion strategy: 14% global styles, 86% component-local.' },
  { type: 'agent', agent: 'orchestrator', content: 'Strategy approved. Starting Execution...' },
  { type: 'output', content: 'Updating src/components/Header.tsx [||||||||||] 100%' },
  { type: 'output', content: 'Updating src/components/Card.tsx   [||||||||||] 100%' },
  { type: 'output', content: 'Updating src/app/globals.css      [||||||||||] 100%' },
  { type: 'success', content: 'Refactor complete. Running Validation phase...' },
  { type: 'info', content: 'Executing "npm run lint" and "next build"...' },
  { type: 'success', content: 'Zero errors. Built in 12.4s.' },
  { type: 'info', content: 'Gemini CLI: Task accomplished autonomously.' }
];

export default function TerminalHero() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < TERMINAL_DATA.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, TERMINAL_DATA[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 800 + Math.random() * 1000); // Random typing delay
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-20 px-4">
      <div className="rounded-xl overflow-hidden glass glow-primary border-primary/20">
        {/* Terminal Header */}
        <div className="bg-black/80 px-4 py-2 flex items-center justify-between border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
            <Terminal size={14} />
            gemini-cli — zsh
          </div>
          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className="bg-black/90 p-6 font-mono text-sm h-[400px] overflow-y-auto scrollbar-hide"
        >
          <AnimatePresence>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-2 flex ${
                  line.type === 'input' ? 'text-primary' : 
                  line.type === 'agent' ? 'text-accent' : 
                  line.type === 'success' ? 'text-emerald-400' : 
                  line.type === 'info' ? 'text-amber-400/80' : 
                  'text-gray-300'
                }`}
              >
                {line.type === 'input' && <span className="mr-2 text-white/50">➜</span>}
                {line.type === 'agent' && (
                  <span className="mr-2 text-accent bg-accent/10 px-1 rounded uppercase text-[10px] font-bold self-center">
                    {line.agent}
                  </span>
                )}
                {line.type === 'success' && <CheckCircle2 size={14} className="mr-2 inline-block self-center" />}
                {line.type === 'info' && <Loader2 size={14} className="mr-2 animate-spin inline-block self-center" />}
                
                <span className="leading-relaxed">{line.content}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {currentIndex < TERMINAL_DATA.length && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-primary ml-1 translate-y-0.5"
            />
          )}
        </div>
      </div>
    </div>
  );
}
