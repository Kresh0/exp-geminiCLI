import TerminalHero from '@/components/TerminalHero';
import DiffShowcase from '@/components/DiffShowcase';
import AgentOrchestrator from '@/components/AgentOrchestrator';
import CopyInstall from '@/components/CopyInstall';
import { Terminal, Shield, Zap, Code2, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        {/* Animated Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] -z-10 rounded-full" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] -z-10 rounded-full" />

        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-primary text-sm font-medium mb-8">
            <Shield size={16} />
            Next-Gen Autonomous Coding
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Code at the Speed of <span className="text-primary">Thought.</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Gemini CLI is your autonomous engineering partner. Research, strategy, execution, 
            and validation—orchestrated perfectly in your terminal.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a 
              href="#install"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold glow-primary hover:scale-105 transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </a>
            <a 
              href="https://github.com/google-gemini/gemini-cli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white rounded-full font-bold border-white/10 hover:bg-white/5 transition-all"
            >
              Read Documentation
            </a>
          </div>

          <TerminalHero />
        </div>
      </section>

      {/* Stats/Features Row */}
      <section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Autonomous', value: '100%', icon: Zap },
            { label: 'Sub-Agents', value: '3+', icon: Code2 },
            { label: 'Success Rate', value: '99.9%', icon: Shield },
            { label: 'Language Support', value: '40+', icon: Terminal }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon size={20} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Autonomous Refactoring Showcase */}
      <DiffShowcase />

      {/* Multi-Agent Orchestration */}
      <AgentOrchestrator />

      {/* Footer-ish Call to Action */}
      <section id="install" className="py-32 px-4 relative overflow-hidden scroll-mt-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 blur-[100px] -z-10 rounded-full" />
        
        <div className="max-w-4xl mx-auto glass p-12 rounded-3xl border-white/10 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <h2 className="text-4xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Install Gemini CLI today and experience the future of autonomous software engineering. 
            No more manual boilerplate, just results.
          </p>
          
          <CopyInstall />
          
          <div className="flex justify-center">
            <a 
              href="https://github.com/google-gemini/gemini-cli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              View on GitHub <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; 2026 Gemini CLI Showcase. Built with Next.js 16 and Tailwind v4.
        </p>
      </footer>
    </main>
  );
}
