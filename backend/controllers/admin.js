const User = require('../models/User')

exports.Dashboard = async (req, res) => {
    try {
      return res.status(200).json({
        message: 'Welcome to Admin Dashboard',
        admin: {
          id: req.user.id,
          role: req.user.role
        }
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: 'Admin dashboard error'
      })
    }
  }



exports.GetAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select('-password -otp') // 🔒 hide sensitive data
      .sort({ createdAt: -1 })  // newest first

    return res.status(200).json({
      success: true,
      count: users.length,
      users
    })

  } catch (error) {
    console.error('GetAllUsers error:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch users'
    })
  }
}

  