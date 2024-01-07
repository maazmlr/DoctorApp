import React, { useEffect, useState } from 'react'
import AppointmentDetails from './AppointmentDetails'
import axios from 'axios';
import Link from '../../Link';
import Loader from '../Loader';




const UserAppointment = () => {

    const [appointments,setAppointments]=useState(null)
    const uid=localStorage?.getItem('uid');
    console.log(uid)

    useEffect(()=>{
      try {
          axios.get(`${Link}/userAppointment/${uid}`).then(res=>setAppointments(res.data.appointments))
                
      } catch (error) {
        
      }
    },[])
    console.log(appointments)
    const elements=appointments?.map((v,i)=><AppointmentDetails
    key={i}
    docName={v.other?.doctorName}
    reason={v.other?.reasonForAppointment}
    day={v.other?.preferredDateAndTime}
    type={v.other?.typeOfAppointment}
    />)
    console.log(appointments)


  return (
    <>
  { 
  appointments ? elements : Loader()
 
}  
    </>
    )
}

export default UserAppointment