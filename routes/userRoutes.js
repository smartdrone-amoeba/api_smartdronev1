const User = require('../models/user')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('./projectRoutes')
require('dotenv/config')

// Sign Up

router.post('/register', async(req, res) => {
    const {email, password, name, gender, address, phone} = req.body
    try {
        const checkExistedUser = await User.findOne({email})

    if(checkExistedUser){
        res.json({
            message: 'Email exists'
        });
    }

    bcrypt.hash(password, 10, async (err, result) => {
        const newUser = new User({
            email,
            name,
            address,
            gender,
            phone,
            password: result
        })      
            try {
                const userCreated = await newUser.save();
                if(userCreated){
                    const token = jwt.sign({
                        email: userCreated.email,
                        userId: userCreated._id
                    }, process.env.JWT_KEY)

                    res.json({
                        status: 'success',
                        message: 'User was created',
                        token: token,
                    })
                }
            } catch (err) {
                res.json({
                    status: 'failed',
                    message: 'request error',
                    error: err.message,
                })
            }
        

    })
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'request failed',
            error: err.message,
        })
    }
})

router.post('/login', async(req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email});
        if(!user){
             return res.json({
                status: 'failed',
                message: 'account not found',
            })
        }

        bcrypt.compare(password, user.password, (err, result) => {
            try {
                if(err){
                     res.json({
                        status:"failed",
                        message: 'auth failed'
                    })    
                    return;
                }

                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user._id
                    }, process.env.JWT_KEY)

                    return res.json({
                        status:'success',
                        message: "login successfully",
                        token,
                    })
                }

                return res.json({
                    status:"failed",
                    message: `password mismatch with email: ${email}`
                })
            } catch (err) {
                res.json({
                    status: 'failed',
                    message: 'request failed',
                    error: err.message,
                })
            }
        })

    } catch (err) {
        res.json({
            status: 'failed',
            message: 'request failed',
            error: err.message,
        })
    }
})

module.exports = router