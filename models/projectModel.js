const mongoose = require('mongoose')
var moment = require('moment'); 

const ProjectSchema = mongoose.Schema({
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
    pin01: {
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },
    pin02: {
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },
    pin03: {
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },
    pin04: {
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin05: {
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin06: {
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin07: {
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin08: {
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin09: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin10: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin11: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin12: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin13: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin14: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin15: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin16: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin17: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin18: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },
    pin19: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin20: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
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
        speed:{type:Number},
        actions:{
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin21: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin22: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin23: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin24: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin25: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin26: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin27: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin28: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin29: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin30: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin31: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin32: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin33: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin34: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin35: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin36: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin37: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin38: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin39: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin40: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin41: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin42: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin43: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin44: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin45: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin46: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin47: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin48: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin49: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },

    pin50: {
        koordinat    : {
            latitude : {type: Number}, 
            longitude : {type: Number}
        },
        speed:{type:Number},
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
            act01: {type: Number},//type 1 photo , 2 video start, 3 video stop , 4 rotate aircraf, 5 tilt camera
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
    },


    tglTerdaftar: {type: Date,default: moment().toDate()}
})

module.exports = mongoose.model('Project', ProjectSchema)
