import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa'
import "./footer.css"

function Footer() {
  return (
    <>
      <footer>
        <h1 style={{color:"white"}}>Footer</h1>
        <div className="container">
                <h1 style={{color:"white"}}>Follow us on</h1>
                <ul className="socials">
                  <li><NavLink to="#" ><FaFacebook className="fa-icons" /></NavLink></li>
                  <li><NavLink to="#" ><FaInstagram className="fa-icons" style={{ color: "rgb(255, 108, 132)" }} /></NavLink></li>
                  <li><NavLink to="#" ><FaGoogle className="fa-icons" /></NavLink></li>
                  <li><NavLink to="#" ><FaYoutube className="fa-icons" style={{ color: "red" }} /></NavLink></li>
                </ul>
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                {/* <img src="img/logo.png" alt="" /> */} <h2>logo</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam repellendus sunt praesentium aspernatur iure molestias.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <h2>Newsletter</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque earum similique fugiat nobis. Facere?</p>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Contact phone number" aria-label="Enter your Email ..." aria-describedby="basic-addon2" />
                  <button className='send-btn'>SEND</button>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
