import "./Global.css"
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FaChevronDown } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

function Contact() {
  const [aboutOpen, setAboutOpen] = useState(true);
  const [helpOpen, setHelpOpen] = useState(true);
  const [values, setValues] = useState({
      name:"",
      mobile:"",
      email:""
    });

    const navigate = useNavigate();

  function handleSubmit (e) {
    e.preventDefault()
    alert("TankYou for Submiting form")
  console.log(values)
  navigate("/")

  }

  

 function handleChange (e) {

  const { name , value } = e.target;

  setValues((prev) =>{
  return {
      ...prev,
      [name] : value
  }});
 }


  return (
    <div> 
      {/* <div className='py-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-center flex justify-center items-center absolute'>
    <div className="mx-4 text-justify lg:text-4xl md:text-3xl text-2xl font-semibold text-white">My Dream paints</div>
  </div> */}
    <div className="contact-div flex flex-col  lg:justify-center">
      <div className="justify-evenly flex">
       <h4 className="sm:text-3xl md:text-4xl lg:text-5xl text-4xl mt-[3%] gap-3 flex flex-col sm:flex-row">
          <span className="text-green-500 text-center font-bold">CONNECT WITH</span> <h className="text-blue-800 font-bold">MY DREAM PAINT</h></h4>
      </div>
      <div className="">
       <div className="form-div">
        <form className="cont-form" onSubmit={handleSubmit}>
        <h2 className="text-black font-bold">Fill Your Details</h2>
          <input type="text" className="input-box" placeholder="Enter your name"
           name="name" onChange={handleChange} />
          <input type="text" className="input-box" placeholder="Phone number*"
           name="mobile" onChange={handleChange} />
          <input type="text" className="input-box" placeholder="Email"
           name="email" onChange={handleChange}  />
          <button className="button-1" type="submit">CONNECT WITH US</button>
        </form>

      </div>
      <div className="lg:w-[35rem] sm:max-w-[35rem] md:my-4 my-[0] mx-[auto] sm:border-r sm:border-l border-gray-800">
      <div className="hr-line"></div>
      <div className="about-div">
        <div className="cc-div">
          <h6 className="title text-lg ">About Us</h6>
          <FaChevronDown
            className={aboutOpen?"chevron1":"chevron2"}
            onClick={() => setAboutOpen(!aboutOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={aboutOpen}
          >
          </FaChevronDown>
        </div>
        <Collapse in={aboutOpen}>
          <div className="text-justify text-black font-semibold mb-2">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
      <div className="hr-line"></div>
      <div className="help-div">
        <div className="cc-div">
          <h6 className="title text-lg ">Help</h6>
          <FaChevronDown
            className={helpOpen?"chevron1":"chevron2"}
            onClick={() => setHelpOpen(!helpOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={helpOpen}
          >
          </FaChevronDown>
        </div>
        <Collapse in={helpOpen}>
          <div id="example-collapse-text" className="text-justify text-black font-semibold mb-2">
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
    </div>
  )
}

export default Contact
