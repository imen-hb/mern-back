// require express
const express = require('express')

// create instance
const app = express()

// bodyParser
app.use(express.json())

// require dotenv
require('dotenv').config() 

// Create PORT
const PORT = process.env.PORT || process.env.PORT2

// create server
app.listen(PORT, (err)=> {
    err ? console.log(err)
    :   console.log(`Server is running at http://127.0.0.1:${PORT}`)
})

// require connectDb function
const connect = require('./config/connectDB')
connect()


// require contact route
app.use('/api/contacts', require('./routes/contact'))

// require auth route
app.use('/api/auth', require('./routes/user')) 



