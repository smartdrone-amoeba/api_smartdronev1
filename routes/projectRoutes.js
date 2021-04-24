const express = require('express')
const router = express.Router()
const Project = require('../models/projectModel')
const _ = require('lodash')
var arrProject = ["namaProject","namaProject","alamatProject","detailProject"]

// CREATE 
//localhost:3001/api/project/add
router.post('/add', async (req, res) => {
    const projectPost = new Project({
        userName: req.body.userName,
        namaProject: req.body.namaProject,
        namaSurveyor: req.body.namaSurveyor,
        alamatProject: req.body.alamatProject,
        detailProject: req.body.detailProject,
        lokasi: req.body.lokasi,
        tglPlanning: req.body.tglPlanning,
        tglTarget: req.body.tglTarget,
        tglDeploy: req.body.tglDeploy,

        //pin
        pin01: req.body.pin01,
        pin02: req.body.pin02,
        pin03: req.body.pin03,
        pin04: req.body.pin04,
        pin05: req.body.pin05,
        pin06: req.body.pin06,
        pin07: req.body.pin07,
        pin08: req.body.pin08,
        pin09: req.body.pin09,
        pin10: req.body.pin10,
        pin11: req.body.pin11,
        pin12: req.body.pin12,
        pin13: req.body.pin13,
        pin14: req.body.pin14,
        pin15: req.body.pin15,
        pin16: req.body.pin16,
        pin17: req.body.pin17,
        pin18: req.body.pin18,
        pin19: req.body.pin19,
        pin20: req.body.pin20,
        pin21: req.body.pin21,
        pin22: req.body.pin22,
        pin23: req.body.pin23,
        pin24: req.body.pin24,
        pin25: req.body.pin25,
        pin26: req.body.pin26,
        pin27: req.body.pin27,
        pin28: req.body.pin28,
        pin29: req.body.pin29,
        pin30: req.body.pin30,
        pin31: req.body.pin31,
        pin32: req.body.pin32,
        pin33: req.body.pin33,
        pin34: req.body.pin34,
        pin35: req.body.pin35,
        pin36: req.body.pin36,
        pin37: req.body.pin37,
        pin38: req.body.pin38,
        pin39: req.body.pin39,
        pin40: req.body.pin40,
        pin41: req.body.pin41,
        pin42: req.body.pin42,
        pin43: req.body.pin43,
        pin44: req.body.pin44,
        pin45: req.body.pin45,
        pin46: req.body.pin46,
        pin47: req.body.pin47,
        pin48: req.body.pin48,
        pin49: req.body.pin49,
        pin50: req.body.pin50,
    })

    try {
        const project = await projectPost.save()
        res.json(project)
    }catch(err){
        res.json({message: err})
    }
})

// READ 
//localhost:3001/api/project/search?id=[project id]  (exact macth)
//localhost:3001/api/project/search?surveyor=[surveyor] (exact match)
//localhost:3001/api/project/search?project=[nama project]  (exact macth)
//localhost:3001/api/project/search?alamat=[alamat project]  (exact macth)

//localhost:3001/api/project/search?lsurveyor=[surveyor] (like ) Case insensitivity to match upper and lower cases
//localhost:3001/api/project/search?lproject=[nama project]  (like ) Case insensitivity to match upper and lower cases
//localhost:3001/api/project/search?lalamat=[alamat project]  (like )Case insensitivity to match upper and lower cases
router.get('/search', async (req, res) => {
    try {
        //exact match
        var xid = req.query.id
        var xsurveyor = req.query.surveyor
        var xproject = req.query.project
        var xalamat = req.query.alamat

        //like match
        var lsurveyor = req.query.lsurveyor
        var lproject = req.query.lproject
        var lalamat = req.query.lalamat

        //exact match
        if ( typeof xid !== 'undefined'){
            const project  = await Project.find({_id: xid})
            res.json(project)
        } else if (typeof xsurveyor !== 'undefined'){
            const project  = await Project.find({namaSurveyor: xsurveyor})
            res.json(project)
        } else if (typeof xproject !== 'undefined'){
            const project  = await Project.find({namaProject: xproject})
            res.json(project)
        } else if (typeof xalamat !== 'undefined'){
            const project  = await Project.find({alamatProject: xalamat})
            res.json(project)
        }

        //like match
        if (typeof lsurveyor !== 'undefined'){
            const project  = await Project.find({namaSurveyor: {$regex: lsurveyor, $options: 'i'}}).limit(5)
            res.json(project)
        } else if (typeof lproject !== 'undefined'){
            const project  = await Project.find({namaProject: {$regex: lproject, $options: 'i'}}).limit(5)
            res.json(project)
        } else if (typeof lalamat !== 'undefined'){
            const project  = await Project.find({alamatProject: {$regex: lalamat, $options: 'i'}}).limit(5)
            res.json(project)
        }
    }catch(err){
        res.json({message: err})
    }
})

// UPDATE
//localhost:3001/api/project/edit?id=[project id]  (exact macth) all detail project no pin overwrite db 
router.put('/edit', async (req, res) => {
    try{
        const project = await Project.updateOne({_id: req.query.id}, {
            //userName: req.body.userName, edit in username route
            namaProject: req.body.namaProject,
            namaSurveyor: req.body.namaSurveyor,
            alamatProject: req.body.alamatProject,
            detailProject: req.body.detailProject,
            lokasi: req.body.lokasi,
            //tglPlanning: req.body.tglPlanning, set by system
            tglTarget: req.body.tglTarget,
            //tglDeploy: req.body.tglDeploy,  set by system
        })
        res.json(project)
    }catch(err){
        res.json({message: err})
    }
})

// UPDATE
//localhost:3001/api/project/editpin?id=[project id]  (exact macth) all pin overwrite db 
router.put('/editpin', async (req, res) => {
    try{
        const project = await Project.updateOne({_id: req.query.id}, {
            pin01: req.body.pin01,
            pin02: req.body.pin02,
            pin03: req.body.pin03,
            pin04: req.body.pin04,
            pin05: req.body.pin05,
            pin06: req.body.pin06,
            pin07: req.body.pin07,
            pin08: req.body.pin08,
            pin09: req.body.pin09,
            pin10: req.body.pin10,
            pin11: req.body.pin11,
            pin12: req.body.pin12,
            pin13: req.body.pin13,
            pin14: req.body.pin14,
            pin15: req.body.pin15,
            pin16: req.body.pin16,
            pin17: req.body.pin17,
            pin18: req.body.pin18,
            pin19: req.body.pin19,
            pin20: req.body.pin20,
            pin21: req.body.pin21,
            pin22: req.body.pin22,
            pin23: req.body.pin23,
            pin24: req.body.pin24,
            pin25: req.body.pin25,
            pin26: req.body.pin26,
            pin27: req.body.pin27,
            pin28: req.body.pin28,
            pin29: req.body.pin29,
            pin30: req.body.pin30,
            pin31: req.body.pin31,
            pin32: req.body.pin32,
            pin33: req.body.pin33,
            pin34: req.body.pin34,
            pin35: req.body.pin35,
            pin36: req.body.pin36,
            pin37: req.body.pin37,
            pin38: req.body.pin38,
            pin39: req.body.pin39,
            pin40: req.body.pin40,
            pin41: req.body.pin41,
            pin42: req.body.pin42,
            pin43: req.body.pin43,
            pin44: req.body.pin44,
            pin45: req.body.pin45,
            pin46: req.body.pin46,
            pin47: req.body.pin47,
            pin48: req.body.pin48,
            pin49: req.body.pin49,
            pin50: req.body.pin50,
        })
        res.json(project)
    }catch(err){
        res.json({message: err})
    }
})

// UPDATE PATCH 
//localhost:3001/api/project/editone?id=[project id]  (exact macth) edit parameter saja
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



module.exports = router ;


 // namaProject: req.body.namaProject,
            // namaSurveyor: req.body.namaSurveyor,
            // alamatProject: req.body.alamatProject,
            // detailProject: req.body.detailProject,
            // koordinat: req.body.koordinat,
            // tglTarget: req.body.tglTarget,
