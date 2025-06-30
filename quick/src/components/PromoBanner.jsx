"use client"
import p1 from '../assets/bd1.avif';


export default function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Get up to</h2>
          <div className="text-4xl font-bold mb-2">50% OFF</div>
          <p className="text-sm opacity-90 mb-4">On your first order from select restaurants</p>
          <button className="bg-white text-red-500 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Order Now
          </button>
        </div>
        <div className="hidden md:block">
          <img src="..//assets..//p1.avif height=150&width=200" alt="Food" className="w-48 h-32 object-cover rounded-lg" />

         

        </div>
      </div>
    </div>
  )
}
