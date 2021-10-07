const gc = require("../config/");
const bucket = gc.bucket("contoh-cloud");
const multer = require("multer");
const { format } = require("util");
const sharp = require("sharp");

const { Storage } = require("@google-cloud/storage");

// Creates a client

const path = require("path");
const fs = require("fs");
var absolutePath = path.resolve('../../../');
const publicDir = path.join(__dirname, "../../texturing");
const pathPublic = path.join(__dirname, "../");



exports.downloadFiles = async (files) => {
  for (i = 0; i < files.length; i++) {
    const filename = files[i].replace(
      "https://storage.googleapis.com/contoh-cloud/",
      ""
    );

    let options;
    if (i === 0) {
      options = {
        destination: path.join(`${publicDir}/`, `file${i}.obj`),
      };
    } else if (i === 1) {
      options = {
        destination: path.join(`${publicDir}/`, `file${i}.mtl`),
      };
    } else {
      options = {
        destination: path.join(`${publicDir}texturing/`, `file${i}.png`),
      };
    }
    await bucket.file(filename).download(options);
  }
};

exports.donwloadFile = async (obj, mtl) => {
  const optionsObj = {
    destination: path.join(publicDir, "objFile.obj"),
  };

  const optionsMtl = {
    destination: path.join(publicDir, "mtlFile.mtl"),
  };

  await bucket.file(obj).download(optionsObj);
  await bucket.file(mtl).download(optionsMtl);
};

exports.uploadV4 = async (file) => {
  try {
    const filename = Date.now() + "-" + file.originalname.replace(" ", "_");
    const options = {
      version: "v4",
      action: "write",
      expires: Date.now() + 5 * 60 * 1000, // 5 minutes
      contentType: "application/octet-stream",
    };
    const [url] = await bucket.file(filename).getSignedUrl(options);

    console.log("Url : ", url);
  } catch (err) {
    console.log("err yah", err);
  }
};

exports.uploadPath = async (file) => {

  const filename = Date.now() + "-" + file.originalname.replace(" ", "_");
  const response = await bucket.upload(`/${file.originalname}`, {
    destination: filename,
  });
  const filePath = `https://storage.googleapis.com/${bucket.name}/preview/${filename}`;
};

exports.uploadPreviewToGCS = (file) =>
  new Promise(async (resolve, reject) => {
    let previewUrl, previewUrlCompress, previewBlob, previewBlobCompress;
    let preview = [];
    let previewCompress = [];
    if (file.fieldname === "preview") {
      const filename = Date.now() + "-" + file.originalname;
      //* Preview
      previewBlob = bucket.file(`preview/${filename.replace(" ", "_")}`);
      previewUrl = `https://storage.googleapis.com/${bucket.name}/${previewBlob.name}`;
      preview.push(previewUrl);

      const blobStream = previewBlob.createWriteStream();
      blobStream.on("finish", () => {
        // resolve(preview);
      });
      blobStream.on("error", (err) => {
        reject(err);
      });
      blobStream.end(file.buffer);
      //* Compress
      previewBlobCompress = bucket.file(
        `compress/preview/${filename.replace(" ", "_")}`
      );
      previewUrlCompress = format(
        `https://storage.googleapis.com/${bucket.name}/${previewBlobCompress.name}`
      );
      previewCompress.push(previewUrlCompress);

      const blobStreamCompress = previewBlobCompress.createWriteStream();
      blobStreamCompress.on("finish", () => {
        resolve(previewCompress);
      });
      blobStreamCompress.on("error", (err) => {
        reject(err);
      });

      let compressing = file;
      const response = await sharp(compressing.buffer).toBuffer();
      blobStreamCompress.end(response);
    }
  });
exports.uploadToGCS = (files) =>
  new Promise((resolve, reject) => {
    let previewUrl,
      previewUrlCompress,
      image2dUrl,
      image2dUrlCompress,
      image3dUrl,
      image3dUrlCompress,
      pluginUrl,
      csvUrl,
      pngUrl,
      kmlUrl,
      jpegUrl,
      reportUrl,
      avatarUrl;
    let preview = [];
    let image2d = [];
    let image3d = [];
    let plugin, csv, png, kml, jpeg, report, avatar;
    let previewCompress = [];
    let image2dCompress = [];
    let image3dCompress = [];
    let previewBlob,
      previewBlobCompress,
      image2dBlob,
      image3dBlob,
      pluginBlob,
      csvBlob,
      pngBlob,
      kmlBlob,
      jpegBlob,
      reportBlob,
      avatarBlob;
    files.forEach(async (file) => {
      if (file.fieldname == "preview") {
        const filename = Date.now() + "-" + file.originalname;
        //* Preview
        previewBlob = bucket.file(`preview/${filename.replace(" ", "_")}`);
        previewUrl = `https://storage.googleapis.com/${bucket.name}/${previewBlob.name}`;
        preview.push(previewUrl);

        const blobStream = previewBlob.createWriteStream();
        blobStream.on("finish", (value) => {
          console.log(value);
          resolve(preview);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        await blobStream.end(file.buffer);

        //* Compress
        previewBlobCompress = bucket.file(
          `compress/preview/${filename.replace(" ", "_")}`
        );
        previewUrlCompress = format(
          `https://storage.googleapis.com/${bucket.name}/${previewBlobCompress.name}`
        );
        previewCompress.push(previewUrlCompress);

        const blobStreamCompress = previewBlobCompress.createWriteStream();
        blobStreamCompress.on("finish", () => {
          resolve(previewCompress);
        });
        blobStreamCompress.on("error", (err) => {
          reject(err);
        });

        let compressing = file;
        const response = await sharp(compressing.buffer).toBuffer();
        await blobStreamCompress.end(response);
      }
      //* Image 2D
      if (file.fieldname == "image2d") {
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
        }, 3000);

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
      if (file.fieldname == "image3d") {
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
        }, 3000);
      }

      //========================================================================================
      //============================     Avatar     ============================================
      //========================================================================================

      if (file.fieldname == "avatar") {
        const filename = Date.now() + "-" + file.originalname;
        //* Raw Version
        avatarBlob = bucket.file(`avatar/${filename.replace(" ", "_")}`);
        avatarUrl = `https://storage.googleapis.com/${bucket.name}/${avatarBlob.name}`;
        avatar = avatarUrl;

        const blobStream = avatarBlob.createWriteStream();
        blobStream.on("finish", () => {
          resolve(avatar);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        blobStream.end(file.buffer);
      }

      //========================================================================================
      //============================     Plugin     ============================================
      //========================================================================================

      if (file.fieldname == "imagePlugin") {
        const filename = Date.now() + "-" + file.originalname;
        //* Raw Version
        pluginBlob = bucket.file(`plugin/${filename.replace(" ", "_")}`);
        pluginUrl = `https://storage.googleapis.com/${bucket.name}/${pluginBlob.name}`;
        plugin = pluginUrl;

        const blobStream = pluginBlob.createWriteStream();
        blobStream.on("finish", () => {
          resolve(plugin);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        blobStream.end(file.buffer);
      }

      //========================================================================================
      //============================     Export CSV     ========================================
      //========================================================================================

      if (file.fieldname == "CSV") {
        const filename = Date.now() + "-" + file.originalname;
        //* Raw Version
        csvBlob = bucket.file(`export/csv/${filename.replace(" ", "_")}`);
        csvUrl = `https://storage.googleapis.com/${bucket.name}/${csvBlob.name}`;
        csv = csvUrl;

        const blobStream = csvBlob.createWriteStream();
        blobStream.on("finish", () => {
          resolve(csv);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        blobStream.end(file.buffer);
      }

      //========================================================================================
      //============================     Export PNG     ========================================
      //========================================================================================

      if (file.fieldname == "PNG") {
        const filename = Date.now() + "-" + file.originalname;
        //* Raw Version
        pngBlob = bucket.file(`export/csv/${filename.replace(" ", "_")}`);
        pngUrl = `https://storage.googleapis.com/${bucket.name}/${pngBlob.name}`;
        png = pngUrl;

        const blobStream = pngBlob.createWriteStream();
        blobStream.on("finish", () => {
          resolve(png);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        blobStream.end(file.buffer);
      }

      //========================================================================================
      //============================     Export KML     ========================================
      //========================================================================================

      if (file.fieldname == "KML") {
        const filename = Date.now() + "-" + file.originalname;
        //* Raw Version
        kmlBlob = bucket.file(`export/csv/${filename.replace(" ", "_")}`);
        kmlUrl = `https://storage.googleapis.com/${bucket.name}/${kmlBlob.name}`;
        kml = kmlUrl;

        const blobStream = kmlBlob.createWriteStream();
        blobStream.on("finish", () => {
          resolve(kml);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        blobStream.end(file.buffer);
      }

      //========================================================================================
      //============================     Export JPEG     ========================================
      //========================================================================================

      if (file.fieldname == "JPEG") {
        const filename = Date.now() + "-" + file.originalname;
        //* Raw Version
        jpegBlob = bucket.file(`export/csv/${filename.replace(" ", "_")}`);
        jpegUrl = `https://storage.googleapis.com/${bucket.name}/${jpegBlob.name}`;
        jpeg = jpegUrl;

        const blobStream = jpegBlob.createWriteStream();
        blobStream.on("finish", () => {
          resolve(jpeg);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        blobStream.end(file.buffer);
      }

      //========================================================================================
      //============================     Export REPORT     =====================================
      //========================================================================================

      if (file.fieldname == "REPORT") {
        const filename = Date.now() + "-" + file.originalname;
        //* Raw Version
        reportBlob = bucket.file(`export/csv/${filename.replace(" ", "_")}`);
        reportUrl = `https://storage.googleapis.com/${bucket.name}/${reportBlob.name}`;
        report = reportUrl;

        const blobStream = reportBlob.createWriteStream();
        blobStream.on("finish", () => {
          resolve(report);
        });
        blobStream.on("error", (err) => {
          reject(err);
        });
        blobStream.end(file.buffer);
      }
    });
  });

exports.uploadFile = (fields) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 500 * 1024 * 1024 },
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
            message: "Max file sized 500MB" + err,
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
