'use client';

import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
// import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ResumeSection from "../components/ResumeSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* <Navbar /> */}
      <HeroSection />

      {/* About / Services Section */}
      <section className="w-full max-w-3xl mx-auto py-12 px-4" id="about-us">
        <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
        <p className="mb-6 text-center text-gray-700">
          As a QA software analyst and software developer, I enjoy bridging the gap between engineering and design. My goal is always to build applications that are scalable and effecient under the hood, highly automated, and provide delightful user experiences
        </p>
        <p className="mb-6 text-center text-gray-700">
        <span className="font-bold">When I&apos;m not in front of a computer screen.</span>  I&apos;m probably reading books, jamming on my bass guitar or fiddling with my Magic: The Gathering decks
        </p>
      </section>

      <SkillsSection />

      <ResumeSection />

      {/* Our Philosophy Section */}
      {/* <section className="w-full max-w-3xl mx-auto py-12 px-4" id="philosophy">
        <h2 className="text-2xl font-bold mb-4 text-center">What We Believe</h2>
        <p className="mb-6 text-center text-gray-700">
          We believe the new era of AI has made custom software more affordable than ever before. Local businesses can now leverage technology that was once reserved for big corporations. We believe in delivering practical, intuitive software solutions that empower you to do more with less, so you can focus on what matters most—growing your business and serving your community.
        </p>
      </section> */}

      {/* <section className="w-full max-w-3xl mx-auto py-16 px-4" id="about">
        <h2 className="text-2xl font-bold mb-4 text-center">What We Do</h2>
        <p className="mb-8 text-center text-gray-700">We build software of all kinds for clients—landing pages, custom web apps, mobile apps, desktop apps, and more. Whether you need a simple site or a complex solution, we deliver results quickly and efficiently.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="rounded-lg border p-6 flex flex-col items-center text-center h-full">
            <Globe className="text-emerald-500 w-10 h-10 mb-2" />
            <h3 className="font-semibold mb-1 text-lg sm:text-xl">Landing Pages</h3>
            <p className="text-gray-700">High-converting, beautiful landing pages for any purpose.</p>
          </div>
          <div className="rounded-lg border p-6 flex flex-col items-center text-center h-full">
            <Laptop2 className="text-emerald-500 w-10 h-10 mb-2" />
            <h3 className="font-semibold mb-1 text-lg sm:text-xl">Web Apps</h3>
            <p className="text-gray-700">From MVPs to full-featured apps, built to your needs.</p>
          </div>
          <div className="rounded-lg border p-6 flex flex-col items-center text-center h-full">
            <Smartphone className="text-emerald-500 w-10 h-10 mb-2" />
            <h3 className="font-semibold mb-1 text-lg sm:text-xl">Mobile Apps</h3>
            <p className="text-gray-700">Native and cross-platform mobile apps for iOS and Android devices.</p>
          </div>
          <div className="rounded-lg border p-6 flex flex-col items-center text-center h-full">
            <Laptop className="text-emerald-500 w-10 h-10 mb-2" />
            <h3 className="font-semibold mb-1 text-lg sm:text-xl">Desktop Apps</h3>
            <p className="text-gray-700">Native apps for Mac and Windows.</p>
          </div>
          <div className="rounded-lg border p-6 flex flex-col items-center text-center h-full col-span-full sm:col-span-2 lg:col-span-2 mx-auto">
            <Lightbulb className="text-emerald-500 w-10 h-10 mb-2" />
            <h3 className="font-semibold mb-1 text-lg sm:text-xl">Other Software</h3>
            <p className="text-gray-700">General software, automation, and custom tools.</p>
          </div>
        </div>
      </section> */}

      {/* <WhyChooseSection /> */}

      {/* <section className="w-full max-w-3xl mx-auto py-12 px-4" id="pricing">
        <h2 className="text-2xl font-bold mb-4 text-center">Pricing</h2>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
            <p className="text-emerald-600 text-3xl font-bold mb-1">
              $100 <span className="text-lg font-normal">one-time</span> <span className="mx-2">|</span> <span className="text-emerald-600 text-2xl font-bold">$5</span><span className="text-lg font-normal">/month</span>
            </p>
            <p className="text-gray-700 mb-2">A beautiful, custom landing page tailored to your business.</p>
            <p className="text-gray-500 text-sm">
              <span className="font-medium">$5/month</span> (required) — covers domain costs, ongoing updates, backups, and support.
            </p>
          </div>
          <div className="border-t pt-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Custom Projects</h3>
            <p className="text-gray-700 mb-2">
              Need something more? We build web apps, portfolios, and custom solutions for all kinds of businesses. Pricing varies based on scope and requirements.
            </p>
            <p className="text-gray-500 text-sm">Contact us for a free, personalized quote!</p>
          </div>
        </div>
      </section> */}

      <PortfolioSection />
      {/* <HowItWorksSection /> */}
      {/* <PricingSection /> */}
      <ContactSection />
    </div>
  );
}
