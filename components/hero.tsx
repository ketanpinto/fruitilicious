import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-green-50 to-orange-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh & Healthy
                <span className="text-green-600 block">Fruitilicious</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your go-to destination for fresh cut fruits, nutritious juices, delicious smoothies, and healthy treats
                in the heart of Panaji, Goa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                View Menu
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                Order on Zomato
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Patto Plaza, Panaji</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">9:30 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">+91 99227 01738</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.jpg?height=600&width=500"
                alt="Fresh fruit bowl and juices"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-green-200 to-orange-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
