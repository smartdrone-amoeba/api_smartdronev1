const gc = require('../config/')
const bucket = gc.bucket('contoh-cloud') 
const multer = require('multer')

exports.uploadToGCS = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file

  let publicUrl
  let data= []
  let blob
  file.forEach(file => {
  blob = bucket.file(file.originalname.replace(" ", "_"))
    publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    data.push(publicUrl)
  });

  const blobStream = blob.createWriteStream({
    resumable: false
  })
  blobStream.on('finish', () => {
    resolve(data)
  })
  .on('error', (err) => {
    reject(err)
  })
  .end(buffer)
})

exports.uploadFile = (field, max) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    fileSize: 5 * 1024 * 1024
}).array(field, max)

return (req, res, next) => {
  upload(req, res, (err) => {
    //! Error validation
    if (req.fileValidationError)
      return res.status(400).send(req.fileValidationError);

    //! Error file not selected
    if (!req.files && !err)
      return res.status(400).send({
        message: 'Please select files to upload',
      });

    //! Error over size limits
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).send({
          message: 'Max file sized 5MB',
        });
      }
      return res.status(400).send({
        status: 'failed',
        message: err.code
      });
    }
    //? Next to controller
    return next();
  });
}

}