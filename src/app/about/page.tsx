// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Eye, Heart, Lightbulb, Users, ShieldCheck, ArrowRight } from "lucide-react";

const coreValues = [
  { icon: Lightbulb, title: "Innovation", desc: "Continuously exploring new technologies to improve the learning experience." },
  { icon: Heart, title: "Accessibility", desc: "Making high-quality engineering resources available to everyone." },
  { icon: ShieldCheck, title: "Quality", desc: "Ensuring every project and resource meets strict academic standards." },
  { icon: Users, title: "Community", desc: "Fostering a collaborative environment for students to grow together." },
];

const stats = [
  { value: "50+", label: "Engineering Projects" },
  { value: "100+", label: "Learning Resources" },
  { value: "10k+", label: "Students Helped" },
  { value: "4", label: "Tech Roadmaps" }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-24"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Empowering the next generation of engineers
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          We provide premium educational resources and practical project experiences to simplify the engineering learning journey.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h2>
          <p className="text-slate-600 dark:text-slate-400">
            To simplify the engineering learning journey through curated content, structured learning paths, and a professional user experience that prepares students for real-world challenges.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h2>
          <p className="text-slate-600 dark:text-slate-400">
            To become the most trusted digital platform for engineering students globally, bridging the gap between academic theory and practical industry requirements.
          </p>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
          <p className="text-slate-600 dark:text-slate-400">The principles that guide everything we build.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, i) => (
            <motion.div 
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-12 text-center mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call-to-Action */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ready to start your journey?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
          Explore our premium engineering projects or contact our team for custom development.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:opacity-90 transition-all shadow-lg">
            Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}