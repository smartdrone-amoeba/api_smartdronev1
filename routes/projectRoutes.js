const express = require('express')
const router = express.Router()
const Project = require('../models/projectModel')
const Pin = require('../models/pinModel')
const checkAuth = require('../middleware/check-auth')
const moment = require('moment')
moment.locale('id')
const date = `${moment().format('dddd')}, ${moment().format('LL')} ${moment().format('LTS')}`;


// GET
//localhost:3001/api/project/get-all
router.get('/get-all',checkAuth, async (req, res)=> {
        Project.find().populate(['user','pin']).exec().then(response=>{
                res.json({
                    status: 'success',
                    message: 'data fetch successfully',
                    count: response.length,
                    data: response.map(data=>{
                        return{
                            _id:data._id,
                            namaProject: data.namaProject,
                            namaSurveyor: data.namaSurveyor,
                            alamatProject:data.alamatProject,
                            detailProject:data.detailProject,
                            tglPlanning: data.tglPlanning,
                            lokasi: {
                                latitude: data.lokasi.latitude,
                                longitude: data.lokasi.longitude
                            },
                            tglDeploy: data.tglDeploy,
                            tglTarget: data.tglTarget,
                            pin: data.pin.map(data=>data),
                            user: {
                                _id: data.user && data.user._id,
                                name: data.user && data.user.name,
                                email: data.user && data.user.email,
                                gender: data.user && data.user.gender,
                                address: data.user && data.user.address,
                                phone: data.user && data.user.phone
                            }

                        }
                    })
                })
        })
        .catch(err=>{
            res.json({
                status: 'failed',
                message: 'request error',
                error: err.message,
            })
        }) 
})


// Get Detail Project
// localhost:3001/api/project/get-one/projectId [id project]
router.get('/get-one/:projectId', checkAuth, async(req, res) => {
    const {projectId:id} = req.params
    try {
        const response = await Project.findOne({_id:id}).populate(['user', 'pin'])
        
        res.json({
            status: 'success',
            message: 'data fetch successfully',
            data: {
                _id:response._id,
                            namaProject: response.namaProject,
                            namaSurveyor: response.namaSurveyor,
                            alamatProject:response.alamatProject,
                            detailProject:response.detailProject,
                            tglPlanning: response.tglPlanning,
                            lokasi: {
                                latitude: response.lokasi.latitude,
                                longitude: response.lokasi.longitude
                            },
                            tglDeploy: response.tglDeploy,
                            tglTarget: response.tglTarget,
                            pin: response.pin.map(data=>data),
                            user: {
                                _id: response.user._id,
                                name: response.user.name,
                                email: response.user.email,
                                gender: response.user.gender,
                                address: response.user.address,
                                phone: response.user.phone
                            }
            },
        })
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'request error',
            error: err.message,
        })
    }
})

// SEARCH
// localhost:3001/api/project/search?[namaProject || alamatProject || namaSurveyor ]=[your input]

router.get('/search', checkAuth, async(req, res) => {
    const {namaProject, alamatProject, namaSurveyor} = req.query
    try {
        
        if(namaProject || alamatProject || namaSurveyor){
        const response = await Project.find({$or: [
            {namaProject: {$regex :`${namaProject}` , $options: 'i' }},
            {alamatProject: {$regex : `${alamatProject}` , $options: 'i' }},
            {namaSurveyor:{$regex : `${namaSurveyor}` , $options: 'i' }}
        ]}).limit(5)
        res.json({
            status: 'success',
            message: 'data fetch successfully',
            count: response.length,
            data: response.map(data=>{
                return{
                    _id:data._id,
                    namaProject: data.namaProject,
                    namaSurveyor: data.namaSurveyor,
                    alamatProject:data.alamatProject,
                    detailProject:data.detailProject,
                    tglPlanning: data.tglPlanning,
                    lokasi: {
                        latitude: data.lokasi.latitude,
                        longitude: data.lokasi.longitude
                    },
                    tglDeploy: data.tglDeploy,
                    tglTarget: data.tglTarget,
                    pin: data.pin.map(data=>data)

                }
            })
        })}

        console.log(response)
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'request error',
            error: err.message,
        })
    }
})

// CREATE 
//localhost:3001/api/project/add
router.post('/add',checkAuth, async (req, res) => {

    try {
            

    // Project
    const projectPost = new Project({
        namaProject: req.body.namaProject,
        namaSurveyor: req.body.namaSurveyor,
        alamatProject: req.body.alamatProject,
        detailProject: req.body.detailProject,
        lokasi: {
            latitude: req.body.lokasiLatitude,
            longitude: req.body.lokasiLongitude
        },
        tglTarget: !req.body.tglTarget? 0 :`${moment(req.body.tglTarget).format('dddd')}, ${moment(req.body.tglTarget).format('LL')} ${moment(req.body.tglTarget).format('LTS')}`,
        tglDeploy: !req.body.tglDeploy? 0 :`${moment(req.body.tglDeploy).format('dddd')}, ${moment(req.body.tglDeploy).format('LL')} ${moment(req.body.tglDeploy).format('LTS')}`,

        //Pin
        pin: req.body.pin,
        user: req.userData.userId,

    }) 
        const newProject = await projectPost.save()
        const result = await Project.findByIdAndUpdate({_id:newProject._id})
        const project = await Project.findById({_id:newProject._id}).populate('pin')

        res.json({
            status: 'success',
            message: 'data create successfully',
            data: project
        })
    }catch(err){
        res.json({
            status: 'failed',
            message: 'error',
            error: err.message
        })
    }
})


// UPDATE PATCH 
//localhost:3001/api/project/update/projectId
router.patch('/update/:projectId', checkAuth, async (req, res) => {

    const {projectId:id} = req.params
    try {
        const project = await Project.findByIdAndUpdate({_id:id},{new: true})

        // Check if existed project
         if(!project){
            res.json({
                status: "failed",
                message: `data id: ${id} not found`,

            })
        }
        if (req.body.namaProject) {
			project.namaProject = req.body.namaProject
        }
        if (req.body.namaSurveyor) {
			project.namaSurveyor = req.body.namaSurveyor
        }
        if (req.body.alamatProject) {
			project.alamatProject = req.body.alamatProject
        }
        if (req.body.detailProject) {
			project.detailProject = req.body.detailProject
        }
        if (req.body.latitude) {
			project.lokasi.latitude = req.body.latitude
        }
        if (req.body.longitude) {
			project.lokasi.longitude = req.body.longitude
        }
        project.updateAt = `${moment().format('dddd')}, ${moment().format('LL')} ${moment().format('LTS')}`;

        const projectUpdated = await project.save()

        // response
        res.json({
            status: 'success',
            message: 'data update successfully',
            data: projectUpdated
        })
    } catch (err) {
        res.json({
            status: 'failed',
            message: 'error',
            error: err.message
        })
    }
})


// Update Pin

router.patch('/update/:projectId/pin/:pinId', async (req, res) => {
    const {projectId, pinId} = req.params
    try {
        const project = await Project.findOne({_id:projectId})
        const pin = project.pin.find(item => item._id == pinId)

        if(!project){
            res.json({
                status: "failed",
                message: `data project id: ${projectId} not found`,

            })
        }else if(!pin){
            res.json({
                status: "failed",
                message: `data pin id: ${pinId} not found`,

            })
        }
        if(req.body.name){
            pin.name = req.body.name
        }
        if(req.body.speed){
            pin.speed = req.body.speed
        }
        if(req.body.altitude){
            pin.altitude = req.body.altitude
        }
        if(req.body.heading){
            pin.heading = req.body.heading
        }
        if(req.body.curvesize){
            pin.curvesize = req.body.curvesize
        }
        if(req.body.rotationdir){
            pin.rotationdir = req.body.rotationdir
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

        const pinEdited =  await Project.updateOne({"pin._id":pinId}, {$set: {"pin.$": pin}})


        if(pinEdited.n==0){
            return res.json({
                status: 'failed',
                message: 'error',
                error: "server error"
            })
        }

        if(pinEdited.nModified == 0){
            return res.json({
                status: 'failed',
                message: 'please input field updated',
                error: "update error"
            })
        }
        // response
        return res.json({
            status: 'success',
            message: 'data update successfully',
            data: `pin id: ${pinId}`
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
//localhost:3001/api/project/delete?id=[project id]  (exact macth) all detail project no pin overwrite db 
router.delete('/delete/:idProject', checkAuth, async(req, res) => {
    const{idProject:id} = req.params
    try {
        const response = await Project.remove({_id:id})
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



module.exports = router ;


 // namaProject: req.body.namaProject,
            // namaSurveyor: req.body.namaSurveyor,
            // alamatProject: req.body.alamatProject,
            // detailProject: req.body.detailProject,
            // koordinat: req.body.koordinat,
            // tglTarget: req.body.tglTarget,
