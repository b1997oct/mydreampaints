import React from 'react'
import { ContactButtons } from './ContactButtons'

export const FirstSection = () => {

  return (
    <div className="relative px-4 bg-gradient-to-tl from-orange-600/90 via-orange-500/70 to-transparent lg:py-[150px] md:py-32 py-24">
      <img
        src="/paint-service-2.webp"
        className={`absolute  inset-0 h-full w-full -z-10 object-cover`}
      />
      <ContactButtons />
    </div>
  )
}
