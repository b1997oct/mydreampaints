import React, { useEffect } from "react";
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

  useEffect(() => {
    document.title = "My Dream Paints - We provides the painting tools also if you like paining your self and dont know what tools to use no need to warry from now because we guide you on that too"
    window.scrollTo(0, 0)
  }, [])


  return (

    <div>

      <div className=''>
        <div>
          <div className="w-full md:p-4 md:py-10 lg:flex">
            <div className="lg:my-auto md:mx-auto mb-[.5rem] md:mb-[1.5rem] md:w-[80%] lg:w-[30rem]  rounded-md overflow-hidden">
              <div className="relative flex justify-center items-center">
                <img
                  className="w-full"
                  src={paintingtool}
                  alt="painting" />
              </div>
            </div>
            <div className="lg:gap-10 text-[#141b15] gap-[.5rem] my-2 md:gap-4 text-xl grid lg:text-2xl md:w-1/2 mx-[auto] text-justify md:my-auto font-semibold">
              <div className="bg-[#fff] shadow-sm px-4 py-2 md:p-4 rounded-xl lg:up-move cursor-pointer">
                <span className="font-bold">1.</span> No matter if you're new to painting or a experianced one thing is clear you have to have the right tools for the job
              </div>
              <div className="bg-[#fff] shadow-sm py-[1rem] md:py-10 px-[1rem] rounded-xl lg:up-move cursor-pointer">
                <span className="font-bold">2.</span> The right painting tools can make your job easier, safer, and faster. They can even save you money.
              </div>
              <div className="bg-[#fff] shadow-sm p-4 hidden lg:flex rounded-lg lg:up-move cursor-pointer">
                <span className="font-bold ">3.</span> That's why put together a list of the house painting tools and equipment that you need to have before starting your painting projects
              </div>
            </div>
          </div>
        </div>
      </div>

  <div className="font-bold text-[#49b0e8] text-3xl md:text-6xl underline underline-offset-4 p-4 lg:nderline-offset-8 m-2 flex justify-center"><div className="flex"><div className="">Find</div> <div>-Awesome</div><div>-Tools</div></div></div>

      <Box className="flex flex-wrap justify-center ">
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "380px", display: "flex", m: 2, borderRadius: 5 }}>
            <CardActionArea className="">
              <div className="p-[.5rem] md:p-4">
                <CardMedia
                  sx={{ maxHeight: "350px", borderRadius: 5 }}
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

