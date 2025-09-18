import React, { useEffect } from 'react'
import logo from "../assets/logo.png"
import law from "../assets/law.jpg"
import Image from 'next/image'

function Terms() {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title="My Dream Paints - Terms and Conditions"
    }, [])
    return (

        <>
            <div className='relative mb-4 py-10 lg:py-0 bg-gray-200'>
                <div className='absolute w-full h-full '>
                <div className='text-5xl md:text-7xl lg:text-9xl relative z-[1] text-center my-[10%] font-semibold bg-gradient-to-r from-[#fff] to-[#e0fcc5] bg-clip-text text-transparent '>
                    Terms and conditions</div>
                    </div>
                    <div className='relative  w-full z-[0]'>
                    <Image src={law} alt="terms-and-conditions" className='w-full h-full' />
                    </div>
            </div>

            <div className='md:flex flex-row-reverse'>
                <div className='text-xl md:text-2xl text-bold mx-4 text-justify md:mr-4'>
                    <div>
                        <div className='flex gap-2'><span className='font-bold'>1.</span> <p>My Dream Paints gives you premium quality paints that are tested before coming to market and company provides the exchange on my dream products only products are not used.</p></div>
                        <div className='flex gap-2'><span className='font-bold'>2.</span>  <p>Terms on Free 1 Liter of sample paint.</p></div>
                        <div className='ml-4'>
                            <div className='flex gap-2'><span className='font-bold whitespace-nowrap'>Step 1</span>  <p>- is the receiver should fill the form before. through website or through whatsapp</p></div>
                            <div className='flex gap-2'><span className='font-bold whitespace-nowrap'>Step 2</span> <p>- Only Elegible applicants will receive the reward</p></div>
                            <div className='flex gap-2'><span className='font-bold whitespace-nowrap'>Step 3</span> <p>- Sample paint is given to test our paint on your walls so if you like products then only think for purchase</p></div>
                        </div>
                        <div className='flex gap-2'><span className='font-bold'>3.</span>  <p>My Dream paints and services is trusted by people and we are in a mission on to giving better value to our customer</p></div>
                    </div>
                    <div className='flex gap-2 '><span className='font-bold'>4.</span>  <p>For any queries Dream paints Help and support line is<span className='font-bold'>+91 9482658028</span>and official business email is <span className='font-bold'>mydreampaintsmgt@gmail.com</span></p></div>
                    
                </div>
                <div className='w-[90vw] md:w-[40rem] h-full flex justify-center'>
                    <Image src={logo} alt="my-dream-paint-logo" className='w-full' />
                </div>
            </div>

        </>
    )
}

export default Terms
