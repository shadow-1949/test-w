// src/types/blog.ts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Programming' | 'Web Development' | 'AI/ML' | 'Career Guidance' | 'Engineering Tips';
  author: string;
  date: string;
  readTime: string;
  thumbnail: string; // Gradient class for mock purposes
}