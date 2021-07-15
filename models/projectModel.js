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
    preview:{
        path:[{type:String}]
    },
    image2d: {
        path : [{type:String}]
    },
    image3d: {
        path : [{type:String}]
    },

    //pin project 
    pin: [
        {
            name: {type: String},
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
                act16: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act17: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act18: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act19: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act16: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act20: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act21: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act22: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act23: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act24: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act25: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act26: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act27: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act28: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act29: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act30: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act31: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act32: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act33: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act34: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act35: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act36: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act37: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act38: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act39: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act40: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act41: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act42: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act43: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act44: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act45: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act46: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act47: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act48: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act49: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
                act50: {
                    stay_for: {type: String},
                    take_photos: {type: String},
                    record_video: {type: String},
                    rotate: {type: String},
                    home: {type: String}
                },
            }
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Project', ProjectSchema)
