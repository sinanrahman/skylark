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
      if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({
          message: 'Access denied: Admins only'
        })
      }
  
      next()
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }
  }
  