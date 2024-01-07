import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
  name: String,
  category: String,
  days: [String],
  timing: String,
  img_url: String,
  rating: Number,
  ratingCount:Number 
});

const Doctor = mongoose.model('doctor', doctorSchema,'doctor data');

export default Doctor;