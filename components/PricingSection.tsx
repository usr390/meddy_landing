import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Globe, Smartphone, Code2 } from "lucide-react";

const pricing = [
  {
    icon: Globe,
    title: "Landing Page",
    price: "$5/month",
    description: "Includes updates, maintenance, and everything you need. Simple, affordable, and effective.",
  },
  {
    icon: Smartphone,
    title: "Web, Mobile, or Desktop App",
    price: "$100 to $500 once, then $20/month",
    description: "For most apps. Includes updates, feature requests, maintenance, and the works. Price varies by complexity.",
  },
  {
    icon: Code2,
    title: "Other Custom Software",
    price: "Contact for Quote",
    description: "Pricing depends on the kind of work to be done. Please reach out for a personalized estimate.",
  },
];

export default function PricingSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4" id="pricing">
      <h2 className="text-2xl font-bold mb-8 text-center">Pricing</h2>
      <p className="mb-8 text-center text-gray-700 max-w-2xl mx-auto">
        Although prices vary slightly depending on complexity, we can still give you a rough estimate:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {pricing.map((item, idx) => (
          <Card
            key={item.title}
            className={
              "flex flex-col items-center text-center h-full" +
              (idx === pricing.length - 1 ? " sm:col-span-2 mx-auto max-w-md" : "")
            }
          >
            <CardHeader className="flex flex-col items-center">
              <item.icon className="w-10 h-10 mb-2 text-emerald-500" />
              <CardTitle className="mb-2 text-lg sm:text-xl whitespace-nowrap">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-emerald-700 font-bold text-xl mb-2 break-words">{item.price}</div>
              <p className="text-gray-700 text-sm break-words">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 