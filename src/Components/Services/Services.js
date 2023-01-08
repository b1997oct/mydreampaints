import React from "react";
import { itemsList } from "./data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Services = () => {

  const [count , setCount ] = useState(0);


  return (

    <div className="">
     <div className='py-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-center flex justify-center items-center'>
          <div className="mx-4 text-center lg:text-4xl md:text-3xl text-xl font-semibold text-white whitespace-nowrap">Our Services makes customer Happy!</div>
        </div>

      <div className="sm:m-1 m-0 ">
        {/* <div className="m-8 text-justify lg:text-2xl md:text-xl sm:text-md text-lg font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus consequatur magni ratione facere rerum sunt, voluptatem quidem! Nam sapiente libero quisquam ratione fugit cum quos aliquid possimus consequatur magnam!</div> */}
        <Box className="flex flex-wrap mt-6 md:mt-0">
          {itemsList.map((items) => (
            // if (count%2 === 1) {
              
            // } 
            <Card className="w-[100%] m-[2%] md:mb-24 mb-12 drop-shadow-xl shadow-gray-600">
              <CardActionArea>
                <div className="flex flex-col md:flex-row h-[80vh] md:h-[30rem]">
                <div className="w-1/2 md:p-4 md:mb-2 md:ml-2 p-2 lg:scale-75 ml-[25%] h-[45%] md:h-full">
                <CardMedia
                className=" w-full h-full rounded-md"
                  component={"img"}
                  src={items.image}
                  alt={items.name}
                />
                </div>
                <CardContent className={items.bg ?`${items.bg} rounded-md flex-1` :"bg-indigo-200 rounded-md flex-1"}>
                  <div className="flex flex-col text-white">
                    <Typography variant="h5" gutterBottom component={"div"} style={{ flex: 1 }}>
                      {items.name}
                    </Typography>
                  </div>
                  <Typography variant="body2" className="text-white">{items.description}</Typography>
                  <Typography variant="h6" component={"div"}>
                      rating : {items.rating}
                    </Typography>

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

