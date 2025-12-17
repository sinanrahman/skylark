require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const cors = require("cors");
const fileUpload = require('express-fileupload')

const app = express()

app.set('view engine','ejs')
app.set('views','views')

app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const auth = require('./routes/auth')
const home = require('./routes/home')
const admin = require('./routes/admin')
const connectCloudinary = require('./config/cloudinary')
const { isLoggedin, isAdmin } = require('./middlewares/auth')

app.use('/api', auth)
app.use('/api',isLoggedin, home)
app.use('/api',isLoggedin,isAdmin, admin)



app.use((req, res) => {
    return res.send('<h1 style="text-align:center;">404</h1>')
})
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
    connectDB()
    connectCloudinary()
});