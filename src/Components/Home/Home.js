import { Button } from "@material-tailwind/react";
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./home.css";
import "swiper/css/scrollbar";
import  painting from "../../Assets/painting.png"
import FeatureProducts from '../Utils/FeatureProducts';
import { FormatPaintSharp, SafetyCheckTwoTone, TimerRounded } from "@mui/icons-material";
import { FaHandshake, FaTree } from "react-icons/fa";





function Home() {


    var image = "https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg"
    const navigate = useNavigate()

    return (
        <div>
            <Carousel className="mr-1 ml-1 lg:mr-0 lg:ml-0 ">
                <Carousel.Item interval={1000} className="w-[100%] sm:max-h-[50vh] lg:max-h-[85vh] h-[100%]">
                    <img className='w-[100%]'
                        src={image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className="w-[100%] sm:max-h-[50vh] lg:max-h-[85vh] h-[100%]">
                    <img
                        className="w-[50]"
                        src={image}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="w-[100%] sm:max-h-[50vh] lg:max-h-[85vh] h-[100%]">
                    <img
                        className="slider-image"
                        src={image}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* .....................Services................................ */}
           
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 flex justify-center flex-col">
                            <div className="mb-3 ">
                                <h6 className="text-uppercase text-center text-2xl">Painting Service</h6>
                            </div>
                            <div className="overflow-hidden justify-center m-auto ">
                            <img src={painting} alt="Paint" className="" />
                            </div>
                            <Button className="bg-blue-500 px-2 my-4 mx-1" size="sm"
                          onClick={()=>navigate("/services")}
                             >SERVICES</Button>
                        </div>
                        <div className="col-lg-4 col-md-6 hover:scale-105 transition-all my-auto">
                            <div className="service-item bg-light text-center p-5 f-cards shadow cursor-pointer">
                                <i className="fa fa-carrot display-1 text-primary mb-3"></i>
                                <h4>100% Dust Free Process</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                        <div className="md:hidden"></div>
                        <div className="col-lg-4 col-md-6 hover:scale-105 transition-all my-auto">
                            <div className="service-item bg-light text-center p-5 f-cards shadow cursor-pointer">
                                <i className="fa fa-apple-alt display-1 text-primary mb-3"></i>
                                <h4>Expert Color Consultancy</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 hover:scale-105 transition-all">
                            <div className="service-item bg-light text-center p-5 f-cards shawdow cursor-pointer">
                                <i className="fa fa-dog display-1 text-primary mb-3"></i>
                                <h4>Professionally Trained Painters</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 hover:scale-105 transition-all">
                            <div className="service-item bg-light text-center p-5 f-cards shadow cursor-pointer">
                                <i className="fa fa-tractor display-1 text-primary mb-3"></i>
                                <h4>On Time Completion</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 hover:scale-105 transition-all">
                            <div className="service-item bg-light text-center p-5 f-cards shadow cursor-pointer">
                                <i className="fa fa-seedling display-1 text-primary mb-3"></i>
                                <h4>Transparent Pricing</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* **********************************feauture products******************/}

            <>
          <FeatureProducts/>
            </>


            {/* ........................Featurs Why us............................ */}

            <div className="container-fluid feature py-5 mb-4 mt-5 bg-[#FECD45] ">
                <div className="container py-5 pb-lg-0">
                    <div className="mx-auto text-center mb-3 pb-2" >
                        <h6 className="text-uppercase text-white font-semibold">Features</h6>
                        <h1 className="text-[#2568FB] font-semibold text-5xl">Why Choose Us!!!</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3">
                            <div className="text-black mb-5">
                                <div className="flex justify-center bg-white p-2 rounded-full">
                                    <FormatPaintSharp className="scale-125 text-orange-500" />
                                </div>
                                <h className="p-1 font-semibold text-start text-xl">Expert Color Consultancy</h>
                                <p className="mb-0  p-1 font-semibold text-justify">Our experts help choose color palettes that suit your preference . Get free color previews before getting actual painting!</p>
                            </div>
                            <div className="">
                                <div className="flex justify-center bg-white p-2 rounded-full">
                                    <FaTree className="scale-150 text-green-400 my-1" />
                                </div>
                                <h className="p-1 font-semibold text-start text-xl">Hygienic and Dust Free Process</h>
                                <p className="mb-0  p-1 font-semibold text-justify">We use high tech machines to ensure a dust-free and safe home makeover.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="rounded-lg bg-white h-100 text-center p-5 pb-lg-0">
                                <SafetyCheckTwoTone className="scale-[3] mb-4 text-green-500" />
                                <h4 className="text-green-700">Procare & Safety</h4>
                                <div className="font-semibold text-justify">Your Safety is our first priority. Our team and applicators are vaccinated and ensure hygienic service delivery. Our core focus is on green technology. We make and sell paints that are not only technologically advanced but also environment friendly.</div>
                                {/* <img className="img-fluid" src="img/feature.png" alt=""> */}
                                <Button className="bg-blue-500 px-2 m-1" size="sm"
                          onClick={()=>navigate("/contact")}
                             >CONTACT US</Button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mb-5">
                                <div className="flex justify-center bg-white p-2 rounded-full">
                                    <TimerRounded className="scale-150 text-gray-500" />
                                </div>
                                <h className="p-1 font-semibold text-start text-xl">Supervision & On Time Completion</h>
                                <p className="mb-0  p-1 font-semibold text-justify">We work on your schedule, supervise and plan execution to make sure that we complete on-time.</p>
                            </div>
                            <div className="">
                                <div className="flex justify-center bg-white p-[.7rem] rounded-full">
                                    <FaHandshake className="scale-[2.5] text-sky-500" />
                                </div>
                                <h className="p-1 font-semibold text-start text-xl">Protection of furniture</h>
                                <p className="mb-0 p-1 font-semibold text-justify">We secure and shift all your goods with the utmost care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home


