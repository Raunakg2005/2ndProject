"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface BlogPostProps {
  post: {
    id: number
    title: string
    excerpt: string
    image: string
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        <motion.button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Read More
        </motion.button>
      </div>
    </motion.div>
  )
}

