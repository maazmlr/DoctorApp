import React from 'react'

const AppointmentDetails = ({docName,reason,type,day}) => {
  return (
    <div className="card  glass	  m-4 ">
  <div className="card-body flex-row justify-between	">
    
   <div className="doctor-name text-center w-40">
    <p className='text-center'>Doctor Name </p>
    <p>{docName}</p>
   </div>
   <div className="reason text-center w-40">
    <p className='text-center'>Reson For Appointment </p>
    <p>{reason}</p>
   </div>
   <div className="type text-center w-40">
    <p className='text-center'>Type of Appointment </p>
    <p>{type}</p>
   </div>
   <div className="type text-center w-40">
    <p className=''>DAY </p>
    <p>{day}</p>
   </div>
  </div>
</div>

    )
}

export default AppointmentDetails