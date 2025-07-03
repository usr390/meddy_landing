'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of the navbar (h-20 = 80px)
      const elementPosition = element.offsetTop - navbarHeight - 20; // Extra 20px for breathing room
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-25">
          {/* Logo/Brand */}
          <div 
            className="text-xl font-bold text-emerald-600 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Meddy Software
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about-us')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about-us')}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 