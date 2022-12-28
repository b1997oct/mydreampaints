import "./Global.css"
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FaChevronDown } from 'react-icons/fa'

function Contact() {
  const [aboutOpen, setAboutOpen] = useState(true);
  const [helpOpen, setHelpOpen] = useState(true);
  const [values, setValues] = useState("");

  function handleSubmit (e) {
    e.preventDefault()
    alert("TankYou for Submiting form")

  }


  return (
    <div className="contact-div lg:h-[90vh]  flex flex-col  lg:justify-center">
      <div className="justify-evenly flex">
       <h4 className="text-blue-700 text-2xl md:text-3xl lg:text-4xl mt-[3%] lg:mt-0 mb-[5%]">
          <span className="text-white">Connect with </span>My Dream paints</h4>
      </div>
      <div className="lg:flex lg:flex-row-reverse">
       <div className="form-div lg:mt-[-.5rem]">
        <form className="cont-form" onSubmit={handleSubmit}>
        <h2>Fill your details</h2>
          <input type="text" className="input-box" placeholder="Enter your name" name="name" />
          <input type="text" className="input-box" placeholder="Phone number*" name="mobile" />
          <input type="text" className="input-box" placeholder="Email" name="email"  />
          <button className="button-1" type="submit">CONNECT WITH US</button>
        </form>

      </div>
      <div className="lg:w-[35rem] sm:max-w-[35rem] my-[auto] mx-[auto] lg:ml-14 sm:border-r sm:border-l border-gray-800">
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
      </div>
     
      {/* <div className="hr-line"></div> */}
      
    </div>
  )
}

export default Contact
