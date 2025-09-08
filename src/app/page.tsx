"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Anders Bakken
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/andersbakken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/andersbakken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://placehold.co/200x200?text=Anders+Bakken+professional+headshot+software+developer"
                alt="Anders Bakken"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Anders Bakken
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Software developer with a passion for creating elegant solutions to complex problems.
              Currently working on developer tools and infrastructure.
            </p>
            
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium"
              >
                View my work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p>
              I'm a software developer with over 15 years of experience building tools and applications.
              I'm passionate about developer experience, performance, and creating software that just works.
            </p>
            
            <p>
              Currently, I'm focused on developer tools and infrastructure. I believe in the power of
              good tooling to make developers more productive and happier. I've worked on everything
              from embedded systems to web applications, but I'm most excited about the intersection
              of developer experience and performance.
            </p>
            
            <p>
              When I'm not coding, I enjoy spending time with my family, reading, and exploring the
              great outdoors. I'm based in Norway but work with teams around the world.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-count-up">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-500 mt-1">Years Experience</div>
            </div>
            <div className="animate-count-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-500 mt-1">Projects</div>
            </div>
            <div className="animate-count-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-blue-600">20+</div>
              <div className="text-sm text-gray-500 mt-1">Languages</div>
            </div>
            <div className="animate-count-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-blue-600">∞</div>
              <div className="text-sm text-gray-500 mt-1">Coffee Cups</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group transform hover:-translate-y-1 ${
                  index === currentProject ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      GitHub →
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-sm text-gray-600 hover:text-gray-700 transition-colors"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Let's Connect</h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and interesting projects.
            Feel free to reach out if you'd like to work together or just say hello.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:hello@andersbakken.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/andersbakken"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Anders Bakken. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/andersbakken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/andersbakken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@andersbakken.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "RTags",
    description: "A client/server indexer for C/C++ code with integration for Emacs and Vim. Provides intelligent code completion and navigation.",
    tech: ["C++", "Emacs Lisp", "Vim Script"],
    image: "https://placehold.co/400x300?text=RTags+C%2B%2B+code+indexer+terminal+interface",
    github: "https://github.com/andersbakken/rtags",
    demo: null
  },
  {
    title: "Plyst",
    description: "A modern playlist manager for music collections. Clean interface for organizing and discovering music across different platforms.",
    tech: ["JavaScript", "Node.js", "React"],
    image: "https://placehold.co/400x300?text=Plyst+music+playlist+manager+clean+interface",
    github: "https://github.com/andersbakken/plyst",
    demo: "https://plyst.com"
  },
  {
    title: "Nixer",
    description: "Development tools and utilities for improving developer workflow. Focus on performance and ease of use.",
    tech: ["C++", "Python", "Shell"],
    image: "https://placehold.co/400x300?text=Nixer+developer+tools+command+line+utilities",
    github: "https://github.com/andersbakken/nixer",
    demo: null
  },
  {
    title: "RCT",
    description: "A collection of tools for C++ development including code analysis and refactoring utilities.",
    tech: ["C++", "CMake", "LLVM"],
    image: "https://placehold.co/400x300?text=RCT+C%2B%2B+development+tools+code+analysis",
    github: "https://github.com/andersbakken/rct",
    demo: null
  },
  {
    title: "Emacs Config",
    description: "My personal Emacs configuration with custom functions and optimizations for C++ and web development.",
    tech: ["Emacs Lisp", "Shell"],
    image: "https://placehold.co/400x300?text=Emacs+configuration+editor+interface+dark+theme",
    github: "https://github.com/andersbakken/.emacs.d",
    demo: null
  },
  {
    title: "JSParser",
    description: "A lightweight JavaScript parser built for speed and accuracy. Used in various development tools.",
    tech: ["C++", "JavaScript"],
    image: "https://placehold.co/400x300?text=JavaScript+parser+code+syntax+highlighting",
    github: "https://github.com/andersbakken/jsparser",
    demo: null
  }
];