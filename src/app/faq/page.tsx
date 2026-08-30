// src/app/faq/page.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle, Mail } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    category: "Projects",
    question: "How do I access project source code and documentation?",
    answer: "You can access project source code and documentation by navigating to the specific Project Details page and clicking the 'Request Project' button. Our team will provide you with the complete package and setup instructions."
  },
  {
    category: "Projects",
    question: "Can I request a custom engineering project?",
    answer: "Absolutely! We offer custom project development services tailored to your specific academic requirements. Please visit the Contact Us page and select 'Project Development' as the enquiry category."
  },
  {
    category: "Resources",
    question: "Are the learning resources free to access?",
    answer: "Yes, all notes, cheat sheets, and templates listed in the Resources section are 100% free to download and use for your academic journey."
  },
  {
    category: "Platform",
    question: "Do I need to create an account to use the platform?",
    answer: "For Version 1, no account is required. You can browse all projects, roadmaps, resources, and blogs freely. User accounts and dashboards will be introduced in a future update."
  },
  {
    category: "Support",
    question: "How long does it take to receive a response from support?",
    answer: "Our team typically responds to all enquiries within 24 hours during business days (Monday to Friday, 9 AM to 6 PM)."
  }
];

const categories = ['All', 'Projects', 'Resources', 'Platform', 'Support'];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
          <HelpCircle className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Find quick answers to common questions about our platform, projects, and services.
        </p>
      </motion.div>

      {/* Search & Categories */}
      <div className="mb-8 space-y-6">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === category
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                  : 'bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center pr-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mr-3 flex-shrink-0">
                    {faq.category}
                  </span>
                  <h3 className="font-medium text-slate-900 dark:text-white">{faq.question}</h3>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12 text-slate-500">
            No questions found matching your search.
          </div>
        )}
      </div>

      {/* Still Need Help? CTA */}
      <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Still need help?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Can't find the answer you're looking for? Please contact our support team.</p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact Support
        </Link>
      </div>
    </div>
  );
}