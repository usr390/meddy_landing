'use client';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-center items-center px-2 pt-28 md:pt-20 bg-gradient-to-r from-emerald-600 to-blue-600 min-h-[70vh] md:h-screen"
    >
      <div className="w-full border-6 border-gray-200 p-4 flex flex-col items-center relative">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 text-white leading-relaxed text-left w-full px-4 py-4 md:px-16 md:py-10 lg:px-32 lg:py-16">
          Weslaco Software Develoer: Tools & Apps For Businesses Across the Rio Grande Valley
        </h1>
      </div>
      <a
          href="#how-it-works"
          className="inline-block px-8 py-3 rounded-md text-white bg-emerald-500 hover:bg-emerald-600 font-semibold transition mt-6 mb-6"
        >
          Start Your Project
        </a>
    </section>
  );
}