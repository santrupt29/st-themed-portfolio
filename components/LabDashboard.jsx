"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LabDashboard({ isUpsideDown, projectStats }) {
  const [glitchValues, setGlitchValues] = useState(projectStats);

  // Data Scramble Effect: Randomly change values to symbols when in Upside Down
  useEffect(() => {
    let interval;
    if (isUpsideDown) {
      interval = setInterval(() => {
        setGlitchValues((prev) =>
          prev.map((stat) => ({
            ...stat,
            displayValue: Math.random() > 0.7 ? "ERR" : stat.value,
          }))
        );
      }, 150);
    } else {
      // Reset to correct values immediately when normal
      setGlitchValues(projectStats);
    }
    return () => clearInterval(interval);
  }, [isUpsideDown, projectStats]);

  // Generate a random waveform path for the SVG
  const generateWaveform = () => {
    const width = 100;
    const height = 50;
    let path = `M 0 ${height / 2} `;
    for (let i = 1; i <= width; i += 2) {
      const y = (height / 2) + (Math.random() - 0.5) * height * 0.8;
      path += `L ${i} ${y} `;
    }
    return path;
  };

  return (
    <div className={`relative p-1 border-2 overflow-hidden font-terminal text-[20-px] transition-colors duration-300 ${
      isUpsideDown 
      ? 'border-red-600 bg-black shadow-[0_0_15px_rgba(220,38,38,0.3)]' 
      : 'border-black bg-[#fdf6e3] shadow-lg'
    }`}>
      
      {/* 1. Background Grid (Retro Tech feel) */}
      <div className={`absolute inset-0 opacity-10 pointer-events-none`} 
           style={{
             backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}
      />

      {/* 2. Header */}
      <div className={`flex justify-between items-center mb-3 p-2 border-b ${
        isUpsideDown ? 'border-red-900 text-red-500' : 'border-black text-black'
      }`}>
        <div className="flex flex-col">
          <span className="font-bold uppercase tracking-widest text-xm">HAWKINS_TELEMETRY</span>
          <span className="text-[15px] opacity-60">UNIT: 04 // {isUpsideDown ? "SECTOR: UPSIDE_DOWN" : "SECTOR: REAL_WORLD"}</span>
        </div>
        <div className={`flex flex-col items-end`}>
           <span className={`font-bold animate-pulse ${isUpsideDown ? 'text-red-500' : 'text-green-600'}`}>
             {isUpsideDown ? "WARNING" : "STABLE"}
           </span>
           <span className="text-[15px] opacity-60">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* 3. Data Stats List */}
      <div className="space-y-2 px-2 mb-4 relative z-10">
        {glitchValues.map((item, i) => (
          <div key={i} className="flex justify-between items-center border-b border-dashed border-current/20 pb-1">
            <span className={`opacity-70 ${isUpsideDown && 'text-red-900'}`}>{item.label}</span>
            {/* The Value - Glitches in Upside Down */}
            <span className={`font-bold ${isUpsideDown ? 'text-red-500 font-horror text-lg' : ''}`}>
              {isUpsideDown ? item.displayValue : item.value}
            </span>
          </div>
        ))}
      </div>

      {/* 4. Spectral Analyzer (SVG Waveform) */}
      <div className={`h-16 w-full border-t border-current/20 relative overflow-hidden flex items-center bg-current/5`}>
        {/* The Animated Waveform */}
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 50"
        >
          <motion.path
            d={generateWaveform()}
            fill="none"
            stroke={isUpsideDown ? "#ef4444" : "#000"}
            strokeWidth="2"
            animate={{
              d: [generateWaveform(), generateWaveform(), generateWaveform()]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        </svg>
        
        {/* Crosshair Overlay (Only in Upside Down) */}
        {isUpsideDown && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="absolute w-full h-[1px] bg-red-500/50" />
             <div className="absolute h-full w-[1px] bg-red-500/50" />
             <div className="absolute w-4 h-4 border border-red-500 rounded-full" />
           </div>
        )}
      </div>

      {/* 5. Footer Status Bar */}
      <div className={`mt-2 text-[15px] uppercase tracking-tighter text-center border-t border-current/10 pt-1 opacity-50 ${
        isUpsideDown ? 'text-red-400' : 'text-black'
      }`}>
        {isUpsideDown 
          ? "⚠ GATE STABILITY: CRITICAL // SUBJECT proximity: 100%" 
          : "SYSTEM NOMINAL // CONNECTION SECURE"}
      </div>
    </div>
  );
}