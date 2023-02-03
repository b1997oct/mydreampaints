import { Button } from "@material-tailwind/react";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./home.css";
import "swiper/css/scrollbar";
// import 'swiper/swiper-bundle.css';
import painting from "../../Assets/painting.jpg"
import FeatureProducts from '../Utils/FeatureProducts';
import { ArrowBack, ArrowBackIosNewSharp, FormatPaintSharp, SafetyCheckTwoTone, Timer, Timer10, TimerRounded, TimerSharp } from "@mui/icons-material";
import { FaHandshake, FaTree } from "react-icons/fa";
import Faq from "../Store/Faq"
import i1 from "../../Assets/i1.png"
import i2 from "../../Assets/i2.png"
import i3 from "../../Assets/i3.png"
import i4 from "../../Assets/i4.png"
import i5 from "../../Assets/i5.png"
import phone from "../../Assets/phone.png"
import { Backdrop, Box, Divider, Fade, Typography } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import image1 from "../../Assets/image1.jpg"
import image2 from "../../Assets/image2.jpg"
import image3 from "../../Assets/image3.jpg"
import image4 from "../../Assets/image4.jpg"
import pd1 from "../../Assets/pd1.png"
import pd2 from "../../Assets/pd2.png"
import pd3 from "../../Assets/pd3.png"
import pd4 from "../../Assets/pd4.png"
import Modal from '@mui/material/Modal';
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import shield from "../../Assets/shield.gif"
import tree from "../../Assets/tree.gif"
import eco from "../../Assets/eco.gif"
import armchair from "../../Assets/armchair.gif"
import roller from "../../Assets/paint-roller.gif"
import timer from "../../Assets/timer.gif"






function Home() {


    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // var slides = [
    //     { image: image1, id: 1 },
    //     { image: image2, id: 2 },
    //     { image: image3, id: 3 },
    //     { image: image4, id: 4 },
    // ]
    var slides = [
        { image: image1, id: 1 },
        { image: img2, id: 2 },
        { image: img3, id: 3 },
        { image: img4, id: 4 },
    ]

    var data = [
        {
            id: 1,
            image: i1,
            title: "On Time Completion",
            discription: "My dream paint promise you the completion of project in time if in case any emergency iterruptions occurs then we'll info you before but most of the time our projects complete in time"
        },
        {
            id : 2,
            image : i2,
            title : "Expert Color Consultancy",
            discription : "Mydream Paints Safe Painting Service offers a curated selection of our favourite safe painting colours for you to choose from. Our expert will help you finalize the colours.",
        },
        {
            id : 3,
            image : i4,
            title : "Professionally Trained Painters",
            discription : "We use a well-established execution process with a robust project managment framework to ensure a high quality, on time execution of your home interior design!",
        },
        {
            id : 4,
            image : i3,
            title : "On Time Completion",
            discription : "My dream paint promise you the completion of project in time if in case any emergency iterruptions occurs then we'll info you before but most of the time our projects complete in time",
        },
        {
            id : 5,
            image : i5,
            title : "After all paiting complete",
            discription : "Once the site is ready, we do a post-painting clean-up & home disinfection service and will give you a walkthrough of how to take care of your walls.",
        }
    ]

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overflowY: "hidden",
        bgcolor: "background.paper",
        borderRadius: "10px",
        p: 4,
    };

    return (
        <div>
            <div>
                <Swiper
                    slidesPerView={1}
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    navigation={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                >
                    {slides.map((data) => (
                        <SwiperSlide key={data.id}>
                            <div className="lg:h-[91vh]">
                                <img src={data.image} alt="img1"
                                    className="w-full h-full"
                                />
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
            {/* .....................Services................................ */}

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-4 md-g-5 ">
                        <div className="col-lg-4 col-md-6 flex justify-center flex-col">
                            <div className="mb-3 ">
                                <h6 className="text-uppercase text-center text-2xl">Mydream Painting Service</h6>
                            </div>
                            <div className="overflow-hidden justify-center m-auto ">
                                <img src={painting} alt="Paint" className="" />
                            </div>
                            <Button className="bg-yellow-400 text-black hover:shadow-md hover:shadow-[#f0ea39f9] px-2 my-[1.5rem] md:my-2 mx-1" size="sm"
                                onClick={() => navigate("/services")}
                            >SERVICES</Button>
                        </div>
                        <div onClick={()=>{handleOpen(); setActive(1)}} className="col-lg-4 col-md-6 hover:mt-4 up-move my-auto">
                            <div className="service-item bg-light text-center p-5 f-cards shadow cursor-pointer rounded-3xl">
                                <img src={i1} alt="i1" className="mx-auto" />
                                <h4>100% Dust Free Process</h4>
                                <p className="mb-0 hidden md:block">Fill the form online and with your details, following which, you will receive a call from our customer care executive to schedule an appointment for our My dream Paints Safe Painting Service.</p>
                            </div>
                        </div>
                        <div className="md:hidden"></div>
                        <div  onClick={()=>{handleOpen(); setActive(2)}} className="col-lg-4 col-md-6 up-move my-auto">
                            <div className="service-item bg-light text-center p-5 f-cards shadow cursor-pointer">
                                <img src={i2} alt="i1" className="mx-auto" />
                                <h4>Expert Color Consultancy</h4>
                                <p className="mb-0 hidden md:block">Mydream Paints Safe Painting Service offers a curated selection of our favourite safe painting colours for you to choose from. Our expert will help you finalize the colours.</p>
                            </div>
                        </div>
                        <div  onClick={()=>{handleOpen(); setActive(3)}} className="col-lg-4 col-md-6 up-move">
                            <div className="service-item bg-light text-center p-5 f-cards shawdow cursor-pointer">
                                <img src={i4} alt="i1" className="mx-auto" />
                                <h4>Professionally Trained Painters</h4>
                                <p className="mb-0 hidden md:block">We use a well-established execution process with a robust project managment framework to ensure a high quality, on time execution of your home interior design!</p>
                            </div>
                        </div>
                        <div  onClick={()=>{handleOpen(); setActive(4)}} className="col-lg-4 col-md-6 up-move">
                            <div className="service-item bg-light text-center p-5 f-cards shadow cursor-pointer">
                                <img src={i3} alt="i1" className="mx-auto" />
                                <h4>On Time Completion</h4>
                                <p className="mb-0 hidden md:block">My dream paint promise you the completion of project in time if in case any emergency iterruptions occurs then we'll info you before but most of the time our projects complete in time</p>
                            </div>
                        </div>
                        <div  onClick={()=>{handleOpen(); setActive(5)}} className="col-lg-4 col-md-6 up-move">
                            <div className="service-item bg-light text-center p-5 f-cards shadow cursor-pointer">
                                <img src={i5} alt="i1" className="mx-auto" />
                                <h4>After all paiting complete</h4>
                                <p className="mb-0 hidden md:block">Once the site is ready, we do a post-painting clean-up & home disinfection service and will give you a walkthrough of how to take care of your walls.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                // BackdropComponent={Backdrop}
                // BackdropProps={{
                //     timeout: 500,
                // }}
            >
                    <Box
                        sx={style}
                        className="w-[95vw]  sm:w-[500px] md:w-[700px] sm:h-[30rem] overflow-hidden"
                    >
                        {/* back */}
                        <div
                            className="bg-white flex items-center justify-start"
                            onClick={handleClose}
                        >
                            <Button className="flex" variant="text">
                                <ArrowBackIosNewSharp className="scale-75" />Back
                            </Button>
                        </div>
                        {data.filter((data)=> {return active === data.id}).map((data) => (
                        <div className="flex flex-col">
                              <div className="mx-auto w-20 h-20">
                            <img src={data.image} alt="i1" className="w-full h-full" />
                            </div>
                            <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            <h4 className="text-xl sm:text-2xl md:text-3xl">{data.title}</h4>
                                <p className="text-center">{data.discription}</p>
                            </div>

                        </div>
                        ))}
                    </Box>
            </Modal>



            {/* **********************************feauture products******************/}

            <>
                <FeatureProducts />
            </>


            {/* ........................Featurs Why us............................ */}

            <div className="container-fluid feature py-5 mb-4 mt-5 bg-white">
                <div className="container py-5 pb-lg-0">
                    <div className="mx-auto text-center mb-3 pb-2" >
                        <h6 className="text-uppercase text-[#f3f] font-semibold">Features</h6>
                        <h1 className="text-[#2568FB] font-semibold text-5xl">Why Choose Us!!!</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 bg-gray-100 drop-shadow-md rounded-lg py-4 up-move">
                            <div className="mb-5">
                                <div className="flex justify-center p-2 bg-white rounded-full">
                                    {/* <FormatPaintSharp className="scale-125 text-orange-500" /> */}
                                    <img src={roller} alt="shield" className="w-20 h-20 flex mx-auto justify-center" />
                                </div>
                                <h className="p-1 font-semibold text-start text-xl text-red-400">Expert Color Consultancy</h>
                                <p className="mb-0  p-1 font-semibold text-justify">Our experts help choose color palettes that suit your preference . Get free color previews before getting actual painting!</p>
                            </div>
                            <div className="">
                                <div className="flex justify-center bg-white p-2 rounded-full">
                                    {/* <FaTree className="scale-150 text-green-400 my-1" /> */}
                                    <img src={tree} alt="shield" className="w-20 h-20 flex mx-auto justify-center" />
                                </div>
                                <h className="p-1 font-semibold text-start text-xl text-green-500">Hygienic and Dust Free Process</h>
                                <p className="mb-0  p-1 font-semibold text-justify">We use high tech machines to ensure a dust-free and safe home makeover.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="bg-gray-50 drop-shadow-md up-move rounded-lg py-10 md:px-5 px-2 text-center lg:mt-16">
                                {/* <SafetyCheckTwoTone className="scale-[3] mb-4 text-green-500" /> */}
                                <img src={shield} alt="shield" className="w-20 h-20 flex mx-auto justify-center" />
                                <h4 className="text-teal-400">Procare & Safety</h4>
                                <div className="font-semibold text-justify">Your Safety is our first priority. Our team and applicators are vaccinated and ensure hygienic service delivery. Our core focus is on green technology. We make and sell paints that are not only technologically advanced but also environment friendly.</div>
                                {/* <img className="img-fluid" src="img/feature.png" alt=""> */}
                                <Button className="bg-blue-500  hover:shadow-lg hover:shadow-blue-500 px-2 m-1" size="sm"
                                    onClick={() => navigate("/contact")}
                                >CONTACT US</Button>
                            </div>
                        </div>
                        <div className="col-lg-3 bg-gray-100 drop-shadow-md rounded-lg up-move py-4">
                            <div className="mb-5">
                                <div className="flex justify-center bg-white p-2 rounded-full">
                                    {/* <TimerSharp className="scale-150 text-gray-500" /> */}
                                    <img src={timer} alt="shield" className="w-20 h-20 flex mx-auto justify-center" />
                                </div>
                                <h className="p-1 font-semibold text-start text-xl text-indigo-500">Supervision & On Time Completion</h>
                                <p className="mb-0  p-1 font-semibold text-justify">We work on your schedule, supervise and plan execution to make sure that we complete on-time.</p>
                            </div>
                            <div className="">
                                <div className="flex justify-center bg-white p-[.7rem] rounded-full">
                                    {/* <FaHandshake className="scale-[2.5] text-sky-500" /> */}
                                    <img src={armchair} alt="shield" className="w-20 h-20 flex mx-auto justify-center" />

                                </div>
                                <h className="p-1 font-semibold text-start text-xl text-teal-500">Protection of furniture</h>
                                <p className="mb-0 p-1 font-semibold text-justify">We secure and shift all your goods with the utmost care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-[4px] md:mx-4 border-2 border-gray-700 p-5 rounded-md">
                <div className="text-center flex justify-center flex-col md:flex-row text-xl md:text-3xl font-semibold">
                    To paint your home, please give us a call at.
                    <div className="flex mx-[auto] md:mx-0">
                        <div className="w-0 sm:w-8 h-8 my-[auto]">
                            <img src={phone} alt="phone" className="w-full h-full" />
                        </div>
                        <div className="font-bold md:text-4xl text-3xl truncate">
                            +91 9482658028
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="flex flex-wrap bg-white mt-4 md:px-4 md:py-10">
                    <div className="flex p-2 md:border-r-0 border-r-[1px] text-center justify-center md:border-b-0 border-b-[1px] border-gray-400 flex-col gap-2 items-center md:gap-4 w-1/2 lg:w-1/4">
                        <img src={pd1}
                            className="w-16 h-16"
                            alt="pd1" />
                        <div className="font-bold p-2 text-[#211d0b] text-lg md:text-xl">900+ COLOURS</div>
                        <div className="text-center text-lg text-gray-500 md:w-52">Available in 900+ colours including all rainbow colours and shades.</div>
                    </div>
                    <div className="flex md:border-b-0 border-b-[1px] justify-evenly border-gray-400 flex-col gap-2 items-center md:gap-4 w-1/2 lg:w-1/4">
                        <img src={pd2}
                            className="w-16 h-16"
                            alt="pd2" />
                        <div className="font-bold text-[#211d0b] text-center text-lg md:text-xl">WASHABLE DISTEMPER</div>
                        <div className="text-center text-lg text-gray-500 md:w-52">You can easily clean your stains with a wet cloth.</div>
                    </div>
                    <div className="flex md:border-r-0 border-r-[1px] justify-center p-2 border-gray-400 flex-col gap-2 items-center md:gap-4 w-1/2 lg:w-1/4">
                        <img src={pd3}
                            className="w-14 h-14"
                            alt="pd3" />
                        <div className="font-bold text-[#211d0b] text-lg md:text-xl">FINISH</div>
                        <div className="text-center text-lg text-gray-500 md:w-52">Formulated to provide beautiful, smooth finish that remains longer and safe to environment.</div>
                    </div>
                    <div className="flex p-2 justify-center flex-col gap-2 items-center md:gap-4 w-1/2 lg:w-1/4">
                        <img src={pd4}
                            className="w-16 h-16"
                            alt="pd4" />
                        <div className="font-bold text-[#211d0b] text-lg md:text-xl">AFFORDABLE</div>
                        <div className="text-center text-lg text-gray-500 md:w-52">An affordable yet long lasting paint for interior and exterior walls of your house.</div>
                    </div>

                </div>
                <div className="flex justify-center py-4">
                    <Button size="sm" variant="filled" className="bg-[#15c5fb] hover:shadow-lg hover:shadow-[#15c5fb]" onClick={() => navigate("/products")} >CHECKOUT PRODUCTS</Button>
                </div>
            </div>

            <div className="">
                <Divider className="bg-gray-900 h-[2px] my-4" />
                <h3 className="my-10 text-2xl font-bold md:text-4xl ml-10">FAQs</h3>
                <Faq />
            </div>

        </div>
    )
}

export default Home


