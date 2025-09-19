import React from 'react'
import { ContactButtons } from './ContactButtons'

export const FirstSection = ({ title, desp }) => {

  return (
    <div className="relative px-4 bg-gradient-to-t from-orange-600 to-transparent lg:py-[150px] md:py-32 py-24">
      <img
        src="paint-service-4.jpg"
        className={`absolute  inset-0 h-full w-full -z-10 object-cover`}
      />
      <div className='text-center text-white h-24'>
        <h2 className='font-bold text-3xl md:text-4xl mb-2'>{title}</h2>
        <h3>{desp}</h3>
      </div>
      <ContactButtons />
    </div>
  )
}
