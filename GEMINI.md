# Project: Gemini CLI Showcase

This is a high-impact, standalone showcase site designed to demonstrate the autonomous coding and multi-agent orchestration capabilities of Gemini CLI.

## 🛠 Tech Stack
- **Framework:** Next.js 16.2.0 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Runtime:** Node.js 22.x

## 🎨 Design Philosophy: "Premium Dark UI"
- **Primary Color:** `#8b5cf6` (Violet/Primary) with neon glow effects.
- **Accent Color:** `#3b82f6` (Blue/Accent).
- **Background:** `#050505` (Deep Black).
- **Aesthetic:** Experimental, high-tech, and interactive. Use glassmorphism (`glass` class) and custom glows (`glow-primary`, `glow-accent`) extensively.

## 📂 Core Components
- `src/components/TerminalHero.tsx`: Animated CLI simulation (Research → Strategy → Execution → Validation).
- `src/components/DiffShowcase.tsx`: Draggable "Before/After" code comparison tool.
- `src/components/AgentOrchestrator.tsx`: SVG-based visualization of multi-agent delegation.
- `src/components/CopyInstall.tsx`: Interactive command copy component with feedback.

## 📜 Development Guidelines
- **Strict Adherence:** Maintain the established aesthetic. Any new UI components must use the `glass` effect and follow the dark theme.
- **Tailwind v4:** Use modern Tailwind v4 syntax and features as configured in `globals.css`.
- **Interactivity:** Prioritize fluid, performant animations using Framer Motion. Ensure all interactive elements have clear visual feedback (hover states, active states).
- **Responsiveness:** All components must be mobile-friendly, utilizing the responsive utilities of Tailwind 4.

## 🤖 AI Context
- This project was built entirely using Gemini CLI.
- When refactoring or adding features, analyze the `AgentOrchestrator` to understand how sub-agents are represented in the UI and ensure any "AI-centric" features align with that mental model.
