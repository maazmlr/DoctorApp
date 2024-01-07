import express from 'express'
import getUSerByEmail from '../services/signIn.js';
import  bcrypt from'bcrypt'

const router = express.Router();
router.post('/',async(req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;
    try{
    const user= await getUSerByEmail(email);
    
    const match = await bcrypt.compare(password, user.password);
    console.log(match)
    


        if((email===user.email) && match){
            delete user.password
            res.status(200).send({message:user});
        }
        else{
            res.status(501).send(false);
        }

}
catch(err){
    res.status(500).send({message:'Internel server error'});
}



})

export default router