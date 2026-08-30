// src/app/terms/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
          <FileText className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Terms & Conditions</h1>
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
            These Terms and Conditions govern your use of the Engineering Student Platform. By accessing or using our website, you agree to be bound by these terms. If you disagree with any part of the terms, please do not use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. User Responsibilities</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Users are expected to use the platform for educational and legitimate academic purposes. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li>Use the resources for any unlawful activities.</li>
            <li>Attempt to disrupt or compromise the security of the website.</li>
            <li>Redistribute or resell our premium project resources without authorization.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Intellectual Property</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            All content provided on this platform, including text, graphics, code, and software, is the property of the Engineering Student Platform and is protected by copyright laws. Students may use the provided code for learning purposes, but claiming it as original work for academic submissions without modification is discouraged.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Limitation of Liability</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            The Engineering Student Platform is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our educational resources or project development services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Contact Us</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            If you have any questions about these Terms, please contact us at <Link href="/contact" className="text-primary hover:underline">our contact page</Link>.
          </p>
        </section>
      </motion.div>
    </div>
  );
}