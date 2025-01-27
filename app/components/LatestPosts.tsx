"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const posts = [
  {
    title: "Unraveling the Mysteries of Next.js",
    excerpt: "Delve into the arcane secrets of Next.js and unlock powerful web sorcery.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The Alchemy of Framer Motion",
    excerpt: "Transform your React components with the mystical arts of animation.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Conjuring Styles with Tailwind CSS",
    excerpt: "Master the elemental forces of styling with the power of Tailwind CSS.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function LatestPosts() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={ref} className="py-20 px-4 bg-[#0a0a0a] text-white overflow-hidden">
      <motion.div className="max-w-6xl mx-auto" style={{ y, opacity }}>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#8a2be2]">Latest Arcane Scrolls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-[#1a0b2e] border-[#4b0082]">
                <CardContent className="p-0">
                  <motion.img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#8a2be2]">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/blog">
                        <Button className="bg-[#4b0082] hover:bg-[#5a1292] text-white">Read More</Button>
                      </Link>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

