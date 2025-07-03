'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xeokdawr"); // Replace with your Formspree form key

  if (state.succeeded) {
    return (
      <section className="w-full max-w-2xl mx-auto py-16 px-4" id="contact">
        <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>
        <div className="text-center text-emerald-600 font-semibold text-lg">
          Thank you for reaching out! I&apos;ll get back to you soon.
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 border-gray-300"
            autoComplete="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 border-gray-300"
            autoComplete="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full border rounded px-3 py-2 h-28 resize-vertical focus:outline-none focus:ring-2 focus:ring-emerald-400 border-gray-300"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
} 