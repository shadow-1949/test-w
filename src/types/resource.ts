// Placeholder file
// src/types/resource.ts
export interface Resource {
  id: string;
  title: string;
  category: 'Notes' | 'Cheat Sheets' | 'Templates' | 'E-books' | 'Tools';
  description: string;
  type: 'PDF' | 'DOC' | 'ZIP' | 'Link';
  size?: string;
}