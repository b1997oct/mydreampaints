import React from 'react'
import { ContactInfo } from './ContactInfo'
import ContactForm from './ContactForm'

export const ContactInfoForm = () => {
    return (
        <div className='my-12 md:flex justify-between theme-container'>
            <div className='p-4'>
                <br />
                <br />
                <br />
                <ContactInfo />
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    )
}
