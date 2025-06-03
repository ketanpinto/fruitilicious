import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react"

export function Location() {
  const operatingHours = [
    { day: "Monday - Saturday", hours: "9:30 AM - 7:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us Today</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Panaji, we're easily accessible and ready to serve you fresh, healthy treats.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Shop No. 7, Kamat Towers
                      <br />
                      Near Bank of India
                      <br />
                      Patto Plaza, Panaji
                      <br />
                      Goa 403001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <Phone className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                    <p className="text-gray-600">+91 99227 01738</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Hours</h3>
                    <div className="space-y-1">
                      {operatingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between text-gray-600">
                          <span>{schedule.day}:</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white h-12">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 h-12">
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>

            <Card className="p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Order Online</h3>
                <p className="mb-4 opacity-90">
                  Can't visit us? No problem! Order your favorite fresh juices and treats online through Zomato.
                </p>
                <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Order on Zomato
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="relative">
            <Card className="overflow-hidden shadow-lg h-full">
              <div className="aspect-square lg:aspect-auto lg:h-full bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.6636832528404!2d73.83312387489837!3d15.493969785128064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1007baadc57%3A0x7955ca0fb7d19c44!2sFruitilicious!5e0!3m2!1sen!2sin!4v1717401562775!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fruitilicious Location"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">Fruitilicious</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
