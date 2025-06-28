"use client"

import { useState, useRef, useEffect } from "react"

export function FoodSlider({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(6)
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef(null)

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width < 480)
        setItemsPerView(2) // Extra small mobile
      else if (width < 640)
        setItemsPerView(3) // Mobile
      else if (width < 768)
        setItemsPerView(4) // Small tablet
      else if (width < 1024)
        setItemsPerView(5) // Tablet
      else if (width < 1280)
        setItemsPerView(6) // Small desktop
      else setItemsPerView(7) // Large desktop
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, items.length - itemsPerView)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const handleDotClick = (index) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  // Auto-scroll functionality (pauses on hover)
  useEffect(() => {
    if (!isHovered && items.length > itemsPerView) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isHovered, maxIndex, itemsPerView, items.length])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-left">{title}</h2>

      <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl hover:shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 hover:scale-110"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl hover:shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 hover:scale-110"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden rounded-lg">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="text-center cursor-pointer group/item">
                  <div className="relative mb-4 transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:-translate-y-2">
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-0 group-hover/item:opacity-20 transition-opacity duration-300 scale-110"></div>

                    {/* Food Image */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover mx-auto shadow-lg group-hover/item:shadow-2xl transition-all duration-300 border-4 border-white group-hover/item:border-orange-200"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/item:bg-opacity-10 rounded-full transition-all duration-300"></div>

                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-red-400 opacity-0 group-hover/item:opacity-100 group-hover/item:animate-ping"></div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 group-hover/item:text-red-600 transition-colors duration-300 leading-tight">
                    {item.name}
                  </p>

                  {/* Hover Underline Effect */}
                  <div className="h-0.5 bg-red-400 w-0 group-hover/item:w-full transition-all duration-300 mx-auto mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(items.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? "bg-red-500 w-8 h-3"
                  : "bg-gray-300 hover:bg-gray-400 w-3 h-3 hover:scale-125"
              }`}
              onClick={() => handleDotClick(index * itemsPerView)}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-1 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-red-400 to-red-600 h-full rounded-full transition-all duration-500"
            style={{
              width: `${((currentIndex + itemsPerView) / items.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Item Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        Showing {Math.min(currentIndex + itemsPerView, items.length)} of {items.length} items
      </div>
    </div>
  )
}
