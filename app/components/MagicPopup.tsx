"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MagicPopupProps {
  isVisible: boolean
  onClose: () => void
  message: string
}

export default function MagicPopup({ isVisible, onClose, message }: MagicPopupProps) {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowSuccess(true)
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setShowSuccess(false)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          >
            {!showSuccess ? (
              <>
                <Wand2 className="mb-4 animate-pulse" size={48} />
                <h2 className="text-2xl font-bold mb-2">Casting Blog Magic</h2>
                <p className="text-center mb-4">Your request is being transformed into digital stardust...</p>
                <motion.div
                  className="w-16 h-16 border-t-4 border-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </>
            ) : (
              <>
                <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ duration: 0.5 }}>
                  <Sparkles className="mb-4" size={48} />
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Spell Complete!</h2>
                <p className="text-center mb-4">{message}</p>
                <Button onClick={onClose} className="bg-white text-purple-600 hover:bg-purple-100">
                  Continue Your Journey
                </Button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

