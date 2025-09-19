import { ContactInfoForm } from '@/components/ui/ContactInfoForm'
import { FirstSection } from '@/components/ui/FirstSection'
import React from 'react'

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
