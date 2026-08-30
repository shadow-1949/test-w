// src/features/blog/BlogCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Thumbnail Mock */}
      <div className={`h-48 w-full bg-gradient-to-br ${post.thumbnail} relative overflow-hidden`}>
        <span className="absolute top-4 left-4 text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-slate-500 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">
          {post.excerpt}
        </p>

        <Link 
          href={`/blog/${post.slug}`} 
          className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors mt-auto"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}