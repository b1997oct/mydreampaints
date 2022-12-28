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

const Services = () => {
  return (

    <div className="flex m-2">
      {/* <div className="w-[40vw] h-[85vh] fixed rounded-md border-2 border-red-500 border-double bg-white">



     </div> */}

      <div className="sm:m-1 m-0 ">
        {/* <div className="m-8 text-justify lg:text-2xl md:text-xl sm:text-md text-lg font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus consequatur magni ratione facere rerum sunt, voluptatem quidem! Nam sapiente libero quisquam ratione fugit cum quos aliquid possimus consequatur magnam!</div> */}
        <Box className="flex flex-wrap mt-6 md:mt-0">
          {itemsList.map((items) => (
            <Card className="w-[100%] m-[2%] md:mb-24 mb-12 drop-shadow-xl shadow-gray-600">
              <CardActionArea>
                <div className="flex flex-col md:flex-row h-[80vh]">
                <div className="w-1/2 md:p-4 md:mb-2 md:ml-2 p-2 lg:scale-75 ml-[25%] h-[45%] md:h-full">
                <CardMedia
                className=" w-full h-full rounded-md"
                  component={"img"}
                  src={items.image}
                  alt={items.name}
                />
                </div>
                <CardContent className={items.bg ?`${items.bg} rounded-md flex-1` :"bg-indigo-200 rounded-md flex-1"}>
                  <div className="flex flex-col">
                    <Typography variant="h5" gutterBottom component={"div"} style={{ flex: 1 }}>
                      {items.name}
                    </Typography>
                  </div>
                  <Typography variant="body2">{items.description}</Typography>
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

