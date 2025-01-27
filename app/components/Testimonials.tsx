"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Merlin the Wise",
    role: "Archmage of Web Development",
    content:
      "This mystical platform has revolutionized the way I share my arcane knowledge. It's intuitive, powerful, and beautifully designed.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Morgana the Enchantress",
    role: "Sorceress of UX Design",
    content:
      "I've tried many magical blogging platforms, but this one stands out. The features are exactly what I need to engage with my fellow wizards.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Gandalf the Grey",
    role: "Backend Wizard",
    content:
      "The customization options are fantastic. I can make my blog look exactly how I want, which is crucial for my mystical brand.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const constraintsRef = useRef(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#0a0a0a] text-white overflow-hidden">
      <motion.div className="max-w-6xl mx-auto" style={{ y, opacity }}>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#8a2be2]">Whispers from the Arcane Realm</h2>
        <div className="relative" ref={constraintsRef}>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="bg-[#1a0b2e] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg text-[#8a2be2]">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-300">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <p className="text-gray-200 italic">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="bg-[#1a0b2e] text-[#8a2be2] hover:bg-[#2d1b4e] border-[#4b0082]"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="bg-[#1a0b2e] text-[#8a2be2] hover:bg-[#2d1b4e] border-[#4b0082]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

