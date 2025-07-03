import { notFound } from "next/navigation";
import Image from "next/image";

// You may want to move this to a shared file if you update your projects often
const projects = [
  {
    name: "Reyna Pet Sales",
    description: "Landing page for a pet sales business.",
    url: "https://reynabreeders.carrd.co",
    imageAlt: "Reyna Pet Sales screenshot",
    image: "reynas.jpeg",
    slug: "reyna-pet-sales",
    caseStudy: {
      before: "Puppies were being promoted only through text posts and DMs. There was no system to organize photos, bios, or health info. Serious inquiries were buried in cluttered social messages.",
      after: "We created a clean, mobile-first landing page that let each puppy shine with photos, names, and personality traits. Within 2 weeks:",
      results: [
        "80% of puppies were reserved through the contact form",
        "users spent an average of 3+ minutes browsing bios",
        "site received 1,700+ visits from local search and IG bio link",
        "Pet seller got 10x fewer 'is this still available?' messages and 4x more serious buyers"
      ],
      quote: "People showed up already knowing the puppy's name. I didn't have to explain anything.",
      quoteBy: "Client"
    }
  },
  {
    name: "The Eatery",
    description: "Landing page for a food truck park in Weslaco, TX.",
    url: "https://theeatery.carrd.co",
    imageAlt: "The Eatery screenshot",
    image: "eatery.jpeg",
    slug: "the-eatery",
    caseStudy: {
      before: "The Eatery had a strong Instagram following but no centralized place for people to learn about events, vendors, or get answers to basic questions like 'Who's open today?' or 'Where is this?'",
      after: "We launched a streamlined, modern landing page with sections for vendors, events, and booking inquiries. Post-launch impact in the first 45 days:",
      results: [
        "3,100+ unique visitors",
        "40+ direct vendor & band submissions through the site",
        "bounce rate dropped under 30% on mobile",
        "several private event bookings came directly from the 'Host Your Event' section"
      ],
      quote: "People finally understand what The Eatery is. That one page did more than all our posts combined.",
      quoteBy: "Mario, Owner"
    }
  },
  {
    name: "Uncle Chops Food Court",
    description: "Landing page for a local food truck and eatery.",
    url: "https://unclechops.carrd.co",
    imageAlt: "Uncle Chops Food Court screenshot",
    image: "uncles.jpeg",
    slug: "uncle-chops-food-court",
    caseStudy: {
      before: "Uncle Chop's had great food, a loyal customer base, and a cool space—but no real online presence beyond word-of-mouth. Their brand felt scattered, and mobile users had no easy way to find menus, hours, or location.",
      after: "We built a bold, mobile-friendly landing page that captured their hometown-meets-elevated-dining vibe. Within 30 days of launch:",
      results: [
        "website traffic jumped to 2,400+ visits/month",
        "time-on-site increased by 60%",
        "“Get Directions” clicks increased by 3.2x",
        "they started receiving vendor & booking inquiries through the form for the first time"
      ],
      quote: "We didn't realize how many people were searching for us online until the site launched. It's been a game-changer.",
      quoteBy: "Chris, Owner"
    }
  },
  {
    name: "Rarelygroovy",
    description: "Web app for tracking local music events in the Rio Grande Valley.",
    url: "https://www.rarelygroovy.com/events",
    imageAlt: "Rarelygroovy screenshot",
    image: "rarely.png",
    slug: "rarelygroovy",
    caseStudy: {
      before: "Rarelygroovy started as a passion project to document and promote the underground music scene in the Rio Grande Valley. The original site was functional but minimal—no artist directory, no genre filtering, and no mobile experience. Most traffic came from word of mouth or the founder's social circles, and visitors had no way to truly explore the scene.",
      after: "We designed and launched a full-featured music discovery platform, complete with:",
      results: [
        "8,200+ unique users in the first 60 days",
        "140+ local artists documented in the directory",
        "2.3x increase in time spent on site",
        "1 in 4 users who viewed 3+ artists clicked into the paid tier",
        "3 bands booked gigs directly from being featured on the site"
      ],
      quote: "Rarelygroovy made us feel like a real scene again. People are finding bands they've never heard of—right in their own backyard.",
      quoteBy: "Local Promoter"
    }
  },
  // Add more projects as needed
];

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <Image
        src={`/${project.image}`}
        alt={project.imageAlt}
        width={800}
        height={400}
        className="w-full rounded mb-4"
      />
      <p className="mb-4">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 hover:underline font-medium"
      >
        Visit Site
      </a>
      {project.caseStudy && (
        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold mb-2">Case Study</h2>
          <div className="mb-4">
            <span className="font-semibold">Before:</span>
            <p>{project.caseStudy.before}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">After:</span>
            <p>{project.caseStudy.after}</p>
            <ul className="list-disc list-inside mt-2 text-emerald-700">
              {project.caseStudy.results.map((result, i) => (
                <li key={i}>{result}</li>
              ))}
            </ul>
          </div>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700 mb-2">
            “{project.caseStudy.quote}”
          </blockquote>
          <div className="text-right text-sm text-gray-500">— {project.caseStudy.quoteBy}</div>
        </div>
      )}
    </div>
  );
} 