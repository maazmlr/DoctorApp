import express from 'express'
import Doctor from '../controllers/Doctor.js';
import oneDoc from '../controllers/oneDoc.js' 
import signUp from '../controllers/Signup.js'
import signIn from '../controllers/signin.js'
import appointmnet from '../controllers/appointment.js'
import userAppointment from '../controllers/userAppointment.js'


const router=express.Router();

router.use('/doctors',Doctor)
router.use('/oneDoc',oneDoc)
router.use('/signup',signUp)
router.use('/signin',signIn)
router.use('/appointment',appointmnet)
router.use('/userAppointment',userAppointment)




export default router