const sendCookie = async (user, res) => {
    try {
        const token = await user.getJwtToken()
        const options = {
            expires: new Date(Date.now() + (7 * 60 * 60 * 1000)),
            httpOnly: true,
            secure:false,
            sameSite:'Lax'
        }
        // return res.status(200).json({
        //     message:'Login Successful',
        //     user:{
        //         id: user.id,
        //         name: user.name,
        //         username: user.username,
        //         role: user.role
        //     }
        // })
        return res.cookie('token', token, options).status(200).json({
            message: 'Login Successful',
            token: token,
            user:user
        })
    } catch (e) {
        console.log('error while generating cookie')
        console.log(e)
    }
}

module.exports = sendCookie