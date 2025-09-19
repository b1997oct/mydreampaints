import Button from '@/components/base/button'
// import Footer from '@/components/layouts/Footer/Footer'
import BgSlider from '@/components/ui/BgSlider'
import { ContactButtons } from '@/components/ui/ContactButtons'
import ContactForm from '@/components/ui/ContactForm'
import { Customers } from '@/components/ui/Customers'
import Faq from '@/components/ui/Faq'
import { Features } from '@/components/ui/Features'
import Perks from '@/components/ui/Perks'
import { Products } from '@/components/ui/Products'
import { Steps } from '@/components/ui/Steps'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>

      <div className="relative z-10 overflow-hidden">
        <BgSlider />

        <div className="relative bg-gradient-to-tl from-orange-900/90 via-orange-700/70 to-transparent md:py-20 py-16">
          <div className="theme-container relative z-20 md:flex gap-12 justify-between items-center">

            <div className="flex-1 px-4 md:px-0 mb-12 max-w-2xl text-white">
              <h1 className="text-center md:text-left text-4xl md:text-6xl font-extrabold leading-tight">
                Trusted <span className="bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">Painting Experts</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed text-gray-100">
                The Best Paint Service is a reliable painting company in India, providing professional internal and external painting solutions for houses, offices, and villas.
                With talented painters, first-class quality materials, and a customer-first approach,
                we bring durability, beauty, and long-lasting value to every project.
              </p>

              <ContactButtons />
            </div>

            <div className="flex-1 relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 md:p-8 border border-white/20">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>


      <Perks />



      <Products />

      <Steps />

      <Features />


      {/* <div className='theme-container py-24'>
        <Heading className={"my-12"}>Our Services</Heading>
        <ExpertsCards />
      </div> */}

      <section className='bg-orange-600 dark:bg-orange-800 py-24 px-4'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col-reverse md:flex-row items-center gap-12'>

            {/* Text Container */}
            <div className='w-full md:w-1/2 text-white'>
              <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
                Transforming Your Space
              </h2>
              <div className='w-16 h-1 bg-green-400 mb-6'></div>
              <p className='text-lg font-light leading-relaxed'>
                {`We provide more than just a paint service; we offer a transformation. Our solutions combine quality, durability, and style to elevate the beauty and value of every property. From elegant villas to dynamic commercial spaces, we specialize in both interior and exterior painting. Using only premium, weather-resistant paints specifically chosen for Dubai's climate, our expert team ensures a flawless, long-lasting finish. We work with precision and care, completing projects on time and with minimal disruption. With transparent pricing, detailed color consultations, and decorative finishes, we don't just paint walls—we create spaces that inspire.`}
              </p>
            </div>

            {/* Image Container */}
            <div className='w-full p-8 md:p-16 md:w-1/2 relative flex justify-center items-center'>
              <img
                src='/logo192.png'
                alt='Expert Painting Service'
                className='w-full h-auto max-w-sm aspect-square hover:scale-105 rounded-full border-4 border-gray-200 transition-all duration-500'

              />
            </div>

          </div>
        </div>
      </section>

      <div className="mx-[4px] md:mx-4 border-b py-24 rounded-md px-4 md:px-0">
        <div className="text-center flex gap-2 justify-center flex-col md:flex-row text-xl md:text-3xl font-semibold">
          Facing any Problems in Painting, Say Hi on WhatsApp
          <div className="flex mx-[auto] md:mx-0">
            <div className="font-bold md:text-4xl text-3xl">
              9482658028
            </div>
          </div>
        </div>
        <div className="mt-4 text-2xl flex justify-center font-semibold">
          <Link target="_blank" className="no-underline" href="https://wa.me/message/ASOK2XATB4ENJ1?text=Hi i came across your website. can i get more information about your product and service">
            <Button color={"green"} className="flex justify-center shadow-md text-white p-2 gap-2 items-center">
              <div className="text-2xl scale-[1.5]" />WhatsApp
            </Button>
          </Link>
        </div>
      </div>



      <Customers />

      <Faq />

    </div>
  )
}
