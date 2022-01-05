const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register =  async (req,res)=> {
 const salt = await bcrypt.genSalt(10);
 const hashedPass = await bcrypt.hash(req.body.password, salt);

 const savedUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
 })

const postUser = await savedUser.save();

res.status(200).json(postUser);
}

const login = async (req,res) => {
    const user  = await User.findOne({
        username : req.body.username
    });
    !user && res.status(400).json('wrong user');

    const validate = await bcrypt.compare(req.body.password,user.password);
    !validate && res.status(400).json('wrong password');

    const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});


}


module.exports = {
    register,login
}