import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import "../styles/globals.css"
import DarkModeProvider from "./components/DarkModeProvider"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DarkModeProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </DarkModeProvider>
    </ThemeProvider>
  )
}

export default MyApp

