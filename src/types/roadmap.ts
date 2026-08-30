// Placeholder file
// src/types/roadmap.ts
export interface Roadmap {
  slug: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  milestones: string[];
  icon: string; // Lucide icon name mapping for simplicity
}