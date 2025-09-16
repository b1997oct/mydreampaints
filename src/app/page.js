import Button from '@/components/base/button'
import BgSlider from '@/components/ui/BgSlider'
import ContactForm from '@/components/ui/ContactForm'
import ExpertsCards from '@/components/ui/ExpertsCards'
import Faq from '@/components/ui/Faq'
import React from 'react'

export default function Home() {
  return (
    <div>

      <div className='relative z-10 overflow-hidden'>
        <BgSlider />
        {/* <img src='/paint-service-1.webp' className='absolute h-full inset-0 -z-10 object-cover w-full' /> */}
        <div className='bg-gradient-to-tl  to-orange-700 via-orange-600/50 from-transparent md:py-12'>

          <div className='theme-container md:flex gap-12 justify-between z-10'>
            <div className='flex-1 px-4 md:px-0 mb-12 max-w-xl text-white'>
              <h1 className='text-center md:text-start text-4xl md:text-6xl py-12 font-bold'>Trusted Painting Experts</h1>
              <p className='text-xl font-medium'>The best paint service is a reliable painting company in Dubai, UAE, and provides professional internal and external painting solutions for housing, commercial and villas. With talented painters, first-class quality materials and a first approach, we are an expert on the innocent completed the Dubai climate. Our services are in line with the needs of each customer - whether it is fresh about the house, changes an office or increases a luxurious villa. In the best paint service, we draw attention to specialization, reliability and expansion to show all project beauty, durability and permanent value.</p>

              <div className='flex flex-col md:flex-row gap-4 mt-8'>
                <Button color={"blue"} className={"w-full text-white"}>Call</Button>
                <Button color={"green"} className={"w-full  text-white"}>Whatsapp</Button>

              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>

      <div className='theme-container py-24'>
        <h2 className='text-orange-500 text-4xl text-center font-bold'>Painting Experts</h2>

        <ExpertsCards />
      </div>

      <div className=' bg-orange-600 px-4'>
        <div className='flex flex-col md:flex-row py-24 gap-12 justify-between theme-container items-center'>
          <p className='max-w-xl text-white px-4 md:px-0 font-medium'>
            In the best paint service, we are proud to provide paint solutions that combine quality, durability and style. From internal walls to external false, from villas to commercial places, our services are designed to improve the beauty and value of each property. We use premium, weather -resistant paint that can withstand the climate in Dubai, and secure smooth, innocent finish. Our team of experienced painters works with accurate and care, completing the projects on time and with minimal disturbance. With color consultation, decorative finish and transparent prices, we just go beyond painting – we make places that actually inspire.
          </p>

          <div className='max-w-xl'>
            <img src='/logo192.png' className='md:min-w-xs lg:min-w-sm xl:min-w-md aspect-square' />
          </div>
        </div>
      </div>

      <Faq />
    </div>
  )
}
