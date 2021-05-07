const {Schema} = require('mongoose')

const imageSchema = new Schema({
    path:{type: String}
})

module.exports= mongoose.model('Image', imageSchema)