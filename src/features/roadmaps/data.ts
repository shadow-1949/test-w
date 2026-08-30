// Placeholder file
// src/features/roadmaps/data.ts
import { Roadmap } from '@/types/roadmap';

export const mockRoadmaps: Roadmap[] = [
  {
    slug: "fullstack-web-development",
    title: "Full Stack Web Development",
    category: "Web Development",
    difficulty: "Intermediate",
    description: "Master frontend to backend development with modern technologies like React, Node.js, and databases.",
    milestones: ["HTML/CSS Basics", "JavaScript ES6+", "React & Next.js", "Node.js & Express", "Database Design (SQL/NoSQL)", "Deployment & DevOps"],
    icon: "Code2"
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    category: "Artificial Intelligence",
    difficulty: "Advanced",
    description: "Dive into the world of artificial intelligence, from basic algorithms to deep learning neural networks.",
    milestones: ["Python for Data Science", "Statistics & Math", "Scikit-Learn & Classical ML", "Deep Learning Basics", "Neural Networks (TensorFlow/PyTorch)", "NLP & Computer Vision"],
    icon: "BrainCircuit"
  },
  {
    slug: "cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    category: "Security",
    difficulty: "Beginner",
    description: "Learn how to protect systems, networks, and programs from digital attacks.",
    milestones: ["Networking Fundamentals", "Linux Basics", "Cryptography", "Web Vulnerabilities (OWASP)", "Penetration Testing Basics", "Incident Response"],
    icon: "ShieldCheck"
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Engineering",
    category: "Cloud Computing",
    difficulty: "Advanced",
    description: "Automate and scale applications using modern cloud infrastructure and CI/CD pipelines.",
    milestones: ["Linux & Shell Scripting", "Git & GitHub Actions", "Docker Fundamentals", "Kubernetes Architecture", "AWS/Azure Core Services", "Infrastructure as Code (Terraform)"],
    icon: "Cloud"
  }
];