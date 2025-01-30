"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Pen, MessageCircle, Palette, Wand2 } from "lucide-react"

const features = [
  {
    title: "Craft Mystical Posts",
    description: "Inscribe your arcane knowledge with our enchanted quill.",
    icon: Pen,
  },
  {
    title: "Engage in Magical Discussions",
    description: "Connect with fellow sorcerers through mystical conversations.",
    icon: MessageCircle,
  },
  {
    title: "Customize Your Arcane Realm",
    description: "Shape your magical domain to reflect your unique essence.",
    icon: Palette,
  },
  {
    title: "Wield Powerful Spells",
    description: "Access a grimoire of advanced features to enhance your magical presence.",
    icon: Wand2,
  },
]

export default function Features() {
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
        <h2 className="text-4xl font-bold text-center mb-12 text-[#8a2be2]">Arcane Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-[#1a0b2e] border-[#4b0082] hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-shadow duration-300 aspect-[3/4]">
                <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <feature.icon className="w-12 h-12 mb-4 text-[#8a2be2]" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8a2be2]">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}