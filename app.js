const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')


// connect to DB google storage api
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false, useCreateIndex: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})

app.disable('x-powered-by')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// import routes
const projectRoutes = require('./routes/projectRoutes')
const userRoutes = require('./routes/userRoutes');

// ruoutes
app.use('/api/auth', userRoutes)
app.use('/api/project', projectRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`)
})
