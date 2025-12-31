"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';
import Skills from "../components/Skills";
import LabDashboard from "../components/LabDashboard";
import Terminal from "../components/Terminal";
import AlphabetWall from "../components/AlphabetWall";
import GlitchText from "../components/GlitchText";

const MonsterScene = dynamic(() => import('../components/MonsterScene'), {
  ssr: false 
});

const allProjects = [
  {
    id: "01",
    title: "HireLyze - AI-powered hiring and talent analytics platform",
    tech: ["React.js", "Express.js", "Supabase", "ioredis", "Google GenAI"],
    desc: "An intelligent platform leveraging AI to screen, analyze, and match talent seamlessly with job postings, enhancing recruitment processes end-to-end.",
    stats: [
      { label: "RIFT_STABILITY", value: "42%" },
      { label: "PSIONIC_WAVE", value: "8.4 Hz" },
      { label: "SUBJECT_PULSE", value: "110 BPM" }
    ],
    github: "https://github.com/santrupt29/ai-resume-screener",
    live: "https://hirelyzehq.vercel.app/",
  },
  {
    id: "02",
    title: "Evento - AI-powered event management SaaS",
    tech: ["Next.js", "Convex", "Clerk", "shadcn/ui", "Google GenAI"],
    desc: "A full-stack SaaS platform for discovering, creating, and managing events, where AI helps organizers generate event descriptions and categories from a simple prompt while app handles onboarding, ticketing with QR codes, subscriptions, and analytics.",
    stats: [
      { label: "NEURAL_SYNC", value: "94%" },
      { label: "LATENCY", value: "12ms" },
      { label: "EPOCHS", value: "150" }
    ],
    github: "https://github.com/santrupt29/ai-event-organizer",
    live: "https://eventohq.vercel.app/",
  },
  {
    id: "03",
    title: "PC Forge - Custom PC Builder",
    tech: ["React.js", "Express.js", "MongoDB", "Google GenAI"],
    desc: "A full stack web app for custom PC building with compatibility checking of all parts.",
    stats: [
      { label: "NODE_COUNT", value: "1,240" },
      { label: "CALC_TIME", value: "0.4s" },
      { label: "SIGNAL", value: "WEAK" }
    ],
    github: "https://github.com/santrupt29/pc_forge",
    live: "https://the-pc-forge.vercel.app",
  },
  {
    id: "04",
    title: "Zync- Real-time team collaboration platform",
    tech: ["React.js", "Express.js", "MongoDB", "Stream Chat", "Clerk", "Inngest"],
    desc: "A full stack web app for custom PC building with compatibility checking of all parts.",
    stats: [
      { label: "NODE_COUNT", value: "1,240" },
      { label: "CALC_TIME", value: "0.4s" },
      { label: "SIGNAL", value: "WEAK" }
    ],
    github: "https://github.com/santrupt29/zync",
    live: "https://zync-frontend.vercel.app",
  }
];

export default function Home() {
  const { isUpsideDown, toggleTheme } = useTheme();
  
  const [activeStats, setActiveStats] = useState(allProjects[0].stats);

  return (
    <main className={`relative min-h-screen overflow-x-hidden transition-colors duration-700 ${isUpsideDown ? "bg-transparent" : "bg-[#fdf6e3]"}`}>
      {isUpsideDown && <MonsterScene />}

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        {/* Navigation */}
        <nav className="flex justify-between items-baseline mb-32 border-b border-current pb-4">
          <h1 className={`text-xl md:text-2xl font-black tracking-[0.2em] uppercase font-terminal ${isUpsideDown ? "text-glow text-red-600" : "text-black"}`}>
            <GlitchText isUpsideDown={isUpsideDown}>
              {isUpsideDown ? "VECNA'S DOMAIN" : "SANTRUPT POTPHODE"}
            </GlitchText>
          </h1>
          <button 
            onClick={toggleTheme}
            className={`px-4 py-1 border text-xs font-mono tracking-widest transition-all font-terminal ${
              isUpsideDown 
              ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white" 
              : "border-black text-black hover:bg-black hover:text-[#fdf6e3]"
            }`}
          >
            {isUpsideDown ? "ESCAPE" : "[ ACCESS_VOID ]"}
          </button>
        </nav>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-40 relative">
          {isUpsideDown && (
            <h3 className="text-xs font-terminal text-red-600 mb-4 block uppercase tracking-widest animate-pulse">
              WARNING: THE BARRIER IS WEAKENING
            </h3>
          )}
          
          <h2 className={`text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase transition-all duration-500 ${
            isUpsideDown 
            ? "text-red-600 font-horror drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" 
            : "text-black text-outline hover:text-red-600"
          }`}>
            <GlitchText isUpsideDown={isUpsideDown}>I BUILD</GlitchText>
            <br/> 
            <span className={`block pl-10 md:pl-20 ${isUpsideDown ? "text-red-500" : ""}`}>
              <GlitchText isUpsideDown={isUpsideDown}>WORLDS.</GlitchText>
            </span>
          </h2>

          <div className={`max-w-xl text-lg md:text-xl leading-relaxed font-medium font-terminal mt-8 border-l-2 pl-4 ${
            isUpsideDown ? "text-red-300 border-red-500" : "text-gray-800 border-black"
          }`}>
            Subject: PORTFOLIO_01 <br/>
            Status: <span className={isUpsideDown ? "text-red-500 animate-pulse" : "text-green-600"}>ACTIVE</span><br/>
            {isUpsideDown ? "The connection is unstable..." : "Engineering full-stack web applications."}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href="/resume.pdf" 
              download
              className={`px-6 py-3 font-terminal text-sm uppercase border transition-all duration-300 flex items-center gap-2 ${
                isUpsideDown 
                ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
                : "border-black text-black hover:bg-white hover:text-[#fdf6e3]"
              }`}
            >
              <span>⤓</span>
              [ DOWNLOAD_RESUME ]
            </a>
            <a 
              href="/Santrupt_Resume_VJTI.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 font-terminal text-sm uppercase border transition-all duration-300 flex items-center gap-2 ${
                isUpsideDown 
                ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
                : "border-black text-black hover:bg-white hover:text-[#fdf6e3]"
              }`}
            >
              <span>👁</span>
              [ VIEW_RESUME ]
            </a>
          </div>
          
        </motion.div>

        {/* INTEGRATED PROJECTS SECTION */}
        <section className="mb-32 relative">
          <h3 className="text-xl font-mono tracking-[0.5em] mb-12 opacity-60 uppercase flex items-center font-terminal">
            <span className="mr-4 underline">Project_Logs</span> 
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Project List */}
            <div className="flex-grow flex flex-col gap-8 w-full relative">
              
              {/* Classified Stamp */}
              {isUpsideDown && (
                <div className="absolute -top-4 -left-4 border-4 border-red-600 text-red-600 font-black text-4xl rotate-[-12deg] opacity-80 pointer-events-none z-10 px-4 py-2 uppercase select-none font-horror">
                  Classified
                </div>
              )}

              {allProjects.map((project) => (
                <div 
                  key={project.id}
                  onMouseEnter={() => setActiveStats(project.stats)}
                  className={`relative p-0 transition-all duration-300 group overflow-hidden shadow-sm ${
                    isUpsideDown 
                    ? "bg-black/40 border border-red-900/50 text-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]" 
                    : "bg-[#fdf6e3] border-l-4 border-black text-black hover:shadow-md"
                  }`}
                >
                  {/* Header Strip */}
                  <div className={`p-2 text-[15px] font-mono uppercase flex justify-between border-b font-terminal ${
                    isUpsideDown ? "bg-red-900/20 border-red-900" : "bg-black text-[#fdf6e3] border-black"
                  }`}>
                    <span>HAWKINS LAB RECORD #{project.id}</span>
                    <span>LEVEL 4 CLEARANCE</span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-3xl font-black uppercase leading-none tracking-tighter font-terminal">
                        {project.title}
                      </h4>
                    </div>
                    
                    <p className={`text-xl mb-6 font-terminal leading-relaxed ${
                      isUpsideDown ? "text-red-300" : "text-gray-700"
                    }`}>
                      {project.desc}
                    </p>

                    <div className="flex gap-2 flex-wrap font-mono text-[15px] uppercase opacity-70">
                      {project.tech.map(t => (
                        <span key={t} className={`px-2 py-1 border font-terminal ${
                          isUpsideDown ? "border-red-800 bg-red-900/20 text-red-300" : "border-black/20 text-black"
                        }`}>
                          [ {t} ]
                        </span>
                      ))}
                    </div>

                    {/* --- LINKS SECTION --- */}
                    <div className="flex gap-4 mt-6 pt-4 border-t border-current/10">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`px-4 py-2 font-terminal text-sm uppercase border transition-colors duration-300 ${
                          isUpsideDown 
                          ? "border-red-900 text-red-500 hover:bg-red-900 hover:border-red-500 hover:text-white" 
                          : "border-black text-black hover:bg-white hover:text-[#fdf6e3]"
                        }`}
                      >
                        [ SOURCE_CODE ]
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`px-4 py-2 font-terminal text-sm uppercase border transition-colors duration-300 ${
                          isUpsideDown 
                          ? "border-red-900 text-red-500 hover:bg-red-900 hover:border-red-500 hover:text-white" 
                          : "border-black text-black hover:bg-white hover:text-[#fdf6e3]"
                        }`}
                      >
                        [ LIVE_DEPLOY ]
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Sidebar Dashboard */}
            <div className="w-full lg:w-[350px] lg:sticky lg:top-10">
              <div className="mb-2 font-mono text-[15px] uppercase opacity-60 flex justify-between px-1 font-terminal">
                <span>Active_Telemetry</span>
                <span className={`animate-pulse ${isUpsideDown ? 'text-red-500' : 'text-green-600'}`}>● LIVE</span>
              </div>
              
              <LabDashboard isUpsideDown={isUpsideDown} projectStats={activeStats} />
              
              <div className="mt-4 p-3 border border-current/20 font-mono text-[15px] opacity-40 leading-tight font-terminal">
                NOTICE: DATA PACKETS ARE ROUTING THROUGH HAWKINS NATIONAL LAB MAINFRME. DO NOT DISCONNECT.
              </div>
            </div>

          </div>
        </section>

        <Skills isUpsideDown={isUpsideDown} />
        <AlphabetWall isUpsideDown={isUpsideDown} />
        <Terminal isUpsideDown={isUpsideDown} />
      </div>
    </main>
  );
}