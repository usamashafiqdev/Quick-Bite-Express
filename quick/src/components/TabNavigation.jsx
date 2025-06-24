"use client"

import { Utensils, Truck, Wine } from "lucide-react"

export default function TabNavigation({ activeTab, onTabChange }) {
  const tabs = [
    {
      id: "dining",
      label: "Dining Out",
      icon: Utensils,
      description: "Discover great places to eat",
    },
    {
      id: "delivery",
      label: "Delivery",
      icon: Truck,
      description: "Order food online",
    },
    {
      id: "nightlife",
      label: "Nightlife",
      icon: Wine,
      description: "Explore bars & pubs",
    },
  ]

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 whitespace-nowrap transition-colors ${
                  isActive ? "border-red-500 text-red-500" : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">{tab.label}</div>
                  <div className="text-xs text-gray-500 hidden sm:block">{tab.description}</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
