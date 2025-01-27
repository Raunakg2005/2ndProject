"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import LatestPosts from "./components/LatestPosts"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
import { useDarkMode } from "./components/DarkModeProvider"

export default function Home() {
  const { darkMode } = useDarkMode()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <motion.div
      ref={containerRef}
      className={`min-h-screen ${darkMode ? "dark" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: "url('/stars-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
          opacity,
        }}
      />
      <div className="relative z-10">
        <Hero />
        <About />
        <Features />
        <LatestPosts />
        <Testimonials />
        <Newsletter />
      </div>
    </motion.div>
  )
}

