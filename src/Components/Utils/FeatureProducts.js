import React from 'react'
import { itemsList } from "./data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ArrowCircleRight } from '@mui/icons-material';


function FeatureProducts() {
  return (
    <div>
      
      <div className="flex m-2">
      {/* <div className="w-[40vw] h-[85vh] fixed rounded-md border-2 border-red-500 border-double bg-white">
     </div> */}
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {itemsList.map((menu) => (
      <Card sx={{ maxWidth: "350px", display: "flex", m: 2 }}>
        <CardActionArea>
          <CardMedia
            sx={{ minHeight: "400px" }}
            component={"img"}
            // src={menu.image}
            alt={menu.name}
          />
          <CardContent>
            <div className="flex flex-row">
            <Typography variant="h5" gutterBottom component={"div"} style={{flex:1}}>
             {menu.name}
            </Typography>
            {/* <Typography variant="h6" gutterBottom component={"div"}>
            rating : {menu.rating}
            </Typography> */}
            <div>
                <ArrowCircleRight />
            </div>
            </div>
            <Typography variant="body2">{menu.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
  </Box>
    </div>
    </div>
  )
}

export default FeatureProducts
