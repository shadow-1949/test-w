// Placeholder file
// src/app/projects/[slug]/page.tsx
"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Cpu, FolderGit2, HelpCircle, Mail } from "lucide-react";
import { mockProjects } from "@/features/projects/data";
import { ProjectCard } from "@/features/projects/ProjectCard";

export default function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = mockProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = mockProjects.filter(p => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      {/* Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-12">
          {/* Project Banner & Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`h-64 w-full bg-gradient-to-br ${project.thumbnail} rounded-2xl mb-8 shadow-lg`} />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
              {project.category} • {project.difficulty}
            </span>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Key Features */}
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <CheckCircle2 className="mr-3 h-6 w-6 text-primary" />
              Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-slate-700 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Cpu className="mr-3 h-6 w-6 text-primary" />
              Hardware & Software Requirements
            </h2>
            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-xl p-6">
              <ul className="space-y-3">
                {project.requirements.map((req, index) => (
                  <li key={index} className="flex items-center font-mono text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-primary mr-3">›</span> {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Tech Stack */}
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 sticky top-28">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <FolderGit2 className="mr-2 h-5 w-5 text-primary" />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                Need this project?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Get the complete source code, documentation, and setup support.
              </p>
              <Link 
                href="/contact" 
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:opacity-90 transition-opacity shadow-md"
              >
                <Mail className="mr-2 h-4 w-4" />
                Request Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects (PB-04: 4.6) */}
      {relatedProjects.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}