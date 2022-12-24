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

const Products = () => {
  return (

    <div className="flex m-2">
      {/* <div className="w-[40vw] h-[85vh] fixed rounded-md border-2 border-red-500 border-double bg-white">



     </div> */}

      <div className="sm:m-1 m-0">
        <Box className="flex flex-wrap ">
          {MenuList.map((menu) => (
            <Card className="w-[100%] mb-4">
              <CardActionArea>
                <div className="flex flex-col md:flex-row h-[25rem]">
                <div className="w-1/2 md:p-4 md:mb-2 md:ml-2 p-2 lg:scale-75 ml-[25%] h-[45%] md:h-full lg:w-1/3">
                <CardMedia
                className=" w-full h-full rounded-md"
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                </div>
                <CardContent className="bg-slate-200 rounded-md flex-1">
                  <div className="flex flex-col">
                    <Typography variant="h5" gutterBottom component={"div"} style={{ flex: 1 }}>
                      {menu.name}
                    </Typography>
                  </div>
                  <Typography variant="body2">{menu.description}</Typography>
                  <Typography variant="h6" component={"div"}>
                      rating : {menu.rating}
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
