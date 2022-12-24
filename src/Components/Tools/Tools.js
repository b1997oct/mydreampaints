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

const Tools = () => {


  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {MenuList.map((menu) => (
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
            <Typography variant="h6" gutterBottom component={"div"}>
            rating : {menu.rating}
            </Typography>
            </div>
            <Typography variant="body2">{menu.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
  </Box>
  );
};

export default Tools;

