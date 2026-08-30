// src/app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RotateCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-[70vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 text-red-500 mb-8">
          <AlertTriangle className="h-10 w-10" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Something Went Wrong
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          We encountered an unexpected error. Our team has been notified. You can try refreshing the page or return to a safe area.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Try Again
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Go Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}