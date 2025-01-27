import "./globals.css"
import { Inter, Poppins, Montserrat } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DarkModeProvider from "./components/DarkModeProvider"
import MagicCursor from "./components/MagicCursor"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-poppins" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata = {
  title: "RKG - Magical Blog Platform",
  description: "A Harry Potter-inspired, magical blog platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} font-sans`}>
        <DarkModeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <MagicCursor />
        </DarkModeProvider>
      </body>
    </html>
  )
}

