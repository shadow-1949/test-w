// src/app/search/page.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, FileText, Code2, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

// Importing mock data to simulate platform-wide search
import { mockProjects } from "@/features/projects/data";
import { mockBlogPosts } from "@/features/blog/data";
import { mockResources } from "@/features/resources/data";

const filters = [
  { id: 'all', label: 'All Results' },
  { id: 'projects', label: 'Projects' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'resources', label: 'Resources' },
];

type SearchResult = {
  key: string;
  title: string;
  description: string;
  type: string;
  path: string;
  icon: typeof Code2;
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState('all');

  const results = useMemo(() => {
    if (!query) return [];
    
    const q = query.toLowerCase();
    const matchedProjects: SearchResult[] = mockProjects
      .filter(p => p.title.toLowerCase().includes(q) || p.technologies.join(' ').toLowerCase().includes(q))
      .map(p => ({
        key: p.slug,
        title: p.title,
        description: p.shortDescription,
        type: 'Project',
        path: `/projects/${p.slug}`,
        icon: Code2,
      }));
    const matchedBlogs: SearchResult[] = mockBlogPosts
      .filter(b => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q))
      .map(b => ({
        key: b.slug,
        title: b.title,
        description: b.excerpt,
        type: 'Blog',
        path: `/blog/${b.slug}`,
        icon: BookOpen,
      }));
    const matchedResources: SearchResult[] = mockResources
      .filter(r => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q))
      .map(r => ({
        key: r.id,
        title: r.title,
        description: r.description,
        type: 'Resource',
        path: `/resources`,
        icon: FileText,
      }));

    let combined = [...matchedProjects, ...matchedBlogs, ...matchedResources];
    
    if (activeFilter !== 'all') {
      combined = combined.filter(item => item.type.toLowerCase() === activeFilter.slice(0, -1));
    }
    
    return combined;
  }, [query, activeFilter]);

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      {/* Header & Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Search the Platform
        </h1>
        <div className="relative max-w-2xl mx-auto">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            autoFocus
            type="text"
            placeholder="Search projects, articles, resources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
          />
        </div>
      </motion.div>

      {/* Filters (Only show if searching) */}
      {query && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeFilter === filter.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                  : 'bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      {/* Search Results */}
      <div className="space-y-4">
        {query && results.length === 0 && (
          <div className="text-center py-20 bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-2">No results found for "{query}"</p>
            <p className="text-sm text-slate-400">Try checking your spelling or using broader keywords.</p>
          </div>
        )}

        {results.map((item, index) => (
          <motion.div
            key={`${item.type}-${item.key}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link 
              href={item.path}
              className="group flex items-start gap-4 p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.type}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
