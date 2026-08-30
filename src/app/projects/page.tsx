// Placeholder file
// src/app/projects/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { mockProjects } from "@/features/projects/data";
import { ProjectCard } from "@/features/projects/ProjectCard";
import { ProjectCategory } from "@/types/project";
import Link from "next/link";

const categories: ProjectCategory[] = ['All', 'Web Development', 'AI/ML', 'IoT', 'Cloud', 'Cybersecurity'];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
          Explore Engineering Projects
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Browse curated academic and practical projects. Find inspiration, download source code, or request custom development.
        </p>
      </motion.div>

      {/* Search & Filter Bar */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by title or technology (e.g., Python, React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center text-sm text-slate-500 mr-2">
            <SlidersHorizontal className="h-4 w-4 mr-1" /> Filter:
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === category
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                  : 'bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-slate-500 dark:text-slate-400">No projects found matching your criteria.</p>
        </div>
      )}

      {/* Call-to-Action (PB-04: 3.6) */}
      <div className="mt-24 text-center bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Can't find what you're looking for?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
          We offer custom project development services tailored to your specific academic requirements.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:opacity-90 transition-all shadow-lg"
        >
          Request Custom Project
        </Link>
      </div>
    </div>
  );
}