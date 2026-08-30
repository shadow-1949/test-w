// src/app/cookies/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
          <Cookie className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Cookie Policy</h1>
        <p className="text-sm text-slate-500">Last Updated: January 1, 2024</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 md:p-12 space-y-8"
      >
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. What Are Cookies?</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Cookies are small text files that are placed on your device by the websites you visit. They are widely used to make websites work more efficiently and to provide information to the site owners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. How We Use Cookies</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            The Engineering Student Platform uses cookies for the following primary purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly.</li>
            <li><strong>Preference Cookies:</strong> Remember your preferences, such as dark mode or light mode.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website so we can improve the experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Managing Cookies</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            You can control or delete cookies through your browser settings. Please note that disabling essential cookies may affect the functionality of the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Contact Us</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            If you have any questions about our use of cookies, please reach out via <Link href="/contact" className="text-primary hover:underline">our contact page</Link>.
          </p>
        </section>
      </motion.div>
    </div>
  );
}