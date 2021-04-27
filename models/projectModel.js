const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var moment = require('moment'); 

const ProjectSchema = new Schema({
    //username 
    userName: {type: String,required: true},

    //detail project
    namaProject: {type: String,required: true},
    namaSurveyor: {type: String,required: true},
    alamatProject: {type: String,required: true},
    detailProject: {type: String},
    lokasi: {
        latitude : {type: Number}, 
        longitude : {type: Number}
    },

    //tgl project
    tglPlanning: {type: Date, default: new Date()},
    tglTarget: {type: Date, required:true, default:null},
    tglDeploy: {type: Date, default:null},
    createdAt: {type: Date, default: new Date()},
    updatedAt: {type: Date, default: null},

    //pin project 
    pin: [{
        type: Schema.Types.ObjectId,
        ref: 'Pin'
    }],
})

module.exports = mongoose.model('Project', ProjectSchema)
