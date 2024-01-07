import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReactStars from "react-stars";
import { NavLink } from "react-router-dom";

export default function DocCard({name,rating,totalRating,timing,days,category,img,id}) {


  return (
    <div className="flip-card mt-10 mr-10">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={img}
            alt=""
          />
          <p className="title">{name}</p>
          <p>{category}</p>
          <p className="flex items-center justify-center"><ReactStars
            count={5}
            edit={false}
            value={rating}
            size={20}
            color2={"#ffd700"}
            className=""/> ({totalRating}) </p>
          
          
        </div>
        <div className="flip-card-back">
          <p className="title"><WatchLaterIcon/>{timing}</p>
          <p><CalendarMonthIcon/>:{days}</p>
          <div className="flex justify-center mt-4">
         <NavLink to={`${id}`}><Button variant="contained" className="w-2/3 ml-4  ">See Details</Button></NavLink> 
         <NavLink to={`/bookDoctor/${id}`}> <Button variant="contained" className="w-2/3">Book Appointment</Button>
         </NavLink>
   
          </div>

      


        </div>
      </div>
    </div>
  );
}
