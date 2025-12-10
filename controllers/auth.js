// const e = require('express')
const User = require('../models/User')
const sendCookie = require('../utils/sendCookie')
const uploadImage = require('../utils/uploadImage')

exports.GetLoginPage = (req,res)=>{
    try{
        return res.render('auth/login',{msg:""})
    }catch(e){
        console.log('error while rendering login')
        console.log(e)
    }
}
exports.GetRegisterPage = (req,res)=>{
    try{
        return res.render('auth/register')
    }catch(e){
        console.log('error while rendering register')
        console.log(e)
    }
}

exports.Login = async(req,res)=>{
    try{
        const {username,password}=req.body
        console.log(req.body)
        console.log(username,password)

        const user = await User.findOne({username:username})
        if(!user){
            return res.status(400).json({message:"User not found"})
            // return res.render('auth/login',{msg:'Incorrect username'})
        }
 
        const validation = await user.isValidatedPassword(password)

        if(!validation){
            return res.status(400).json({message:"password is incorrect"})
            // return res.render('auth/login',{msg:'Incorrect password'})
        }
        req.user = username
        // return res.status(200).json({
        //     message:'Login Successful',
        //     user:{
        //         id: user.id,
        //         name: user.name,
        //         username: user.username,
        //         role: user.role
        //     }
        // })
        return sendCookie(user,res)
       
    }catch(e){
        console.log(e)
        return res.send('error')
    }
}

exports.Register = async (req, res) => {
  try {

    const { name, username, email, phone, role, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    let dp = null;
    if (req.files && req.files.photo) {
      dp = await uploadImage(req.files.photo, 400, 400, "dp");
    }

    await User.create({
      id: Date.now(),
      name,
      username,
      mail: email,
      phone,
      role,
      password,
      dp: dp ? dp.url : null
    });

    return res.status(200).json({ message: "Registration successful" });

  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.Logout = (req,res)=>{
    console.log('logout called')

    return res.clearCookie('token').json({message:'Logout Successful'})
}