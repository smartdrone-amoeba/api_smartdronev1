const express = require('express');
const router = express.Router();

const PinModel = require('../models/pinModel')


// GET

//localhost:3001/api/project/get-all
router.get('/get-all', async (req, res) => {
    try {
        const response = await PinModel.find()

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

module.exports = router