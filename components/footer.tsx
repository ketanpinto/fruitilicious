import { Heart, Phone, MapPin, Clock, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Fruitilicious</h3>
                <p className="text-sm text-gray-400">Fresh • Healthy • Delicious</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted destination for fresh, healthy, and delicious fruit-based treats in Panaji, Goa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-white transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  Shop No. 7, Kamat Towers
                  <br />
                  Patto Plaza, Panaji, Goa 403001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 99227 01738</span>
              </div>
            </div>
          </div>

          {/* Hours & Order */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours & Order</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  Mon-Sat: 9:30 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Order on Zomato</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Fruitilicious. Made with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> for healthy living.
          </p>
        </div>
      </div>
    </footer>
  )
}
