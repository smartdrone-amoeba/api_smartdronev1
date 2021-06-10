const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require('moment')
moment.locale('id')
let date = new Date()
date.setHours(date.getHours() + 7)


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
    tglPlanning: {type: Date, default:date },
    tglTarget: {type: Date},
    deploy: [
        {tglDeploy: {type:Date}}
    ],
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
                act01: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                }, //type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
                act02: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act03: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act04: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act05: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act06: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act07: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act08: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act09: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act10: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act11: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act12: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act13: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act14: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act15: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
            },
            preview:{
                path:[{type:String}]
            }
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Project', ProjectSchema)
