import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png"
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMap, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import "./footer.css"
import { facebook, googleMap, insagram, linkedin, pinterest, twitter, youtube } from '../SocialLinks'
import { Copyright } from '@mui/icons-material'

function Footer() {
  return (

    <footer className='pb-[4%]'>
      <div className="md:flex justify-evenly">
        <div className='m-2'>
          <h1 className='mb-3 font-mono'>Follow us on</h1>
          <ul className="md:flex">
            <div className='socials md:flex justify-evenly'>
            <li><a target="_blank" rel="noreferrer" href={youtube} ><FaYoutube className="fa-icons" style={{ color: "red" }} /></a></li>
            <li><a target="_blank" rel="noreferrer" href={facebook} ><FaFacebook className="fa-icons" /></a></li>
            <li><a target="_blank" rel="noreferrer" href={insagram} ><FaInstagram className="fa-icons" style={{ color: "rgb(255, 0, 242)" }} /></a></li>
            <li><a target="_blank" rel="noreferrer" href={pinterest} ><FaPinterest className="fa-icons" style={{ color: "red" }} /></a></li>
            </div>
            <div className='flex justify-evenly md:w-52'>
              <li><a target="_blank" rel="noreferrer" href={googleMap} ><FaGoogle className="fa-icons" /></a></li>
            <li><a target="_blank" rel="noreferrer" href={linkedin} ><FaLinkedin className="fa-icons" style={{ color: "blue" }} /></a></li>
            <li><a target="_blank" rel="noreferrer" href={twitter} ><FaTwitter className="fa-icons" style={{ color: "skyblue" }} /></a></li>
            </div>
            </ul>
          <p className='m-4'>Mathighatta, Tumkur, Karnataka - 572119</p>
        </div>
        <div className="text-white items-center justify-center flex flex-col ">
          <h2>Suport</h2>
          <h2>24*7</h2>
          <p>mydreampaintmgt@gmail.com</p>
          <p>+91 9482658028</p>
        </div>
      </div>
      <div className='grid place-items-center m-1'>
      <div className='flex'>
      <Copyright className='scale-90' /><h>mydream paints - all rights reserved</h>
      </div>
    </div>
    </footer>

  )
}

export default Footer
