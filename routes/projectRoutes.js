const express = require('express')
const { populate } = require('../models/projectModel')
const router = express.Router()
const Project = require('../models/projectModel')
const Pin = require('../models/pinModel')


// GET
//localhost:3001/api/project/get-all
router.get('/get-all', async (req, res)=> {
        Project.find().populate('pin').exec().then(response=>{
                res.json({
                    status: 'success',
                    message: 'data fetch successfully',
                    count: response.length,
                    data: response.map(data=>{
                        return{
                            _id:data._id,
                            userName: data.userName,
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
router.get('/get-one/:projectId', async(req, res) => {
    const {projectId:id} = req.params
    try {

        const response = await Project.findOne({_id:id})
        
        res.json({
            status: 'success',
            message: 'data fetch successfully',
            data: {
                    _id:response._id,
                    userName: response.userName,
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
                    pin: response.pin.map(data=>data)

                }
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

router.get('/search', async(req, res) => {
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
                    userName: data.userName,
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
router.post('/add', async (req, res) => {
    const projectPost = new Project({
        userName: req.body.userName,
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

        //pin
        pin: req.body.pinId

    })

    try {
        const project = await projectPost.save()
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
router.patch('/update/:projectId', async (req, res) => {

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

        if (req.body.userName){
            project.userName = req.body.userName
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












router.patch('/editone', async (req, res) => {
    try{
        const project = await Project.findByIdAndUpdate({_id: req.query.id},{new: true})
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
        // var data = req.body.lokasi
        // console.log(`${_.get(data,'latitude')}`)
        // console.log(`${_.get(data,`longitude`)}`)
        // if (req.body.lokasi) {
        //     if (_.has(data,`latitude`)){
        //         project.lokasi = _.set(data, 'latitude', _.get(data,'latitude'));
        //     }
            // if (_.has(data,`longitude`)){
            //     project.lokasi = _.set(data, 'longitude', _.get(data,'longitude'));
            // }
			//project.lokasi = req.body.lokasi
		// }
        await project.save()
        res.json(project)
    }catch(err){
        res.json({message: err})
    }
})
//localhost:3001/api/project/delete?id=[project id]  (exact macth) all detail project no pin overwrite db 
router.delete('/delete/:idProject', async(req, res) => {
    const{idProject:id} = req.params
    try {
        const response = await Project.remove({_id:id})
console.log(response)
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
