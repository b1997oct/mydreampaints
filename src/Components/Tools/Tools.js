import React from "react";
import { MenuList } from "./data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import paintingtool from "./images/paintingtool.jpg"

const Tools = () => {


  return (

    <div>

      <div className=''>
      <div>
        <div className="w-full md:p-4 md:py-10 lg:flex">
          <div className="hidden lg:block lg:my-auto md:mx-auto mb-6 md:w-[80%] lg:w-[30rem]">
            <img
              className="w-full"
              src={paintingtool}
              alt="painting" />
          </div>
          <div className="lg:gap-10 text-[#1c1c14] gap-2 my-2 md:gap-4 text-xl grid lg:text-2xl md:w-1/2 mx-[auto] text-justify md:my-auto font-semibold">
            <div className="bg-[#fff] shadow-sm p-4 rounded-xl lg:up-move cursor-pointer">
              <span className="font-bold">1.</span> No matter if you're new to painting or a experianced one thing is clear you have to have the right tools for the job
            </div>
            <div className="bg-[#fff] shadow-sm md:py-10 p-[1rem] rounded-xl lg:up-move cursor-pointer">
            <span className="font-bold">2.</span> The right painting tools can make your job easier, safer, and faster. They can even save you money.
            </div>
            <div className="bg-[#fff] shadow-sm p-4 rounded-lg lg:up-move cursor-pointer">
            <span className="font-bold ">3.</span> That's why put together a list of the house painting tools and equipment that you need to have before starting your painting projects
            </div>
          </div>
        </div>
      </div>
      </div>
      <Box className="flex flex-wrap justify-center ">
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "380px", display: "flex", m: 2 , borderRadius: 5}}>
            <CardActionArea className="">
              <div className="py-4 px-2">
                <CardMedia
                  sx={{ minHeight: "350px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
              </div>
              <CardContent className="bg-amber-100 rounded-xl h-full ">
                <div className="flex flex-row">
                  <div className="font-semibold text-2xl text-blue-700">
                    {menu.name}
                  </div>
                  {/* <Typography variant="h6" gutterBottom component={"div"}>
            rating : {menu.rating}
            </Typography> */}
                </div>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Tools;

