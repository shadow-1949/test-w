// Placeholder file
// src/types/project.ts
export interface Project {
  slug: string;
  title: string;
  category: string;
  technologies: string[];
  shortDescription: string;
  longDescription: string;
  features: string[];
  requirements: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string; // URL or gradient class for mock purposes
}

export type ProjectCategory = 'All' | 'Web Development' | 'AI/ML' | 'IoT' | 'Cloud' | 'Cybersecurity';