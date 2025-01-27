"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { BookOpen, Sparkles, Feather, Wand2 } from "lucide-react"

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

export default function About() {
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

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

  return (
    <div ref={ref} className="min-h-screen bg-[#0a0a0a] text-white py-12 overflow-hidden">
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
          className="text-6xl font-bold mb-8 text-center font-serif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About the Arcane Realm of RKG
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src="/wizard-portrait.jpg"
              alt="Arcane Portrait"
              width={500}
              height={500}
              className="rounded-lg shadow-lg border-4 border-[#4b0082]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            className="bg-[#1a0b2e] p-6 rounded-lg shadow-[0_0_15px_rgba(138,43,226,0.3)]"
          >
            <h2 className="text-3xl font-semibold mb-4 font-serif text-[#8a2be2]">Our Mystical Tale</h2>
            <p className="text-gray-300 mb-4">
              Welcome to RKG, a realm where the art of blogging intertwines with the mystical world of arcane knowledge.
              Founded by a group of tech-savvy sorcerers, our mission is to share spellbinding wisdom and inspire
              creativity in the digital realm.
            </p>
            <p className="text-gray-300 mb-4">
              Our team of enchanted quills and magical keyboards work tirelessly to bring you the latest insights,
              tutorials, and thought-provoking articles on a wide range of arcane topics.
            </p>
            <p className="text-gray-300">
              Whether you're a seasoned mage or just beginning your mystical journey in tech, RKG is here to guide you
              through the ever-changing landscape of the digital arcane world.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#8a2be2]">Our Magical Essence</h3>
          <div className="flex justify-center space-x-8">
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <Wand2 size={40} className="text-[#8a2be2] mb-2" />
              <p className="text-gray-300">Innovative Spells</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <BookOpen size={40} className="text-[#8a2be2] mb-2" />
              <p className="text-gray-300">Ancient Wisdom</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <Sparkles size={40} className="text-[#8a2be2] mb-2" />
              <p className="text-gray-300">Magical Community</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <ParadoxIcon icon={BookOpen} x={50} y={100} />
      <ParadoxIcon icon={Sparkles} x={-50} y={-100} />
      <ParadoxIcon icon={Feather} x={-100} y={150} />
    </div>
  )
}

