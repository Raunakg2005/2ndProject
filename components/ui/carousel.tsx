"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselProps = {
  children: React.ReactNode
  className?: string
}

export const Carousel = ({ children, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const items = React.Children.toArray(children)

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1))
  }

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0))
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items}
      </div>
      <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2" onClick={prev}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={next}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export const CarouselItem = ({ children, className }: CarouselProps) => {
  return <div className={cn("min-w-full flex-shrink-0", className)}>{children}</div>
}

