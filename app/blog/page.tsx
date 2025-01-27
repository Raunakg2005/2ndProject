"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { BookOpen, Sparkles, Feather } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "Unraveling the Mysteries of Next.js",
    excerpt: "Delve into the arcane secrets of Next.js and unlock powerful web sorcery.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "The Alchemy of Framer Motion",
    excerpt: "Transform your React components with the mystical arts of animation.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Conjuring Styles with Tailwind CSS",
    excerpt: "Master the elemental forces of styling with the power of Tailwind CSS.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Summoning 3D Realms with Three.js",
    excerpt: "Open portals to new dimensions in your web applications using Three.js.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

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

export default function Blog() {
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
          Arcane Chronicles
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a0b2e] rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-shadow duration-300"
            >
              <motion.img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[#8a2be2]">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/post/${post.id}`}
                  className="text-[#4b0082] hover:text-[#8a2be2] transition-colors duration-300"
                >
                  <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    Read more...
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <ParadoxIcon icon={BookOpen} x={50} y={100} />
        <ParadoxIcon icon={Sparkles} x={-50} y={-100} />
        <ParadoxIcon icon={Feather} x={-100} y={150} />
      </div>
    </div>
  )
}

