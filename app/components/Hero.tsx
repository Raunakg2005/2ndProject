"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { BookOpen, Feather, Sparkles } from "lucide-react"

const FloatingObject = ({ children, x, y }: { children: React.ReactNode; x: number; y: number }) => (
  <motion.div
    className="absolute"
    style={{ x, y }}
    animate={{
      y: [y, y + 20, y],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
  >
    {children}
  </motion.div>
)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null!)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] to-[#0d0d2b]"
        style={{
          backgroundImage: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(75, 0, 130, 0.4) 0%,
            rgba(75, 0, 130, 0) 50%
          )`,
        }}
      />
      <motion.div className="relative z-10 text-center text-white" style={{ y, opacity }}>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to the Arcane World of RKG
        </motion.h1>
        <TypeAnimation
          sequence={[
            "Unravel Mystical Knowledge",
            2000,
            "Craft Enigmatic Posts",
            2000,
            "Inspire Fellow Sorcerers",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-2xl md:text-3xl mb-8 text-[#8a2be2] font-serif"
          repeat={Number.POSITIVE_INFINITY}
        />
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button size="lg" className="bg-[#4b0082] hover:bg-[#5a1292] text-white font-bold">
            <BookOpen className="mr-2" size={18} />
            Begin Your Arcane Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-[#4b0082] text-[#4b0082] hover:bg-[#4b0082] hover:text-white"
          >
            <Feather className="mr-2" size={18} />
            Explore Mystical Posts
          </Button>
        </motion.div>
      </motion.div>
      <FloatingObject x={50} y={100}>
        <Sparkles className="text-[#8a2be2]" size={32} />
      </FloatingObject>
      <FloatingObject x={-50} y={-100}>
        <BookOpen className="text-[#9370db]" size={32} />
      </FloatingObject>
      <FloatingObject x={-100} y={150}>
        <Feather className="text-[#483d8b]" size={32} />
      </FloatingObject>
    </section>
  )
}

