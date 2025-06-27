"use client"

import RestaurantCard from "../RestaurantCard"
import PromoBanner from "../PromoBanner"



const deliveryRestaurants = [
  {
    id: "1",
    name: "Pizza Palace",
    cuisine: "Italian, Pizza",
    rating: 4.2,
    deliveryTime: "30-45 mins",
    location: "Connaught Place",
    image: "/placeholder.svg?height=200&width=300",
    discount: "50% OFF",
    promoted: true,
  },
  {
    id: "2",
    name: "Burger Junction",
    cuisine: "American, Burgers",
    rating: 4.0,
    deliveryTime: "25-40 mins",
    location: "Khan Market",
    image: "/placeholder.svg?height=200&width=300",
    discount: "30% OFF",
  },
  {
    id: "3",
    name: "Spice Garden",
    cuisine: "Indian, North Indian",
    rating: 4.5,
    deliveryTime: "35-50 mins",
    location: "Karol Bagh",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    name: "Sushi Express",
    cuisine: "Japanese, Sushi",
    rating: 4.3,
    deliveryTime: "40-55 mins",
    location: "Cyber City",
    image: "/placeholder.svg?height=200&width=300",
    discount: "25% OFF",
  },
  {
    id: "5",
    name: "Taco Fiesta",
    cuisine: "Mexican, Tacos",
    rating: 4.1,
    deliveryTime: "30-45 mins",
    location: "Sector 29",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    name: "Noodle House",
    cuisine: "Chinese, Noodles",
    rating: 3.9,
    deliveryTime: "25-40 mins",
    location: "Lajpat Nagar",
    image: "/placeholder.svg?height=200&width=300",
    discount: "40% OFF",
  },
]

export default function DeliverySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PromoBanner />
      

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Food Delivery Restaurants in Delhi NCR</h2>
        <p className="text-gray-600">Order food online from your favorite restaurants</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {deliveryRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
          View More Restaurants
        </button>
      </div>
    </div>
  )
}
