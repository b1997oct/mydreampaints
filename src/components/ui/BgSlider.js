"use client"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function BgSlider() {
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>

      <img
        src="/paint-service-1.webp"
        className={cn(`absolute  inset-0 h-full w-full -z-10 object-cover duration-[4s]`, showFirst ? "opacity-100 scale-110" : "opacity-0")}
      />
      <img
        src="/paint-service-2.webp"
        className={cn(`absolute  inset-0 h-full w-full -z-10 object-cover duration-[4s]`, showFirst ? "opacity-0 " : "opacity-100 scale-110")}

      />
    </>
  )
}
