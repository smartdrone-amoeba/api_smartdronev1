const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true, min:10},
    name: {type: String, required: true},
    address: {type: String,required: true},
    gender: {type: String, required: true},
    phone: {type: String, required: true},
    projects: [{type:Schema.Types.ObjectId, ref: 'Project'}]
})

module.exports = mongoose.model('User', userSchema)