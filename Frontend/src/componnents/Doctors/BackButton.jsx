import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BackButton = () => {
  return (
   <NavLink to={"/doctor"}> <Button variant="contained">Back to Doctors</Button></NavLink>
  )
}

export default BackButton