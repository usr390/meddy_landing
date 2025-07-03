import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Award, UserCheck, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: MapPin,
    title: "Local Roots",
    description:
      "We know the Valley and its businesses. Our solutions are tailored for the unique needs of our South Texas community.",
  },
  {
    icon: Award,
    title: "Proven Software Expertise",
    description:
      "From simple tools to complex apps, we deliver results. Our portfolio shows a track record of successful launches.",
  },
  {
    icon: UserCheck,
    title: "Client-Centric Approach",
    description:
      "Your project isn't just a task—it's your vision. We offer personalized attention and clear, honest communication.",
  },
  {
    icon: ShieldCheck,
    title: "No Win, No Fee Guarantee",
    description:
      "You pay nothing until you're 100% satisfied with your software. No risk, just results.",
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