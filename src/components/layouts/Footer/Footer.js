"use client"
import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import "./footer.css"
import { facebook, googleMap, insagram, linkedin, pinterest, twitter, youtube } from '../SocialLinks'

function Footer() {
  return (

    <footer className='pb-[4%]'>

      <div className="md:flex justify-between theme-container">
        <div className='m-2'>
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
          <div className='p-4'>Mathighatta, Tumkur, Karnataka - 572119</div>
        </div>
        <div className=" items-center justify-center flex flex-col ">
          <h2>Suport</h2>
          <h2>24*7</h2>
          <a href='mailto:mydreampaintsmgt@gmail.com' target="_blank" className='no-underline'>mydreampaintsmgt@gmail.com</a>
          <p>+91 9482658028</p>
        </div>
      </div>
      
      <div className='theme-container text-center md:text-start border-t-2 border-t-gray-500 pt-4 mt-8'>
        Copyright © 2025, All rights reserved.
      </div>

    </footer>

  )
}

export default Footer
