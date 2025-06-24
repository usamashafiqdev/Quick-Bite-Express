"use client"

import { Star, Clock, MapPin } from "lucide-react"

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
      <div className="relative">
        <img src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} className="w-full h-48 object-cover" />
        {restaurant.discount && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
            {restaurant.discount}
          </div>
        )}
        {restaurant.promoted && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
            Promoted
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current text-green-500" />
            <span className="font-medium">{restaurant.rating}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>

        <div className="flex items-center space-x-1 mt-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>{restaurant.location}</span>
        </div>
      </div>
    </div>
  )
}
