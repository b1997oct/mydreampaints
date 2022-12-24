import { NavLink } from 'react-router-dom'
import "./header.css"
import { Squeeze as Hamburger } from 'hamburger-react'
import logo from "../Assets/logo.png"
import React, { useState } from 'react'
import { FaHome, FaList, FaPaintRoller, FaPhone, FaSearch, FaTools, FaWarehouse } from "react-icons/fa"
import { useEffect } from 'react'

export default function Header() {
    const [isOpen, setOpen] = useState(false)
    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState(false)

    // Hamburger toggle

    const navFun = () => {
        setOpen(false)
    }

    // nav delay
    useEffect(() => {
        if (isOpen) {
            setDisplay(true)
        } else {
            setTimeout(() => {
                setDisplay(false)
            }, 300)
        }
    }, [isOpen, display])

    // search input

    return (
        <>
            <div className='header-div bg-white'>
                <div className='line'></div>
                <div className='flex'>
                    <div className="flex flex-1 m-auto relative z-10 bg-white w-[100%] h-[2.5rem] " >
                        <div className='md:flex-1 m-auto'>
                            <div className='flex ml-12 gap-3 md:gap-4'>
                                <div className='h-10 w-10 '>
                                    <img src={logo} alt="logo" className="mt-1 scale-[2] md:scale-[2.6]" />
                                </div>
                                <h className="whitespace-nowrap my-auto md:ml-2 font-semibold">My Dream Paint</h>
                            </div>
                        </div>
                    </div>

                    <div className='hamburger' >
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                    <div className={isOpen ? 'nav-div' : 'nav-div back-anime'} style={{ display: display ? "flex" : null }}>
                        <ul className='navbar md:m-2' onClick={navFun}>
                            <NavLink to="/home" ><li className='flex gap-1 items-baseline'><FaHome />Home</li></NavLink>
                            <NavLink to='/products'><li className='flex gap-1 items-baseline' ><FaList />PRODUCTS</li></NavLink>
                            <NavLink to='/tools'><li className='flex gap-1 items-baseline' ><FaPaintRoller />TOOLS</li></NavLink>
                            <NavLink to='/services'><li className='flex gap-1 items-baseline' ><FaTools />SERVICES</li></NavLink>
                            <NavLink to='/contact'><li className='flex gap-1 items-baseline'><FaPhone />CONTACT US</li></NavLink>
                        </ul>
                    </div></div>
                <div className='line'></div>
            </div>
        </>
    )
}