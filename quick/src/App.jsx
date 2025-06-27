"use client"



import { useState } from "react"
import Header from "../src/components/Header"
import AuthModal from "../src/components/AuthModal"
import TabNavigation from "../src/components/TabNavigation"
import DeliverySection from "../src/components/sections/DeliverySection"
import DiningSection from "../src/components/sections/DiningSection"
import NightlifeSection from "../src/components/sections/NightlifeSection"
import {FoodSlider} from "../src/components/food-slider"
// import img1 from '../assets/img1.avif';
import img1 from "./assets/img1.avif"; 

import b1 from "./assets/b1.avif"; 
import b2 from "./assets/b2.avif"; 
import b3 from "./assets/b3.webp"; 
import b4 from "./assets/b4.avif"; 
import b5 from "./assets/b5.webp"; 
import b6 from "./assets/b6.webp"; 
import b7 from "./assets/b7.avif"; 
import b8 from "./assets/b8.avif"; 
import b9 from "./assets/b9.avif"; 
import b10 from "./assets/b10.webp"; 
import b11 from "./assets/b11.webp"; 
import img18 from "./assets/b18.avif"; 
import b13 from "./assets/b13.avif"; 
import b14 from "./assets/b14.avif"; 
import b15 from "./assets/b15.avif";


import c1 from "./assets/c1.jpg"; 
import c2 from "./assets/c2.png"; 
import c3 from "./assets/c3.png"; 
import c4 from "./assets/c4.jpeg"; 
import c5 from "./assets/c5.png"; 
import c6 from "./assets/c5.png"; 
import c7 from "./assets/c7.png"; 
import c8 from "./assets/c8.avif"; 
import c9 from "./assets/c9.avif"; 
import c10 from "./assets/c10.avif"; 
import c11 from "./assets/c11.avif"; 
import c12 from "./assets/c12.avif"; 
import c13 from "./assets/c13.jpeg"; 
import c14 from "./assets/c14.png"; 
import c15 from "./assets/c15.png"; 












export default function Home() {
  const [activeTab, setActiveTab] = useState("delivery")
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    type: "login",
  })

  const handleAuthClick = (type) => {
    setAuthModal({ isOpen: true, type })
  } 

  const handleAuthClose = () => {
    setAuthModal({ isOpen: false, type: "login" })
  }

  const handleAuthSwitch = (type) => {
    setAuthModal({ isOpen: true, type })
  }

  const renderActiveSection = () => {
    switch (activeTab) {
      case "dining":
        return <DiningSection />
      case "delivery":
        return <DeliverySection />
      case "nightlife":
        return <NightlifeSection />
      default:
        return <DeliverySection />
    }
  }

  

const foodItems = [
  { id: 1, name: "Biryani", image:b1 },
  { id: 2, name: "BBQ", image: b2 },
  { id: 3, name: "Nihari", image: b3 },
  { id: 4, name: "Sajji", image: b4 },
  { id: 5, name: "Donner", image: b5 },
  { id: 6, name: "Satke", image: b6 },
  { id: 7, name: "Pizza", image: b7 },
  { id: 8, name: "Burger", image: b8 },
  { id: 9, name: "Pasta", image: b9 },
  { id: 10, name: "Prawns", image: b10 },
  { id: 11, name: "Noodles", image: b11 },
  { id: 12, name: "Salad", image: img18 },
  { id: 13, name: "Ice Cream", image: b13 },
  { id: 14, name: "Cake", image: b14 },
  { id: 15, name: "Juice", image: b15 },
]

const moreItems = [
  { id: 16, name: "Ranchers", image:c1},
  { id: 17, name: "Four", image:c2},
  { id: 18, name: "MEG", image:c3},
  { id: 19, name: "Chunk N Cheese", image:c4},
  { id: 20, name: "Subway", image:c5},
  { id: 21, name: "Fish", image:c6},
  { id: 22, name: "Burger King", image: c7},
  { id: 23, name: "Mages", image:c8},
  { id: 24, name: "Empire", image: c9},
  { id: 25, name: "Hunger Station", image:c10},
  { id: 26, name: "Non-Eaters", image:c11},
  { id: 27, name: "California", image:c12},
  { id: 28, name: "Stone Ove", image:c13},
  { id: 29, name: "Zoro Burger", image:c14},
  { id: 30, name: "Papa Johns", image:c15},
]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAuthClick={handleAuthClick} />





      
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />


       <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <FoodSlider title="Inspiration for your first order" items={foodItems} />

        <div className="my-16">
          <FoodSlider title="Would Yo Like to Order From These" items={moreItems} />
        </div>
      </div>
    </div>




      <main>{renderActiveSection()}</main>
 {/* <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <FoodSlider title="Inspiration for your first order" items={foodItems} />

        <div className="my-16">
          <FoodSlider title="Popular dishes near you" items={moreItems} />
        </div>
      </div>
    </div> */}
      <AuthModal
        isOpen={authModal.isOpen}
        type={authModal.type}
        onClose={handleAuthClose}
        onSwitchType={handleAuthSwitch}
      />
    </div>
  )
}
