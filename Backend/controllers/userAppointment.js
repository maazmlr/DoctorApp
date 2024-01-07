import express from 'express';
import { getUserByUid } from '../services/userAppointment.js';

const router=express.Router();

router.get('/:id',async(req,res)=>{
    const { id } = req.params;
    console.log(id)
  
  try {
    const user = await getUserByUid(id);

    if (!user) {
      return res.status(404).send('User not found');
    }
    console.log(user)
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
  });

export default router;