"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Fullstack (Next.js)", stat: "INT", value: 17, desc: "End-to-end web applications" },
  { name: "Backend (Node/Express)", stat: "STR", value: 18, desc: "Robust server-side logic" },
  { name: "Deployment and tools (Vercel/Git)", stat: "WIS", value: 18, desc: "Perceiving and streamlining production cycles" },
  { name: "Problem Solving (DSA)", stat: "CON", value: 16, desc: "Enduring complex logical and algorithmic puzzles" },
];

export default function Skills({ isUpsideDown }) {
  return (
    <section className="mt-24 relative">
      <h3 className="text-xl font-terminal tracking-[0.5em] mb-12 opacity-60 uppercase flex items-center border-b border-current pb-2">
        <span className="mr-4">Subject_Stats</span> 
        <span className="opacity-30">[ CLASS LEVEL 20 ]</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 border flex items-center gap-6 relative overflow-hidden group ${
              isUpsideDown 
              ? "border-red-900 bg-black/60 text-red-500 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]" 
              : "border-black/20 bg-[#fdf6e3] text-black hover:shadow-md hover:bg-white"
            }`}
          >
            {/* The Hexagon Stat Box */}
            <div className={`w-16 h-16 flex flex-col items-center justify-center border-2 rotate-45 relative z-10 ${
              isUpsideDown 
              ? "border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] bg-black" 
              : "border-black bg-[#fdf6e3]"
            }`}>
              <span className="-rotate-45 font-terminal text-[10px] leading-none opacity-60">{skill.stat}</span>
              <span className={`-rotate-45 text-2xl font-black leading-none ${isUpsideDown ? "text-red-500" : "text-black"}`}>
                {skill.value}
              </span>
            </div>

            {/* Skill Details */}
            <div className="flex-grow relative z-10">
              <div className="flex justify-between items-end mb-1">
                <h4 className="font-terminal font-bold uppercase tracking-tighter text-xl">{skill.name}</h4>
                <span className={`font-terminal text-20-px opacity-50 px-1 border ${
                  isUpsideDown ? "border-red-800" : "border-black/20"
                }`}>
                  +{skill.value - 10 > 0 ? skill.value - 10 : 0} MOD
                </span>
              </div>
              <p className={`text-xl mb-3 font-terminal ${isUpsideDown ? "text-red-300 opacity-80" : "text-gray-700"}`}>
                {skill.desc}
              </p>
              
              {/* Progress Bar */}
              <div className={`h-1.5 w-full ${isUpsideDown ? "bg-red-900/30" : "bg-black/10"}`}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(skill.value / 20) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${isUpsideDown ? "bg-red-600 shadow-[0_0_10px_#ef4444]" : "bg-black"}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}