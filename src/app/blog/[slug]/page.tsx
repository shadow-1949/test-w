// src/app/blog/[slug]/page.tsx
"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User } from "lucide-react";
import { mockBlogPosts } from "@/features/blog/data";
import { BlogCard } from "@/features/blog/BlogCard";

export default function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = mockBlogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      {/* Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {post.readTime}
          </div>
          <span>{post.date}</span>
        </div>
      </motion.div>

      {/* Featured Image Mock */}
      <div className={`h-64 md:h-96 w-full bg-gradient-to-br ${post.thumbnail} rounded-2xl mb-12 shadow-lg`} />

      {/* Article Content */}
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300"
      >
        {post.content.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
      </motion.article>

      {/* Call to Action */}
      <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Enjoyed this article?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Explore our engineering projects or learning roadmaps to continue your journey.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects" className="px-6 py-3 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:opacity-90 transition-opacity">
            Browse Projects
          </Link>
          <Link href="/roadmaps" className="px-6 py-3 text-sm font-medium text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            View Roadmaps
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}