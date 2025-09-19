"use client"
import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import "./footer.css"
import { facebook, googleMap, insagram, linkedin, pinterest, twitter, youtube } from '../SocialLinks'
import { navLinks } from '../Header'
import Link from 'next/link'



function Footer() {
  return (

    <footer className='pb-[4%]'>

      <div className="flex gap-4 flex-col md:flex-row md:justify-between theme-container p-4 lg:p-0">
        <div>
          <h4 className='mb-6 font-mono font-semibold text-xl'>Follow us on</h4>
          <ul className="md:flex">
            <div className='socials md:flex justify-evenly'>
              <li><a target="_blank" rel="noreferrer" href={youtube} ><FaYoutube className="fa-icons" style={{ color: "red" }} /></a></li>
              <li><a target="_blank" rel="noreferrer" href={facebook} ><FaFacebook className="fa-icons text-blue-500" /></a></li>
              <li><a target="_blank" rel="noreferrer" href={insagram} ><FaInstagram className="fa-icons" style={{ color: "rgb(255, 0, 242)" }} /></a></li>
              <li><a target="_blank" rel="noreferrer" href={pinterest} ><FaPinterest className="fa-icons" style={{ color: "red" }} /></a></li>
            </div>
            <div className='flex justify-evenly md:w-52'>
              <li><a target="_blank" rel="noreferrer" href={googleMap} ><FaGoogle className="fa-icons" /></a></li>
              <li><a target="_blank" rel="noreferrer" href={linkedin} ><FaLinkedin className="fa-icons" style={{ color: "blue" }} /></a></li>
              <li><a target="_blank" rel="noreferrer" href={twitter} ><FaTwitter className="fa-icons text-blue-500" /></a></li>
            </div>
          </ul>
          <br />
        </div>

        <div>
          <h2 className='underline mb-2'>Useful Links</h2>
          <div className='flex flex-col'>
            {navLinks.map((link) => (<Link key={link.href} href={link.href}>{link.label}</Link>))}
          </div>
        </div>


        <div className="flex flex-col">
          <h2 className='underline mb-2'>Support : 24*7</h2>
          <a href='mailto:mydreampaintsmgt@gmail.com' target="_blank" className='no-underline'>mydreampaintsmgt@gmail.com</a>
          <a href='tel:9482658028'>+91 9482658028</a>
          <div>Mathighatta, Tumkur, Karnataka - 572119</div>
        </div>
      </div>

      <div className='theme-container text-center md:text-start border-t-2 border-t-gray-500 pt-4 mt-8'>
        Copyright © 2025, All rights reserved.
      </div>

    </footer>

  )
}

export default Footer
