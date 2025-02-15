"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PreRegistrationForm from "@/components/PreRegistration"
import AdminDashboard from "@/components/AdminDashboard"

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {isAdmin ? <AdminDashboard /> : <PreRegistrationForm />}
      </main>
      <Footer />
    </div>
  )
}

