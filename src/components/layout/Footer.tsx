// Placeholder file
// src/components/layout/Footer.tsx
import Link from "next/link";
import { Cpu, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
              <Cpu className="h-5 w-5" />
            </div>
            <span>Engineering Student Platform</span>
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            Simplifying the engineering learning journey through curated content and practical project experiences.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-4 text-slate-900 dark:text-white">Platform</h3>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="/roadmaps" className="hover:text-primary transition-colors">Roadmaps</Link></li>
            <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-4 text-slate-900 dark:text-white">Company</h3>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-4 text-slate-900 dark:text-white">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Twitter className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/50 dark:border-slate-800/50 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Engineering Student Platform. All rights reserved.
      </div>
    </footer>
  );
}