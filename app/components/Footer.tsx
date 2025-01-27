"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#8a2be2]">RKG</h3>
            <p className="text-gray-400">Unveiling the arcane secrets of web development and technology.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#8a2be2]">Mystical Portals</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#8a2be2] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#8a2be2] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#8a2be2] transition-colors">
                  Blog
                </Link>
              </li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link href="/contact" className="hover:text-[#8a2be2] transition-colors">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#8a2be2]">Arcane Scrolls</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-[#8a2be2] transition-colors">
                  Privacy Enchantments
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#8a2be2] transition-colors">
                  Terms of Sorcery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#8a2be2]">Scrying Mirrors</h4>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-gray-400 hover:text-[#8a2be2]"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-gray-400 hover:text-[#8a2be2]"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-gray-400 hover:text-[#8a2be2]"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-gray-400 hover:text-[#8a2be2]"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#4b0082] mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} RKG. All rights reserved by the Council of Arcane Web Development.
          </p>
        </div>
      </div>
    </footer>
  )
}

