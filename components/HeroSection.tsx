'use client';

import { Github, MapPin, Mail, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-center items-center px-2 py-16 bg-gradient-to-r from-emerald-600 to-blue-600 min-h-[70vh] md:h-screen"
    >
      <div className="w-full border-6 border-gray-200 p-4 flex flex-col items-center relative">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white leading-relaxed text-left w-full px-4 py-4 md:px-16 md:py-10 lg:px-32 lg:py-16">
          <span className="underline">Eduardo Trevino</span><br />
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://maps.google.com/?q=Weslaco,TX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-emerald-200 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Weslaco, TX</span>
            </a>
            <a
              href="https://github.com/usr390"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-emerald-200 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="mailto:edutrecompute@gmail.com"
              className="flex items-center gap-2 text-white hover:text-emerald-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">edutrecompute@gmail.com</span>
            </a>
            <a
              href="tel:+19562619316"
              className="flex items-center gap-2 text-white hover:text-emerald-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(956) 261-9316</span>
            </a>
          </div><br />
          I am a software developer with emphasis on web/mobile apps using tools like Angular, XCode, Android Studio, Express, & SQL!
        </h1>
      </div>

    </section>
  );
}