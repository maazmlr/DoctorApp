import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    useEffect(()=>{
        const navigate=useNavigate()
        localStorage?.removeItem('uid');
        navigate('/signin');
    },[])
  return (
    <></>
  )
}

