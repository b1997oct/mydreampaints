import React from 'react'
import "./Global.css"
import Carousel from 'react-bootstrap/Carousel';

function Products() {

  const image="https://images.pexels.com/photos/3001800/pexels-photo-3001800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className='products-div'>
    <Carousel className='slider'>
      <Carousel.Item interval={1000}>
        <img
          className="slider-image"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="slider-image"
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
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
    </div>
  )
}

export default Products
