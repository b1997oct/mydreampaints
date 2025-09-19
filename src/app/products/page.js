import { ContactInfoForm } from '@/components/ui/ContactInfoForm'
import { FirstSection } from '@/components/ui/FirstSection'
import { Products } from '@/components/ui/Products'
import React from 'react'


// app/products/page.js
export const metadata = {
  title: 'Our Products | My Dream Paints',
  image: 'https://mydreampaints.com/logo192.png',
  description: 'Explore the full range of My Dream Paints products, including interior and exterior emulsions, washable distemper, and more. Find the perfect paint for your home with options for stain resistance, durability, and a smooth, luxurious finish.',
  keywords: 'My Dream Paints products, interior paint, exterior paint, distemper paint, emulsion paint, washable paint, stain repellent, water proof paints, enamel paint, home painting products, India',
  openGraph: {
    title: 'Our Products | My Dream Paints',
    description: 'Discover our wide range of technologically advanced and eco-friendly paints for every need, from high-durability exterior emulsions to luxurious interior finishes. Your dream home starts with our paints.',
    url: 'https://www.mydreampaints.com/products',
    images: [
      {
        url: 'https://www.mydreampaints.com/favicon.ico', // Using the favicon as the default image
        alt: 'My Dream Paints company logo.',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Our Products | My Dream Paints',
    description: 'Discover our wide range of technologically advanced and eco-friendly paints for every need, from high-durability exterior emulsions to luxurious interior finishes. Your dream home starts with our paints.',
    images: ['https://www.mydreampaints.com/favicon.ico'], // Using the favicon as the default image
  },
};



export default function Page() {
  return (
    <div>
      <FirstSection
        title={"Products"}
      />

      <Products />
      <ContactInfoForm />

    </div>
  )
}
