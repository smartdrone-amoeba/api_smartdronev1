const express = require('express')
const router = express.Router()
const Project = require('../models/projectModel')
const Pin = require('../models/pinModel')
const checkAuth = require('../middleware/check-auth')


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
                            pin: data.pin.map(data=>data.poi),
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
                            pin: response.pin.map(data=>data.poi),
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
            const newPin = new Pin({
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
    
        const pinPost = await newPin.save()

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
        tglPlanning: req.body.tglPlanning,
        tglTarget: req.body.tglTarget,
        tglDeploy: req.body.tglDeploy,

        //Pin
        pin: [...pinPost._id ],
        user: req.userData.userId,

    }) 
        const newProject = await projectPost.save()
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
