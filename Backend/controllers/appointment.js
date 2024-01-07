// import express from 'express';
// import Appointment from '../models/Appointment.js';
// import { newUserAppointment,existingUserAppointment } from '../services/Appointment.js';
// const router=express.Router();

// router.post('/',async(req,res)=>{
//     const {uid,...otherData}=req.body;
//     console.log(uid)
//     console.log(otherData)

//     try{
//         const existingUser=await Appointment.findOne({uid});
//         console.log(existingUser)

//         if(existingUser){
//             const existingAppointment=await existingUserAppointment(uid,otherData);
//             console.log('jjjjj-->',existingAppointment)

//            res.status(200).send({ message: 'Appointment updated successfully' })
//         }

//         else{
//             const newAppointment = await newUserAppointment(uid,otherData)
//             console.log("new App-->",newAppointment)


//             res.status(200).send({ message: 'Appointment created successfully' })
//         }



//     }
//     catch(err){
//         res.status(500).send({ error: 'Internal server error' });

//     }

// })

// export default router;

// appointment.js
  

import express from 'express';
import User from '../models/Signup.js';

const router = express.Router();

// Route to create or add appointments for a user
router.post('/', async (req, res) => {
  const { uid, ...other } = req.body;
  console.log("uid----->",uid)
  console.log("oyer--->",other)

  try {
    let user = await User.findById(uid);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if(other=={}){
            return res.status(404).send({ message: 'no data' });

    }

    // Create a new appointment object
    const newAppointment = {
      other:{...other}
      // Add other appointment fields here if needed
    };

    // Add the new appointment to the user's appointments array
    user.appointments.push(newAppointment);



    // Save the updated user with the new appointment
    await user.save();
    console.log ("user---->",user)

    res.status(200).send({ message: 'Appointment added successfully', user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

export default router;
