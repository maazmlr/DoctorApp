import express from 'express'
import getAllDoctors from '../services/getDoctors.js';

const router=express.Router();

router.get('/',async(req,res)=>{
   const doctors=await getAllDoctors();
   res.send(doctors);
   console.log(doctors);
})

export default router;