"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "01",
    role: "Software Development Engineer Intern",
    company: "Swastik Software Technologies",
    location: "Mumbai, Maharashtra",
    period: "May 2026 - July 2026",
    status: "MISSION_COMPLETED",
    stats: [
      { label: "LATENCY_DROP", value: "60s+ → <1s", note: "0 PROD 502 ERRORS" },
      { label: "AGENT_WORKFLOWS", value: "11 Care-Ops", note: "3-ROLE RBAC" },
      { label: "BATCH_SERIES", value: "25 Occurrences", note: "@Transactional" },
    ],
    logs: [
      "Orchestrated a LangGraph AI agent handling 11 care-ops workflows, multi-turn state, and 3-role RBAC for a production NDIS platform.",
      "Engineered 3-tier LLM routing with 5-stage timing instrumentation, eliminating 60s+ latency that caused production 502 errors.",
      "Extended Spring Boot for recurring shift series with 25-occurrence @Transactional batches; wired Python NLP agent.",
      "Designed a 5-table MySQL observability schema across Java and Python services with aiomysql pooling and Metabase dashboard."
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Python",
      "LangGraph",
      "MySQL",
      "aiomysql",
      "Metabase",
      "LLM Routing",
      "RBAC"
    ]
  }
];

export default function Experience({ isUpsideDown }) {
  return (
    <section className="mb-32 relative">
      <h3 className="text-xl font-terminal tracking-[0.5em] mb-12 opacity-60 uppercase flex items-center border-b border-current pb-2">
        <span className="mr-4 underline">Field_Deployments</span>
        <span className="opacity-30">[ MISSION_LOGS ]</span>
      </h3>

      <div className="flex flex-col gap-8 w-full relative">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative p-0 transition-all duration-300 group overflow-hidden shadow-sm ${
              isUpsideDown
                ? "bg-black/40 border border-red-900/50 text-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                : "bg-[#fdf6e3] border-l-4 border-black text-black hover:shadow-md"
            }`}
          >
            {/* Classified Stamp in Upside Down */}
            {isUpsideDown && (
              <div className="absolute top-12 right-6 border-4 border-red-600 text-red-600 font-black text-2xl md:text-3xl rotate-[-8deg] opacity-75 pointer-events-none z-10 px-3 py-1 uppercase select-none font-horror tracking-widest">
                VERIFIED_DEPLOYMENT
              </div>
            )}

            {/* Header Strip */}
            <div
              className={`p-2 text-[15px] font-mono uppercase flex justify-between border-b font-terminal ${
                isUpsideDown
                  ? "bg-red-900/20 border-red-900 text-red-400"
                  : "bg-black text-[#fdf6e3] border-black"
              }`}
            >
              <span>HAWKINS LAB FIELD RECORD #{exp.id}</span>
              <span>{exp.period}</span>
            </div>

            {/* Content Body */}
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h4 className="text-3xl font-black uppercase leading-tight tracking-tighter font-terminal">
                    {exp.role}
                  </h4>
                  <div className="text-xl font-bold opacity-80 font-terminal tracking-wide">
                    {exp.company} <span className="opacity-40">|</span>{" "}
                    <span className="font-normal opacity-70">{exp.location}</span>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 text-sm font-terminal uppercase border inline-flex items-center gap-2 self-start md:self-auto ${
                    isUpsideDown
                      ? "border-red-800 text-red-400 bg-red-950/40"
                      : "border-black/30 text-black bg-black/5"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isUpsideDown ? "bg-red-500 animate-pulse" : "bg-green-600"
                    }`}
                  />
                  {exp.status}
                </div>
              </div>

              {/* Key Telemetry Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {exp.stats.map((s, idx) => (
                  <div
                    key={idx}
                    className={`p-4 border font-terminal relative ${
                      isUpsideDown
                        ? "border-red-900/60 bg-red-950/20"
                        : "border-black/20 bg-white/60"
                    }`}
                  >
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">
                      {s.label}
                    </div>
                    <div
                      className={`text-2xl font-black ${
                        isUpsideDown
                          ? "text-red-400 font-horror tracking-wider"
                          : "text-black"
                      }`}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs opacity-50 uppercase mt-1">
                      {s.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Log Bullet Points */}
              <div className="space-y-3 mb-8">
                {exp.logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 text-xl font-bold font-terminal leading-relaxed ${
                      isUpsideDown ? "text-red-300" : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`select-none shrink-0 font-terminal text-xl font-bold ${
                        isUpsideDown ? "text-red-400" : "text-black"
                      }`}
                    >
                      [LOG_{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <p>
                      {log}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex gap-2 flex-wrap font-mono text-[15px] uppercase opacity-80 pt-4 border-t border-current/10">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-1 border font-terminal ${
                      isUpsideDown
                        ? "border-red-800 bg-red-900/20 text-red-300"
                        : "border-black/20 text-black bg-white"
                    }`}
                  >
                    [ {t} ]
                  </span>
                ))}
              </div>

              {/* Documentation / Verification Link */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-current/10">
                <a
                  href="/LOR.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 font-terminal text-sm uppercase border transition-all duration-300 flex items-center gap-2 ${
                    isUpsideDown
                      ? "border-red-900 text-red-500 hover:bg-red-900 hover:border-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                      : "border-black text-black hover:bg-black hover:text-[#fdf6e3]"
                  }`}
                >
                  <span>👁</span>
                  [ VIEW_LOR ]
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
