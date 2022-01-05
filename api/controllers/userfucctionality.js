const User = require('../models/user');


const UpdateUser =async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
  
}

const DeleteUser = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
}

const allUsers = async (req,res) => {

    const qNew = req.query.new;
    
    try {
      let user;
  
      if (qNew) {
        user = await User.find().sort({ createdAt: -1 }).limit(1);
      } else {
        user = await User.find();
      }
  
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }  
 
 }
 

module.exports = {
    allUsers,DeleteUser,UpdateUser,
}