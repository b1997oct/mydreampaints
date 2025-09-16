import React from 'react'

export default function Header() {
  return (
    <div className='bg-white sticky top-0 z-[100]'>
      <div className='py-6 theme-container md:py-8 px-4 lg:px-0   flex justify-between items-center'>
        <div>Header</div>
        <div className='flex gap-4 md:gap-8'>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <div>
          <a>Contact</a>
        </div>
      </div>
    </div>
  )
}
