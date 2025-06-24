"use client"

import { useState } from "react"
import Header from "../src/components/Header"
import AuthModal from "../src/components/AuthModal"
import TabNavigation from "../src/components/TabNavigation"
import DeliverySection from "../src/components/sections/DeliverySection"
import DiningSection from "../src/components/sections/DiningSection"
import NightlifeSection from "../src/components/sections/NightlifeSection"

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAuthClick={handleAuthClick} />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main>{renderActiveSection()}</main>

      <AuthModal
        isOpen={authModal.isOpen}
        type={authModal.type}
        onClose={handleAuthClose}
        onSwitchType={handleAuthSwitch}
      />
    </div>
  )
}
