// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resources", href: "/resources" },
  { name: "Roadmaps", href: "/roadmaps" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto">
        <div className="bg-[#070a1b]/75 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] px-6 py-3 flex items-center justify-between transition-all duration-300">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg z-50">
            <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
              <Terminal className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              NextGen Coders
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link 
              href="/projects" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
            >
              Explore Projects
            </Link>
            <button 
              className="md:hidden p-2 text-slate-200" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-20 left-4 right-4 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-lg p-4 flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/projects" 
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-center"
              >
                Get in Touch
              </Link>
              <button aria-label="Toggle theme" className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-slate-600 hover:text-white md:flex"><Moon className="h-4 w-4" /></button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
