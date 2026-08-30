"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Boxes, Code2, GitBranch, Sparkles, Users } from "lucide-react";
import { HeroScene } from "@/components/3d/HeroScene";

const features = [
  { icon: Boxes, value: "100+", title: "Projects", text: "Diverse and innovative projects for all domains" },
  { icon: BookOpen, value: "Free", title: "Resources", text: "Notes, guides, and tools to boost your skills" },
  { icon: GitBranch, value: "Step-by-step", title: "Roadmaps", text: "Master in-demand skills with clear paths" },
  { icon: Users, value: "Connected", title: "Student Community", text: "Connect, collaborate, and grow together" },
];

export default function HomePage() {
  return (
    <div className="landing-page overflow-hidden bg-[#030512] text-white">
      <div className="landing-grid pointer-events-none fixed inset-0 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />
      <section className="relative mx-auto flex min-h-[860px] max-w-[1440px] items-center px-6 pb-20 pt-36 lg:px-16 lg:pt-28">
        <div className="grid w-full items-center gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 max-w-[520px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-[11px] text-slate-300 shadow-[0_0_24px_rgba(70,84,255,0.1)]"><Sparkles className="h-3.5 w-3.5 text-cyan-300" /> Empowering Students. Building Tomorrow.</div>
            <h1 className="text-6xl font-bold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-[78px]">Innovate.<br />Build.<br /><span className="neon-gradient">Inspire.</span></h1>
            <p className="mt-7 max-w-[410px] text-sm leading-7 text-slate-400 sm:text-[15px]">Explore a wide range of student projects, resources, and roadmaps designed to turn your ideas into real-world solutions.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-[0_0_26px_rgba(77,90,255,0.38)] transition hover:scale-[1.02]">Explore Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link><Link href="/resources" className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 text-xs font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800">Browse Resources <BookOpen className="h-3.5 w-3.5 text-slate-400" /></Link></div>
            <div className="mt-12 flex items-center gap-3"><div className="flex -space-x-2">{["#d8a17d", "#9e704c", "#d4b18d", "#8e9fce"].map((color, i) => <span key={i} style={{ backgroundColor: color }} className="h-7 w-7 rounded-full border-2 border-[#080a19]" />)}<span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#080a19] bg-violet-600 text-[9px] font-bold">+2k</span></div><div><p className="text-[10px] font-semibold text-slate-200">Trusted by 2,000+ Students</p><p className="mt-1 text-[11px] tracking-[0.18em] text-amber-300">★★★★★ <span className="ml-1 tracking-normal text-slate-500">(4.9/5 Reviews)</span></p></div></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }} className="relative h-[520px] w-full sm:h-[620px] lg:-ml-10 lg:h-[700px]"><div className="absolute inset-10 rounded-full bg-indigo-500/10 blur-[80px]" /><HeroScene /><div className="pointer-events-none absolute bottom-4 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent shadow-[0_0_28px_#6c63ff]" /></motion.div>
        </div>
      </section>
      <section className="relative mx-auto -mt-16 max-w-[1320px] px-6 pb-28 lg:px-10"><div className="grid overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0b0e24]/80 shadow-[0_0_45px_rgba(36,42,113,0.25)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, value, title, text }, index) => <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex gap-4 border-b border-slate-800/70 p-5 last:border-0 lg:border-b-0 lg:border-r lg:last:border-r-0"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300"><Icon className="h-5 w-5" /></div><div><p className="text-[11px] font-semibold text-slate-200">{value} <span className="font-normal text-slate-400">{title}</span></p><p className="mt-1 text-[10px] leading-4 text-slate-500">{text}</p></div></motion.div>)}</div></section>
      <section className="relative mx-auto max-w-5xl px-6 pb-36 text-center"><Code2 className="mx-auto mb-5 h-8 w-8 text-indigo-400" /><h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Build something that matters.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">Keep scrolling, keep learning, and turn your next idea into a project you can be proud of.</p></section>
    </div>
  );
}
