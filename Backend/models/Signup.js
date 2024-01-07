import mongoose, { Schema } from "mongoose";
import AppointmentSchema from "./Appointment.js";
const userSchema = new mongoose.Schema({
    appointments: {
    type: [Schema.Types.Mixed], // Array of mixed types to allow flexible schema
    default: [],
  },
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
      type: String,
      required: true,
      minlength: 6 // You can adjust the minimum length as needed
    }
  });

  const User = mongoose.model('User', userSchema);
export default User;