const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require('moment')
moment.locale('id')
let date = new Date()

console.log(date)

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
    tglPlanning: {type: Date, default: date.setHours(date.getHours() + 7)},
    tglTarget: {type: Date},
    tglDeploy: {type: Date},
    updatedAt: {type: Date, default: date},

    //pin project 
    pin: [
        {
            name: {type: String, required:true},
            koordinat    : {
                latitude : {type: Number}, 
                longitude : {type: Number}
            },
            speed: {type: Number},
            altitude: {type: Number},
            heading:{type:Number},
            curvesize: {type: Number},
            rotationdir: {type: Number},
            poi: {
                poiStatus:{type: Boolean},
                poiMode :{type:Number},
                poiLatitude:{type:Number},
                poiLongtude:{type:Number},
                poiAltiutde:{type:Number},
            },
            gimbalmode: {
                disabled:{type: Boolean},
                focuspoi:{type:Boolean},
                interpolate:{type: Number} // degree
            },
            intervalmode:{
                disabled:{type: Boolean},
                seconds:{type: Number},
                meters:{type:Number}
            },
            actions:{
                act01: {type: Number}, //type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
                act02: {type: Number},
                act03: {type: Number},
                act04: {type: Number},
                act05: {type: Number},
                act06: {type: Number},
                act07: {type: Number},
                act08: {type: Number},
                act09: {type: Number},
                act10: {type: Number},
                act11: {type: Number},
                act12: {type: Number},
                act13: {type: Number},
                act14: {type: Number},
                act15: {type: Number},
            }
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Project', ProjectSchema)
