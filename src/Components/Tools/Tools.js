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

      <div className='py-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-center flex justify-center items-center'>
        <div className="mx-4 text-justify lg:text-4xl md:text-3xl text-2xl font-semibold text-white">Tools to make painting easy</div>
      </div>
      <Box className="flex flex-wrap justify-center">
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "350px", display: "flex", m: 2 }}>
            <CardActionArea>
              <div className="p-2">
                <CardMedia
                  sx={{ minHeight: "350px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
              </div>
              <CardContent>
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

      <div>
        <div className="w-full p-4 bg-gray-100 md:flex">
          <div className="w-full my-10 md:w-[30rem] ">
            <img
              className="w-full"
              src={paintingtool}
              alt="painting" />
          </div>
          <div className="lg:gap-10 gap-4 md:text-xl grid lg:text-3xl text-2xl md:w-1/2 mx-[auto] md:ml-4 lg:mx-[auto] text-justify md:my-auto font-sans">
            <div className="bg-gray-100">
              <span className="font-semibold">1.</span> No matter if you're new to painting or a experianced one thing is clear you have to have the right tools for the job
            </div>
            <div className="bg-gray-100">
            <span className="font-semibold">2.</span> The right painting tools can make your job easier, safer, and faster. They can even save you money.
            </div>
            <div className="bg-gray-100">
            <span className="font-semibold">3.</span> That's why put together a list of the house painting tools and equipment that you need to have before starting your painting projects
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tools;

