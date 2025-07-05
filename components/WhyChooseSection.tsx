import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, UserCheck, ShieldCheck, BadgeDollarSign } from "lucide-react";

const points = [
  {
    icon: MapPin,
    title: "Local Roots",
    description:
      "We are based in the RGV and are laser-focused on equipping our community with the tools to be successful.",
  },
  {
    icon: BadgeDollarSign,
    title: "Great Pricing",
    description:
      "We are committed to offering our services at affordable and reasonable price points.",
  },
  {
    icon: UserCheck,
    title: "Face-to-Face Contact",
    description:
      "Unlike most software firms, we offer to meet in-person to better understand your needs and requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Convenient Payment",
    description:
      "You pay nothing until you're 100% satisfied with your software.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4" id="why-choose">
      <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Meddy Software?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {points.map((point) => (
          <Card key={point.title} className="flex flex-col items-center text-center h-full">
            <CardHeader className="flex flex-col items-center">
              <point.icon className="w-10 h-10 mb-2 text-emerald-500" />
              <CardTitle className="mb-2 text-lg sm:text-xl whitespace-nowrap">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 