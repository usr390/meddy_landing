import { notFound } from "next/navigation";
import Image from "next/image";

// Updated project structure
const projects = [
  {
    name: "Rarelygroovy",
    slug: "rarelygroovy",
    url: "https://rarelygroovy.com",
    image: "rarely.png",
    imageAlt: "Rarelygroovy screenshot",
    readTime: "2 minute",
    type: "Live Events / Entertainment",
    techStack: ["Angular", "PrimeNG", "RxJs", "NgRx", "TypeScript", "Express", "MongoDB", "GitHub", "Playwright"],
    purpose: "To help local music fans discover and track live events and artists in the Rio Grande Valley.",
    stackExplanation: "The app uses Angular for a fast, interactive UI, PrimeNG for component styling, RxJs and NgRx for state management, and Express/MongoDB for the backend API. GitHub is used for version control and collaboration. GitHub Actions for CI/CD. Playwright for automated UI tests.",
    problems: "The main challenge was aggregating event and artist data from multiple sources and making it easily searchable. I also had to design a system that could scale as more artists and venues were added to the platform. My thought process was to keep the UI simple and mobile-friendly, but also create filters and sorting capabilities that would allow for extremely unique views on an already niche dataset of events and artists",
    screenshot: "rarely.png",
    github: "https://github.com/usr390/enm-project"
  },
  {
    name: "Rarelygroovy for iOS",
    slug: "rarelygroovy-ios",
    url: "https://apps.apple.com/us/app/rarelygroovy/id6743501928",
    image: "one.png",
    imageAlt: "Rarelygroovy iOS screenshot",
    readTime: "2 minute",
    type: "Mobile / Entertainment",
    techStack: ["XCode", "SwiftUI", "Swift", "UIKit", "Express", "MongoDB", "GitHub", "GitHub Actions", "Appium"],
    purpose: "To bring the Rarelygroovy experience to iOS users, making it easy to browse and track local music events on the go.",
    stackExplanation: "Built with Swift and SwiftUI for a native iOS experience, using UIKit for some custom UI elements. The backend is powered by Express and MongoDB, and the project is managed on GitHub.",
    problems: `The biggest challenge was building an iOS app that faithfully mirrored the features and user experience of the existing web app. Ensuring consistency across two completely different platforms required careful design and technical decisions, so that users could move seamlessly between web and mobile without confusion or friction. My goal was to deliver one unified, seamless experience for all users, regardless of how they accessed Rarelygroovy.\n\nAnother key decision I faced was whether to use a cross-platform technology (allowing code sharing between Android and iOS) or to build each app natively. I chose to develop the iOS app in Swift/SwiftUI, embracing the native approach. With the rapid advancements in AI-assisted development, I felt this was a great opportunity to leverage the strengths and integrations of each platform’s native language. This allowed the app to feel truly at home on iOS, while still maintaining feature parity with the web experience.`,
    screenshot: "one.png",
    github: "https://github.com/usr390/rarelygroovy-ios"
  },
  {
    name: "Rarelygroovy for Android",
    slug: "rarelygroovy-android",
    url: "#",
    image: "two.png",
    imageAlt: "Rarelygroovy Android screenshot",
    readTime: "1 minute",
    type: "Mobile / Entertainment",
    techStack: ["Android Studio", "Kotlin", "Jetpack Compose", "Express", "MongoDB", "GitHub"],
    purpose: "To bring the Rarelygroovy experience to Android users, making it easy to browse and track local music events on the go.",
    stackExplanation: "The Android app is being built with Kotlin and Jetpack Compose for a modern, native experience. The backend is powered by Express and MongoDB, and the project is managed on GitHub.",
    problems: `The main challenge is ensuring feature and UX parity with the iOS and web apps, while learning and applying the latest Android development best practices. This project is a way to further develop my skills in native Android development and keep up with the evolving mobile landscape.`,
    screenshot: "two.png",
    comingSoon: true,
    github: "https://github.com/usr390/rarelygroovy-android",
  },
  {
    name: "My Contributions to Enterprise Apps as QA",
    slug: "contributions",
    url: "https://my-contributions-to-enterprise-soft.vercel.app/",
    image: "two.png",
    imageAlt: "My Contributions to Enterprise Apps as QA screenshot",
    readTime: "2 minute",
    type: "Case Studies / Demos",
    techStack: ["React", "Next.js", "TypeScript", "GitHub", "Vercel"],
    purpose: "To highlight how I approached quality assurance, usability, accessibility, and performance improvements in real enterprise software projects using anonymized case studies to demonstrate practical impact and decision-making.",
    stackExplanation: "Built with React and Next.js for fast, interactive demos; written in TypeScript for type safety; deployed on Vercel for quick sharing. The project is structured as a portfolio of UX/QA interventions, designed to show both technical understanding and user-centered thinking.",
    problems: `The challenge was representing complex, real-world product improvements without revealing proprietary client details. I focused on abstracting the core problems and solutions into clear before/after stories, using mockups and descriptions to show how small UI, accessibility, or performance changes can create outsized impact. My goal was to communicate not just what I did, but how I think as a QA/software professional. Showing an eye for detail, scalability, and user experience.`,
    screenshot: "cont.png",
    github: "https://github.com/usr390/my-contributions-to-enterprise-software",
  },
  // Add more projects as needed
];

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
      <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
        <span>⏱️ {project.readTime} read</span>
        <span>•</span>
        <span>{project.type}</span>
        {project.comingSoon && (
          <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">Coming Soon</span>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span key={tech} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      <Image
        src={`/${project.screenshot}`}
        alt={project.imageAlt}
        width={800}
        height={400}
        className="w-2/3 mx-auto rounded mb-6 object-cover object-top"
      />
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Purpose &amp; Goal</h2>
        <p>{project.purpose}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Stack &amp; Explanation</h2>
        <p>{project.stackExplanation}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Problems &amp; Thought Process</h2>
        <p>{project.problems}</p>
      </section>
      <div className="flex gap-6 items-center">
        {project.comingSoon ? (
          <span className="inline-block bg-gray-200 text-gray-500 px-4 py-2 rounded font-semibold cursor-not-allowed opacity-70">Coming Soon</span>
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline font-medium"
          >
            {project.slug === "rarelygroovy-ios" ? "Download App" : "Visit Site"}
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline font-medium"
        >
          GitHub
        </a>
      </div>
    </div>
  );
} 