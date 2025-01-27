"use client"

import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Wand2 } from "lucide-react"

export default function Register() {
  const [formProgress, setFormProgress] = useState(0)
  const controls = useAnimation()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progress = (e.target.value.length / e.target.maxLength) * 100
    setFormProgress(progress)
    controls.start({ width: `${progress}%` })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <motion.div
        className="bg-[#1a0b2e] p-8 rounded-lg shadow-2xl w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-center text-[#8a2be2]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Join the Arcane Order
        </motion.h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#8a2be2]">
              Mystical Name
            </Label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                placeholder="Enter your mystical name"
                className="w-full pl-10 pr-3 py-2 bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
                maxLength={50}
                onChange={handleInputChange}
              />
              <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8a2be2]" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#8a2be2]">
              Ethereal Address
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Enter your ethereal address"
                className="w-full pl-10 pr-3 py-2 bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
                maxLength={50}
                onChange={handleInputChange}
              />
              <Wand2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8a2be2]" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#8a2be2]">
              Arcane Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Create your arcane password"
                className="w-full pl-10 pr-3 py-2 bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
                maxLength={50}
                onChange={handleInputChange}
              />
              <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8a2be2]" />
            </div>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#8a2be2] bg-[#2d1b4e]">
                  Magical Essence
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-[#8a2be2]">{formProgress.toFixed(0)}%</span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#2d1b4e]">
              <motion.div
                style={{ width: 0 }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#8a2be2]"
                animate={controls}
              ></motion.div>
            </div>
          </div>
          <Button className="w-full bg-[#4b0082] hover:bg-[#5a1292] text-white" type="submit">
            <Wand2 className="mr-2 h-4 w-4" />
            Cast Registration Spell
          </Button>
        </form>
        <div className="mt-6 text-center">
          <motion.button
            className="px-4 py-2 border border-[#4b0082] rounded-md text-[#8a2be2] bg-[#2d1b4e] hover:bg-[#3d2b5e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8a2be2]"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(138,43,226)" }}
          >
            Sign up with Arcane Google
          </motion.button>
        </div>
        <div className="mt-6 text-center">
          <Link href="/login" className="text-[#8a2be2] hover:underline">
            Already part of the Coven? Cast your Login Spell
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

