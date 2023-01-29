import React from "react";
import { itemsList } from "./data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Dashboard, DoneAll, FastForward, HealthAndSafety, LocationOn, SafetyCheck, Star, StarBorderOutlined, StarHalf } from "@mui/icons-material";
import { useEffect } from "react";

const Services = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (

    <div className="">
      <div className='py-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-center flex justify-center items-center'>
        <div className="mx-4 text-center lg:text-4xl md:text-3xl text-xl font-bold hover:text-white cursor-pointer text-[#e9e9d4] ">Our Services makes customer Happy!</div>
      </div>

      <div className="sm:m-1 m-0 ">
        {/* <div className="m-8 text-justify lg:text-2xl md:text-xl sm:text-md text-lg font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus consequatur magni ratione facere rerum sunt, voluptatem quidem! Nam sapiente libero quisquam ratione fugit cum quos aliquid possimus consequatur magnam!</div> */}
        <Box className="flex flex-wrap mt-6 md:mt-0">
          {itemsList.map((items) => (
            // if (count%2 === 1) {

            // } 
            <Card className="w-full m-[2%] md:mb-24 mb-12 drop-shadow-xl shadow-gray-600">
              <CardActionArea>
                <div className="flex flex-col md:flex-row md:h-[30rem]">
                  <div className="md:w-1/2 md:p-4 md:mb-2 lg:scale-95 mb-2 h-72 md:h-full">
                    <CardMedia
                      className=" w-full h-full rounded-b-md md:rounded"
                      component={"img"}
                      src={items.image}
                      alt={items.name}
                    />
                  </div>
                  <CardContent className={items.bg ? `${items.bg} rounded-md flex justify-evenly flex-col flex-1 h-72 md:h-auto` : "bg-indigo-200 rounded-md flex justify-evenly flex-col flex-1 h-72 md:h-auto"}>
                    <div className={`flex flex-col text-black ${items.font}`}>
                      <h3 className={`mt-4 md:mt-10 md:text-4xl font-bold`} >
                        {items.name}
                      </h3>
                      <div className="flex font-bold capitalize">
                        <LocationOn />{items.location}
                      </div>
                    </div>
                    <p className="text-white md:text-2xl text-justify lg:text-3xl">{items.description}</p>
                    <div className="font-bold text-lg my-2 md:my-4">This painting service is</div>
                    <div className={`flex gap-4 ${items.font} font-semibold`}>
                      <div className="flex gap-2 "><DoneAll/>Safe</div>
                      <div className="flex gap-2"><FastForward/>Fast</div>
                      <div className="flex gap-2"><Dashboard/>Customisable</div>
                    </div>
                    <div className="font-semibold whitespace-nowrap text-xl flex items-end md:gap-2 gap-1 md:mt-4">
                      <div className="">Customer rating : {items.rating}</div>
                      <div className="flex gap-1 my-auto text-yellow-500">
                        <Rating name="read-only" value={items.rating} readOnly />
                      </div>

                      {/* {items.rating === 4 ?
                      <div className="flex gap-1 text-yellow-500 my-auto">
                      <Star/>
                      <Star/>
                      <Star/>
                      <Star/>
                      <StarBorderOutlined/>
                      </div>
                     : items.rating === 5 ?
                     <div className="flex gap-1 text-yellow-400 my-auto">
                     <Star/>
                     <Star/>
                     <Star/>
                     <Star/>
                     <Star/>
                     </div>
                     : <div className="flex gap-1 text-yellow-400 my-auto">
                     <Star/>
                     <Star/>
                     <Star/>
                     <StarHalf/>
                     <StarBorderOutlined/>
                      //  </div>} */}
                    </div>

                  </CardContent>
                </div>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Services;

