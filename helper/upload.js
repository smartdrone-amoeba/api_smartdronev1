const multer = require('multer');

// =============================================================
//                         Upload Image
// =============================================================
exports.uploadImage = (fields) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const filename = file.originalname.replace(/\s+/g, '-')
      return cb(null, Date.now() + '-' + filename);
    },
  });
  //? handle channel table upload file
  const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = {
        message: 'Only image files are allowed!',
      };
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  };

  const maxSize = 15 * 1000 * 1000;

  const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: maxSize },
  }).fields(fields);

  //? Middleware
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