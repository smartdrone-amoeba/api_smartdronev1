const gc = require("../config/");
const bucket = gc.bucket("contoh-cloud");
const multer = require("multer");
const sharp = require("sharp")

exports.uploadToGCS =  (file) =>
  new Promise( async (resolve, reject) => {
    
    let previewUrl, previewUrlCompress,  image2dUrl, image2dUrlCompress, image3dUrl, image3dUrlCompress;
    let preview = [];
    let image2d = [];
    let image3d = [];
    let previewCompress = [];
    let image2dCompress = [];
    let image3dCompress = [];
    let previewBlob, image2dBlob, image3dBlob;
    file.forEach( async file=> {    
      // console.log(file)
      if(file.fieldname == 'preview') {
          const filename = Date.now() + "-" + file.originalname;
          //* Preview 
          setTimeout(() => {
          previewBlob = bucket.file(`preview/${filename.replace(" ", "_")}`);
          previewUrl = `https://storage.googleapis.com/${bucket.name}/${previewBlob.name}`;
          preview.push(previewUrl);
    
          const blobStream = previewBlob.createWriteStream();
          blobStream.on("finish", () => {
            resolve(preview);
          });
          blobStream.on("error", (err) => {
            reject(err);
          });
          blobStream.end(file.buffer);
          }, 3000)
    
          //* Compress
          previewBlobCompress = bucket.file(`compress/preview/${filename.replace(" ", "_")}`);
          previewUrlCompress = `https://storage.googleapis.com/${bucket.name}/${previewBlobCompress.name}`;
          previewCompress.push(previewUrlCompress);
    
          const blobStreamCompress = previewBlobCompress.createWriteStream();
          blobStreamCompress.on("finish", () => {
            resolve(previewCompress);
          });
          blobStreamCompress.on("error", (err) => {
            reject(err);
          });
    
          let compressing = file;
          const response = await sharp(compressing.buffer).toBuffer()
          blobStreamCompress.end(response);
      }
      //* Image 2D
      if(file.fieldname == 'image2d') {
        const filename = Date.now() + "-" + file.originalname;
        //* Raw Version 
        setTimeout(() => {
        image2dBlob = bucket.file(`image2d/${filename.replace(" ", "_")}`);
        image2dUrl = `https://storage.googleapis.com/${bucket.name}/${image2dBlob.name}`;
        image2d.push(image2dUrl);

        const blobStream = image2dBlob.createWriteStream();
        blobStream.on("finish", () => {
          resolve(image2d);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        blobStream.end(file.buffer);
        }, 3000)
  
        //* Compress
        // image2dBlobCompress = bucket.file(`compress/image2d/${filename.replace(" ", "_")}`);
        // image2dUrlCompress = `https://storage.googleapis.com/${bucket.name}/${image2dBlobCompress.name}`;
        // image2dCompress.push(image2dUrlCompress);
  
        // const blobStreamCompress = image2dBlobCompress.createWriteStream();
        // blobStreamCompress.on("finish", () => {
        //   resolve(image2dCompress);
        // });
        // blobStreamCompress.on("error", (err) => {
        //   reject(err);
        // });
  
        // let compressing = file;
        // const response = await sharp(compressing.buffer).toBuffer()
        // blobStreamCompress.end(response);
    }
    //* Image 3D
    if(file.fieldname == 'image3d') {
      const filename = Date.now() + "-" + file.originalname;
      //* Raw Version 
      setTimeout(() => {
      image3dBlob = bucket.file(`image3d/${filename.replace(" ", "_")}`);
      image3dUrl = `https://storage.googleapis.com/${bucket.name}/${image3dBlob.name}`;
      image3d.push(image3dUrl);

      const blobStream = image3dBlob.createWriteStream();
      blobStream.on("finish", () => {
        resolve(image3d);
      });
      blobStream.on("error", (err) => {
        reject(err);
      });
      blobStream.end(file.buffer);
      }, 3000)

      //* Compress
      // image3dBlobCompress = bucket.file(`compress/image3d/${filename.replace(" ", "_")}`);
      // image3dUrlCompress = `https://storage.googleapis.com/${bucket.name}/${image3dBlobCompress.name}`;
      // image3dCompress.push(image3dUrlCompress);

      // const blobStreamCompress = image3dBlobCompress.createWriteStream();
      // blobStreamCompress.on("finish", () => {
      //   resolve(image3dCompress);
      // });
      // blobStreamCompress.on("error", (err) => {
      //   reject(err);
      // });

      // let compressing = file;

      // const response = await sharp(compressing.buffer).toBuffer()
      // blobStreamCompress.end(response);
  }
    })
  });

exports.uploadFile = (fields) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    fileSize: 20 * 1024 * 1024,
  }).fields(fields);

  return (req, res, next) => {

    upload(req, res, (err) => {
      //! Error validation
      if (req.fileValidationError)
        return res.status(400).send(req.fileValidationError);

      //! Error file not selected
      if (req.files.length == 0 && !err)
        return res.status(400).send({
          message: "Please select files to upload",
        });

      //! Error over size limits
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).send({
            message: "Max file sized 20MB",
          });
        }
        return res.status(400).send({
          status: "failed",
          message: err.code,
        });
      }
      //? Next to controller
      return next();
    });
  };
};
