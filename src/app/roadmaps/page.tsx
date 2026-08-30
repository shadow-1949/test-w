// Placeholder file
// src/app/roadmaps/page.tsx
"use client";

import { motion } from "framer-motion";
import { mockRoadmaps } from "@/features/roadmaps/data";
import { RoadmapCard } from "@/features/roadmaps/RoadmapCard";
import Link from "next/link";

export default function RoadmapsPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Learning Roadmaps
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Structured learning paths that guide you from beginner to advanced levels. Know exactly what to learn and in what sequence.
        </p>
      </motion.div>

      {/* Roadmap Categories & Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {mockRoadmaps.map((roadmap, index) => (
          <RoadmapCard key={roadmap.slug} roadmap={roadmap} index={index} />
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center bg-gradient-to-r from-purple-600/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Want personalized guidance?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
          Contact our team for customized learning paths and mentorship tailored to your career goals.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:opacity-90 transition-all shadow-lg"
        >
          Get Mentorship
        </Link>
      </div>
    </div>
  );
}