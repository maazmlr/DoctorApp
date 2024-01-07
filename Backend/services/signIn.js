import User from '../models/Signup.js'
const getUSerByEmail=async(email)=>{
    try{
    const user=await User.findOne({email:email});
    console.log('user-->',user);
    return user;
    }
    catch(err){
        return err;

    }

}
export default getUSerByEmail;