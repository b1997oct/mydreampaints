import React from 'react'
import { itemsList } from "./data";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";



function FeatureProducts() {
  return (
    <div>

      <div className="">
        {/* <div className="w-[40vw] h-[85vh] fixed rounded-md border-2 border-red-500 border-double bg-white">
     </div> */}
        <div className='py-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-center'>
          <h className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">Our Featured products</h>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView:3
            },
            645 : {
              slidesPerView:2
            },
            375 : {
              slidesPerView:1.5
            }
          }}
          centeredSlides={true}
          spaceBetween={30}
          scrollbar={{
            hide: true,
          }}
          navigation={true}
          modules={[Navigation, Scrollbar]}
          className="h-[32rem] my-4"
        >
          {itemsList.map((items) => (
            <SwiperSlide key={items.id}
              className="bg-white w-24"
            >
              <div className='gap-2'>
                <div className='flex w-[100%] h-[20rem]'>
                <img
                  className="w-full"
                  src={items.image}
                  alt={items.name}
                />
                </div>
                <div className='p-2'>
                <div>
                  {items.name}
                </div>
                <div>
                  {items.description}
                </div>
                <div>
                  rating : {items.rating}
                </div>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default FeatureProducts
