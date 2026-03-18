'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyInstall() {
  const [copied, setCopied] = useState(false);
  const command = 'npm install -g @google/gemini-cli';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="group relative bg-black/80 rounded-xl p-4 font-mono text-sm inline-flex items-center gap-4 border border-white/5 mb-8 hover:border-primary/30 transition-colors">
      <div className="flex items-center gap-2">
        <span className="text-primary">$</span> 
        <span className="text-gray-300">{command}</span>
      </div>
      
      <button 
        onClick={handleCopy}
        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all active:scale-90"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={16} className="text-emerald-400" />
        ) : (
          <Copy size={16} />
        )}
      </button>

      {/* Tooltip */}
      {copied && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded shadow-lg animate-bounce">
          COPIED!
        </div>
      )}
    </div>
  );
}
