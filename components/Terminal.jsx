"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Terminal({ isUpsideDown }) {
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  
  // Initial system boot sequence
  const [logs, setLogs] = useState([
    "--- HAWKINS_NET TERMINAL v4.1 ---",
    "SYSTEM: INITIALIZING...",
    "LOADING SUBJECT: ELEVEN",
    "WARNING: GATE STABILITY CRITICAL",
    "AUTH_REQUIRED. TYPE 'HELP' FOR LIST.",
    "---------------------------------"
  ]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    let newLogs = [...logs, `> ${input}`];

    switch (cmd) {
      case "help":
        newLogs.push(
          "AVAILABLE COMMANDS:",
          "  [HELLO]   - INITIALIZE GREETING",
          "  [ABOUT]   - VIEW PERSONNEL BIO",
          "  [RESUME]  - DOWNLOAD DATA_FILE",
          "  [CONTACT] - REVEAL COORDINATES",
          "  [ONE LAST TIME] - FINAL SEQUENCE",
          "  [CLEAR]   - WIPE TERMINAL BUFFER"
        );
        break;
      case "hello":
        newLogs.push("SYSTEM: GREETINGS. DATA PACKETS ARE ROUTING... ACCESS GRANTED.");
        break;
      case "about":
        newLogs.push("SYSTEM: LOADING SUBJECT_BIO... FULL STACK DEVELOPER.");
        break;
      case "resume":
        newLogs.push("SYSTEM: DOWNLOAD INITIATED. CHECKING BROWSER DOWNLOADS...");
        window.open("/Santrupt_Resume_VJTI.pdf", "_blank");
        break;
      case "contact":
        newLogs.push("SYSTEM: ENCRYPTED LINK DETECTED: [santrupt.potphode29@gmail.com]");
        break;
      case "one last time":
        newLogs.push("SYSTEM: INITIATING FINAL_SEQUENCE_PROTOCOL...");
        newLogs.push("WARNING: CONTROL LOOP FEEDBACK DETECTED. GAIN > 1.0.");
        setTimeout(() => setLogs(prev => [...prev, "--- CLOCK_CHIME_01: STABILITY AT 80% ---"]), 1000);
        setTimeout(() => setLogs(prev => [...prev, "--- CLOCK_CHIME_02: STABILITY AT 40% ---"]), 2000);
        setTimeout(() => setLogs(prev => [...prev, "--- CLOCK_CHIME_03: CRITICAL SYSTEM FAILURE ---"]), 3000);
        setTimeout(() => {
          setLogs(prev => [...prev, "--- CLOCK_CHIME_04: DIMENSIONAL BREACH ---"]); 
        }, 4000);
        setTimeout(() => setLogs(prev => [...prev, "RUNNN"]), 5000);
        break;
      case "clear":
        setLogs(["--- BUFFER WIPED ---"]);
        setInput("");
        return;
      default:
        newLogs.push(`SYSTEM: ERROR. COMMAND '${cmd}' NOT RECOGNIZED. TYPE 'HELP'.`);
    }

    setLogs(newLogs);
    setInput("");
  };

  return (
    <section className="mt-32 mb-20">
      <h3 className="text-xl font-terminal tracking-[0.5em] mb-12 opacity-60 uppercase flex items-center border-b border-current pb-2">
        <span className="mr-4">Comm_Link</span> 
        <span className="animate-pulse text-red-600">// CONNECTED</span>
      </h3>

      {/* Outer Monitor Frame */}
      <div className={`relative p-1 md:p-2 rounded-sm border-2 ${
        isUpsideDown 
        ? 'border-red-900 bg-black/80 shadow-[0_0_30px_rgba(220,38,38,0.1)]' 
        : 'border-gray-800 bg-gray-900 shadow-2xl'
      }`}>
        
        {/* Terminal Screen */}
        <div className={`relative font-terminal p-6 md:p-10 min-h-[450px] flex flex-col rounded-sm overflow-hidden ${
          isUpsideDown 
          ? 'text-red-500 bg-black border border-red-900/30' 
          : 'text-green-500 bg-[#050505] border border-gray-800'
        }`}>
          
          {/* Visual CRT Overlays */}
          <div className="absolute inset-0 pointer-events-none opacity-20 z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.4)_100%)]" />
          
          {/* Scrollable Log Area */}
          <div 
            ref={scrollRef}
            className="flex-grow space-y-2 text-sm md:text-base mb-6 overflow-y-auto custom-scrollbar relative z-30"
          >
            <AnimatePresence>
              {logs.map((log, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, x: -5 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.1 }}
                  className="whitespace-pre-wrap leading-tight font-terminal"
                >
                  {log}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>

          {/* Command Input Area */}
          <form onSubmit={handleCommand} className="relative z-40 flex items-center gap-2 border-t border-current/20 pt-4">
            <span className={`font-bold text-lg animate-pulse ${isUpsideDown ? "text-red-600" : "text-green-600"}`}>{">"}</span>
            <input 
              type="text"
              value={input}
              // FIXED LINE: Changed e.value to e.target.value
              onChange={(e) => setInput(e.target.value)}
              placeholder="TYPE 'HELP'..."
              className="bg-transparent border-none outline-none flex-grow placeholder:opacity-20 placeholder:text-current font-terminal text-lg uppercase"
            />
            {/* Blinking Cursor */}
            <motion.div 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2.5 h-6 bg-current"
            />
          </form>

          {/* System Metadata */}
          <div className={`mt-6 flex justify-between text-[9px] font-bold uppercase tracking-widest opacity-60 ${
             isUpsideDown ? "text-red-900" : "text-green-900"
          }`}>
            <span>Auth: LEVEL 4</span>
            <span>Secure_SSH</span>
            <span>HWK_OS_v4.1</span>
          </div>
        </div>
      </div>

      {/* External Quick Links */}
      <div className="mt-8 flex justify-center gap-10 font-terminal text-xl opacity-70">
        <a href="mailto:santrupt.potphode29@gmail.com" className="hover:text-red-500 transition-colors underline decoration-dotted underline-offset-4">[ EMAIL_DIRECT ]</a>
        <a href="https://linkedin.com/in/santrupt29" className="hover:text-red-500 transition-colors underline decoration-dotted underline-offset-4">[ LINKEDIN_AUTH ]</a>
        <a href="https://github.com/santrupt29" className="hover:text-red-500 transition-colors underline decoration-dotted underline-offset-4">[ GITHUB_AUTH ]</a>
        <a href="https://x.com/santrupt_29" className="hover:text-red-500 transition-colors underline decoration-dotted underline-offset-4">[ X_AUTH ]</a>

      </div>
    </section>
  );
}