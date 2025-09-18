import { FirstSection } from '@/components/ui/FirstSection'
import React from 'react'


export default function Page() {

  return (  
    <div>
      <FirstSection />
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
              <div className="space-y-6 text-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    {/* Assuming Phone icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2.05L16 21.73A19.5 19.5 0 0 1 8.87 14.53L2.27 1.82A2 2 0 0 1 2.3 1a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2.15 13 13 0 0 0 3.2 5.5l1.54 1.54a10.5 10.5 0 0 0 5.5 3.2A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                      Phone
                    </p>
                    <a
                      href="tel:+919482658028"
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      +91 94826 58028
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    {/* Assuming Mail icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href="mailto:mydreampaintsmgt@gmail.com"
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors break-all"
                    >
                      mydreampaintsmgt@gmail.com
                    </a>
                  </div>
                </div>
              </div>
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
    </div>
  )
}
