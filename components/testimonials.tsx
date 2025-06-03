import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The freshness and taste of their fruit salads are unmatched! I visit Fruitilicious almost daily for my healthy dose of vitamins. The staff is always friendly and the place is spotlessly clean.",
      location: "Panaji Local",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Best juice bar in Panaji! Their Apple Beetroot Carrot juice is my go-to drink. The quality is consistent and the service is prompt. Highly recommend for health-conscious people.",
      location: "Regular Customer",
    },
    {
      name: "Maria D'Souza",
      rating: 5,
      text: "Love their smoothies! The Chikoo Banana Date smoothie is absolutely delicious and filling. The hygiene standards are excellent, and you can see them preparing everything fresh.",
      location: "Goa Resident",
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Fruitilicious has become my family's favorite spot for healthy treats. The kids love the milkshakes, and we adults enjoy the fresh juices. Great variety and excellent taste!",
      location: "Family Customer",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "As a tourist, I was looking for healthy food options in Panaji. Fruitilicious exceeded my expectations! The Kiwi Dragon Fruit Bowl was Instagram-worthy and incredibly nutritious.",
      location: "Tourist",
    },
    {
      name: "Dr. Ravi Menon",
      rating: 5,
      text: "I recommend Fruitilicious to my patients who need to increase their fruit and vegetable intake. The quality is excellent, and they maintain high hygiene standards.",
      location: "Healthcare Professional",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their Fruitilicious
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
              <CardContent className="pt-6">
                <div className="absolute top-4 right-4 text-green-200">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5 Average Rating</span>
            <span className="text-gray-500">• 200+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
