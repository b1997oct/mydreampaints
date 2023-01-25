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
        {/* <div className="m-4">
          <div className="single-box md:max-w-[20rem]">
            <div className='flex justify-center'>
              <div className='h-10 w-10'>
                <img src={logo} alt="logo" className="scale-[2] md:scale-[2.6]" />
              </div>
              <h2 className='md:ml-8 ml-6'>Get In Touch</h2></div>

            <p className=' text-justify'>My dream Paint produces high-quality paints with innovation and eco-friendliness. We consistently deliver paint solutions that not only serve your needs, but also protect the world we live in.</p>
          </div>
        </div> */}

        {/* <div className='grid justify-center m-4 min-w-[130px]'>
          <p className='font-bold text-lg mb-0'>Quick Links</p>
          <ul className='list-none ml-[-1rem] text-lg font-semibold' >
            <Link to="/" className="w-[100%] bg-white"><li>Home</li></Link>
            <Link to="/products" className="w-[100%]"><li>Products</li></Link>
            <Link to="/tools" className="w-[100%]"><li>Tools</li></Link>
            <Link to="/services" className="w-[100%]"><li>Services</li></Link>
            <Link to="/contact" className="w-[100%]"><li>Contact Us</li></Link>
          </ul>
        </div> */}
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
