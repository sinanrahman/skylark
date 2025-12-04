require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine','ejs')
app.set('views','views')

app.use(cookieParser())
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('static'))

app.use((req, res) => {
    return res.send('404')
})

const auth = require('./routes/auth')

app.use('/', auth)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
    connectDB()
});