import "./Global.css"
import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FaChevronDown } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { Alert, Button } from "@material-tailwind/react";
import { Select, TextField, MenuItem, Radio, Divider } from "@mui/material"
import congrats from "../Assets/congrats.png"
import terms from "../Assets/Bresume.pdf"


function Contact() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    options: "1",
    message: ""
  });

  // Alert
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(true);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem("admin", false)

    if (values.name === `${process.env.REACT_APP_ADMIN}`) {
      console.log("admin...........")
      localStorage.setItem("admin", true)
      navigate("/admin")
    }
    console.log(values)

    setActive(false)

  }

  function handleAlert() {
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [active])

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
      {/* <Alert
        show={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 80 },
        }}
        onClick={() => setShow(false)}
        className="absolute bg-green-500 cursor-pointer font-bold text-center"
      >
        Thank You for submiting we will cantact you with in 24 hours
      </Alert> */}
      {/* <div className="w-20 h-20 mt-20 absolute ml-20 rounded-full overflow-hidden">
  
      </div> */}

      {active ? <div className="contact-div flex flex-col  lg:justify-center">
        <div className="justify-evenly flex">
          <h4 className="sm:text-3xl md:text-4xl lg:text-5xl text-4xl mt-[3%] gap-3 flex flex-col sm:flex-row">
            <span className="text-[#04ef7a] text-center font-bold">CONNECT WITH</span> <h className="text-[#000080] font-bold">MY DREAM PAINT</h></h4>
        </div>
        <div className="">
          <div className="form-div md:mb-10">
            <form className="cont-form gap-3" onSubmit={handleSubmit}>
              <div className="text-black font-bold">Get Free 1 ltr Paint sample After filling this form</div>
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
                <MenuItem value="1">Fresh Painting</MenuItem>
                <MenuItem value="2">Re-Painting</MenuItem>
              </Select>
              <TextField type="text" label="Any message" color="secondary" size="medium" placeholder="Message"
                name="message" onChange={handleChange} />
              <button className="button-1 hover:shadow-lg" type="submit" onClick={handleAlert} >ENQUIRE NOW</button>
            </form>
          </div>
          <div className="lg:w-[35rem] md:hidden sm:max-w-[35rem] md:my-4 my-[0] mx-[auto] sm:border-r sm:border-l border-gray-800">
            <div className="hr-line"></div>
            <div className="about-div">
              <div className="cc-div cursor-pointer" onClick={() => setAboutOpen(!aboutOpen)}>
                <h6 className="title text-lg ">About Us</h6>
                <FaChevronDown
                  className={aboutOpen ? "chevron1" : "chevron2"}
                  aria-controls="example-collapse-text"
                  aria-expanded={aboutOpen}
                >
                </FaChevronDown>
              </div>
              <Collapse in={aboutOpen}>
                <div className="text-justify text-black font-semibold">
                  <span className="font-bold">My dream Paint</span> produces high-quality paints with innovation and eco-friendliness. We consistently deliver paint solutions that not only serve your needs, but also protect the world we live in.
                </div>
              </Collapse>
            </div>
            <div className="hr-line"></div>
            <div className="help-div">
              <div className="cc-div cursor-pointer" onClick={() => setHelpOpen(!helpOpen)}>
                <h6 className="title text-lg ">Help</h6>
                <FaChevronDown
                  className={helpOpen ? "chevron1" : "chevron2"}
                  aria-controls="example-collapse-text"
                  aria-expanded={helpOpen}
                >
                </FaChevronDown>
              </div>
              <Collapse in={helpOpen}>
                <div id="example-collapse-text" className="text-left text-black font-semibold ">
                  If you have any questions or need further information, please <span className="font-bold">feel free to contact Us.</span>
                  Our Phone number <span className="font-bold">+91 9482658028</span> our business email<br /> <span className="font-bold">mydreampaintmgt@gmail.com</span><br />
                  "Developer contact email <span className="font-bold">b1997oct@gmail.com</span>"
                </div>
              </Collapse>
            </div>
            <div className="hr-line"></div>
          </div>


        </div>

        {/* <div className="hr-line"></div> */}
        <Divider className="h-[2px] bg-gray-500" />
        <div className="hidden items-center flex-col md:flex m-4">
          <div className="w-full">
            <h2 className="font-bold">About Us :</h2>
            <div id="example-collapse-text" className="text-justify text-2xl text-black font-semibold">
              <span className="font-bold">My dream Paint</span> produces high-quality paints with innovation and eco-friendliness. We consistently deliver paint solutions that not only serve your needs, but also protect the world we live in.
                Our Phone number <span className="font-bold">+91 9482658028</span> our business email <span className="font-bold">mydreampaintmgt@gmail.com</span><br />
                "Developer contact email <span className="font-bold">b1997oct@gmail.com</span>"
              </div>
            </div>
        </div>
        
      </div>
        :
        <div className="grid place-items-center py-20 ">
          <div className="mx-3 md:w-96 h-80 my-4">
            <img src={congrats} alt="img" />
          </div>
          <div className="flex flex-col gap-4 ">
            <Button variant="contained" size="sm" className="bg-green-500 w-full truncate hover:shadow-lg hover:shadow-green-500" onClick={() => setActive(true)}>Submit one more form</Button>
            <Button variant="contained" size="sm" className="w-full hover:shadow-lg hover:shadow-blue-500" onClick={() => navigate("/")} >Go to home page</Button>
          </div>
          <div className="flex justify-center font-semibold gap-1 my-4">Read the<a href={terms} target="_blank" className="no-underline flex gap-1"><span className="text-blue-400 cursor-pointer">Term's</span><span className="text-black">&</span> <span className="text-blue-400 cursor-pointer">Conditions</span></a></div>
        </div>

      }

    </div>
  )
}

export default Contact
