import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
  id="home"
  className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden"
>
  {/* 🎥 Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
  >
    <source src="/fallingfruits.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 🔆 Optional Dark Overlay for readability */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

  {/* 🌟 Content */}
  <div className="container relative z-10 px-4 py-16 flex flex-col items-center justify-center text-center max-w-3xl">
    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
      Fresh & Healthy
      <span className="text-green-600 block">Fruitilicious</span>
    </h1>
    <p className="text-xl text-gray-700 leading-relaxed mt-4">
      Your go-to destination for fresh cut fruits, nutritious juices, delicious smoothies, and healthy treats
      in the heart of Panaji, Goa.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

    <div className="grid sm:grid-cols-3 gap-4 pt-8 text-gray-700">
      <div className="flex items-center justify-center space-x-3">
        <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
        <span className="text-sm">Patto Plaza, Panaji</span>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
        <span className="text-sm">9:30 AM - 8:00 PM</span>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
        <span className="text-sm">+91 99227 01738</span>
      </div>
    </div>
  </div>
</section>

  )
}
