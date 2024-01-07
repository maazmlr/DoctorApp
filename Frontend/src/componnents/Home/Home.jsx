import React, { useEffect } from "react";
import Buttons from "./Buttons";
import { Button } from "@mui/material";
import { Hero } from "./Hero";
import img from "../../assets/img.jpg";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";




export const Home = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    const uid = localStorage?.getItem("uid");
    if(!uid){
      navigate('/signin')
    }
  })
 return (
    <>
      <div style={{ marginTop: "2rem" }} className=" flex justify-between	  ">
        <div className="holder w-2/4 p-12">
          <p className="home-heading">Healthity</p>
          <p className="home-para">
            Introducing HealthLink, a groundbreaking platform designed to bridge
            the gap between volunteer healthcare professionals and underserved
            communities, offering virtual medical consultations and essential
            healthcare services remotely.
          </p>
          <Button className="about-us-btn" sx={{ padding: "0.5rem 2rem" }}>
            About US
          </Button>
        </div>
        <Spinner/>
        
      </div>
      <div className="flex justify-evenly py-20" style={{ background: "#CCE1FA",opacity:'0.7' }}>
        <Hero />
      </div>
    </>
  );
};

