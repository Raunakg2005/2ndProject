"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselItem } from "@/components/ui/carousel"

const userPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and start building amazing web applications.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Mastering Framer Motion",
    excerpt: "Dive deep into Framer Motion and create stunning animations for your React apps.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Profile() {
  const [user] = useState({
    name: "John Doe",
    bio: "Web developer passionate about creating amazing user experiences.",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{user.bio}</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">My Posts</h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {userPosts.map((post) => (
                <CarouselItem key={post.id}>
                  <Card>
                    <CardContent className="p-0">
                      <motion.div
                        className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </Carousel>
          </div>
          <div className="mt-8 flex justify-center">
            <Button>Edit Profile</Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

