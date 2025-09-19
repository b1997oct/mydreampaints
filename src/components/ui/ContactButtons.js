import React from 'react'
import Button from '../base/button'
import Link from 'next/link'

export const ContactButtons = () => {


    return (
        <div className='theme-container'>
            <div className="flex flex-col mx-auto md:flex-row gap-4 mt-10 max-w-sm">
                <Link data-aos="fade-right"  href={"tel:9482658028"} className='w-full'>
                    <Button color={"blue"} className="w-full">
                        Call
                    </Button>
                </Link>
                <Link data-aos="fade-left"  target="_blank" className='w-full' href="https://wa.me/message/ASOK2XATB4ENJ1?text=Hi i came across your website. can i get more information about your product and service">
                    <Button color={"green"} className="w-full">
                        WhatsApp
                    </Button>
                </Link>
            </div>
        </div>
    )
}
