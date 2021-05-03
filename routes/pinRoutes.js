const express = require('express');
const router = express.Router();
const multer = require('multer');

const PinModel = require('../models/pinModel')
const {uploadToGCS, uploadFile} = require('../helper/upload')
const gc = require('../config')
const bucket = gc.bucket('contoh-cloud')


const upload = multer({
    storage: multer.memoryStorage(),
    fileSize: 5 * 1024 * 1024
})


// GET

//localhost:3001/api/project/get-all
router.get('/get-all', async (req, res) => {
    try {
        const response = await PinModel.find().populate('projectId')

        res.json({
            status: 'success',
            message: 'data fetch successfully',
            count: response.length,
            data: response
        })
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'error',
            data: err.message
        })
    }
})



// Get One
// localhost:3001/api/pin/get-one/[ pin id]

router.get('get-one/:pinId', async(req, res) => {
    const {pinId:id} = req.params
    try {
        const response = await PinModel.findOne({_id:id})

        res.json({
            status: 'success',
            message: 'data fetch successfully',
            count: response.length,
            data: response
        })
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'error',
            data: err.message
        })
    }
})

// CREATE 
//localhost:3001/api/pin/add
router.post('/add', uploadFile('image', 2), async (req, res) => {
    try {

        if(res.status === 500){
            res.json({
                status:'failed'
            })
        }
        const image = req.files
        const response = await uploadToGCS(image)
        console.log(response)

        res.json({
            status:'success',
            message: 'file successfully uploaded',
            data: response
        })
        
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'error 1',
            error: err
        })
    }
})


// Edit Pin
// localhost:3001/api/pin/update/[pin id]

router.patch('/update/:pinId', async (req, res) => {
    const { pinId:id } = req.params
    try {
        const pin = await PinModel.findByIdAndUpdate({_id:id},{new: true})
        if(!pin){
            res.json({
                status: "failed",
                message: `data id: ${id} not found`,

            })
        }
        if (req.body.latitude) {
			pin.koordinat.latitude = req.body.latitude
        }
        if (req.body.longitude) {
			pin.koordinat.longitude = req.body.longitude
        }
        if (req.body.poiStatus) {
			pin.poi.poiStatus = req.body.poiStatus
        }
        if (req.body.poiMode) {
			pin.poi.poiMode = req.body.poiMode
        }
        if (req.body.poiLatitude) {
			pin.poi.poiLatitude = req.body.poiLatitude
        }
        if (req.body.poiLongtude) {
			pin.poi.poiLongtude = req.body.poiLongtude
        }
        if (req.body.poiAltiutde) {
			pin.poi.poiAltiutde = req.body.poiAltiutde
        }
        if (req.body.disableGimbal) {
			pin.gimbalMode.disableGimbal = req.body.disableGimbal
        }
        if (req.body.focuspoiGimbal) {
			pin.gimbalMode.focuspoiGimbal = req.body.focuspoiGimbal
        }
        if (req.body.intepolateGimbal) {
			pin.gimbalMode.intepolateGimbal = req.body.intepolateGimbal
        }
        if (req.body.disableInterval) {
			pin.intervalMode.disableInterval = req.body.disableInterval
        }
        if (req.body.secondsInterval) {
			pin.intervalMode.disableGimbal = req.body.disableGimbal
        }
        if (req.body.metersInterval) {
			pin.intervalMode.metersInterval = req.body.metersInterval
        }

        if (req.body.action01) {
			pin.actions.action01 = req.body.action01
        }
        if (req.body.action02) {
			pin.actions.action02 = req.body.action02
        }
        if (req.body.action03) {
			pin.actions.action03 = req.body.action03
        }
        if (req.body.action04) {
			pin.actions.action04 = req.body.action04
        }
        if (req.body.action05) {
			pin.actions.action05 = req.body.action05
        }
        if (req.body.action06) {
			pin.actions.action06 = req.body.action06
        }
        if (req.body.action07) {
			pin.actions.action07 = req.body.action07
        }
        if (req.body.action08) {
			pin.actions.action08 = req.body.action08
        }
        if (req.body.action09) {
			pin.actions.action09 = req.body.action09
        }
        if (req.body.action10) {
			pin.actions.action10 = req.body.action10
        }
        if (req.body.action11) {
			pin.actions.action11 = req.body.action11
        }
        if (req.body.action12 ) {
			pin.actions.action12   = req.body.action12    
        }
        if (req.body.action13) {
			pin.actions.action13 = req.body.action13
        }
        if (req.body.action14) {
			pin.actions.action14 = req.body.action14
        }
        if (req.body.action15) {
			pin.actions.action15 = req.body.action15
        }

        return res.json({
            status:"failed",
            message: "not field edited"
        })

        
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'error',
            error: err.message
        })
    }
})


// Delete
// localhost:3001/api/pin/delete/[pin id]

router.delete('/delete/:pinId', async (req, res) => {
    const {pinId:id} = req.params
    try {
        const response = await PinModel.remove({_id:id})

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
            message: 'error',
            error: err.message
        })
    }
})

module.exports = router