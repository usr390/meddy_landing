import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";

const projects = [
  {
    name: "Reyna Pet Sales",
    description: "Landing page for a pet sales business.",
    url: "https://reynabreeders.carrd.co",
    imageAlt: "Reyna Pet Sales screenshot",
    image: "reynas.jpeg" ,
    slug: "reyna-breeders"

  },
  {
    name: "The Eatery",
    description: "Landing page for a food truck park in Weslaco, TX.",
    url: "https://theeatery.carrd.co",
    imageAlt: "The Eatery screenshot",
    image: "eatery.jpeg",
    slug: "the-eatery"
  },
  {
    name: "Uncle Chops Food Court",
    description: "Landing page for a local food truck and eatery.",
    url: "https://unclechops.carrd.co",
    imageAlt: "Uncle Chops Food Court screenshot",
    image: "uncles.jpeg",
    slug: "uncle-chops-food-court"
  },
  {
    name: "Rarelygroovy",
    description: "Web app for tracking local music events in the Rio Grande Valley.",
    url: "https://www.rarelygroovy.com/events",
    imageAlt: "Rarelygroovy screenshot",
    image: "rarely.png",
    slug: "rarelygroovy"

  },
];

export default function PortfolioSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4" id="portfolio">
      <h2 className="text-2xl font-bold mb-8 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end">
              <Image
                src={`/${project.image}`}
                alt={project.name}
                width={400}
                height={200}
                className="w-full h-32 object-cover rounded mb-4"
              />
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-emerald-600 hover:underline font-medium"
              >
                Visit Site
              </a>
            <a
                href={`/portfolio/${project.slug}`}
                className="text-emerald-600 hover:text-emerald-600 hover:underline font-medium text-right"
                >
                Read more
                </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 