const jwt = require('jsonwebtoken')

exports.isLoggedin = (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.clearCookie('token').status(401).json({message:'no token in middleware'})
            // return res.redirect('/login')
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        console.log(req.user)
        return next()
    } catch (e) {
        console.log(e)
        return res.clearCookie('token').status(401).json({message:'Please login again'})
        // return res.cookie('token', null).redirect('/login')
    }
}

exports.isAdmin = (req, res, next) => {
    try {
        if (!req.user.role.includes('admin')) {
            // return res.redirect('/')
            return res.render('home/home')
            // return res.render('auth/login',{msg:'not admin'})
        }
        return next()
    } catch (e) {
        console.log(e)
        return res.redirect('/login')
    }
}