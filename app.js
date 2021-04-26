const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// Middleware mrxxxxxxxxx kondro cvxbxcvxc
app.use(bodyParser())
app.use(cors())

// import routes
const projectRoutes = require('./routes/projectRoutes')
const pinRoutes = require('./routes/pinRoutes');

// ruoutes
app.use('/api/project', projectRoutes)
app.use('/api/pin', pinRoutes)

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`)
})
