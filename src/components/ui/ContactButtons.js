import React from 'react'
import Button from '../base/button'

export const ContactButtons = () => {


    return (
        <div className='theme-container'>
            <div className="flex flex-col mx-auto md:flex-row gap-4 mt-10 max-w-sm">
                <Button color={"blue"} className="w-full">
                    Call
                </Button>
                <Button color={"green"} className="w-full">
                    WhatsApp
                </Button>
            </div>
        </div>
    )
}
