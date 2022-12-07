import { NavLink } from 'react-router-dom'
import "./header.css"
import { Squash as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { useEffect } from 'react'

export default function Header() {
    const [isOpen, setOpen] = useState(false)
    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState(false)

    // Hamburger toggle

   const navFun = ()=>{
        setOpen(false)
    }

    // nav delay
    useEffect(()=>{
        if(isOpen) {
            setDisplay(true)
          } else {
    setTimeout(()=>{
            setDisplay(false)
    },300)}
},[isOpen,display])

    // search input

    return (
        <div className='header-div'>
            <div className='line'></div>
            <div style={{ display:"flex", flexWrap: "wrap", flex: "1", position: "relative", zIndex: 9, backgroundColor: "white", height: "2.5rem" }}>
                {/* <img src={lo} alt="LOGO" /> */}<h1 className='LOGO' style={{display:search?"none":""}}>My Dream Paint</h1>

                 <input type="text" className="searchInput" style={{display:search?"block":""}} placeholder='Search...' />

                <FaSearch className='fa-search'onClick={()=>setSearch(!search)} />
                
            </div>
            <div className='line'></div>
            <div className='hamburger' >
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div className={isOpen?'nav-div':'nav-div back-anime'} style={{display:display ?"flex":null }}>
                <ul className='navbar' onClick={navFun}>
                    <NavLink to="/home" ><li className='nav-link'>HOME</li></NavLink>
                    <NavLink to='/products'><li className='nav-link' >PRODUCTS</li></NavLink>
                    <NavLink to='/tools'><li className='nav-link' >TOOLS</li></NavLink>
                    <NavLink to='/services'><li className='nav-link' >SERVICES</li></NavLink>
                    <NavLink to='/contact'><li className='nav-link'>CONTACT US</li></NavLink>
                </ul>
            </div>
        </div>
    )
}