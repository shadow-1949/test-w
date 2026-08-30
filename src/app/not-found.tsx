// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-[70vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative mb-8 inline-block">
          <h1 className="text-[120px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="h-24 w-24 text-slate-300 dark:text-slate-700 animate-pulse" />
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Homepage
          </Link>
          <Link 
            href="/search" 
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Search className="mr-2 h-5 w-5" />
            Search Platform
          </Link>
        </div>
      </motion.div>
    </div>
  );
}