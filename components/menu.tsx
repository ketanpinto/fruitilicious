import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Menu() {
  const menuCategories = [
    {
      title: "Cut Fruits & Vegetables",
      items: ["Exotic Fruit Salad", "Seasonal Fruit Mix", "Fresh Vegetable Platter"],
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Fresh Fruit Juices",
      items: ["Orange Juice", "Watermelon Juice", "Pineapple Juice", "Mixed Fruit Juice"],
      color: "bg-orange-100 text-orange-800",
    },
    {
      title: "Vegetable Juices",
      items: ["Apple Beetroot Carrot Juice", "Cucumber Mint", "Carrot Ginger"],
      color: "bg-red-100 text-red-800",
    },
    {
      title: "Smoothies",
      items: ["Chikoo Banana Date Smoothie", "Mango Smoothie", "Berry Blast"],
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Milkshakes",
      items: ["Date Banana Milkshake", "Chocolate Chikoo Milkshake", "Strawberry Shake"],
      color: "bg-pink-100 text-pink-800",
    },
    {
      title: "Special Bowls",
      items: ["Kiwi Dragon Fruit Bowl", "Acai Bowl", "Protein Bowl"],
      color: "bg-yellow-100 text-yellow-800",
    },
  ]

  const popularItems = [
    {
      name: "Exotic Fruit Salad",
      description: "A colorful mix of seasonal exotic fruits",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Apple Beetroot Carrot Juice",
      description: "Nutritious blend packed with vitamins",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Chikoo Banana Date Smoothie",
      description: "Creamy and naturally sweet smoothie",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Kiwi Dragon Fruit Bowl",
      description: "Instagram-worthy healthy bowl",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fresh Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of fresh, healthy, and delicious offerings made with the finest ingredients
          </p>
        </div>

        {/* Popular Items */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Items</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Badge className={category.color}>{category.title}</Badge>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
