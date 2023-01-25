import React from 'react'
import { itemsList } from "./data";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper";
import feature_product from "./images/feature_product.jpg"



function FeatureProducts() {
  return (
    <div className='bg-[#17a2b8]'>

      <div className="">
        {/* <div className="w-[40vw] h-[85vh] fixed rounded-md border-2 border-red-500 border-double bg-white">
     </div> */}
        <div className='py-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-center'>
          <h className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">100+ Projects Completed</h>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            845: {
              slidesPerView: 2.5
            },
            768: {
              slidesPerView: 2
            },
            645: {
              slidesPerView: 1.5
            },
            375: {
              slidesPerView: 1
            }
          }}
          speed={999}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
        }}
          centeredSlides={true}
          spaceBetween={30}
          scrollbar={{
            hide: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay , Scrollbar]}
          className="h-[35rem] my-4"
        >
          {itemsList.map((items) => (
            <SwiperSlide key={items.id}
              className="bg-yellow-300 w-24"
            >
              <div className='gap-2'>
                <div className='flex w-[100%] md:h-[25rem] h-[25rem]'>
                  <img
                    className="w-full"
                    src={items.image}
                    alt={items.name}
                  />
                </div>
                <div className='p-2 grid place-items-center'>
                  <h3 className='md:mt-0'>
                    {items.name}
                  </h3>
                  <div className='font-semibold'>
                    {items.description}
                  </div>
                  {/* <div>
                  rating : {items.rating}
                </div> */}
                </div>
              </div>
            </SwiperSlide>

          ))}
          <SwiperSlide
            className="bg-white w-24"
          ><div className='h-[26rem]'>
              <img src={feature_product} 
              className="h-full w-full"              
              alt="fetured_product" />
            </div>
            <div className='p-2'>
              <h3>
                Call for any Quiers
              </h3>
              <div className='font-semibold'>
                Take a easy and right way for painting houses, buildings or any constructions because painting is done once
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FeatureProducts
