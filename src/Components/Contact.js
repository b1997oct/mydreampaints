import "./Global.css"
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FaChevronDown } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import { Select, TextField,MenuItem } from "@mui/material";

function Contact() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    options: "All Constructions",
    message:""
  });

  // Alert
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    console.log(values)
    // navigate("/")
  }

 function handleAlert () {
  setShow(true)
 } 



  function handleChange(e) {

    const { name, value } = e.target;

    setValues((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  }


  return (
    <div>
      {/* <div className='py-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-center flex justify-center items-center absolute'>
    <div className="mx-4 text-justify lg:text-4xl md:text-3xl text-2xl font-semibold text-white">My Dream paints</div>
  </div> */}
      <Alert
        show={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        onClick={() => setShow(false)}
        className="absolute bg-green-500 cursor-pointer font-bold text-center"
      >
        Thank You for submiting we will cantact you with in 24 hours
      </Alert>
      <div className="contact-div flex flex-col  lg:justify-center">
        <div className="justify-evenly flex">
          <h4 className="sm:text-3xl md:text-4xl lg:text-5xl text-4xl mt-[3%] gap-3 flex flex-col sm:flex-row">
            <span className="text-[#04ef7a] text-center font-bold">CONNECT WITH</span> <h className="text-[#000080] font-bold">MY DREAM PAINT</h></h4>
        </div>
        <div className="">
          <div className="form-div">
            <form className="cont-form gap-3" onSubmit={handleSubmit}>
              <div className="text-black font-bold">Get the right assistance for all your painting needs</div>
              <TextField type="text" color={"secondary"} label="Name" size="small" placeholder="Enter your name"
                name="name" onChange={handleChange} />
              <TextField type="text" label="Phone No." color="secondary" size="small" placeholder="Phone number*"
                name="mobile" onChange={handleChange} />
              <TextField type="text" label="Email" color="secondary" size="small" placeholder="Enter your email"
                name="email" onChange={handleChange} />
                <Select
                        // id="demo-simple-select"
                        color="secondary" size="small"
                        name="options"
                        value={values.options}
                        // label="Status your quiers"
                        onChange={handleChange}
                      >
                        <MenuItem disabled >Select your Asset stage</MenuItem>
                        <MenuItem value="All Constructions">All Constructions</MenuItem>
                        <MenuItem value="New Contruction">New Contruction</MenuItem>
                        <MenuItem value="Old Construction">Old Construction</MenuItem>
                        <MenuItem value="Under Construction">Under Construction</MenuItem>
                      </Select>
              <TextField type="text" label="Any message" color="secondary" size="medium" placeholder="Message"
              name="message" onChange={handleChange} />
              <button className="button-1" type="submit" onClick={handleAlert} >ENQUIRE NOW</button>
            </form>

          </div>
          <div className="lg:w-[35rem] sm:max-w-[35rem] md:my-4 my-[0] mx-[auto] sm:border-r sm:border-l border-gray-800">
            <div className="hr-line"></div>
            <div className="about-div">
              <div className="cc-div">
                <h6 className="title text-lg ">About Us</h6>
                <FaChevronDown
                  className={aboutOpen ? "chevron1" : "chevron2"}
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
                  className={helpOpen ? "chevron1" : "chevron2"}
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
