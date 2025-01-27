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

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowPopup(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle form submission
    console.log("Form submitted:", { title, content })
    // Reset form
    setTitle("")
    setContent("")
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
          Inscribe Your Arcane Knowledge
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto bg-[#1a0b2e] rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
        >
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <Label htmlFor="title" className="text-lg text-[#8a2be2]">
                Title of Your Grimoire
              </Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 block w-full bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
                placeholder="Enter a mystical title..."
              />
            </div>
            <div>
              <Label htmlFor="content" className="text-lg text-[#8a2be2]">
                Inscribe Your Arcane Wisdom
              </Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 block w-full h-64 bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
                placeholder="Let your mystical knowledge flow..."
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#4b0082] hover:bg-[#5a1292] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="inline-block mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Sparkles size={18} />
                    </motion.div>
                    Channeling Magic...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 inline-block" size={18} />
                    Release Your Spell
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
        <ParadoxIcon icon={BookOpen} x={50} y={100} />
        <ParadoxIcon icon={Sparkles} x={-50} y={-100} />
        <ParadoxIcon icon={Feather} x={-100} y={150} />
      </div>
      <MagicPopup
        isVisible={showPopup}
        onClose={handlePopupClose}
        message="Your mystical post has been inscribed in the arcane archives!"
      />
    </div>
  )
}

