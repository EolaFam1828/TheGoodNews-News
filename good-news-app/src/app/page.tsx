// --- app/page.tsx ---
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

// Dynamically import the client component to prevent SSR errors
const GoodNewsFeed = dynamic(
  () => import("@/app/(site)/categories/[category]/GoodNewsFeed"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <section id="latest-news" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">
              Today's Good News
            </h3>
            <GoodNewsFeed category="science-tech" />
          </div>
        </section>
        <Categories />
      </main>
      <Footer />
    </>
  );
}

// --- components/Header.tsx ---
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black brand-gradient">
          <Link href="/">🌍 The Good News, News</Link>
        </h1>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-gray-600 hover:text-green-600 transition duration-300"
          >
            Our Mission
          </a>
          <a
            href="#latest-news"
            className="text-gray-600 hover:text-green-600 transition duration-300"
          >
            Today's Good News
          </a>
          <a
            href="#categories"
            className="text-gray-600 hover:text-green-600 transition duration-300"
          >
            Categories
          </a>
        </nav>
        <button
          id="mobile-menu-button"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden px-6 pb-4 ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <a
          href="#about"
          className="block py-2 text-gray-600 hover:text-green-600 transition duration-300"
        >
          Our Mission
        </a>
        <a
          href="#latest-news"
          className="block py-2 text-gray-600 hover:text-green-600 transition duration-300"
        >
          Today's Good News
        </a>
        <a
          href="#categories"
          className="block py-2 text-gray-600 hover:text-green-600 transition duration-300"
        >
          Categories
        </a>
      </div>
    </header>
  );
}
// --- components/Hero.tsx ---
export default function Hero() {
  return (
    <section className="hero-bg py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
          Because the world deserves more than fear and tragedy.
        </h2>
        <p className="font-lora text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          What’s right with the world, today.
        </p>
        <a
          href="#latest-news"
          className="mt-8 inline-block bg-green-500 text-white font-bold rounded-lg px-8 py-3 hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          See The Good News
        </a>
      </div>
    </section>
  );
}

// --- components/Mission.tsx ---
export default function Mission() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 relative inline-block">
            Our Mission Is Simple: To Balance The Record.
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-green-200 rounded-full"></span>
          </h3>
          <p className="font-lora text-gray-600 text-lg leading-relaxed mb-6">
            Every day, headlines scream the same words: death, destruction, crime,
            despair. It’s a broken record we’ve all grown numb to. But here’s the
            truth: humanity is so much more than its worst moments.
          </p>
          <p className="font-lora text-gray-600 text-lg leading-relaxed mb-6">
            We’re inventing, healing, helping, laughing, creating, and overcoming—every
            single day. And yet, those stories rarely make the front page. That’s
            where we come in.
          </p>
          <p className="font-lora text-gray-600 text-lg leading-relaxed font-bold">
            Not with fluff. Not with denial. But with real stories of good—acts of
            kindness, breakthroughs in science, communities rising, resilience after
            hardship, and proof that hope is not naïve—it’s necessary.
          </p>
        </div>
      </div>
    </section>
  );
}

// --- components/Categories.tsx ---
import Link from "next/link";

export default function Categories() {
  const categories = [
    { name: "Science & Tech", slug: "science-tech", icon: "🔬", color: "green" },
    { name: "Community", slug: "community", icon: "🤝", color: "blue" },
    { name: "Kindness", slug: "kindness", icon: "❤️", color: "yellow" },
    { name: "Environment", slug: "environment", icon: "🌱", color: "purple" },
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Explore More Goodness
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`}>
              <div
                className={`p-6 bg-${cat.color}-100 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h4 className={`font-bold text-lg text-${cat.color}-800`}>
                  {cat.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- components/Footer.tsx ---
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-black brand-gradient mb-2">
          The Good News, News
        </p>
        <p className="text-gray-400">
          Because the world doesn’t need less news. It needs better news.
        </p>
        <p className="text-gray-500 mt-4 text-sm">
          &copy; 2025 The Good News, News. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

// --- app/globals.css ---
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #FDFDFD;
    color: rgb(var(--foreground-rgb));
}
@layer base {
  html {
    scroll-behavior: smooth;
  }
}
.font-lora {
    font-family: 'Lora', serif;
}
.brand-gradient {
    background: linear-gradient(to right, #4CAF50, #2196F3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.hero-bg {
    background-color: #f3f4f6;
    background-image: radial-gradient(#dbeafe 1.5px, transparent 1.5px);
    background-size: 30px 30px;
}
.loader {
    border-top-color: #4CAF50;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    to { transform: rotate(360deg); }
}