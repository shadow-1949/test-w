// Placeholder file
// src/features/roadmaps/RoadmapCard.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";
import { Roadmap } from "@/types/roadmap";

interface RoadmapCardProps {
  roadmap: Roadmap;
  index: number;
}

// Simple icon mapping for mock purposes
const iconMap = {
  Code2: "💻", BrainCircuit: "🧠", ShieldCheck: "🛡️", Cloud: "☁️"
};

export function RoadmapCard({ roadmap, index }: RoadmapCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl">{iconMap[roadmap.icon as keyof typeof iconMap]}</div>
        <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center">
          <Clock className="h-3 w-3 mr-1" /> {roadmap.difficulty}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{roadmap.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">{roadmap.description}</p>
      
      <div className="space-y-3 mb-6">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Learning Path</h4>
        {roadmap.milestones.slice(0, 3).map((milestone, i) => (
          <div key={i} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
            <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
            {milestone}
          </div>
        ))}
        {roadmap.milestones.length > 3 && (
          <div className="text-xs text-slate-400 pl-7">+ {roadmap.milestones.length - 3} more steps</div>
        )}
      </div>
    </motion.div>
  );
}