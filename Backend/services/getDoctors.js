import Doctor from "../models/doctor.js";

async function getAllDoctors() {
  try {
    const doctors = await Doctor.find({});
      return doctors;
  } catch (err) {
    return err;
  }
}
export default getAllDoctors;