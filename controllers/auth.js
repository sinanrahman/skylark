// const e = require('express')
const User = require('../models/User')
const sendCookie = require('../utils/sendCookie')

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

        const user = await User.findOne({username:username})
        if(!user){
            return res.render('auth/login',{msg:'Incorrect username'})
        }
 
        const validation = await user.isValidatedPassword(password)

        if(!validation){
            return res.render('auth/login',{msg:'Incorrect password'})
        }
        req.user = username
        return sendCookie(user,res)
       
    }catch(e){
        console.log(e)
        return res.send('error')
    }
}
exports.Register = async (req,res) =>{
    try{
        console.log(req.body)
        let {name,username,email,phone,role,dp} = req.body
        if(!(req.body.password == req.body.confirmPassword)){
            return res.render('auth/register',{msg:'passwords doesnt match'})
        }
        let password = req.body.password
        await User.create({
            id:Date.now(),
            name:name,
            username:username,
            mail:email,
            phone:phone,
            role:role,
            password:password,
            dp:dp

        })
        return res.redirect('/login')
    }catch(e){
        console.log(e)
        return res.send('<h3>something went wrong</h3>')
    }
}
exports.Logout = (req,res)=>{
    return res.cookie('token', null).redirect('/login')

}