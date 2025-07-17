'use client';

import React from 'react';
import { Github, Mail, Phone } from "lucide-react";

export default function ContactSection() {

  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact Me</h2>
      <p className="text-center mb-6">I&apos;d love to hear from you! Feel free to reach out through any of the methods below</p>
      <div className="flex justify-center items-center gap-12 mb-6">
        <a
          href="https://github.com/usr390"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-emerald-600 hover:text-emerald-700 transition-colors text-center"
        >
          <Github className="w-6 h-6 mb-1" />
          <span className="text-sm text-center w-20">GitHub</span>
        </a>
        <a
          href="mailto:edutrecompute@gmail.com"
          className="flex flex-col items-center text-emerald-600 hover:text-emerald-700 transition-colors text-center"
        >
          <Mail className="w-6 h-6 mb-1" />
          <span className="text-sm text-center w-32">edutrecompute@gmail.com</span>
        </a>
        <a
          href="tel:+19562345678"
          className="flex flex-col items-center text-emerald-600 hover:text-emerald-700 transition-colors text-center"
        >
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-sm text-center w-32 whitespace-nowrap">(956) 261-9316</span>
        </a>
      </div>
    </section>
  );
} 