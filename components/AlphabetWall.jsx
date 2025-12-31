"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AlphabetWall({ isUpsideDown }) {
  const [activeLetter, setActiveLetter] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h3 className="text-xl font-terminal tracking-[0.5em] mb-12 opacity-60 uppercase border-b border-current pb-2">
        {isUpsideDown ? "PSIONIC_LINK" : "Communication_Channel"}
      </h3>
      
      {/* Wall Container */}
      <div className="relative w-full max-w-4xl bg-black/5 p-8 border border-current/10 rounded-sm">
        {/* Grid Layout: 6 cols on mobile, 9 on tablet, 13 on desktop to create the wall rectangle shape */}
        <div className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-13 gap-2 md:gap-4 place-items-center">
          {alphabet.map((letter) => (
            <div key={letter} className="relative group cursor-pointer" onMouseEnter={() => setActiveLetter(letter)}>
              
              {/* The Light Bulb */}
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-sm transition-all duration-100 ${
                activeLetter === letter 
                  ? (isUpsideDown 
                      ? "bg-red-500 shadow-[0_0_25px_#ef4444] scale-110" // Upside Down Glow
                      : "bg-yellow-200 shadow-[0_0_15px_#fef08a] scale-110") // Normal Glow
                  : (isUpsideDown 
                      ? "bg-red-900/20 border border-red-900" // Upside Down Off
                      : "bg-gray-700") // Normal Off
              }`} />
              
              {/* The Wires */}
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-current/20 -z-10 group-hover:bg-current/40`} />

              {/* The Letter Paper (Joyce's Notes) */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: isUpsideDown ? Math.random() * 4 - 2 : 0 }}
                className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-2 bg-white text-black font-bold text-2xl md:text-3xl shadow-sm transition-colors ${
                  isUpsideDown 
                    ? "border-red-900 text-red-900 bg-red-950/80 hover:bg-red-900 hover:text-red-200 font-horror tracking-widest" 
                    : "border-yellow-200 bg-yellow-50 hover:bg-yellow-200"
                }`}
              >
                {letter}
              </motion.div>
            </div>
          ))}
        </div>

        {/* The Message Display */}
        <div className="mt-12 font-terminal h-12 text-center border-t border-current/20 pt-4">
          {activeLetter ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`text-3xl md:text-4xl tracking-widest uppercase font-black ${
                isUpsideDown ? "text-red-600 text-glow font-horror" : "text-black"
              }`}
            >
              {activeLetter}
            </motion.span>
          ) : (
            <span className="opacity-30 text-xs uppercase">Hover over letters to transmit signal...</span>
          )}
        </div>
      </div>
    </div>
  );
}