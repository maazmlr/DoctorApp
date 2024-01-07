import User from '../models/Signup.js'
import bcrypt from 'bcrypt'

export const sigUp= async(body)=>{

    const {firstName,lastName,email,password}=body;
    const fullName=firstName+" "+lastName;


    const  epass =await bcrypt.hash(password, 10);

    try {
        const newUser = new User({
          fullName: fullName,
          email: email,
          password: epass
        });

        await newUser.save();
        return newUser;
  } catch (error) {
    console.log(error)
    return error;
}

    
}