import Appointment from "../models/Appointment.js";

const newUserAppointment=async(uid,otherData)=>{
    console.log(otherData)

    const newAppointment = new Appointment({ _id:uid, otherData });
    await newAppointment.save();

    return newAppointment;

}

const existingUserAppointment=async (uid,otherData)=>{
    console.log(otherData)

   const appointment= await Appointment.updateOne({ uid }, { $set: otherData });
    return appointment;
}

export {newUserAppointment,existingUserAppointment}