import { ContactInfo } from '@/components/ui/ContactInfo'
import { ContactInfoForm } from '@/components/ui/ContactInfoForm'
import { Customers } from '@/components/ui/Customers'
import FAQSection from '@/components/ui/Faq'
import { FirstSection } from '@/components/ui/FirstSection'
import React from 'react'


// app/about/page.js
export const metadata = {
  title: 'About My Dream Paints | Our Approach & Commitment',
  image: 'https://mydreampaints.com/logo192.png',
  description: 'Learn about My Dream Paints\' commitment to quality, on-time completion, and professional service. We are a reliable painting company in India with a customer-first approach and a team of professionally trained painters.',
  keywords: 'about My Dream Paints, reliable painting company, professional painters, expert color consultancy, on-time project completion, hygienic painting process, safe painting services',
  openGraph: {
    title: 'About Us | The My Dream Paints Story',
    description: 'Our mission is to transform your space with quality, durability, and style. Discover our unique approach to painting, including on-time completion and expert color consultancy.',
    url: 'https://www.mydreampaints.com/about',
    images: [
      {
        url: 'https://www.mydreampaints.com/favicon.ico', // Using the favicon
        alt: 'My Dream Paints company logo.',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'About Us | The My Dream Paints Story',
    description: 'Our mission is to transform your space with quality, durability, and style. Discover our unique approach to painting, including on-time completion and expert color consultancy.',
    images: ['https://www.mydreampaints.com/favicon.ico'], // Using the favicon
  },
};


export default function Page() {

  return (
    <div>
      <FirstSection title={"About"} />
      <section className="theme-container px-4 lg:px-0 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border-gray-100 border overflow-hidden flex flex-col lg:flex-row">
            {/* Left Side: Info */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
                About Us
              </h2>
              <p className="text-lg text-gray-700 font-medium mb-8">
                We produce high-quality paints driven by innovation and
                eco-friendliness. Our mission is to deliver paint solutions that
                serve your needs while protecting our world.
              </p>

              {/* Contact Info */}
              <ContactInfo />
            </div>

            {/* Right Side: Developer Contact */}
            <div className="lg:w-1/3 bg-blue-950 p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <span className="text-white text-5xl mb-4">💡</span>
              <h3 className="text-lg uppercase tracking-widest text-blue-200 font-bold mb-2">
                Developed by
              </h3>
              <div className="bg-white/10 rounded-xl px-6 py-4 flex flex-col items-center border border-white/20">
                <span className="text-xl font-bold text-white mb-1">
                  Upgradableweb
                </span>
                <a
                  href="mailto:barath@upgradableweb.com"
                  className="text-sm font-light text-blue-300 hover:text-white hover:underline transition-colors"
                >
                  barath@upgradableweb.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Customers />
      <ContactInfoForm />
      <FAQSection />
    </div>
  )
}
