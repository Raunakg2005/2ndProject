"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { BookOpen, Sparkles, Feather, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

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

export default function PostDetails() {
  const [comments, setComments] = useState([
    { id: 1, author: "Merlin", content: "Fascinating insights! Your wisdom rivals that of the ancient sorcerers." },
    { id: 2, author: "Morgana", content: "This spell... I mean, code... will revolutionize our magical practices!" },
  ])
  const [newComment, setNewComment] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, author: "Anonymous Wizard", content: newComment }])
      setNewComment("")
    }
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
          The Arcane Scroll
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto bg-[#1a0b2e] rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
        >
          <div className="p-8">
            <h2 className="text-4xl font-bold mb-4 text-[#8a2be2]">The Mystical Arts of Web Development</h2>
            <p className="text-gray-300 mb-4">
              In the realm of digital sorcery, we uncover the secrets of crafting enchanting web experiences. From the
              arcane symbols of HTML to the mystical incantations of JavaScript, we delve into the very fabric of the
              digital realm.
            </p>
            <p className="text-gray-300 mb-4">
              As we weave our spells with CSS, we shape the very appearance of our digital constructs, bending reality
              to our will. The power of responsive design allows our creations to adapt to any scrying glass, be it a
              crystal ball or a pocket-sized enchanted mirror.
            </p>
            <p className="text-gray-300">
              But beware, young acolyte, for with great power comes great responsibility. Always remember to optimize
              your incantations for performance, lest you summon the dreaded beast of lag and unresponsiveness.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto mt-8 bg-[#1a0b2e] rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#8a2be2]">Arcane Discussions</h3>
            {comments.map((comment) => (
              <div key={comment.id} className="mb-4 p-4 bg-[#2d1b4e] rounded-lg">
                <p className="font-bold text-[#8a2be2]">{comment.author}</p>
                <p className="text-gray-300">{comment.content}</p>
              </div>
            ))}
            <form onSubmit={handleSubmitComment} className="mt-4">
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your arcane wisdom..."
                className="w-full bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
              />
              <Button
                type="submit"
                className="mt-2 bg-[#4b0082] hover:bg-[#5a1292] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
              >
                <MessageCircle className="mr-2 inline-block" size={18} />
                Cast Your Thoughts
              </Button>
            </form>
          </div>
        </motion.div>
        <ParadoxIcon icon={BookOpen} x={50} y={100} />
        <ParadoxIcon icon={Sparkles} x={-50} y={-100} />
        <ParadoxIcon icon={Feather} x={-100} y={150} />
      </div>
    </div>
  )
}

