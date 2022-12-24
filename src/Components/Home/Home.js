import { Button } from '@mui/material';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {

  const image="https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg"


  return (
    <div>
<Carousel className="mr-1 ml-1 lg:mr-0 lg:ml-0 ">
      <Carousel.Item interval={1000} className="w-[100%] sm:max-h-[50vh] lg:max-h-[90vh] h-[100%]">
        <img className='w-[100%]' 
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className="w-[100%] sm:max-h-[50vh] lg:max-h-[90vh] h-[100%]">
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
      <Carousel.Item className="w-[100%] sm:max-h-[50vh] lg:max-h-[90vh] h-[100%]">
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
                <div className="col-lg-4 col-md-6">
                    <div className="mb-3">
                        <h6 className="text-uppercase">Services</h6>
                        <h1 className="display-5">Organic Farm Services</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit sed stet labore</p>
                    <Button className='bg-gradient-to-br from-indigo-500 to-sky-500' variant='contained'>Contact Us</Button>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-carrot display-1 text-primary mb-3"></i>
                        <h4>Fresh Vegetables</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-apple-alt display-1 text-primary mb-3"></i>
                        <h4>Fresh Fruits</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-dog display-1 text-primary mb-3"></i>
                        <h4>Healty Cattle</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-tractor display-1 text-primary mb-3"></i>
                        <h4>Modern Truck</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-seedling display-1 text-primary mb-3"></i>
                        <h4>Farming Plans</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


{/* ........................Featurs Why us............................ */}

<div className="container-fluid feature py-5 pb-lg-0 mb-4 mt-5 bg-purple-600">
        <div className="container py-5 pb-lg-0">
            <div className="mx-auto text-center mb-3 pb-2" >
                <h6 className="text-uppercase text-yellow-400">Features</h6>
                <h1 className="display-5 text-white">Why Choose Us!!!</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-3">
                    <div className="text-white mb-5">
                        <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3">
                            <i className="fa fa-seedling fs-4 text-white"></i>
                        </div>
                        <h4 className="text-white">100% Organic</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                    <div className="text-white">
                        <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3">
                            <i className="fa fa-award fs-4 text-white"></i>
                        </div>
                        <h4 className="text-white">Award Winning</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-block bg-gradient-to-br  to-orange-400 rounded-lg text-white h-100 text-center p-5 pb-lg-0">
                        <p>At et justo elitr amet sea at. Magna et sit vero at ipsum sit et dolores rebum. Magna sea eos sit dolor, ipsum amet no tempor ipsum eirmod lorem eirmod diam tempor dolor eos diam et et diam dolor ea. Clita est rebum amet dolore sit. Dolor stet dolor duo clita, vero dolor ipsum amet dolore magna lorem erat stet sed vero dolor</p>
                        {/* <img className="img-fluid" src="img/feature.png" alt=""> */}
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="text-white mb-5">
                        <div className="bg-secondary rounded-pill flex items-center justify-center mb-3">
                            <i className="fa fa-tractor fs-4 text-white"></i>
                        </div>
                        <h4 className="text-white">Modern Farming</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                    <div className="text-white">
                        <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3">
                            <i className="fa fa-phone-alt fs-4 text-white"></i>
                        </div>
                        <h4 className="text-white">24/7 Support</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
      
    </div>
  )
}

export default Home


