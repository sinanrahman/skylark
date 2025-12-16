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
  