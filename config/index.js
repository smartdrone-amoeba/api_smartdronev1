const Cloud = require('@google-cloud/storage')
const path = require('path')
require('dotenv/config')
const serviceKey = path.join(__dirname, '../key-new.json')

const { Storage } = Cloud

// Storage
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: "our-chess-310913",
})

module.exports = storage
