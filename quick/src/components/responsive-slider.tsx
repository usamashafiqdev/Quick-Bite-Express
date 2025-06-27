"use client"

import { useState, useRef, useEffect } from "react"

interface FoodItem {
  id: number
  name: string
  image: string
}

interface ResponsiveSliderProps {
  title: string
  items: FoodItem[]
}

export function ResponsiveSlider({ title, items }: ResponsiveSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(6)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width < 640)
        setItemsPerView(2) // Mobile: 2 items
      else if (width < 768)
        setItemsPerView(3) // Small tablet: 3 items
      else if (width < 1024)
        setItemsPerView(4) // Tablet: 4 items
      else if (width < 1280)
        setItemsPerView(5) // Small desktop: 5 items
      else setItemsPerView(6) // Large desktop: 6 items
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, items.length - itemsPerView)

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
  }

  // Calculate item width based on items per view
  const getItemWidth = () => {
    switch (itemsPerView) {
      case 2:
        return "w-1/2"
      case 3:
        return "w-1/3"
      case 4:
        return "w-1/4"
      case 5:
        return "w-1/5"
      case 6:
        return "w-1/6"
      default:
        return "w-1/6"
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">{title}</h2>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-300 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center border border-gray-200 hover:shadow-xl"
          onClick={handlePrevious}
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-300 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center border border-gray-200 hover:shadow-xl"
          onClick={handleNext}
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex-shrink-0 text-center cursor-pointer hover:scale-105 transition-transform duration-200 px-1 ${getItemWidth()}`}
              >
                <div className="relative mb-3">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover mx-auto shadow-md hover:shadow-lg transition-shadow duration-200 border-2 border-gray-100"
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 truncate leading-tight">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-200 ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Display info */}
      <div className="text-center mt-4 text-sm text-gray-500">
        Showing {itemsPerView} items per view • {items.length} total items
      </div>
    </div>
  )
}
