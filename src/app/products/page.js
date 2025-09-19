import { ContactInfoForm } from '@/components/ui/ContactInfoForm'
import { FirstSection } from '@/components/ui/FirstSection'
import { Products } from '@/components/ui/Products'
import React from 'react'

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
