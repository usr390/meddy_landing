import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Mail, Rocket } from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "1. Tell Us What You Need",
    description: "Fill out the contact form with your project details and requirements.",
  },
  {
    icon: CheckCircle,
    title: "2. Get a Mockup",
    description: "We'll quickly build a mockup and send you a live URL to review.",
  },
  {
    icon: Rocket,
    title: "3. Refine & Launch",
    description: "You'll work with us to refine your project until it's perfect, then launch!",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4" id="how-it-works">
      <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step) => (
          <Card key={step.title} className="flex flex-col items-center text-center h-full">
            <CardHeader className="flex flex-col items-center">
              <step.icon className="w-10 h-10 mb-2 text-emerald-500" />
              <CardTitle className="mb-2 whitespace-nowrap text-balance text-lg sm:text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 