import { Mail, PhoneCall } from 'lucide-react'
import React from 'react'

export function ContactInfo() {
    return (
            <div className="space-y-6 text-gray-800">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        {/* Assuming Phone icon */}
                        <PhoneCall size={20} />
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
                       <Mail size={20} />   
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
    )
}
