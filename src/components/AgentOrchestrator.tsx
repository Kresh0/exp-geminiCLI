'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Search, Shield } from 'lucide-react';

const AGENTS = [
  { id: 'main', name: 'Strategic Orchestrator', role: 'Main Agent', icon: Cpu, color: 'text-primary' },
  { id: 'investigator', name: 'Codebase Investigator', role: 'Deep Analysis', icon: Search, color: 'text-accent' },
  { id: 'generalist', name: 'Generalist Sub-Agent', role: 'Task Execution', icon: Zap, color: 'text-amber-400' },
  { id: 'help', name: 'CLI Help Expert', role: 'Context Support', icon: Shield, color: 'text-emerald-400' }
];

export default function AgentOrchestrator() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-32 overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Multi-Agent Orchestration</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Gemini CLI operates as a high-level manager, delegating complex research and execution 
          to specialized sub-agents to maximize efficiency and accuracy.
        </p>
      </div>

      <div className="relative flex justify-center items-center h-[500px]">
        {/* Animated Background Ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-[450px] h-[450px] border border-white/5 rounded-full flex items-center justify-center"
          >
            <div className="w-[300px] h-[300px] border border-white/5 border-dashed rounded-full" />
          </motion.div>
        </div>

        {/* Connection Lines & Particles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {AGENTS.slice(1).map((agent, i) => {
            const angle = (i * 120 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 250;
            const y = Math.sin(angle) * 180;
            
            return (
              <g key={agent.id}>
                {/* Static Line */}
                <line 
                  x1="50%" y1="50%" 
                  x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className="text-white/10"
                />
                
                {/* Moving Particle */}
                <motion.circle
                  r="3"
                  fill="var(--primary)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ 
                    cx: ["50%", `calc(50% + ${x}px)`, "50%"],
                    cy: ["50%", `calc(50% + ${y}px)`, "50%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                  className="glow-primary"
                />
              </g>
            );
          })}
        </svg>

        {/* Central Orchestrator */}
        <motion.div 
          animate={{ 
            y: [0, -8, 0],
            boxShadow: [
              "0 0 20px rgba(139, 92, 246, 0.2)",
              "0 0 40px rgba(139, 92, 246, 0.4)",
              "0 0 20px rgba(139, 92, 246, 0.2)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 p-8 rounded-3xl glass border-primary/40 text-center w-72"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
            <Cpu size={40} className="animate-pulse" />
          </div>
          <h3 className="font-bold text-xl mb-1">{AGENTS[0].name}</h3>
          <p className="text-sm text-primary uppercase font-bold tracking-widest">{AGENTS[0].role}</p>
        </motion.div>

        {/* Satellite Agents */}
        {AGENTS.slice(1).map((agent, i) => {
          const angle = (i * 120 - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * 250;
          const y = Math.sin(angle) * 180;

          return (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: y + Math.sin(Date.now() / 1000 + i) * 10 }}
              style={{ x }}
              className="absolute p-6 rounded-2xl glass border-white/5 w-56 text-center z-10"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${agent.color} mx-auto mb-4`}>
                <agent.icon size={24} />
              </div>
              <h4 className="font-bold text-base mb-1">{agent.name}</h4>
              <p className="text-xs text-gray-500 uppercase font-semibold">{agent.role}</p>
              
              {/* Individual Satellite Glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent pointer-events-none`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
