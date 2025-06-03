import { Leaf, Heart, Shield, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "100% Fresh Ingredients",
      description: "We source only the freshest fruits and vegetables daily to ensure maximum nutrition and taste.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health Focused",
      description:
        "Every item on our menu is crafted with your health and wellness in mind, packed with essential vitamins.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Hygiene & Cleanliness",
      description: "We maintain the highest standards of cleanliness and hygiene in our preparation and service.",
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Made to Order",
      description: "All our juices, smoothies, and bowls are prepared fresh when you order for maximum freshness.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Fruitilicious?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the freshest, healthiest, and most delicious fruit-based treats in
            Panaji. Here's what makes us special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Located in the heart of Panaji at Patto Plaza, Fruitilicious has been serving the health-conscious
                  community of Goa with fresh, nutritious, and delicious fruit-based treats.
                </p>
                <p>
                  Our mission is simple: to make healthy eating enjoyable and accessible to everyone. We believe that
                  good health starts with good nutrition, and we're here to make that journey delicious.
                </p>
                <p>
                  From our signature exotic fruit salads to our nutrient-packed vegetable juices, every item is prepared
                  with love and attention to detail. We're not just a juice bar – we're your partners in healthy living.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Fruitilicious store interior"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
