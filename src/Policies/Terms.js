import React from 'react'
import logo from "../Assets/logo.png"

function Terms() {
    return (

        <>
            <head>
                <title>My Dream Paints - Terms & Conditions</title>
            </head>

            <div className='text-6xl font-semibold flex text-center text-[#0a2221] justify-center my-[1rem] md:my-10'>
                Terms and conditions</div>

            <div className='flex flex-row-reverse'>
                <div className='text-xl md:text-2xl text-bold'>
                    <div>
                        <div className='flex gap-2'><span className='font-bold'>1.</span> <p>My Dream Paints gives you preminum quality paints that are tested before coming to market and company provides the exchange on my dream products only products are not used.</p></div>
                        <div className='flex gap-2'><span className='font-bold'>2.</span>  <p>Terms on Free 1 Liter of sample paint.</p></div>
                        <div className='ml-4'>
                            <div className='flex gap-2'><span className='font-bold whitespace-nowrap'>Step 1</span>  <p>- is the receiver should fill the form before. through website or through whatsapp</p></div>
                            <div className='flex gap-2'><span className='font-bold whitespace-nowrap'>Step 2</span> <p>- Only Edivgible appdivcants will receive the reward</p></div>
                            <div className='flex gap-2'><span className='font-bold whitespace-nowrap'>Step 3</span> <p>- Sample paint is given to test our paint on your walls so if you divke then only you will buy the products</p></div>
                        </div>
                        <div className='flex gap-2'><span className='font-bold'>3.</span>  <p>My Dream pains and services is trusted by people and we are in a mission on to giving better value to our customer</p></div>
                    </div>

                </div>
                <div className='w-[30rem] md:w-[40rem] h-full flex justify-center'>
                    <img src={logo} alt="my-dream-paint-logo" className='w-full' />
                </div>
            </div>

        </>
    )
}

export default Terms
