"use client"

import RestaurantCard from "../RestaurantCard"
import CollectionCard from "../CollectionCard"
import img1 from '../..//assets/p1.jpg'
import img2 from '../..//assets/p2.jpg'
import img3 from '../..//assets/p3.jpg'
import img4 from '../..//assets/p4.jpg'
import d1 from '../..//assets/d1.avif'
import d2 from '../..//assets/d2.avif'
import d3 from '../..//assets/d3.avif'
import d4 from '../..//assets/d4.avif'
import d5 from '../..//assets/d5.avif'
import d6 from '../..//assets/d6.avif'
import d7 from '../..//assets/d7.avif'
import d8 from '../..//assets/d8.avif'
import d9 from '../..//assets/d9.avif'
import d10 from '../..//assets/d10.avif'
import d11 from '../..//assets/d11.avif'
import d12 from '../..//assets/d12.avif'
import d13 from '../..//assets/d13.avif'
import d14 from '../..//assets/d14.avif'
import d15 from '../..//assets/d15.avif'
import d16 from '../..//assets/d16.avif'
import d17 from '../..//assets/d17.avif'
import d18 from '../..//assets/d18.avif'
import d19 from '../..//assets/d19.avif'
import d20 from '../..//assets/d20.avif'
import d21 from '../..//assets/d21.avif'
import d22 from '../..//assets/d22.avif'
import d23 from '../..//assets/d23.avif'
import d24 from '../..//assets/d24.avif'
import d25 from '../..//assets/d25.avif'
import d26 from '../..//assets/d26.avif'
import d27 from '../..//assets/d27.avif'
import d28 from '../..//assets/d28.avif'
import d29 from '../..//assets/d29.avif'
import d30 from '../..//assets/d30.avif'
import d31 from '../..//assets/d31.avif'
import d32 from '../..//assets/d32.avif'
import d33 from '../..//assets/d33.avif'
import d34 from '../..//assets/d34.avif'
import d35 from '../..//assets/d35.avif'
import d36 from '../..//assets/d36.avif'
import d37 from '../..//assets/d37.avif'
import d38 from '../..//assets/d38.avif'
import d39 from '../..//assets/d39.avif'
import d40 from '../..//assets/d40.avif'



const diningRestaurants = [
  


  { id: "1", name: "BBQ Tonight", cuisine: "BBQ, Pakistani", rating: 4.5, deliveryTime: "Book Table", location: "Lahore", image: d1 },
  { id: "2", name: "Salt'n Pepper", cuisine: "Pakistani, Continental", rating: 4.6, deliveryTime: "Book Table", location: "Lahore", image: d2 },
  { id: "3", name: "Butt Karahi", cuisine: "Karahi, Desi", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d3 },
  { id: "4", name: "Monal", cuisine: "Pakistani, BBQ", rating: 4.7, deliveryTime: "Book Table", location: "Lahore", image: d4 },
  { id: "5", name: "Kolachi", cuisine: "BBQ, Seafood", rating: 4.6, deliveryTime: "Book Table", location: "Lahore", image: d5 },
  { id: "6", name: "Pro Kitchen", cuisine: "Pakistani, Continental", rating: 4.6, deliveryTime: "Book Table", location: "Lahore", image: d6 },
  { id: "7", name: "Cafe Aylanto", cuisine: "Mediterranean, Italian", rating: 4.4, deliveryTime: "Book Table", location: "Lahore", image: d7 },
  { id: "8", name: "Xander’s", cuisine: "Continental, Pizza", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d8 },
  { id: "9", name: "Butt Sweets & Restaurant", cuisine: "Pakistani, Desi", rating: 4.2, deliveryTime: "Book Table", location: "Lahore", image: d9 },
  { id: "10", name: "Qabail", cuisine: "Afghani, BBQ", rating: 4.5, deliveryTime: "Book Table", location: "Lahore", image: d10 },
  { id: "11", name: "Howdy", cuisine: "Burgers, Fast Food", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d11 },
  { id: "12", name: "Chop Chop Wok", cuisine: "Asian, Chinese", rating: 4.4, deliveryTime: "Book Table", location: "Lahore", image: d12 },
  { id: "13", name: "Tuscany Courtyard", cuisine: "Italian, Steaks", rating: 4.5, deliveryTime: "Book Table", location: "Lahore", image: d13 },
  { id: "14", name: "Café Zouk", cuisine: "Continental, Pakistani", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d14 },
  { id: "15", name: "Bundu Khan", cuisine: "BBQ, Desi", rating: 4.4, deliveryTime: "Book Table", location: "Lahore", image: d15 },
  { id: "16", name: "Nando’s", cuisine: "Grilled Chicken, Portuguese", rating: 4.2, deliveryTime: "Book Table", location: "Lahore", image: d16 },
  { id: "17", name: "OPTP", cuisine: "Burgers, Fries", rating: 4.1, deliveryTime: "Book Table", location: "Lahore", image: d17 },
  { id: "18", name: "Ginsoy", cuisine: "Chinese, Asian", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d18 },
  { id: "19", name: "Zaiqa", cuisine: "Traditional Pakistani", rating: 4.4, deliveryTime: "Book Table", location: "Lahore", image: d19 },
  { id: "20", name: "Ambrosia", cuisine: "Continental, Fine Dining", rating: 4.6, deliveryTime: "Book Table", location: "Lahore", image: d20 },
  { id: "21", name: "The Rice Bowl", cuisine: "Chinese, Thai", rating: 4.2, deliveryTime: "Book Table", location: "Lahore", image: d21 },
  { id: "22", name: "Usmania Restaurant", cuisine: "Pakistani, Mughlai", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d22 },
  { id: "23", name: "La Atrium", cuisine: "Fusion, Continental", rating: 4.5, deliveryTime: "Book Table", location: "Lahore", image: d23 },
  { id: "24", name: "Café De Brando", cuisine: "Continental, Fast Food", rating: 4.1, deliveryTime: "Book Table", location: "Lahore", image: d24 },
  { id: "25", name: "Biryani Express", cuisine: "Biryani, Fast Food", rating: 4.2, deliveryTime: "Book Table", location: "Lahore", image: d25 },
  { id: "26", name: "Ramada Roof Top", cuisine: "Fine Dining, BBQ", rating: 4.6, deliveryTime: "Book Table", location: "Lahore", image: d26 },
  { id: "27", name: "Savour Foods", cuisine: "Rice, Desi", rating: 4.0, deliveryTime: "Book Table", location: "Lahore", image: d27 },
  { id: "28", name: "Shaheen Shinwari", cuisine: "Afghani, BBQ", rating: 4.4, deliveryTime: "Book Table", location: "Lahore", image: d28 },
  { id: "29", name: "Khyber Dodai", cuisine: "Pakistani, Tribal", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d29 },
  { id: "30", name: "Layers Bakeshop", cuisine: "Desserts, Cakes", rating: 4.5, deliveryTime: "Book Table", location: "Lahore", image: d30 },
  { id: "31", name: "The Smokey Cauldron", cuisine: "Fast Food, Themed", rating: 4.6, deliveryTime: "Book Table", location: "Lahore", image: d31 },
  { id: "32", name: "Espresso", cuisine: "Cafe, Coffee", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d32 },
  { id: "33", name: "The Patio", cuisine: "Fusion, Fine Dining", rating: 4.4, deliveryTime: "Book Table", location: "Lahore", image: d33 },
  { id: "34", name: "The Patio", cuisine: "Fusion, Fine Dining", rating: 4.4, deliveryTime: "Book Table", location: "Lahore", image: d34 },
  { id: "35", name: "Street 1 Cafe", cuisine: "Continental, Fusion", rating: 4.5, deliveryTime: "Book Table", location: "Lahore", image: d35 },
  { id: "36", name: "Des Pardes", cuisine: "Desi, Pakistani", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d36 },
  { id: "37", name: "Chaaye Khana", cuisine: "Tea, Snacks", rating: 4.2, deliveryTime: "Book Table", location: "Lahore", image: d37 },
  { id: "38", name: "Bam-Bou", cuisine: "Asian, Thai", rating: 4.4, deliveryTime: "Book Table", location: "Lahore", image: d38 },
  { id: "39", name: "The Urban Cafe", cuisine: "Modern, Pakistani", rating: 4.3, deliveryTime: "Book Table", location: "Lahore", image: d39 },
  { id: "40", name: "Koffee Net", cuisine: "Cafe, Fast Food", rating: 4.1, deliveryTime: "Book Table", location: "Lahore", image: d40 },
];



// {
//     id: "41",
//     name: "The Imperial",
//     cuisine: "Fine Dining, Continental",
//     rating: 4.8,
//     deliveryTime: "Book Table",
//     location: "Connaught Place",
//     image: img,
//     promoted: true,
//   },
//   {
//     id: "42",
//     name: "Cafe Mocha",
//     cuisine: "Cafe, Continental",
//     rating: 4.3,
//     deliveryTime: "Book Table",
//     location: "Khan Market",
//     image: img3 ,
//   },
//   {
//     id: "43",
//     name: "Punjabi By Nature",
//     cuisine: "North Indian, Punjabi",
//     rating: 4.5,
//     deliveryTime: "Book Table",
//     location: "Karol Bagh",
//     image: img2 ,
//   },
//   {
//     id: "44",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img4 ,
//   },

//   {
//     id: "45",
//     name: "KFC",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.3,
//     deliveryTime: "Book Table",
//     location: "Lahore",
//     image: img ,
//   },


//   {
//     id: "46",
//     name: "Pro Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },


//   {
//     id: "47",
//     name: "Chezious",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.8,
//     deliveryTime: "Book Table",
//     location: "Lahore",
//     image: img ,
//   },


//   {
//     id: "48",
//     name: "Kabab Jee`s",
//     cuisine: "Fast Food",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Lahore",
//     image: img ,
//   },
//   {
//     id: "49",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Lahore",
//     image: img ,
//   },
//   {
//     id: "50",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Fast Food",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Lahore",
//     image: img ,
//   },
//   {
//     id: "4",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },
//   {
//     id: "4",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },
//   {
//     id: "4",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },
//   {
//     id: "4",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },
//   {
//     id: "4",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },
//   {
//     id: "4",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },
//   {
//     id: "4",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },
//   {
//     id: "4",
//     name: "Olive Bar & Kitchen",
//     cuisine: "Mediterranean, Continental",
//     rating: 4.6,
//     deliveryTime: "Book Table",
//     location: "Mehrauli",
//     image: img ,
//   },


const collections = [
  {
    id: "1",
    title: "Insta-worthy Spots",
    subtitle: "Trending on social media",
    image: img1,
    places: 30,
  },
  {
    id: "2",
    title: "Top Trending Spots",
    subtitle: "Most popular this week",
    image: img2,
    places: 25,
  },
  {
    id: "3",
    title: "Secret Speakeasy Bars",
    subtitle: "Hidden gems",
    image: img3,
    places: 15,
  },
  {
    id: "4",
    title: "Romantic Dining Places",
    subtitle: "Perfect for date nights",
    image: img4,
    places: 40,
  },
]

export default function DiningSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2"
        
        >Collections</h2>
        <p className="text-gray-600">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Lahore, based on trends
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      
      >
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Restaurants in Lahore</h2>
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
