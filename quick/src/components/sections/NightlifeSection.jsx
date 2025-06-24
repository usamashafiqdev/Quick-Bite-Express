"use client"

import RestaurantCard from "../RestaurantCard"
import CollectionCard from "../CollectionCard"
import PromoBanner from "../PromoBanner"

const nightlifeVenues = [
  {
    id: "1",
    name: "The Darzi Bar & Kitchen",
    cuisine: "Bar, Continental",
    rating: 4.4,
    deliveryTime: "Open Now",
    location: "Connaught Place",
    image: "/placeholder.svg?height=200&width=300",
    discount: "Flat 50% OFF",
    promoted: true,
  },
  {
    id: "2",
    name: "Local",
    cuisine: "Bar, North Indian",
    rating: 4.2,
    deliveryTime: "Open Now",
    location: "Khan Market",
    image: "/placeholder.svg?height=200&width=300",
    discount: "Flat 30% OFF",
  },
  {
    id: "3",
    name: "The W Vibes",
    cuisine: "Lounge, Continental",
    rating: 4.5,
    deliveryTime: "Open Now",
    location: "Cyber City",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    name: "OBA",
    cuisine: "Bar, Asian",
    rating: 4.3,
    deliveryTime: "Open Now",
    location: "Sector 29",
    image: "/placeholder.svg?height=200&width=300",
    discount: "Flat 25% OFF",
  },
]

const nightlifeCollections = [
  {
    id: "1",
    title: "Insta-worthy Spots",
    subtitle: "Trending nightlife spots",
    image: "/placeholder.svg?height=250&width=300",
    places: 30,
  },
  {
    id: "2",
    title: "Top Trending Spots",
    subtitle: "Most popular bars",
    image: "/placeholder.svg?height=250&width=300",
    places: 25,
  },
  {
    id: "3",
    title: "Secret Speakeasy Bars",
    subtitle: "Hidden cocktail bars",
    image: "/placeholder.svg?height=250&width=300",
    places: 15,
  },
  {
    id: "4",
    title: "Romantic Dining Places",
    subtitle: "Perfect for couples",
    image: "/placeholder.svg?height=250&width=300",
    places: 40,
  },
]

export default function NightlifeSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Collections</h2>
        <p className="text-gray-600">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {nightlifeCollections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>

      <PromoBanner />

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Nightlife: Night clubs, pubs and bar in Delhi NCR</h2>
        <p className="text-gray-600">Discover the best nightlife experiences</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {nightlifeVenues.map((venue) => (
          <RestaurantCard key={venue.id} restaurant={venue} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
          View More Places
        </button>
      </div>
    </div>
  )
}
