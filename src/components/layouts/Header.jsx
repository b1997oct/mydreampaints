import React from 'react'
import Button from '../base/button'
import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
  return (
    <div className='bg-white sticky top-0 z-[100]'>
      <div className='py-6 theme-container md:py-8 px-4 lg:px-0   flex justify-between items-center'>
        <div className='ml-8'>
          <div className='h-10 w-10'>
            <Link href={"/"}>
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                className="scale-[3]"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className='hidden md:flex gap-4 md:gap-8'>
          <Link href={"/"}>Home</Link>

          <a>Services</a>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div>
          <Button color={"blue"} className={"text-white !rounded px-8 py-2"}>Call now</Button>
        </div>
      </div>
    </div>
  )
}
