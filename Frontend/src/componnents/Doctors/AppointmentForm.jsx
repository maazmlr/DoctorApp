import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Link from '../../Link';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),

  dateOfBirth: Yup.date().required('Date of Birth is required'),
  gender: Yup.string().required('Gender is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('Address is required'),
  preferredDateAndTime: Yup.string().required('Preferred Date and Time is required'),
  reasonForAppointment: Yup.string().required('Reason for Appointment is required'),
  typeOfAppointment: Yup.string().required('Type of Appointment is required'),
});

const initialValues = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  phoneNumber: '',
  email: '',
  address: '',
  preferredDateAndTime: '',
  reasonForAppointment: '',
  typeOfAppointment: '',
};

const AppointmentForm = () => {

    const {id}=useParams();
    const [data,setData]=useState({})
  const [formData,setFormData]=useState([]);
  const [change ,setChange]=useState(false)
  const navigate=useNavigate()
    useEffect( ()=>{

      axios.get(`${Link}/oneDoc/${id}`)
      .then(res=>setData(res?.data))


    },[]);

   

    const days=data.days?.map((v,i)=>            <option key={i} value={v}>{v}</option>)



  const onSubmit = async (values) => {
    const postData=({...values,doctorName:data.name});
    const uid=localStorage?.getItem(("uid"));
    console.log("submut")

    
    const response =await axios.post(`${Link}/appointment`,{uid,...postData})
    console.log(response)

    if (response.status==200){
      alert("Appointment created successfully ");
    }




 


  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='form bg-white border-black	border-4 h-auto	 rounded-lg flex flex-wrap'>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <Field type="text" id="fullName" name="fullName" />
          <ErrorMessage className='text-xs text-gray-900 dark:text-red-500 text-center		' name="fullName" component="div" />
        </div>
       

        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <Field type="date" id="dateOfBirth" name="dateOfBirth" />
          <ErrorMessage className='text-xs text-gray-900 dark:text-red-500 text-center		' name="dateOfBirth" component="div" />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <Field as="select" id="gender" name="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage className='text-xs text-gray-900 dark:text-red-500 text-center		' name="gender" component="div" />
        </div>

        <div>
          <label className='' htmlFor="phoneNumber">Phone Number:</label>
          <Field  type="tel" id="phoneNumber" name="phoneNumber"  />
          <ErrorMessage className='text-xs text-gray-900 dark:text-red-500 text-center		' name="phoneNumber" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage className='text-xs text-gray-900 dark:text-red-500 text-center		' name="address" component="div" />
        </div>
        <div>
          <label htmlFor="doctorName">Doctor Name : </label>
          <Field type="text" id="doctorName" name="doctorName" value={data.name} readOnly />
        </div>

        <div>
          <label htmlFor="preferredDateAndTime">Preferred Date and Time:</label>
          <Field as="select" id="preferredDateAndTime" name="preferredDateAndTime">
            <option value="">Select day</option>
            {days}
            
          </Field>          
          <ErrorMessage className='text-xs text-gray-900 dark:text-red-500 text-center		' name="preferredDateAndTime" component="div" />
        </div>

        <div>
          <label htmlFor="reasonForAppointment">Reason for Appointment:</label>
          <Field as="textarea" id="reasonForAppointment" name="reasonForAppointment" />
          <ErrorMessage className='text-xs text-gray-900 dark:text-red-500 text-center		' name="reasonForAppointment" component="div" />
        </div>

        <div>
          <label htmlFor="typeOfAppointment">Type of Appointment:</label>
          <Field as="select" id="typeOfAppointment" name="typeOfAppointment">
            <option value="">Select Type</option>
            <option value="consultation">Consultation</option>
            <option value="follow-up">Follow-up</option>
            {/* Add more options as needed */}
          </Field>
          <ErrorMessage className='text-xs text-gray-900 dark:text-red-500 text-center		' name="typeOfAppointment" component="div" />
        </div>

        <div>
          <button type="submit" >Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default AppointmentForm;
