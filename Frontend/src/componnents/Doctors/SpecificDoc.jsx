import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BackButton from './BackButton';
import Link from '../../Link';


export const SpecificDoc = () => {
    const params=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
      axios.get(`${Link}/oneDoc/${params.id}`)
      .then(res=>setData(res.data))
    
    },[])
  return (
    <>
    <BackButton/>    
    <div className="card card-side bg-base-100 shadow-xl my-10">
  <figure className=''><img src={data.img_url} alt="Movie" className='w-2/2 h-full	'/></figure>
  <div className="card-body flex ">
  <div className=" flex justify-start">
      <h1 className='text-gray-900 text-7xl dark:text-white mb-10'>{data.category}</h1>
    </div>
    <div className=' space-y-10 '>

    <h2 className="card-title">Name :{data.name}</h2>
    <h2 className="card-title"><WatchLaterIcon/> :{data.timing}</h2>
    <h2 className="card-title"><CalendarMonthIcon/> : {data.days}</h2>

    </div>

    <div className="card-actions justify-end mt-   	">
     <NavLink to={`/bookDoctor/${params.id}`}><button className="btn btn-primary">Book Appointment</button> </NavLink> 
    </div>
  </div>
</div>
    </>
  )
}
