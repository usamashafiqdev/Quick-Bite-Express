"use client"

import RestaurantCard from "../RestaurantCard"
import CollectionCard from "../CollectionCard"
import img from '../..//assets/p1.jpg'

const diningRestaurants = [
  {
    id: "1",
    name: "The Imperial",
    cuisine: "Fine Dining, Continental",
    rating: 4.8,
    deliveryTime: "Book Table",
    location: "Connaught Place",
    image: "img",
    promoted: true,
  },
  {
    id: "2",
    name: "Cafe Mocha",
    cuisine: "Cafe, Continental",
    rating: 4.3,
    deliveryTime: "Book Table",
    location: "Khan Market",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    name: "Punjabi By Nature",
    cuisine: "North Indian, Punjabi",
    rating: 4.5,
    deliveryTime: "Book Table",
    location: "Karol Bagh",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    name: "Olive Bar & Kitchen",
    cuisine: "Mediterranean, Continental",
    rating: 4.6,
    deliveryTime: "Book Table",
    location: "Mehrauli",
    image: "/placeholder.svg?height=200&width=300",
  },

  {
    id: "4",
    name: "Olive Bar & Kitchen",
    cuisine: "Mediterranean, Continental",
    rating: 4.6,
    deliveryTime: "Book Table",
    location: "Mehrauli",
    image: "/placeholder.svg?height=200&width=300",
  },


  {
    id: "4",
    name: "Olive Bar & Kitchen",
    cuisine: "Mediterranean, Continental",
    rating: 4.6,
    deliveryTime: "Book Table",
    location: "Mehrauli",
    image: "/placeholder.svg?height=200&width=300",
  },


  {
    id: "4",
    name: "Olive Bar & Kitchen",
    cuisine: "Mediterranean, Continental",
    rating: 4.6,
    deliveryTime: "Book Table",
    location: "Mehrauli",
    image: "/placeholder.svg?height=200&width=300",
  },


  {
    id: "4",
    name: "Olive Bar & Kitchen",
    cuisine: "Mediterranean, Continental",
    rating: 4.6,
    deliveryTime: "Book Table",
    location: "Mehrauli",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const collections = [
  {
    id: "1",
    title: "Insta-worthy Spots",
    subtitle: "Trending on social media",
    image: "/placeholder.svg?height=250&width=300",
    places: 30,
  },
  {
    id: "2",
    title: "Top Trending Spots",
    subtitle: "Most popular this week",
    image: "/placeholder.svg?height=250&width=300",
    places: 25,
  },
  {
    id: "3",
    title: "Secret Speakeasy Bars",
    subtitle: "Hidden gems",
    image: "/placeholder.svg?height=250&width=300",
    places: 15,
  },
  {
    id: "4",
    title: "Romantic Dining Places",
    subtitle: "Perfect for date nights",
    image: "/placeholder.svg?height=250&width=300",
    places: 40,
  },
]

export default function DiningSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Collections</h2>
        <p className="text-gray-600">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Restaurants in Delhi NCR</h2>
        <p className="text-gray-600">Discover the best dining experiences</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {diningRestaurants.map((restaurant) => (
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
