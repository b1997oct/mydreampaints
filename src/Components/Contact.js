import "./Global.css"
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FaChevronDown } from 'react-icons/fa'

function Contact() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <div className="contact-div">
      <div className="sm:max-w-[35rem] sm:m-auto sm:border-r sm:border-l border-gray-800">
      <div className="hr-line"></div>
      <div className="about-div">
        <div className="cc-div">
          <h6 className="title text-lg">About Us</h6>
          <FaChevronDown
            className={aboutOpen?"chevron1":"chevron2"}
            onClick={() => setAboutOpen(!aboutOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={aboutOpen}
          >
          </FaChevronDown>
        </div>
        <Collapse in={aboutOpen}>
          <div className="text-justify">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
      <div className="hr-line"></div>
      <div className="help-div">
        <div className="cc-div">
          <h6 className="title text-lg">Help</h6>
          <FaChevronDown
            className={helpOpen?"chevron1":"chevron2"}
            onClick={() => setHelpOpen(!helpOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={helpOpen}
          >
          </FaChevronDown>
        </div>
        <Collapse in={helpOpen}>
          <div id="example-collapse-text" className="text-justify">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
      <div className="hr-line"></div>
      </div>
      <div className="form-div">
        <h4
         className="m-2 ,flex,justify-start">My dream paint pvt ltd</h4>
        <form className="cont-form">
        <h2>Fill your details</h2>
          <input type="text" className="input-box" placeholder="Enter your name" />
          <input type="text" className="input-box" placeholder="Phone number"  />
          <input type="text" className="input-box" placeholder="Email"  />
          <button className="button-1" type="submit">CONNECT WITH US</button>
        </form>

      </div>
      <div className="hr-line"></div>
      
    </div>
  )
}

export default Contact
