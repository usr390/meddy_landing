'use client';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-center items-center px-2 pt-28 md:pt-20 bg-gradient-to-r from-emerald-600 to-blue-600 min-h-[70vh] md:h-screen"
    >
      <div className="w-full border-6 border-gray-200 p-4 flex flex-col items-center relative">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white leading-relaxed text-left w-full px-4 py-4 md:px-16 md:py-10 lg:px-32 lg:py-16">
          I'm <span className="underline">Eduardo Trevino</span>, a web developer based in Weslaco, Texas. I love building beautiful interfaces, perfomant software, and everything in between!
        </h1>
      </div>
      <div className="flex flex-col items-center mt-6 mb-6">
        <span className="text-white font-semibold text-lg">Get in touch</span>
        <a
          href="mailto:edutrecompute@gmail.com"
          className="underline text-white text-base mt-1"
        >
          edutrecompute@gmail.com
        </a>
      </div>
    </section>
  );
}