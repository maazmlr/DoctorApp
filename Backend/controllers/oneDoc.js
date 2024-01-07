import express, { Router } from'express'
import getOneDoctor from '../services/getOneDoc.js';


const router=express.Router();


router.get('/:id',async (req,res)=>{
    let doctorID=req.params.id.trim();
  
    console.log(doctorID)
    try{
        const oneDoc=await getOneDoctor((doctorID));
        res.status(200).send(oneDoc); 
        console.log(oneDoc) 
    }
    catch(err){
        res.status.send(err)
    }

})

export default router;