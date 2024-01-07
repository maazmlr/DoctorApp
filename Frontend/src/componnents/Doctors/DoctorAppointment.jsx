import React from 'react'
import BackButton from './BackButton'
import AppointmentForm from './AppointmentForm'


const DoctorAppointment = () => {
  return (
    
    <div>
        <BackButton/>

        <div className="appointment">
            <h2 className='text-black-900  text-7xl dark:text-black bg-white	 text-center	'>Appointment Details </h2>
            <AppointmentForm/>
        </div>
    </div>
  )
}


export default DoctorAppointment