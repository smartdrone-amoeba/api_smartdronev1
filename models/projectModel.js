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
    lokasi    : {
        latitude : {type: Number}, 
        longitude : {type: Number}
    },


    //tgl project
    tglPlanning: {type: Date},
    tglTarget: {type: Date},
    tglDeploy: {type: Date},

    //pin project 
    pin: [{
        type: Schema.Types.ObjectId,
        ref: 'Pin'
    }],
},{
    timestamps: true
  })

module.exports = mongoose.model('Project', ProjectSchema)
