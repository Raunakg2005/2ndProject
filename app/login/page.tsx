"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { Sparkles, Wand2 } from "lucide-react"

export default function Login() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen flex items-center justify-center bg-[#0a0a0a]`}>
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
          Arcane Login
        </motion.h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#8a2be2]">
              Ethereal Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your ethereal address"
              className="w-full px-3 py-2 bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#8a2be2]">
              Arcane Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your arcane password"
              className="w-full px-3 py-2 bg-[#2d1b4e] text-white border-[#4b0082] focus:border-[#8a2be2] focus:ring focus:ring-[#8a2be2] focus:ring-opacity-50"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              <Label htmlFor="dark-mode" className="text-[#8a2be2]">
                Dark Magic
              </Label>
            </div>
            <motion.a
              href="#"
              className="text-sm text-[#8a2be2] hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Forgot Spell?
            </motion.a>
          </div>
          <Button className="w-full bg-[#4b0082] hover:bg-[#5a1292] text-white" type="submit">
            <Wand2 className="mr-2 h-4 w-4" />
            Cast Login Spell
          </Button>
        </form>
        <div className="mt-6 text-center">
          <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
            <Link href="/register" className="text-[#8a2be2] hover:underline">
              New to the Arcane Realm? Join the Coven
              <motion.span
                className="inline-block ml-1"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

