import mongoose from 'mongoose';

const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    fullName:{
        type: String ,
        required:true
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneNumber:{
        type :Number,
        required: true
    },
    email:{
        type:String,
        required:true,

    },
    address:{
        type:String,
        required:true,

    },
    preferredDateAndTime:{
        type:String,
        required:true,
    },
    reasonForAppointment:{
        type:String,
        required:true,
    },
    typeOfAppointment:{
        type:String,
        required:true,
    },


    // Add more fields as needed for appointments
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;
