'use client';

import React, { useState } from 'react';
import { Github, Mail, Phone } from "lucide-react";

export default function ContactSection() {

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xeokdawr', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.currentTarget),
      });
      const data = await res.json();
      if (data.ok || data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact Me</h2>
      <p className="text-center mb-6">I&apos;d love to hear from you! Feel free to reach out through any of the methods below</p>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-6 w-full max-w-xs sm:max-w-none mx-auto">
        <a
          href="https://github.com/usr390"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-emerald-600 hover:text-emerald-700 transition-colors text-center"
        >
          <Github className="w-7 h-7 sm:w-6 sm:h-6 mb-1" />
          <span className="text-xs sm:text-sm text-center w-20">GitHub</span>
        </a>
        <a
          href="mailto:edutrecompute@gmail.com"
          className="flex flex-col items-center text-emerald-600 hover:text-emerald-700 transition-colors text-center"
        >
          <Mail className="w-7 h-7 sm:w-6 sm:h-6 mb-1" />
          <span className="text-xs sm:text-sm text-center w-32">edutrecompute@gmail.com</span>
        </a>
        <a
          href="tel:+19562345678"
          className="flex flex-col items-center text-emerald-600 hover:text-emerald-700 transition-colors text-center"
        >
          <Phone className="w-7 h-7 sm:w-6 sm:h-6 mb-1" />
          <span className="text-xs sm:text-sm text-center w-32 whitespace-nowrap">(956) 261-9316</span>
        </a>
      </div>
      {/* Restored Contact Form */}
      {status === 'success' ? (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6 text-center text-emerald-700 font-semibold">
          Thanks for contacting me, I&apos;ll be sure to get to you soon!
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
            value={form.name}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
            value={form.email}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            required
            value={form.message}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          <button
            type="submit"
            className="bg-emerald-600 text-white rounded px-4 py-2 font-semibold hover:bg-emerald-700 transition-colors"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'error' && (
            <div className="text-red-600 text-sm mt-2">Something went wrong. Please try again later.</div>
          )}
        </form>
      )}
    </section>
  );
} 