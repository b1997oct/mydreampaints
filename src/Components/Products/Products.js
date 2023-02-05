import React, { useEffect } from "react";
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

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (

    <div className="">
      {/* <div className="w-[40vw] h-[85vh] fixed rounded-md border-2 border-red-500 border-double bg-white">



     </div> */}

      <div className="">
        <div className='md:py-10 pt-10 text-center flex flex-col gap-4 justify-center items-center'>
          <div className="mx-4 text-justify lg:text-4xl md:text-3xl text-2xl font-bold text-[#13120c]">Our products</div>
          <div className="text-center text-sm md:text-2xl leading-tight font-semibold w-[95%] md:w-[80%]">Find the best interior & exterior and water paints at My dream paints, and dress up your walls and ceilings with 900+ colours. Interior emulsions are water-based and easy to apply on the walls and ceilings. It is durable and, once applied, can last for a long time.</div>
        </div>

        <Box className="flex flex-wrap mt-8">
          {itemsList.map((items) => (
            <Card className="w-[100%] md:mb-24 mb-12 mx-1 md:mx-0 drop-shadow-xl shadow-gray-600">
              <CardActionArea>
                <div className="flex flex-col md:flex-row">
                  <div className={`md:w-1/2 py-4 grid place-items-center ${items.bg}`}>
                    <div className="h-[100%] w-[70%] md:h-[20rem] md:w-[20rem] lg:h-[30rem] lg:w-[30rem]">
                      <CardMedia
                        className="h-full w-full bg-white rounded-b-md"
                        component={"img"}
                        src={items.image}
                        alt={items.name}
                      />
                    </div>
                  </div>
                  <CardContent className="bg-[#391650] flex flex-col justify-around rounded-md flex-1 text-white">
                    <div className="flex flex-col">
                      <h3 className={`md:text-4xl font-bold uppercase`} >
                        {items.name}
                      </h3>
                    </div>
                    <p className="text-white md:mt-4 mt-[0] md:text-2xl text-justify lg:text-3xl">{items.description}</p>
                    {items.features ? 
                    <div className="" >
                    <div className="font-bold text-xl">FEATURES</div>
                    <p className="text-white grid gap-2 text-sm md:mt-4 md:text-xl text-justify lg:text-2xl">{items.features.map((data)=>(
                     <div className="">- {data.i}</div>
                    ))}</p>
                    </div>
                    : null}
                    <div className="font-semibold whitespace-nowrap text-xl flex items-end md:gap-2 gap-1 md:mt-4">
                      <div className="">Rating : {items.rating}</div>
                      <div className="flex gap-1 my-auto text-yello-500">
                        <Rating name="read-only" value={items.rating} readOnly />
                      </div>
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

export default Products;
