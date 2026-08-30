// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "NextGen Coders | Innovate. Build. Inspire.",
  description: "Empowering Students, Building Tomorrow. A premium engineering student platform for projects, resources, and learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {/* Background Layers (Grid + Glows) */}
        <div className="fixed inset-0 -z-10 grid-bg" />
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] opacity-50" />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] opacity-40" />
        </div>

        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
