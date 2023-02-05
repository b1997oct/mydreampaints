import "./Global.css"
import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FaChevronDown } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Select, MenuItem, Divider, TextField } from "@mui/material"
import congrats from "../Assets/congrats.png"
import { Facebook, Instagram, LocationOn, Mail, Phone, Pinterest, YouTube } from "@mui/icons-material";
import { youtube,facebookPage,insagram,pinterest } from "../SocialLinks";


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
    <div className="cantact-div">
      {active ? <div className="flex flex-col lg:justify-center">
        <div className="justify-evenly flex">
          <h4 className="sm:text-3xl md:text-4xl lg:text-5xl text-4xl my-[2%] gap-3 flex flex-col sm:flex-row">
            <span className="text-[#04ef7a] text-center font-bold">CONNECT WITH</span> <h className="text-[#fff] font-bold">MY DREAM PAINTS</h></h4>
        </div>
        <div className="">
          <div className="w-[96%] lg:w[90%] max-w-[70rem] mx-auto md:h-[30rem] rounded-2xl overflow-hidden md:flex md:mb-10 ">

            <div className="md:w-1/2 z-8 relative bg-white text-[#023059] flex gap-4 justify-around p-4 flex-col text-lg font-semibold ">
              <div>
                <div className="text-bold text-2xl">Contact Information</div>
                <div className="">Get Free 1 Liter Paint sample After filling this form</div>
              </div>
              <div className="grid gap-4">
                <div className="flex gap-8"><Phone />+91 9482658028</div>
                <div className="flex gap-8"><Mail />mydreampaintmgt@gmail.com</div>
                <div className="flex gap-8"><LocationOn />Tiptur, Tumkur, Karnataka - 572119</div>
              </div>
              <div className="flex gap-3 mt-8">
                <a href={youtube} target="_blank"><YouTube className="cursor-pointer text-[#0e4371]" /></a>
                <a href={facebookPage} target="_blank"><Facebook className="cursor-pointer text-[#0e4371]" /></a>
                <a href={insagram} target="_blank"><Instagram className="cursor-pointer text-[#0e4371]" /></a>
                <a href={pinterest} target="_blank"><Pinterest className="cursor-pointer text-[#0e4371]" /></a>
              </div>
              <div className="absolute z-9 w-52 h-52 bg-gradient-to-br to-indigo-600 from-green-500
               md:bottom-[-15%] md:right-[-15%] bottom-[-25%] right-[-20%] rounded-full"></div>

            </div>
            <div className="relative bg-[#0e4371] z-10 md:w-1/2">
              <form className="md:mx-[12%] p-4 md:mt-4" onSubmit={handleSubmit}>
                <div className="flex flex-col  gap-6 md:w-80">
                <TextField id="standard-basic" className="" InputLabelProps={{ className: "text-white" }} inputProps={{ className: "text-white" }}
                  variant="standard" type="text" color="warning" label="Full Name"
                  name="name" onChange={handleChange} />
                <TextField id="standard-basic" type="text" variant="standard" label="Phone Number" color="warning" placeholder="Phone number*" InputLabelProps={{ className: "text-white" }}
                  name="mobile" className="text-white" inputProps={{ className: "text-white" }} onChange={handleChange} />
                <TextField type="text" variant="standard" label="E-Mail" color="warning"  placeholder="Enter your email" InputLabelProps={{ className: "text-white" }}
                  name="email" inputProps={{ className: "text-white" }} onChange={handleChange} />
                <Select
                  InputLabelProps={{ className: "text-white" }}
                  variant="standard"
                  color="secondary" size="small"
                  name="options"
                  value={values.options}
                  sx={{ color: "white" }}
                  onChange={handleChange}
                >
                  <MenuItem disabled >Select your Asset stage</MenuItem>
                  <MenuItem value="1">Fresh Painting</MenuItem>
                  <MenuItem value="2">Re-Painting</MenuItem>
                </Select>
                <TextField variant="standard" type="text" label="Message" placeholder="Any Message" InputLabelProps={{ className: "text-white" }}
                  name="message" color="warning" inputProps={{ className: "text-white" }} onChange={handleChange} />
                  </div>
                <button className="bg-gradient-to-tl to-green-400 from-green-400 hover:shadow-lg hover:shadow-green-300 font-bold text-[#031525] py-2 px-4 mt-6 mb-3 md:mb-0 rounded-lg" type="submit" >Send Message</button>
              </form>
            </div>
          </div>
          <div className="lg:w-[35rem] md:hidden mt-[2.5rem] sm:max-w-[35rem] md:my-4 my-[0] mx-[auto] sm:border-r sm:border-l border-gray-800">
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
          <div className="flex justify-center font-semibold gap-1 my-4">Read the<Link to="/terms-and-conditions" className="no-underline flex md:gap-1"><span className="text-blue-400 cursor-pointer">Term's</span><span className="text-black">&</span> <span className="text-blue-400 cursor-pointer">Conditions</span></Link></div>
        </div>

      }

    </div>
  )
}

export default Contact
