const express = require('express')
const router = express.Router()
const Image = require('../models/imageModel')
require('dotenv/config')
const checkAuth = require('../middleware/check-auth')
const {uploadFile, uploadToGCS} = require('../helper/upload')

router.post('/add/:projectId/pinId', uploadFile('image', 5), async (req, res) =>{

    const {projectId, pinId} =  req.params
    const file = req.files
    try {
        if(req.files.length <= 0){
            res.json({
                status: 'failed',
                message: 'please select any file',
            })
        }
        const image = new Image({
            path: await uploadToGCS(file)
        })
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'request failed',
            error: err
        })
    }
})



module.exports = router