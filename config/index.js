const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = require('../key.json')

const { Storage } = Cloud

// Storage
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: process.env.GCS_PROJECT_ID,
})

module.exports = storage