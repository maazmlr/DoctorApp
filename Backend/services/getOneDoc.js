import Doctor from "../models/doctor.js";

async function getOneDoctor(id) {
    try {
        const doctor = await Doctor.findOne({ _id: id });
      return doctor;
  } catch (err) {
    return err;
  }
}
export default getOneDoctor