
import './App.css'
import DoctorAppointment from './componnents/Doctors/DoctorAppointment'
import { Doctoer } from './componnents/Doctors/Doctoer'
import { SpecificDoc } from './componnents/Doctors/SpecificDoc'
import { Home } from './componnents/Home/Home'
import { MainLayout } from './componnents/MainLayout'
import SignIn from './componnents/Signin'
import  Signup  from './componnents/Signup'
import UserAppointment from './componnents/Appointments/userAppointment'

import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Link from './Link'


function App() {
  
  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route>
        <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    </Route>
  <Route element={<MainLayout/>}>
    <Route path='/' element={<Home/>}/>

    <Route path='/yourApointment' element={<UserAppointment/>}/>
    <Route path='bookDoctor/:id' element={<DoctorAppointment/>}/>

    <Route path='doctor' element={<Doctoer/>}/>
    <Route path='doctor/:id' element={<SpecificDoc/>}/>
  </Route>
  </Route>
    ))

    useEffect(()=>{
      axios.get(Link)
    },[])
  return(
    <RouterProvider router={router}/>
      )
  
}

export default App
