import PortfolioSection from "../components/PortfolioSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      {/* Hero Section */}
      <section id="hero" className="h-screen w-full flex flex-col justify-center items-center px-4 text-center pt-20">
      <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Fast, hassle free software solutions</h1>
      <a href="#contact" className="inline-block px-8 py-3 rounded-md text-white bg-emerald-500 hover:bg-emerald-600 font-semibold transition">Start Your Project</a>
      </section>

      {/* About / Services Section */}
      <section className="w-full max-w-3xl mx-auto py-12 px-4" id="about-us">
        <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
        <p className="mb-6 text-center text-gray-700">
          Based in Weslaco, Texas, we are a husband-and-wife duo passionate about helping local businesses of all kinds—law firms, photographers, musicians, and more—grow and thrive online. With a commitment to quality, we combine expert programming and thoughtful design to deliver modern, effective solutions tailored to your needs. We genuinely want to see you and your business succeed, and we&apos;re here to support your journey every step of the way.
        </p>
      </section>

      <section className="w-full max-w-3xl mx-auto py-16 px-4" id="about">
        <h2 className="text-2xl font-bold mb-4 text-center">What We Do</h2>
        <p className="mb-8 text-center text-gray-700">We build software of all kinds for clients—landing pages, custom web apps, and more. Whether you need a simple site or a complex solution, we deliver results quickly and efficiently.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg border p-6 flex flex-col items-center">
            <span className="text-emerald-500 text-3xl mb-2">🌐</span>
            <h3 className="font-semibold mb-1">Landing Pages</h3>
            <p className="text-sm text-gray-600 text-center">High-converting, beautiful landing pages for any purpose.</p>
          </div>
          <div className="rounded-lg border p-6 flex flex-col items-center">
            <span className="text-emerald-500 text-3xl mb-2">🛠️</span>
            <h3 className="font-semibold mb-1">Web Apps</h3>
            <p className="text-sm text-gray-600 text-center">From MVPs to full-featured apps, built to your needs.</p>
          </div>
          <div className="rounded-lg border p-6 flex flex-col items-center">
            <span className="text-emerald-500 text-3xl mb-2">📱</span>
            <h3 className="font-semibold mb-1">Mobile Apps</h3>
            <p className="text-sm text-gray-600 text-center">Native and cross-platform mobile apps for iOS and Android devices.</p>
          </div>
          <div className="rounded-lg border p-6 flex flex-col items-center">
            <span className="text-emerald-500 text-3xl mb-2">💡</span>
            <h3 className="font-semibold mb-1">Other Software</h3>
            <p className="text-sm text-gray-600 text-center">General software, automation, and custom tools.</p>
          </div>
        </div>
      </section>

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
      <HowItWorksSection />
      <ContactSection />
    </div>
  );
}
