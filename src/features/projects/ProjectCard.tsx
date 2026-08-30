// Placeholder file
// src/features/projects/ProjectCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Thumbnail Mock */}
      <div className={`h-48 w-full bg-gradient-to-br ${project.thumbnail} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <span className="absolute top-4 right-4 text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30">
          {project.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <Link 
          href={`/projects/${project.slug}`} 
          className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors mt-auto"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}