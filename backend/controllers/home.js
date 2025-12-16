const User = require('../models/User')
exports.GetHomePage = async(req,res) =>{
    try{
        let user = await User.findOne({id:req.user.id})
        if(!user || !req.user){
            return res.status(401).json({message:"User not found"})
        }
        return res.status(200).json({
            message:'Home Page',
            user:req.user
        })
    }catch(e){
        console.log('error while rendering homepage')
        console.log(e)
        return res.status(400).json({
            message:'Authentication Failed'
        })
    }
}
exports.GetCarsPage = (req,res) =>{
    try{
        return res.render('home/cars')
    }catch(e){
        console.log('error while rendering cars page')
        console.log(e)
        return res.send("<h1>something is wrong</h1>")
    }
}
exports.GetContactPage = (req,res) =>{
    try{
        return res.render('home/contact')
    }catch(e){
        console.log('error while rendering contact page')
        console.log(e)
        return res.send("<h1>something is wrong</h1>")
    }
}
exports.GetAboutPage = (req,res) =>{
    try{
        return res.render('home/about')
    }catch(e){
        console.log('error while rendering about page')
        console.log(e)
        return res.send("<h1>something is wrong</h1>")
    }
}