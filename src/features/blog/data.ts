// src/features/blog/data.ts
import { BlogPost } from '@/types/blog';

export const mockBlogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js and App Router",
    excerpt: "Learn how to build modern, scalable web applications using Next.js 14, TypeScript, and the new App Router architecture.",
    content: [
      "Next.js has become the standard framework for building modern React applications. With the introduction of the App Router, developers can now leverage server components and nested layouts more easily than ever before.",
      "In this guide, we will walk through setting up a new project, configuring TypeScript, and structuring your application for scalability. We will also cover best practices for state management and API integration.",
      "Whether you are building a simple portfolio or a complex engineering platform, Next.js provides the tools you need to succeed. Stay tuned for our next article where we dive deep into Tailwind CSS integration."
    ],
    category: "Web Development",
    author: "Nithin Arun",
    date: "May 15, 2024",
    readTime: "5 min read",
    thumbnail: "from-blue-500 to-indigo-600"
  },
  {
    slug: "mastering-python-data-structures",
    title: "Mastering Python Data Structures for Interviews",
    excerpt: "A comprehensive guide to arrays, linked lists, trees, and graphs. Prepare for your next technical interview with confidence.",
    content: [
      "Data structures are the backbone of computer science and a common topic in technical interviews. Understanding how to manipulate them efficiently is crucial for any engineering student.",
      "In this article, we explore Python's built-in data structures like lists, dictionaries, and sets, and compare them to traditional structures like linked lists and binary trees.",
      "We will also solve common interview problems from platforms like LeetCode to demonstrate practical application of these concepts."
    ],
    category: "Programming",
    author: "ESP Team",
    date: "May 10, 2024",
    readTime: "8 min read",
    thumbnail: "from-yellow-500 to-orange-600"
  },
  {
    slug: "introduction-to-machine-learning",
    title: "Introduction to Machine Learning: A Beginner's Roadmap",
    excerpt: "Understand the basics of supervised and unsupervised learning, and how to start your journey into AI and ML.",
    content: [
      "Machine Learning is transforming industries. From self-driving cars to personalized recommendations, ML is everywhere.",
      "This guide breaks down the complexities of ML into simple terms. We start with statistics and linear algebra, move towards classical algorithms using Scikit-Learn, and eventually touch upon Neural Networks.",
      "By the end of this roadmap, you will have a clear path to follow for mastering Machine Learning."
    ],
    category: "AI/ML",
    author: "ESP Team",
    date: "May 5, 2024",
    readTime: "6 min read",
    thumbnail: "from-green-500 to-teal-600"
  }
];