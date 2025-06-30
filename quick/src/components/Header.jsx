"use client"

import { useState } from "react"
import { MapPin, Search, Menu, X } from "lucide-react"

export default function Header({ onAuthClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                {/* Logo placeholder */}
                <span className="text-white font-bold text-sm">QBE</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">Quick Bite Express</span>
            </div>
          </div>

          {/* Location and Search - Desktop */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-2 text-gray-600 border-r pr-4">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm">Lahore Punjab</span>
            </div>
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onAuthClick("login")}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Log in
            </button>
            <button
              onClick={() => onAuthClick("signup")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="flex items-center space-x-2 px-3 py-2 text-gray-600">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-sm">Lahore, Punjab</span>
              </div>
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or a dish"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="flex space-x-2 px-3 py-2">
                <button
                  onClick={() => onAuthClick("login")}
                  className="flex-1 text-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg"
                >
                  Log in
                </button>
                <button
                  onClick={() => onAuthClick("signup")}
                  className="flex-1 text-center bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-600"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
