// Placeholder file
// src/features/projects/data.ts
import { Project } from '@/types/project';

export const mockProjects: Project[] = [
  {
    slug: "ai-attendance-system",
    title: "AI-Powered Attendance System",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    shortDescription: "Facial recognition system to automate student attendance tracking in classrooms.",
    longDescription: "This project implements a robust facial recognition pipeline using OpenCV and TensorFlow to mark student attendance automatically. It includes a web dashboard for teachers to view reports and manage student databases.",
    features: [
      "Real-time facial detection",
      "Automated attendance logging",
      "CSV report generation",
      "Admin dashboard for management"
    ],
    requirements: [
      "Python 3.8+",
      "Webcam (720p minimum)",
      "4GB RAM (8GB recommended)"
    ],
    difficulty: "Advanced",
    thumbnail: "from-blue-600 to-cyan-500"
  },
  {
    slug: "smart-iot-dashboard",
    title: "Smart Home IoT Dashboard",
    category: "IoT",
    technologies: ["Node.js", "React", "MQTT", "Raspberry Pi"],
    shortDescription: "Centralized dashboard to monitor and control smart home sensors and devices.",
    longDescription: "A lightweight IoT solution using MQTT protocol to communicate between Raspberry Pi sensors and a React-based frontend. Allows real-time monitoring of temperature, humidity, and remote control of appliances.",
    features: [
      "Real-time sensor data visualization",
      "Remote appliance toggling",
      "Historical data charts",
      "Mobile responsive design"
    ],
    requirements: [
      "Raspberry Pi 4",
      "DHT11/DHT22 Sensors",
      "Node.js installed"
    ],
    difficulty: "Intermediate",
    thumbnail: "from-purple-600 to-pink-500"
  },
  {
    slug: "devops-pipeline-tool",
    title: "Automated CI/CD Pipeline Tool",
    category: "Cloud",
    technologies: ["AWS", "Docker", "Jenkins", "Linux"],
    shortDescription: "A setup script and dashboard for automating code deployment to AWS using Docker.",
    longDescription: "An educational project demonstrating how to build a continuous integration and deployment pipeline. It packages a sample application into a Docker container and deploys it to an AWS EC2 instance automatically upon code commit.",
    features: [
      "Automated GitHub webhooks",
      "Docker containerization",
      "AWS EC2 deployment scripts",
      "Email notifications on build status"
    ],
    requirements: [
      "AWS Account",
      "GitHub Repository",
      "DockerHub Account"
    ],
    difficulty: "Advanced",
    thumbnail: "from-orange-500 to-red-500"
  },
  {
    slug: "portfolio-website-template",
    title: "Developer Portfolio Template",
    category: "Web Development",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    shortDescription: "A premium, responsive portfolio template designed for engineering students.",
    longDescription: "A clean, minimal, and highly performant portfolio template built with Next.js App Router. Features smooth animations, dark mode support, and a built-in contact form.",
    features: [
      "Dark/Light mode toggle",
      "Framer Motion animations",
      "SEO optimized",
      "Contact form integration"
    ],
    requirements: [
      "Node.js 18+",
      "Basic React knowledge"
    ],
    difficulty: "Beginner",
    thumbnail: "from-slate-700 to-slate-900"
  }
];