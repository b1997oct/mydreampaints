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

const Products = () => {
  return (

    <div className="">
      {/* <div className="w-[40vw] h-[85vh] fixed rounded-md border-2 border-red-500 border-double bg-white">



     </div> */}

      <div className="">
        <div className='py-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-center flex justify-center items-center'>
          <div className="mx-4 text-justify lg:text-4xl md:text-3xl text-2xl font-semibold text-white">Our products</div>
        </div>

        <Box className="flex flex-wrap mt-8">
          {itemsList.map((items) => (
            <Card className="w-[100%] md:mb-24 mb-12 drop-shadow-xl shadow-gray-600">
              <CardActionArea>
                <div className="flex flex-col md:flex-row md:h-[35rem] h-[85vh]">
                  <div className="w-1/2 md:p-4 md:mb-2 md:ml-2 p-2 lg:scale-75 ml-[25%] h-[45%] md:h-full lg:w-1/3">
                    <CardMedia
                      className=" w-full h-full rounded-md"
                      component={"img"}
                      src={items.image}
                      alt={items.name}
                    />
                  </div>
                  <CardContent className="bg-[#3ae] rounded-md flex-1 text-white">
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

export default Products;
