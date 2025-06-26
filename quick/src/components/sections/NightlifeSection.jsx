"use client"

import RestaurantCard from "../RestaurantCard"
import CollectionCard from "../CollectionCard"
import PromoBanner from "../PromoBanner"
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'
import d2 from '../..//assets/d2.avif'


const nightlifeVenues = [

  {
    id: "1",
    name: "The Darzi Bar & Kitchen",
    cuisine: "Bar, Continental",
    rating: 4.4,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img1,
    discount: "Flat 50% OFF",
    promoted: true,
  },
  {
    id: "2",
    name: "Rooftop Lounge",
    cuisine: "Continental, Cocktails",
    rating: 4.2,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img2,
    discount: "30% OFF on drinks",
    promoted: false,
  },
  {
    id: "3",
    name: "Coffee Wagera",
    cuisine: "Coffee, Snacks",
    rating: 4.6,
    deliveryTime: "20 min",
    location: "Lahore",
    image: img3,
    discount: "Buy 1 Get 1 Free",
    promoted: false,
  },
  {
    id: "4",
    name: "Chai Kada",
    cuisine: "Chai, Desi Snacks",
    rating: 4.1,
    deliveryTime: "25 min",
    location: "Lahore",
    image: img4,
    discount: "20% OFF",
    promoted: false,
  },
  {
    id: "5",
    name: "Peeru’s Café",
    cuisine: "Live Music, Coffee",
    rating: 4.3,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img5,
    discount: "10% OFF",
    promoted: true,
  },
  {
    id: "6",
    name: "The Last Call",
    cuisine: "Mocktails, Continental",
    rating: 4.7,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img6,
    discount: "Flat 40% OFF",
    promoted: true,
  },
  {
    id: "7",
    name: "Sarak Pe Karak",
    cuisine: "Chai, Burgers",
    rating: 4.0,
    deliveryTime: "15 min",
    location: "Lahore",
    image: img7,
    discount: "No Delivery Fee",
    promoted: false,
  },
  {
    id: "8",
    name: "Tuscany Courtyard",
    cuisine: "Italian, Cocktails",
    rating: 4.5,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img8,
    discount: "50% on mocktails",
    promoted: true,
  },
  {
    id: "9",
    name: "The Night Owl",
    cuisine: "Desserts, Drinks",
    rating: 4.6,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img9,
    discount: "25% OFF",
    promoted: false,
  },
  {
    id: "10",
    name: "Drama Café",
    cuisine: "Themed, Coffee",
    rating: 4.2,
    deliveryTime: "18 min",
    location: "Lahore",
    image: img10,
    discount: "Buy 2 Get 1",
    promoted: false,
  },
  {
    id: "11",
    name: "Sweet Leaf",
    cuisine: "Tea Lounge, Snacks",
    rating: 4.3,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img11,
    discount: "10% OFF",
    promoted: false,
  },
  {
    id: "12",
    name: "Smokey's Lounge",
    cuisine: "BBQ, Cocktails",
    rating: 4.5,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img12,
    discount: "Free Dessert with Mocktail",
    promoted: true,
  },
  {
    id: "13",
    name: "Thanda Garam",
    cuisine: "Cold Coffee, Ice Blends",
    rating: 4.1,
    deliveryTime: "10 min",
    location: "Lahore",
    image: img13,
    discount: "15% OFF",
    promoted: false,
  },
  {
    id: "14",
    name: "La La Land Café",
    cuisine: "Western, Coffee",
    rating: 4.4,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img14,
    discount: "Flat 20% OFF",
    promoted: false,
  },
  {
    id: "15",
    name: "Fuel Up",
    cuisine: "Protein Shakes, Smoothies",
    rating: 4.2,
    deliveryTime: "12 min",
    location: "Lahore",
    image: img15,
    discount: "Buy 1 Get 1 Shake",
    promoted: false,
  },
  {
    id: "16",
    name: "The Buzz",
    cuisine: "Mocktails, Snacks",
    rating: 4.0,
    deliveryTime: "20 min",
    location: "Lahore",
    image: img16,
    discount: "No Service Charge",
    promoted: true,
  },
  {
    id: "17",
    name: "Karak Katta",
    cuisine: "Chai, Desi Food",
    rating: 4.3,
    deliveryTime: "15 min",
    location: "Lahore",
    image: img17,
    discount: "10% Cashback",
    promoted: false,
  },
  {
    id: "18",
    name: "Skyline Bistro",
    cuisine: "International, Lounge",
    rating: 4.6,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img18,
    discount: "Flat 30% OFF",
    promoted: true,
  },
  {
    id: "19",
    name: "The Brew Bar",
    cuisine: "Coffee, Artisan Toasts",
    rating: 4.7,
    deliveryTime: "10 min",
    location: "Lahore",
    image: img19,
    discount: "First Order Free",
    promoted: true,
  },
  {
    id: "20",
    name: "Nukkar Time",
    cuisine: "Tea, Fast Food",
    rating: 4.1,
    deliveryTime: "15 min",
    location: "Lahore",
    image: img20,
    discount: "20% OFF for Students",
    promoted: false,
  },

    {
    id: "21",
    name: "Café Velvet",
    cuisine: "French, Coffee",
    rating: 4.5,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img21,
    discount: "Flat 20% OFF",
    promoted: false,
  },
  {
    id: "22",
    name: "Cafe Zouk",
    cuisine: "Fusion, Mocktails",
    rating: 4.4,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img22,
    discount: "15% OFF",
    promoted: true,
  },
  {
    id: "23",
    name: "Coffee Planet",
    cuisine: "Coffee, Cakes",
    rating: 4.3,
    deliveryTime: "12 min",
    location: "Lahore",
    image: img23,
    discount: "Buy 1 Get 1 Coffee",
    promoted: false,
  },
  {
    id: "24",
    name: "Ministry of Chai",
    cuisine: "Chai, Fusion Snacks",
    rating: 4.1,
    deliveryTime: "20 min",
    location: "Lahore",
    image: img24,
    discount: "Flat 25% OFF",
    promoted: false,
  },
  {
    id: "25",
    name: "Social Lounge",
    cuisine: "Burgers, Drinks",
    rating: 4.2,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img25,
    discount: "Free Drink with Meal",
    promoted: true,
  },
  {
    id: "26",
    name: "Urban Chaska",
    cuisine: "Chai, Street Food",
    rating: 4.0,
    deliveryTime: "10 min",
    location: "Lahore",
    image: img26,
    discount: "10% OFF",
    promoted: false,
  },
  {
    id: "27",
    name: "Teasome",
    cuisine: "Bubble Tea, Desserts",
    rating: 4.3,
    deliveryTime: "15 min",
    location: "Lahore",
    image: img27,
    discount: "Buy 2 Get 1 Free",
    promoted: false,
  },
  {
    id: "28",
    name: "Elan Café",
    cuisine: "Modern, Coffee",
    rating: 4.5,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img28,
    discount: "Flat 15% OFF",
    promoted: true,
  },
  {
    id: "29",
    name: "Café Beirut",
    cuisine: "Lebanese, Smoothies",
    rating: 4.4,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img29,
    discount: "No Service Fee",
    promoted: false,
  },
  {
    id: "30",
    name: "The Teapot",
    cuisine: "Chai, Asian Fusion",
    rating: 4.3,
    deliveryTime: "18 min",
    location: "Lahore",
    image: img30,
    discount: "Student Discount 10%",
    promoted: false,
  },
  {
    id: "31",
    name: "Mocha Café",
    cuisine: "Coffee, Italian",
    rating: 4.2,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img31,
    discount: "Buy 1 Pastry Get Coffee Free",
    promoted: true,
  },
  {
    id: "32",
    name: "Aura Lounge",
    cuisine: "Pan-Asian, Cocktails",
    rating: 4.6,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img32,
    discount: "Flat 30% OFF",
    promoted: true,
  },
  {
    id: "33",
    name: "Nox Café",
    cuisine: "Fusion, Cold Coffee",
    rating: 4.3,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img33,
    discount: "Free Fries with Drink",
    promoted: false,
  },
  {
    id: "34",
    name: "Crimson Sky",
    cuisine: "Grill, Mocktails",
    rating: 4.5,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img34,
    discount: "Limited Time 40% OFF",
    promoted: true,
  },
  {
    id: "35",
    name: "Qahwa Nation",
    cuisine: "Turkish Tea, Middle Eastern",
    rating: 4.4,
    deliveryTime: "20 min",
    location: "Lahore",
    image: img35,
    discount: "Buy 1 Turkish Tea Get 1 Free",
    promoted: false,
  },
  {
    id: "36",
    name: "Brewology",
    cuisine: "Craft Coffee, Desserts",
    rating: 4.6,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img36,
    discount: "Flat 50% on All Coffee",
    promoted: true,
  },
  {
    id: "37",
    name: "Caffeine Lab",
    cuisine: "Experimental Coffee",
    rating: 4.2,
    deliveryTime: "10 min",
    location: "Lahore",
    image: img37,
    discount: "Buy 2 Get 1",
    promoted: false,
  },
  {
    id: "38",
    name: "Haveli Nights",
    cuisine: "Desi Lounge, Drinks",
    rating: 4.3,
    deliveryTime: "Book Table",
    location: "Lahore",
    image: img38,
    discount: "20% OFF",
    promoted: true,
  },
  {
    id: "39",
    name: "The Roastery",
    cuisine: "Coffee Roasts, Sandwiches",
    rating: 4.5,
    deliveryTime: "12 min",
    location: "Lahore",
    image: img39,
    discount: "First Order 50% OFF",
    promoted: false,
  },
  {
    id: "40",
    name: "The Bourbon Den",
    cuisine: "Cocktails, Burgers",
    rating: 4.3,
    deliveryTime: "Open Now",
    location: "Lahore",
    image: img40,
    discount: "Flat 30% OFF",
    promoted: true,
  }





  // {
  //   id: "1",
  //   name: "The Darzi Bar & Kitchen",
  //   cuisine: "Bar, Continental",
  //   rating: 4.4,
  //   deliveryTime: "Open Now",
  //   location: "Connaught Place",
  //   image: img4,
  //   discount: "Flat 50% OFF",
  //   promoted: true,
  // },
  // {
  //   id: "2",
  //   name: "Local",
  //   cuisine: "Bar, North Indian",
  //   rating: 4.2,
  //   deliveryTime: "Open Now",
  //   location: "Khan Market",
  //   image: "/placeholder.svg?height=200&width=300",
  //   discount: "Flat 30% OFF",
  // },
  // {
  //   id: "3",
  //   name: "The W Vibes",
  //   cuisine: "Lounge, Continental",
  //   rating: 4.5,
  //   deliveryTime: "Open Now",
  //   location: "Cyber City",
  //   image: "/placeholder.svg?height=200&width=300",
  // },
  // {
  //   id: "4",
  //   name: "OBA",
  //   cuisine: "Bar, Asian",
  //   rating: 4.3,
  //   deliveryTime: "Open Now",
  //   location: "Sector 29",
  //   image: "/placeholder.svg?height=200&width=300",
  //   discount: "Flat 25% OFF",
  // },
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
