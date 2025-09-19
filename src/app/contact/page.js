import { ContactInfoForm } from '@/components/ui/ContactInfoForm'
import { FirstSection } from '@/components/ui/FirstSection'
import React from 'react'

// app/contact/page.js
export const metadata = {
  title: 'Contact My Dream Paints | Free Painting Consultation',
  image: 'https://mydreampaints.com/logo192.png',
  description: 'Get in touch with My Dream Paints for professional painting services in India. Contact us via phone, WhatsApp, or our online form for a free consultation and project quote.',
  keywords: 'contact painting company, My Dream Paints contact, painting consultation, painting quote, call painter, WhatsApp painter, Tumkur painters, painting company in Karnataka',
  openGraph: {
    title: 'Get Your Painting Quote | Contact My Dream Paints',
    description: 'Ready to transform your space? Contact our team of painting experts for a free consultation. Find our phone number, WhatsApp, email, and location here.',
    url: 'https://www.mydreampaints.com/contact',
    images: [
      {
        url: 'https://www.mydreampaints.com/favicon.ico', // Using the favicon
        alt: 'My Dream Paints company logo.',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Get Your Painting Quote | Contact My Dream Paints',
    description: 'Ready to transform your space? Contact our team of painting experts for a free consultation. Find our phone number, WhatsApp, email, and location here.',
    images: ['https://www.mydreampaints.com/favicon.ico'], // Using the favicon
  },
};


export default function Page() {
  return (
    <div>
      <FirstSection
        title={"Contact"}
        desp={"We would love to hear from you."} />
      <ContactInfoForm />
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.259895417012!2d76.48160835185743!3d13.469172801416754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb00a3dd00636c1%3A0x180bc3b08d1617ce!2sSLNS%20General%20%26%20Hardwares!5e1!3m2!1sen!2sin!4v1758258374647!5m2!1sen!2sin"
        className="w-full h-64 md:h-[500px] border-0 my-12"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
