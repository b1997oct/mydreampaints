import { Link, useNavigate } from 'react-router-dom'
import "./header.css"
import { Divide as Hamburger } from 'hamburger-react'
import logo from "../Assets/logo.png"
import React, { useState } from 'react'
import { FaHome, FaList, FaPaintRoller, FaPhone, FaTools } from "react-icons/fa"
import { useEffect } from 'react'
import { Divider, Drawer, IconButton } from '@mui/material'
import { ChevronLeft, Menu } from '@mui/icons-material'



export default function Header() {

    const [open, setOpen] = useState(false)
    const [nav, setNav] = useState(false)

    const [navItems] = useState([
        {
            icon: <FaHome />,
            name: "Home",
            path: "home"
        },
        {
            icon: <FaList />,
            name: "PRODUCTS",
            path: "products"
        },
        {
            icon: <FaPaintRoller />,
            name: "TOOLS",
            path: "tools"
        },
        {
            icon: <FaTools />,
            name: "SERVICES",
            path: "services"
        },
        {
            icon: <FaPhone />,
            name: "CONTACT US",
            path: "contact"
        },

    ])

    const path = window.location.pathname.split("/")[1]


    return (
        <>
            <div className='header-div fixed top-0 z-50 w-full bg-white'>
                <div role='button' className='absolute md:hidden z-30 left-1' >
                    <IconButton onClick={() => setOpen(true)}>
                        <Menu sx={{ fontSize: 35, }} />
                    </IconButton>

                </div>
                <div className='flex items-center'>
                    <div className="flex flex-1 m-auto relative z-10 bg-white w-[100%] h-[3.5rem] items-center" >
                        <div className='md:flex-1 mx-auto'>
                            <a href='/' className='flex ml-12  text-black no-underline gap-3 lg:gap-4 cursor-pointer'>
                                <div className='h-10 w-10 '>
                                    <img src={logo} alt="logo" className="mt-1 scale-[2] md:scale-[2.6]" />
                                </div>
                                <h className="whitespace-nowrap my-auto md:ml-2 font-semibold lg:text-xl text-xl sm:text-sm">My Dream Paints</h>
                            </a>
                        </div>
                    </div>


                    <div>
                        <ul className=' hidden md:flex my-auto md:gap-2 lg:gap-4 font-semibold text-black text-lg md:text-base lg:text-xl'>

                            {
                                navItems.map(dat =>
                                    <Link to={"/"+dat.path} onClick={()=>setNav(!nav)} className={`flex gap-1 items-center text-indigo-500  no-underline ${dat.path === path ? "text-indigo-700" : "text-black"}`} >{dat.icon} {dat.name}</Link>
                                )}

                        </ul>
                    </div>

                    <Drawer
                        open={open}
                        onClose={() => setOpen(false)}

                    >

                        <div className='my-3'>
                            <div className='flex gap-2 cursor-pointer justify-between ml-4'>
                                <div className='h-10 w-10'>
                                    <img src={logo} alt="logo" className="" />
                                </div>
                                {/* <h className="whitespace-nowrap text-lg font-semibold -ml-2 mt-2 ">My Dream Paints</h> */}
                                <IconButton sx={{ mt: -1 }} onClick={() => setOpen(false)}>
                                    <ChevronLeft sx={{ fontSize: 25, }} />
                                </IconButton>
                            </div>
                            <Divider sx={{bgcolor:"#333", height: "2px", mx:1}} />
                        </div>
                       
                        <div className='flex flex-col gap-4 mx-4'>
                            {
                                navItems.map(dat =>
                                    <Link to={dat.path} onClick={()=>setOpen(false)} className={`flex gap-2 items-center  no-underline ${dat.path === path ? "text-indigo-700" : "text-black"}`} >{dat.icon} {dat.name}</Link>
                                )}
                        </div>

                    </Drawer>
                </div>
                {/* <div className='line'></div> */}
            </div>
        </>
    )
}