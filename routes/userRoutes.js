const User = require('../models/user')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('./projectRoutes')
require('dotenv/config')

let date = new Date()
date.setHours(date.getHours() + 7)


// Get All User
// http://localhost:3001/api/auth/get-all
router.get('/get', async (req, res)=> {
    try {
        const response = await User.find().select('_id name email address phone createdAt updatedAt')

        res.json({
            status: 'success',
            message: 'data fetch successfully',
            count: response.length,
            data: response
        })
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'request error',
            error: err.message,
        })
    }
})



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


router.patch('/update-user/:userId', async(req, res) => {
    const {userId:id} = req.params
try {
    const user = await User.findByIdAndUpdate({_id:id},{new: true}).select('_id name email address phone createdAt updatedAt')

        // Check if existed project
         if(!user){
            res.json({
                status: "failed",
                message: `data id: ${id} not found`,

            })
        }
        if (req.body.name) {
			user.name = req.body.name
            user.updatedAt = date
        }
        if (req.body.address) {
			user.address = req.body.address
            user.updatedAt = date
        }
        if (req.body.phone) {
			user.phone = req.body.phone
            project.updatedAt = date
        }

        const userUpdated = await user.save()

        // response
        res.json({
            status: 'success',
            message: 'data update successfully',
            data: userUpdated
        })
} catch (err) {
    res.json({
        status: 'failed',
        message: 'request failed',
        error: err.message,
    })
}
})

router.delete('/delete/:userId', async(req, res) => {
    const{userId:id} = req.params
    try {
        const response = await User.remove({_id:id})
        if(response.n){
            res.json({
                status: 'success',
                message: 'data delete successfully',
                id: id
            })       
        }else{
        res.json({
            status: 'failed',
            message:`data id: ${id} not found`,
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

module.exports = router