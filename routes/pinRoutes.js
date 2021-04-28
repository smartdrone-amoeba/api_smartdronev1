const express = require('express');
const router = express.Router();

const PinModel = require('../models/pinModel')


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
router.post('/add', async (req, res) => {
    try {
        const newPin = new PinModel({
            koordinate : {
                latitude: req.body.latitude,
                longitude: req.body.longitude
            },
            speed: req.body.speed,
            altitude: req.body.altitude,
            heading: req.body.heading,
            curvesize: req.body.curvesize,
            rotationdir: req.body.rotationdir,
            poi:{
                poiStatus: req.body.poiStatus,
                poiMode: req.body.poiMode,
                poiLatitude: req.body.poiLatitude,
                poiLongtude: req.body.poiLongtude,
                poiAltiutde: req.body.poiAltiutde,
            },
            gimbalmode:{
                disable: req.body.disableGimbal,
                focuspoi: req.body.focuspoiGimbal,
                interpolate: req.body.interpolateGimbal,
            },
            intervalmode:{
                disable: req.body.disableInterval,
                seconds: req.body.secondsInterval,
                meters:req.body.metersInterval,
            },
            actions: {
                act01: req.body.action01,
                act02: req.body.action02,
                act03: req.body.action03,
                act04: req.body.action04,
                act05: req.body.action05,
                act06: req.body.action06,
                act07: req.body.action07,
                act08: req.body.action08,
                act09: req.body.action09,
                act10: req.body.action10,
                act11: req.body.action11,
                act12: req.body.action12,
                act13: req.body.action13,
                act14: req.body.action14,
                act15: req.body.action15,
            }
        })

        const createPin = await newPin.save()
        res.json({
            status: 'success',
            message: 'data create successfully',
            data: createPin
        })

    } catch (err) {
        res.json({
            status: 'failed',
            message: 'error',
            error: err.message
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