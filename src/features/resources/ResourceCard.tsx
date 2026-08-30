// Placeholder file
// src/features/resources/ResourceCard.tsx
"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, FileArchive, Link2 } from "lucide-react";
import { Resource } from "@/types/resource";

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

export function ResourceCard({ resource, index }: ResourceCardProps) {
  const Icon = resource.type === 'Link' ? Link2 : resource.type === 'ZIP' ? FileArchive : FileText;
  const isLink = resource.type === 'Link';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
          {resource.category}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{resource.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">{resource.description}</p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
        <span className="text-xs text-slate-500 font-mono">
          {resource.type} {resource.size && `• ${resource.size}`}
        </span>
        <button className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-700 transition-colors">
          {isLink ? (
            <>Visit <ExternalLink className="ml-1.5 h-4 w-4" /></>
          ) : (
            <>Download <Download className="ml-1.5 h-4 w-4" /></>
          )}
        </button>
      </div>
    </motion.div>
  );
}