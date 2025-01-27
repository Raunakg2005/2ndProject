"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Sparkles, Feather, Send } from "lucide-react"
import MagicPopup from "../components/MagicPopup"

const ParadoxIcon = ({ icon: Icon, x, y, size = 32 }: { icon: any; x: number; y: number; size?: number }) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="absolute"
      style={{ x, y }}
      animate={{
        rotate: rotation,
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      <Icon size={size} className="text-[#8a2be2]" />
    </motion.div>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showPopup, setShowPopup] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    })

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [controls])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPopup(true)
    // Handle form submission
    console.log(formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
  }

  const handlePopupClose = () => {
    setShowPopup(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 overflow-hidden">
      <div
        className="container mx-auto px-4 relative"
        style={{
          backgroundImage: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(75, 0, 130, 0.4) 0%,
            rgba(75, 0, 130, 0) 50%
          )`,
        }}
      >
        <motion.h1
          className="text-6xl font-bold mb-12 text-center font-serif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Summon Us
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto bg-[#1a0b2e] rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
        >
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg text-[#8a2be2]">
                Your True Name
              </Label>
              <Input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="mt-1 block w-full bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg text-[#8a2be2]">
                Your Ethereal Address
              </Label>
              <Input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="mt-1 block w-full bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-lg text-[#8a2be2]">
                Your Mystical Message
              </Label>
              <Textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                className="mt-1 block w-full h-32 bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#4b0082] hover:bg-[#5a1292] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              <Send className="mr-2 inline-block" size={18} />
              Send Your Incantation
            </Button>
          </form>
        </motion.div>
        <ParadoxIcon icon={BookOpen} x={50} y={100} />
        <ParadoxIcon icon={Sparkles} x={-50} y={-100} />
        <ParadoxIcon icon={Feather} x={-100} y={150} />
      </div>
      <MagicPopup
        isVisible={showPopup}
        onClose={handlePopupClose}
        message="Your mystical message has been sent to the ethereal realm!"
      />
    </div>
  )
}

