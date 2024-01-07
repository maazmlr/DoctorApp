import User from '../models/Signup.js';



const getUserByUid = async (_id) => {
    try {
      const user = await User.findOne({ _id });
      return user;
    } catch (err) {
      // Handle errors here
      console.error(err);
      throw new Error('Error fetching user by UID');
    }
  };

export {getUserByUid}