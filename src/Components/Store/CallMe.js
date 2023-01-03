import { Call, Phone } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { DragControls, motion } from 'framer-motion'

function CallMe() {
  return (
    <motion.div 
    drag
    dragConstraints={{left:0, right:0, bottom:0, top:0}}
    dragElastic={1}
    className='fixed bottom-10 right-10 md:right-15 md:bottom-15 z-20 cursor-pointer'>
    <div className='bg-sky-300 rounded-full w-20 h-20 grid place-content-center'>
    <a href='tel:+919482658028' class='no-underline'>
    <motion.div 
    whileHover={{scale:1.1}}
    className='bg-gray-200 rounded-full w-[4.5rem] h-[4.5rem]'>
    <div className='flex flex-col items-center mt-[12%] text-green-600'>
        <Phone />
        Call Now
    </div>
   </motion.div> 
   </a>
    </div>
    </motion.div>
  )
}

export default CallMe
