const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var moment = require('moment'); 

const ProjectSchema = new Schema({
    //detail project
    namaProject: {type: String,required: true},
    namaSurveyor: {type: String,required: true},
    alamatProject: {type: String,required: true},
    detailProject: {type: String},
    lokasi: {
        latitude : {type: Number, default:null}, 
        longitude : {type: Number, default: null}
    },

    //tgl project
    tglPlanning: {type: Date, default: new Date()},
    tglTarget: {type: Date, default:null},
    tglDeploy: {type: Date, default:null},
    createdAt: {type: Date, default: new Date()},
    updatedAt: {type: Date, default: null},

    //pin project 
    pin: [{
        type: Schema.Types.ObjectId,
        ref: 'Pin'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Project', ProjectSchema)
