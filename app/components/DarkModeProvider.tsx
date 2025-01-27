"use client"

import { createContext, useContext, useEffect } from "react"

const DarkModeContext = createContext({
  darkMode: true,
})

export const useDarkMode = () => useContext(DarkModeContext)

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return <DarkModeContext.Provider value={{ darkMode: true }}>{children}</DarkModeContext.Provider>
}

