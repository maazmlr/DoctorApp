import express from 'express';
import { sigUp } from '../services/signup.js';

const router =express.Router();


router.post('/',async(req,res)=>{
    try{
        const user = await sigUp(req.body);
        console.log('User signed up:', user);     
    res.status(201).send({ message: 'Signup successful!' });
     }
     catch(err){
        console.error('Error:', err);
    res.status(500).send({ error: 'Internal server error' });
     }


    
    

})
export default router ;

