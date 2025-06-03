"use client"

import { useState } from "react"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#location", label: "Location" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-700">Fruitilicious</h1>
              <p className="text-sm text-green-600">Fresh • Healthy • Delicious</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg text-gray-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 99227 01738
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
