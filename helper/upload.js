const multer = require('multer');
const fs = require('fs')

// =============================================================
//                         Upload Image
// =============================================================
exports.uploadImage = (fields) => {
  const dirUpload = fs.readdirSync('uploads/')
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const filename =  file.originalname.replace(/\s+/g, '-')
      if(file.originalname.match(/\.(OBJ|obj)/)){
        return cb(null, 'file.obj')
      }
      if(file.originalname.match(/\.(MTL|mtl)/)){
        return cb(null, 'file.mtl')
      }
      return cb(null,Date.now() + '-' + filename);
    },
  });
  //? handle channel table upload file
  const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|OBJ|obj|MTL|mtl)$/)) {
      req.fileValidationError = {
        message: 'Only image files are allowed!',
      };
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  };

  const maxSize = 50 * 1000 * 1000;

  const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: maxSize },
  }).fields(fields);

  //? Middleware
  return (req, res, next) => {
    if(dirUpload.length > 0){
      dirUpload.map(data => {
        fs.unlinkSync(`uploads/${data}`)
      })
    }
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
            message: 'Max file sized 50MB',
          });
        }
        return res.status(400).send(err);
      }
      //? Next to controller
      return next();
    });
  };
};

// =============================================================
//                         Export
// =============================================================

exports.uploadFiles = () => {

return (req, res, next) => {
    next()
}
}