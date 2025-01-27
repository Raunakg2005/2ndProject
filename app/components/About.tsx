"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function Book() {
  const meshRef = useRef<THREE.Group>(null!)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(t / 4) / 8
    meshRef.current.rotation.y = Math.sin(t / 4) / 4
  })

  return (
    <group ref={meshRef}>
      {/* Book cover */}
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial color="#6366F1" />
      </mesh>
      {/* Book pages */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.9, 3.9, 0.2]} />
        <meshStandardMaterial color="#E5E7EB" />
      </mesh>
    </group>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div className="md:w-1/2 mb-8 md:mb-0" style={{ y, opacity, scale }}>
          <h2 className="text-4xl font-bold mb-4 text-[#8a2be2]">About Our Arcane Platform</h2>
          <p className="text-lg text-gray-300">
            Our mystical blog platform is designed to empower sorcerers and readers alike. With cutting-edge arcane
            technology and a user-friendly interface, we provide the perfect space for sharing magical ideas, enchanting
            stories, and arcane knowledge.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 h-[400px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Book />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}

