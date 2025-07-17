import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";

const projects = [
  // {
  //   name: "Reyna Pet Sales",
  //   description: "Landing page for a pet sales business.",
  //   url: "https://reynabreeders.carrd.co",
  //   imageAlt: "Reyna Pet Sales screenshot",
  //   image: "reynas.jpeg" ,
  //   slug: "reyna-breeders",
  //   techStack: ["Carrd", "Custom Design"]
  // },
  // {
  //   name: "The Eatery",
  //   description: "Landing page for a food truck park in Weslaco, TX.",
  //   url: "https://theeatery.carrd.co",
  //   imageAlt: "The Eatery screenshot",
  //   image: "eatery.jpeg",
  //   slug: "the-eatery",
  //   techStack: ["Carrd", "Custom Design"]
  // },
  // {
  //   name: "Uncle Chops Food Court",
  //   description: "Landing page for a local food truck and eatery.",
  //   url: "https://unclechops.carrd.co",
  //   imageAlt: "Uncle Chops Food Court screenshot",
  //   image: "uncles.jpeg",
  //   slug: "uncle-chops-food-court",
  //   techStack: ["Carrd", "Custom Design"]
  // },
  {
    name: "Rarelygroovy",
    description: "Web app for tracking local music events in the Rio Grande Valley.",
    url: "https://rarelygroovy.com",
    imageAlt: "Rarelygroovy screenshot",
    image: "rarely.png",
    slug: "rarelygroovy",
    techStack: ["Angular", "PrimeNG", "RxJs", "NgRx", "TypeScript", "Express", "MongoDB", "GitHub"],
    github: "https://github.com/usr390/enm-project"
  },
  {
    name: "Rarelygroovy for iOS",
    description: "Companion app for Rarelygroovy.com.",
    url: "https://apps.apple.com/us/app/rarelygroovy/id6743501928",
    imageAlt: "Rarelygroovy screenshot",
    image: "one.png",
    slug: "rarelygroovy-ios",
    techStack: ["XCode", "SwiftUI", "Swift", "UIKit", "Express", "MongoDB", "GitHub"],
    github: "https://github.com/usr390/rarelygroovy-ios"
  },
  {
    name: "Rarelygroovy for Android",
    description: "Companion app for Rarelygroovy.com (Work in Progress).",
    slug: "rarelygroovy-android",
    url: "#",
    image: "two.png",
    imageAlt: "Rarelygroovy Android screenshot",
    techStack: ["Android Studio", "Kotlin", "Jetpack Compose", "Express", "MongoDB", "GitHub"],
    comingSoon: true,
    github: "https://github.com/usr390/rarelygroovy-android"
  },
  
];

export default function PortfolioSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4" id="portfolio">
      <h2 className="text-2xl font-bold mb-8 text-center">Portfolio</h2>
      <p className="text-center mb-6">I currently build and maintain two projects which I can consider my &quot;flagship&quot; projects, and another project that is coming soon</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <Card
            key={project.name}
            className={`flex flex-col h-full min-h-[420px]${projects.length % 2 === 1 && idx === projects.length - 1 ? ' sm:col-span-2 sm:mx-auto sm:w-1/2' : ''}`}
            style={projects.length % 2 === 1 && idx === projects.length - 1 ? { justifySelf: 'center' } : {}}
          >
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              {project.comingSoon && (
                <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold mt-2">Coming Soon</span>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col justify-end">
              <Image
                src={`/${project.image}`}
                alt={project.name}
                width={400}
                height={280}
                className="w-full h-48 object-cover object-top rounded mb-4"
              />
              <div className="flex w-full justify-between items-center gap-2 mt-2">
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline font-medium"
                  >
                    GitHub
                  </a>
                )}
                <a
                  href={`/portfolio/${project.slug}`}
                  className="text-emerald-600 hover:text-emerald-600 hover:underline font-medium"
                >
                  Read more
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 