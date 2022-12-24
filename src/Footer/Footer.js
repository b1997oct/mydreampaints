import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png"
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import "./footer.css"
import { facebook, googleMap, insagram, linkedin, pinterest, twitter, youtube } from '../SocialLinks'

function Footer() {
  return (

    <footer className='pb-10'>
      <div className="md:grid lg:flex lg:justify-around md:grid-cols-2">
        <div className='block m-4'>
          <h1 className='mb-3 font-mono'>Follow us on</h1>
          <ul className="socials ml-[-2rem] flex justify-evenly md:grid md:grid-cols-2 md:grid-rows-2">
            <li><a target="_blank" rel="noreferrer" href={youtube} ><FaYoutube className="fa-icons" style={{ color: "red" }} /></a></li>
            <li><a target="_blank" rel="noreferrer" href={facebook} ><FaFacebook className="fa-icons" /></a></li>
            <li><a target="_blank" rel="noreferrer" href={insagram} ><FaInstagram className="fa-icons" style={{ color: "rgb(255, 0, 242)" }} /></a></li>
            <li><a target="_blank" rel="noreferrer" href={pinterest} ><FaPinterest className="fa-icons" style={{ color: "red" }} /></a></li>
            <li><a target="_blank" rel="noreferrer" href={googleMap} ><FaGoogle className="fa-icons" /></a></li>
            <li><a target="_blank" rel="noreferrer" href={linkedin} ><FaLinkedin className="fa-icons" style={{ color: "blue" }} /></a></li>
            <li><a target="_blank" rel="noreferrer" href={twitter} ><FaTwitter className="fa-icons" style={{ color: "skyblue" }} /></a></li>
          </ul>
          <p className='m-4'>123 Street, Banglore, india</p>
        </div>
        <div className="m-4">
          <div className="single-box md:max-w-[20rem]">
            <div className='flex justify-center'>
              <div className='h-10 w-10'>
                <img src={logo} alt="logo" className="scale-[2] md:scale-[2.6]" />
              </div>
              <h2 className='md:ml-8 ml-6'>Get In Touch</h2></div>

            <p className=' text-justify'>My dream Paint produces high-quality paints with innovation and eco-friendliness. We consistently deliver paint solutions that not only serve your needs, but also protect the world we live in.</p>
          </div>
        </div>

        <div className='grid justify-center m-4 min-w-[130px]'>
          <p className='font-bold text-lg mb-0'>Quick Links</p>
          <ul className='list-none ml-[-1rem] text-lg font-semibold' >
            <Link to="/" className="w-[100%] bg-white"><li>Home</li></Link>
            <Link to="/products" className="w-[100%]"><li>Products</li></Link>
            <Link to="/tools" className="w-[100%]"><li>Tools</li></Link>
            <Link to="/services" className="w-[100%]"><li>Services</li></Link>
            <Link to="/contact" className="w-[100%]"><li>Contact Us</li></Link>
          </ul>
        </div>
        <div className="text-white flex m-4 flex-col items-center">
          <h2>Suport</h2>
          <h2>24*7</h2>
          <p>info@example.com</p>
          <p>+91 12345678</p>
          <div className='flex'>
            <input type="text" className="input-box2" placeholder="Contact number" />
            <button className='send-btn p-1'>SEND</button>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
