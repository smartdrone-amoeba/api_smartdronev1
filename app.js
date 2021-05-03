const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
require('dotenv/config')


// connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false, useCreateIndex: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})

const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
      // no larger than 5mb.
      fileSize: 5 * 1024 * 1024,
    },
  })

// Middleware mrxxxxxxxxx kondro cvxbxcvxc
app.disable('x-powered-by')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(multerMid.single('file'))
app.use(cors())

// import routes
const projectRoutes = require('./routes/projectRoutes')
const userRoutes = require('./routes/userRoutes');
const pinRoutes = require('./routes/pinRoutes')

// ruoutes
app.use('/api/auth', userRoutes)
app.use('/api/project', projectRoutes)
app.use('/api/pin', pinRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`)
})
