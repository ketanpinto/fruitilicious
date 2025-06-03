import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  )
}
