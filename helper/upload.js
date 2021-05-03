const googleCloud = require('../config/')
const bucket = googleCloud.bucket('contoh-cloud')
const multer = require('multer');

exports.uploadFile = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file

  const blob = bucket.file(originalname.replace(/ /g, "_"))
  
  const blobStream = blob.createWriteStream({
    resumable: false
  })

  blobStream.on('finish', () => {
    const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`)
    resolve(publicUrl)
  })
  .on('error', (err) => {
    reject(`Unable to upload image, something went wrong`)
    console.log(err)
  })
  .end(buffer)
})