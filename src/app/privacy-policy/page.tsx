// src/app/privacy-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last Updated: January 1, 2024</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 md:p-12 space-y-8"
      >
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Welcome to the Engineering Student Platform. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and disclose your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            When you use our contact form or request project development services, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li>Personal identification information (Name, Email Address)</li>
            <li>Project requirements and technical details</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. How We Use Your Information</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            We use the collected information to respond to your enquiries, provide requested project development services, improve our educational resources, and send important updates regarding the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Contact Us</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at <Link href="/contact" className="text-primary hover:underline">our contact page</Link>.
          </p>
        </section>
      </motion.div>
    </div>
  );
}