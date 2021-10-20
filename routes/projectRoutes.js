const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const axios = require("axios");
const fsExtra = require("fs-extra");
const FormData = require("form-data");
require("dotenv/config");
const checkAuth = require("../middleware/check-auth");
const {
  uploadImage,
  donwloadFile,
  uploadV4,
  uploadPath,
  downloadFiles,
} = require("../helper/upload");
const {
  uploadFile,
  uploadToGCS,
  uploadPreviewToGCS,
} = require("../helper/uploadGCS");

const moment = require("moment");
const { moveDir, downloadFile, unZipFile, extractFile } = require("../helper");
const publicAssets = path.join(__dirname, "../public/assets/");
const publicPath = path.join(__dirname, "../public/");

moment.locale("id");

// GET
//localhost:3001/api/project/get-all
router.get("/get-all", checkAuth, async (req, res) => {
  Project.find()
    .populate("user")
    .exec()
    .then((response) => {
      res.json({
        status: "success",
        message: "data fetch successfully",
        count: response.length,
        data: response.map((data) => {
          return {
            _id: data._id,
            namaProject: data.namaProject,
            namaSurveyor: data.namaSurveyor,
            alamatProject: data.alamatProject,
            detailProject: data.detailProject,
            tglPlanning: data.tglPlanning,
            updatedAt: data.updatedAt,
            lokasi: {
              latitude: data.lokasi.latitude,
              longitude: data.lokasi.longitude,
            },
            preview: data.preview,
            image2d: data.image2d,
            image3d: data.image3d,
            export: data.export,
            deploy: data.deploy,
            history: data.history.map((value) => value),
            plugin: data.plugin.map((value) => value),
            tglTarget: data.tglTarget,
            pin: data.pin.map((data) => data),
            userName: data.user.name,
          };
        }),
      });
    })
    .catch((err) => {
      res.json({
        status: "failed",
        message: "request error",
        error: err.message,
      });
    });
});

// Get Detail Project
// localhost:3001/api/project/get-one/projectId [id project]
router.get("/get-one/:projectId", checkAuth, async (req, res) => {
  const { projectId: id } = req.params;
  try {
    const response = await Project.findOne({ _id: id }).populate("user");

    res.json({
      status: "success",
      message: "data fetch successfully",
      data: {
        id: response._id,
        namaProject: response.namaProject,
        namaSurveyor: response.namaSurveyor,
        alamatProject: response.alamatProject,
        detailProject: response.detailProject,
        tglPlanning: response.tglPlanning,
        lokasi: {
          latitude: response.lokasi.latitude,
          longitude: response.lokasi.longitude,
        },
        preview: response.preview,
        image2d: response.image2d,
        image3d: response.image3d,
        deploy: response.deploy,
        history: response.history.map((value) => value),
        plugin: response.plugin.map((value) => value),
        tglTarget: response.tglTarget,
        pin: response.pin.map((data) => data),
        userName: response.user.name,
      },
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: "request error",
      error: err.message,
    });
  }
});

// GET BY User
// localhost:3001/api/project/getbyuser

router.get("/getbyuser", checkAuth, async (req, res) => {
  try {
    const { userId } = req.userData;
    const response = await Project.find({
      user: {
        _id: userId,
      },
    }).populate("user");
    res.json({
      status: "success",
      message: "data fetch successfully",
      count: response.length,
      data: response.map((data) => {
        return {
          _id: data._id,
          namaProject: data.namaProject,
          namaSurveyor: data.namaSurveyor,
          alamatProject: data.alamatProject,
          detailProject: data.detailProject,
          tglPlanning: data.tglPlanning,
          updatedAt: data.updatedAt,
          lokasi: {
            latitude: data.lokasi.latitude,
            longitude: data.lokasi.longitude,
          },
          preview: data.preview,
          image2d: data.image2d,
          image3d: data.image3d,
          deploy: data.deploy,
          history: data.history.map((value) => value),
          plugin: data.plugin.map((value) => value),
          tglTarget: data.tglTarget,
          pin: data.pin.map((data) => data),
          userName: data.user.name,
        };
      }),
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: "request error",
      error: err.message,
    });
  }
});

// SEARCH
// localhost:3001/api/project/search?[namaProject || alamatProject || namaSurveyor ]=[your input]
// if tgl filter then
// localhost:3001/api/project/search?[tglPlanning || tglDeploy || tglTarget] & startDate= [input date] & endDate [input date]

router.get("/search", checkAuth, async (req, res) => {
  const {
    namaProject,
    alamatProject,
    namaSurveyor,
    startDate,
    endDate,
    tglPlanning,
    tglDeploy,
    tglTarget,
  } = req.query;
  try {
    if (namaProject || alamatProject || namaSurveyor) {
      const response = await Project.find({
        $or: [
          { namaProject: { $regex: `${namaProject}`, $options: "i" } },
          { alamatProject: { $regex: `${alamatProject}`, $options: "i" } },
          { namaSurveyor: { $regex: `${namaSurveyor}`, $options: "i" } },
        ],
      })
        .populate("user")
        .limit(5);
      res.json({
        status: "success",
        message: "data fetch successfully",
        count: response.length,
        data: response.map((data) => {
          return {
            _id: data._id,
            namaProject: data.namaProject,
            namaSurveyor: data.namaSurveyor,
            alamatProject: data.alamatProject,
            detailProject: data.detailProject,
            tglPlanning: data.tglPlanning,
            lokasi: {
              latitude: data.lokasi.latitude,
              longitude: data.lokasi.longitude,
            },
            preview: data.preview,
            image2d: data.image2d,
            image3d: data.image3d,
            deploy: data.deploy,
            history: data.history.map((value) => value),
            plugin: data.plugin.map((value) => value),
            tglTarget: data.tglTarget,
            pin: data.pin.map((data) => data),
            userName: data.user.name,
          };
        }),
      });
    }

    if (startDate || endDate) {
      if (tglPlanning) {
        const response = await Project.find({
          tglPlanning: {
            $gte: new Date(startDate).toString(),
            $lt: new Date(endDate).toString(),
          },
        }).populate("user");
        return res.json({
          status: "success",
          message: "data fetch successfully",
          count: response.length,
          data: response.map((data) => {
            return {
              _id: data._id,
              namaProject: data.namaProject,
              namaSurveyor: data.namaSurveyor,
              alamatProject: data.alamatProject,
              detailProject: data.detailProject,
              tglPlanning: data.tglPlanning,
              lokasi: {
                latitude: data.lokasi.latitude,
                longitude: data.lokasi.longitude,
              },
              preview: data.preview,
              image2d: data.image2d,
              image3d: data.image3d,
              deploy: data.deploy,
              history: data.history.map((value) => value),
              plugin: data.plugin.map((value) => value),
              tglTarget: data.tglTarget,
              pin: data.pin.map((data) => data),
              userName: data.user.name,
            };
          }),
        });
      }
      if (tglDeploy) {
        const response = await Project.find({
          tglDeploy: {
            $gte: new Date(startDate).toString(),
            $lt: new Date(endDate).toString(),
          },
        }).populate("user");
        return res.json({
          status: "success",
          message: "data fetch successfully",
          count: response.length,
          data: response.map((data) => {
            return {
              _id: data._id,
              namaProject: data.namaProject,
              namaSurveyor: data.namaSurveyor,
              alamatProject: data.alamatProject,
              detailProject: data.detailProject,
              tglPlanning: data.tglPlanning,
              lokasi: {
                latitude: data.lokasi.latitude,
                longitude: data.lokasi.longitude,
              },
              preview: data.preview,
              image2d: data.image2d,
              image3d: data.image3d,
              deploy: data.deploy,
              history: data.history.map((value) => value),
              plugin: data.plugin.map((value) => value),
              tglTarget: data.tglTarget,
              pin: data.pin.map((data) => data),
              userName: data.user.name,
            };
          }),
        });
      }
      if (tglTarget) {
        const response = await Project.find({
          tglTarget: {
            $gte: new Date(startDate).toString(),
            $lt: new Date(endDate).toString(),
          },
        }).populate("user");
        return res.json({
          status: "success",
          message: "data fetch successfully",
          count: response.length,
          data: response.map((data) => {
            return {
              _id: data._id,
              namaProject: data.namaProject,
              namaSurveyor: data.namaSurveyor,
              alamatProject: data.alamatProject,
              detailProject: data.detailProject,
              tglPlanning: data.tglPlanning,
              lokasi: {
                latitude: data.lokasi.latitude,
                longitude: data.lokasi.longitude,
              },
              preview: data.preview,
              image2d: data.image2d,
              image3d: data.image3d,
              deploy: data.deploy,
              history: data.history.map((value) => value),
              plugin: data.plugin.map((value) => value),
              tglTarget: data.tglTarget,
              pin: data.pin.map((data) => data),
              userName: data.user.name,
            };
          }),
        });
      }
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "request error",
      error: err.message,
    });
  }
});

// CREATE
//localhost:3001/api/project/add
router.post("/add", checkAuth, async (req, res) => {
  try {
    // Project
    const projectPost = new Project({
      namaProject: req.body.namaProject,
      namaSurveyor: req.body.namaSurveyor,
      alamatProject: req.body.alamatProject,
      detailProject: req.body.detailProject,
      lokasi: {
        latitude: req.body.lokasi.latitude,
        longitude: req.body.lokasi.longitude,
      },
      tglTarget: !req.body.tglTarget ? null : `${moment(req.body.tglTarget)}`,
      //Pin
      pin: req.body.pin,
      user: req.userData.userId,
    });

    const newProject = await projectPost.save();
    const project = await Project.findById({ _id: newProject._id }).populate(
      "pin"
    );

    // Attach History
    let date = new Date();
    await Project.updateOne(
      {
        _id: newProject._id,
      },
      {
        $push: {
          history: {
            aktivitas: "planning",
            tgl: date.setHours(date.getHours() + 7),
            status: !newProject ? "Fail" : "Success",
          },
        },
      }
    );

    res.json({
      status: "success",
      message: "data create successfully",
      data: project,
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});

// Get Preview

router.get("/:projectId/preview", checkAuth, async (req, res) => {
  const { projectId: id } = req.params;
  try {
    const response = await Project.findById({ _id: id });
    res.json({
      status: "success",
      message: "preview was fetching successfully",
      data: response.preview,
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});

// Get Image
router.get("/:projectId/image", checkAuth, async (req, res) => {
  const { projectId: id } = req.params;
  try {
    const response = await Project.findById({ _id: id });
    res.json({
      status: "success",
      message: "image was fetching successfully",
      data: {
        image2d: response.image2d,
        image3d: response.image3d,
      },
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});

// Update Project || Add Pin to ProjectSchema
// localhost:3001/api/project/[projectId]/add/pin

router.patch("/:projectId/pin/add", checkAuth, async (req, res) => {
  const { projectId: id } = req.params;
  try {
    const {
      name,
      koordinat,
      speed,
      altitude,
      heading,
      rotationdir,
      curvesize,
      poi,
      gimbalmode,
      intervalmode,
      actions,
    } = req.body;

    const pin = {
      name,
      koordinat,
      speed,
      altitude,
      heading,
      curvesize,
      rotationdir,
      poi,
      gimbalmode,
      intervalmode,
      actions,
    };

    const newPin = await Project.update(
      {
        _id: id,
      },
      {
        $push: {
          pin: req.body,
        },
      }
    );

    // Attach History
    let date = new Date();
    await Project.update(
      {
        _id: id,
      },
      {
        $push: {
          history: {
            aktivitas: "planning",
            tgl: date.setHours(date.getHours() + 7),
            status: !newPin ? "Fail" : "Success",
          },
        },
      }
    );

    const response = await Project.find({ _id: id });

    res.json({
      status: "success",
      message: "add data pin successfully",
      data: response,
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});


// UPDATE PATCH
//localhost:3001/api/project/update/projectId

// if uploadGCS usage upload uploadFile if upload VPS usage uploadImage
router.patch(
  "/update/:projectId",
  uploadImage([{ name: "images", maxCount: 200 }]),
  checkAuth,
  async (req, res) => {
    const { projectId: id } = req.params;
    const pathStatic = path.join(__dirname, "../public/assets/");
    try {
      let date = new Date();
      const project = await Project.findByIdAndUpdate(
        { _id: id },
        { new: true }
      );

      // Check if existed project
      if (!project) {
        res.json({
          status: "failed",
          message: `data id: ${id} not found`,
        });
      }
      if (req.body.namaProject) {
        // Copy all inside folder
        const folderProject =
          publicAssets + project.namaProject.toLowerCase().replace(/\s+/g, "-");
        const subDir = fs.readdirSync(folderProject);

        subDir.forEach((folder) => {
          fsExtra.moveSync(
            "public/assets/" +
              project.namaProject.toLowerCase().replace(/\s+/g, "-") +
              "/" +
              folder,
            "public/backup/" + folder
          );
        });

        fs.renameSync(
          publicAssets + project.namaProject.toLowerCase().replace(/\s+/g, "-"),
          publicAssets + req.body.namaProject.toLowerCase().replace(/\s+/g, "-")
        );

        project.namaProject = req.body.namaProject;
        project.updatedAt = date.setHours(date.getHours() + 7);
      }

      if (req.body.namaSurveyor) {
        project.namaSurveyor = req.body.namaSurveyor;
        project.updatedAt = date.setHours(date.getHours() + 7);
      }
      if (req.body.alamatProject) {
        project.alamatProject = req.body.alamatProject;
        project.updatedAt = date.setHours(date.getHours() + 7);
      }
      if (req.body.detailProject) {
        project.detailProject = req.body.detailProject;
        project.updatedAt = date.setHours(date.getHours() + 7);
      }
      if (req.body.latitude) {
        project.lokasi.latitude = req.body.latitude;
        project.updatedAt = date.setHours(date.getHours() + 7);
      }
      if (req.body.longitude) {
        project.lokasi.longitude = req.body.longitude;
        project.updatedAt = date.setHours(date.getHours() + 7);
      }
      if (req.body.drone) {
        project.drone.nama = req.body.drone;
        project.drone.tglPlanning = project.tglPlanning;
        project.updatedAt = date.setHours(date.getHours() + 7);
      }
      if (req.files.images) {
        const preview = req.files.images;

        // ===============================================================
        //*                        Upload to VPS
        // ===============================================================
        //* delete directory of /extracted
        if (fs.existsSync("public/extracted")) {
          fs.rmdirSync("public/extracted", { recursive: true });
        }

        //* init upload image to generate 3d & 2d
        const form_data = new FormData();
        preview.map((image) => {
          form_data.append("images", fs.createReadStream(image.path));
        });
        const config = {
          method: "post",
          url: "http://34.126.89.49:3000/task/new",
          headers: {
            "Content-Type": `multipart/form-data;boundary=${form_data.getBoundary()}`,
          },
          data: form_data,
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        };

        //* Generating
        const newPost = await axios(config);
        console.log("upload selesai")
        console.log(newPost.data);

        // * Check progress
        let checkUploadIsDone = await axios.get(
          `http://34.126.89.49:3000/task/${newPost.data.uuid}/info`
        );
        while (checkUploadIsDone.data.progress < 100) {
          checkUploadIsDone = await axios.get(
            `http://34.126.89.49:3000/task/${newPost.data.uuid}/info`
          );
        }

        //* Download image was generated
        const url = `http://34.126.89.49:3000/task/${newPost.data.uuid}/download/all.zip`;
        const dest = "public/temp/file.zip";
        await downloadFile(url, dest);
        console.log('download Selesai')

        //* Extracted result of downloaded file
        const extracted = await extractFile(project.namaProject.toLowerCase().replace(/\s+/g, "-"));

        for (i = 0; i < preview.length; i++) {
          // const compress = await sharp(preview[i].path).resize(200, 200).toFile(publicPath + `compress/${project.namaProject.toLowerCase().replace(/\s+/g, '-')}/preview/${preview[i].filename}`)
          // console.log(compress)
          // await uploadPath(preview[i]);
          moveDir(
            preview[i].filename,
            `${project.namaProject.toLowerCase().replace(/\s+/g, "-")}/preview`
          );
          const pathDir = `assets/${project.namaProject
            .toLowerCase()
            .replace(/\s+/g, "-")}/preview/${preview[i].filename}`;
          project.preview.path.length === 0
            ? (project.preview.path = pathDir)
            : (project.preview.path = [...project.preview.path, pathDir]);
        }

        //* Add path to field image2d database
  
          project.image2d.path = `assets/${project.namaProject
            .toLowerCase()
            .replace(/\s+/g, "-")}/image2d/odm_orthophoto.tif`;

          //* Add path to field image3d database
          project.image3d.path = extracted;
      }

      // =========================================================
      //*                       Upload To GCS
      // =========================================================
      // if(req.files.preview){

      //   // Add path to field preview database
      //   for (i = 0; i < preview.length; i++) {
      //     // const compress = await sharp(preview[i].path).resize(200, 200).toFile(publicPath + `compress/${project.namaProject.toLowerCase().replace(/\s+/g, '-')}/preview/${preview[i].filename}`)
      //     // console.log(compress)
      //     // await uploadPath(preview[i]);
      //     // moveDir(
      //     //   preview[i].filename,
      //     //   `${project.namaProject.toLowerCase().replace(/\s+/g, "-")}/preview`
      //     // );
      //     const path = `assets/${project.namaProject
      //       .toLowerCase()
      //       .replace(/\s+/g, "-")}/preview/${preview[i].filename}`;
      //     project.preview.path.length === 0
      //       ? (project.preview.path = path)
      //       : (project.preview.path = [...project.preview.path, path]);
      //   }
      // }

      // if (req.files.image2d) {
      //     (project.image2d.path = await uploadToGCS(req.files.image2d))

      // }

      // if (req.files.image3d) {
      //   project.image3d.path.length === 0
      //     ?
      //     (project.image3d.path = await uploadToGCS(req.files.image3d))
      //     : (project.image3d.path = [
      //         ...project.image3d.path,
      //         ...(await uploadToGCS(req.files.image3d)),
      //       ]);
      // }

      const projectUpdated = await project.save();


      // Copy back to folder static
      if(req.body.namaProject){
        const newFolderProject = publicPath + "backup/";
        const tempDir = fs.readdirSync(newFolderProject);
        tempDir.forEach((folder) => {
          fsExtra.moveSync(
            "public/backup/" + folder,
            "public/assets/" +
              projectUpdated.namaProject.toLowerCase().replace(/\s+/g, "-") +
              "/" +
              folder
          );
        });
      }

      // Attach History
      await Project.updateOne(
        {
          _id: id,
        },
        {
          $push: {
            history: {
              aktivitas: "Edit project",
              tgl: date.setHours(date.getHours() + 7),
              status: !projectUpdated ? "Fail" : "Success",
            },
          },
        }
      );

      // response
      return res.send({
        status: "success",
        message: "data update successfully",
        data: projectUpdated,
      });
    } catch (err) {
      res.json({
        status: "failed",
        message: "error",
        error: err.message,
      });
    }
  }
);

// const folderOdm = `public/assets/test/image3d/`
//             const odmDir = fs.readdirSync(folderOdm);
//             console.log(odmDir)

router.patch(
  "/upload/assets",
  uploadImage([{ name: "images", maxCount: 200 }]),
  async (req, res) => {
    const { images } = req.files;

    try {
      // delete directory of /extracted
      if (fs.existsSync("public/extracted")) {
        fs.rmdirSync("public/extracted", { recursive: true });
      }

      const form_data = new FormData();
      images.map((image) => {
        form_data.append("images", fs.createReadStream(image.path));
      });
      const config = {
        method: "post",
        url: "http://34.126.89.49:3000/task/new",
        headers: {
          "Content-Type": `multipart/form-data;boundary=${form_data.getBoundary()}`,
        },
        data: form_data,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      };

      // Generating
      const newPost = await axios(config);
      console.log("New Post: ", newPost.data);

      let checkUploadIsDone = await axios.get(
        `http://34.126.89.49:3000/task/${newPost.data.uuid}/info`
      );

      while (checkUploadIsDone.data.progress < 100) {
        checkUploadIsDone = await axios.get(
          `http://34.126.89.49:3000/task/${newPost.data.uuid}/info`
        );
      }

      const url = `http://34.126.89.49:3000/task/${newPost.data.uuid}/download/all.zip`;
      const dest = "public/temp/file.zip";
      await downloadFile(url, dest);

      // Extracted result of downloaded file
      await extractFile(`contoh-lagi7`);

      for (i = 0; i < images.length; i++) {
        // const compress = await sharp(preview[i].path).resize(200, 200).toFile(publicPath + `compress/${project.namaProject.toLowerCase().replace(/\s+/g, '-')}/preview/${preview[i].filename}`)
        // console.log(compress)
        // await uploadPath(preview[i]);
        await moveDir(images[i].filename, `contoh-lagi7/preview`);
        // const path = `assets/contoh-lagi3/preview/${images[i].filename}`;
        // project.preview.path = await path
        // project.preview.path.length === 0
        //   ? (project.preview.path = path)
        //   : (project.preview.path = [...project.preview.path, path]);
      }

      // Add path to field image2d database
      // if (
      //   !fs.existsSync(
      //     `public/assets/contoh-lagi3/image2d/odm_orthophoto.tif`
      //   )
      // ) {
      //   // const path = `assets/contoh-lagi3/image2d/odm_orthophoto.tif`;
      //   // project.image2d.path = await path
      //   // project.image2d.path = path;
      // }

      // // Add path to field image3d database
      // if (
      //   !fs.existsSync(
      //     `public/assets/contoh-lagi3/image3d/odm_textured_model_geo.mtl`
      //   )
      // ) {
      //   const folderOdm = path.join(
      //     __dirname,
      //     `../public/assets/contoh-lagi3/image3d`
      //   );
      //   const odmDir = fs.readdirSync(folderOdm);

      //   let dirPath = [];
      //   odmDir.map((file) => {
      //     dirPath.push(
      //       `assets/contoh-lagi3/image3d/${file}`
      //     );
      //   });
      //   // project.image3d.path = path;
      // }

      res.json({
        status: "success",
        message: "file downloaded",
      });
    } catch (err) {
      res.json({
        status: "failed",
        message: "error",
        error: err.message,
      });
    }
  }
);


// Delete Image upload
// delete/uploaded?namaProject=""
router.patch("/:projectId/delete/uploaded", checkAuth, async (req, res) => {
  const { namaProject } = req.query;
  const { projectId: id } = req.params;

  try {
    const pathDeleting = `${publicAssets}${namaProject
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
      while(fs.existsSync(pathDeleting)){
        fs.rmdirSync(pathDeleting, {recursive: true})
      }

    const project = await Project.findByIdAndUpdate({ _id: id }, { new: true });

    project.preview.path = [];
    project.image2d.path = [];
    project.image3d.path = [];
  

    await project.save();

    res.json({
      status: "success",
      message: `remove assets from ${namaProject} successfully`,
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});

// Update Pin
// localhost:3001/api/project/update/:projectId/pin/:pinId
router.patch("/update/:projectId/pin/:pinId", checkAuth, async (req, res) => {
  const { projectId, pinId } = req.params;

  let date = new Date();
  try {
    const project = await Project.findOne({ _id: projectId });
    const pin = project.pin.find((item) => item._id == pinId);

    if (!project) {
      res.json({
        status: "failed",
        message: `data project id: ${projectId} not found`,
      });
    } else if (!pin) {
      res.json({
        status: "failed",
        message: `data pin id: ${pinId} not found`,
      });
    }
    if (req.body.name) {
      pin.name = req.body.name;
    }
    if (req.body.speed) {
      pin.speed = req.body.speed;
    }
    if (req.body.altitude) {
      pin.altitude = req.body.altitude;
    }
    if (req.body.heading) {
      pin.heading = req.body.heading;
    }
    if (req.body.curvesize) {
      pin.curvesize = req.body.curvesize;
    }
    if (req.body.rotationdir) {
      pin.rotationdir = req.body.rotationdir;
    }
    if (req.body.latitude) {
      pin.koordinat.latitude = req.body.latitude;
    }
    if (req.body.longitude) {
      pin.koordinat.longitude = req.body.longitude;
    }
    if (req.body.poiStatus) {
      pin.poi.poiStatus = req.body.poiStatus;
    }
    if (req.body.poiMode) {
      pin.poi.poiMode = req.body.poiMode;
    }
    if (req.body.poiLatitude) {
      pin.poi.poiLatitude = req.body.poiLatitude;
    }
    if (req.body.poiLongtude) {
      pin.poi.poiLongtude = req.body.poiLongtude;
    }
    if (req.body.poiAltiutde) {
      pin.poi.poiAltiutde = req.body.poiAltiutde;
    }
    if (req.body.disableGimbal) {
      pin.gimbalmode.disable = req.body.disableGimbal;
    }
    if (req.body.focuspoiGimbal) {
      pin.gimbalmode.focuspoi = req.body.focuspoiGimbal;
    }
    if (req.body.intepolateGimbal) {
      pin.gimbalmode.interpolate = req.body.intepolateGimbal;
    }
    if (req.body.disableInterval) {
      pin.intervalmode.disable = req.body.disableInterval;
    }
    if (req.body.secondsInterval) {
      pin.intervalmode.seconds = req.body.disableGimbal;
    }
    if (req.body.metersInterval) {
      pin.intervalmode.meters = req.body.metersInterval;
    }

    if (req.body.action01) {
      if (pin.actions.act01.stay_for) {
        pin.actions.act01.stay_for = req.body.action01;
      } else if (pin.actions.act01.take_photos) {
        pin.actions.act01.take_photos = req.body.action01;
      } else if (pin.actions.act01.record_video) {
        pin.actions.act01.record_video = req.body.action01;
      } else if (pin.actions.act01.rotate) {
        pin.actions.act01.rotate = req.body.action01;
      } else {
        pin.actions.act01 = req.body.action01;
      }
    }
    if (req.body.action02) {
      if (pin.actions.act02.stay_for) {
        pin.actions.act02.stay_for = req.body.action02;
      } else if (pin.actions.act02.take_photos) {
        pin.actions.act02.take_photos = req.body.action02;
      } else if (pin.actions.act02.record_video) {
        pin.actions.act02.record_video = req.body.action02;
      } else if (pin.actions.act02.rotate) {
        pin.actions.act02.rotate = req.body.action02;
      } else if (pin.actions.act02.home) {
        pin.actions.act02.home = req.body.action02;
      } else {
        pin.actions.act02 = req.body.action02;
      }
    }
    if (req.body.action03) {
      if (pin.actions.act03.stay_for) {
        pin.actions.act03.stay_for = req.body.action03;
      } else if (pin.actions.act03.take_photos) {
        pin.actions.act03.take_photos = req.body.action03;
      } else if (pin.actions.act03.record_video) {
        pin.actions.act03.record_video = req.body.action03;
      } else if (pin.actions.act03.rotate) {
        pin.actions.act03.rotate = req.body.action03;
      } else if (pin.actions.act03.home) {
        pin.actions.act03.home = req.body.action03;
      } else {
        pin.actions.act03 = req.body.action03;
      }
    }
    if (req.body.action04) {
      if (pin.actions.act04.stay_for) {
        pin.actions.act04.stay_for = req.body.action04;
      } else if (pin.actions.act04.take_photos) {
        pin.actions.act04.take_photos = req.body.action04;
      } else if (pin.actions.act04.record_video) {
        pin.actions.act04.record_video = req.body.action04;
      } else if (pin.actions.act04.rotate) {
        pin.actions.act04.rotate = req.body.action04;
      } else if (pin.actions.act04.home) {
        pin.actions.act04.home = req.body.action04;
      } else {
        pin.actions.act04 = req.body.action04;
      }
    }
    if (req.body.action05) {
      if (pin.actions.act05.stay_for) {
        pin.actions.act05.stay_for = req.body.action05;
      } else if (pin.actions.act05.take_photos) {
        pin.actions.act05.take_photos = req.body.action05;
      } else if (pin.actions.act05.record_video) {
        pin.actions.act05.record_video = req.body.action05;
      } else if (pin.actions.act05.rotate) {
        pin.actions.act05.rotate = req.body.action05;
      } else if (pin.actions.act05.home) {
        pin.actions.act05.home = req.body.action05;
      } else {
        pin.actions.act05 = req.body.action05;
      }
    }
    if (req.body.action06) {
      if (pin.actions.act06.stay_for) {
        pin.actions.act06.stay_for = req.body.action06;
      } else if (pin.actions.act06.take_photos) {
        pin.actions.act06.take_photos = req.body.action06;
      } else if (pin.actions.act06.record_video) {
        pin.actions.act06.record_video = req.body.action06;
      } else if (pin.actions.act06.rotate) {
        pin.actions.act06.rotate = req.body.action06;
      } else if (pin.actions.act06.home) {
        pin.actions.act06.home = req.body.action06;
      } else {
        pin.actions.act06 = req.body.action06;
      }
    }
    if (req.body.action07) {
      if (pin.actions.act07.stay_for) {
        pin.actions.act07.stay_for = req.body.action07;
      } else if (pin.actions.act07.take_photos) {
        pin.actions.act07.take_photos = req.body.action07;
      } else if (pin.actions.act07.record_video) {
        pin.actions.act07.record_video = req.body.action07;
      } else if (pin.actions.act07.rotate) {
        pin.actions.act07.rotate = req.body.action07;
      } else if (pin.actions.act07.home) {
        pin.actions.act07.home = req.body.action07;
      } else {
        pin.actions.act07 = req.body.action07;
      }
    }
    if (req.body.action08) {
      if (pin.actions.act08.stay_for) {
        pin.actions.act08.stay_for = req.body.action08;
      } else if (pin.actions.act08.take_photos) {
        pin.actions.act08.take_photos = req.body.action08;
      } else if (pin.actions.act08.record_video) {
        pin.actions.act08.record_video = req.body.action08;
      } else if (pin.actions.act08.rotate) {
        pin.actions.act08.rotate = req.body.action08;
      } else if (pin.actions.act08.home) {
        pin.actions.act08.home = req.body.action08;
      } else {
        pin.actions.act08 = req.body.action08;
      }
    }
    if (req.body.action09) {
      if (pin.actions.act09.stay_for) {
        pin.actions.act09.stay_for = req.body.action09;
      } else if (pin.actions.act09.take_photos) {
        pin.actions.act09.take_photos = req.body.action09;
      } else if (pin.actions.act09.record_video) {
        pin.actions.act09.record_video = req.body.action09;
      } else if (pin.actions.act09.rotate) {
        pin.actions.act09.rotate = req.body.action09;
      } else if (pin.actions.act09.home) {
        pin.actions.act09.home = req.body.action09;
      } else {
        pin.actions.act09 = req.body.action03;
      }
    }
    if (req.body.action10) {
      if (pin.actions.act10.stay_for) {
        pin.actions.act10.stay_for = req.body.action10;
      } else if (pin.actions.act10.take_photos) {
        pin.actions.act10.take_photos = req.body.action10;
      } else if (pin.actions.act10.record_video) {
        pin.actions.act10.record_video = req.body.action10;
      } else if (pin.actions.act10.rotate) {
        pin.actions.act10.rotate = req.body.action10;
      } else if (pin.actions.act10.home) {
        pin.actions.act10.home = req.body.action10;
      } else {
        pin.actions.act10 = req.body.action10;
      }
    }
    if (req.body.action11) {
      if (pin.actions.act11.stay_for) {
        pin.actions.act11.stay_for = req.body.action11;
      } else if (pin.actions.act11.take_photos) {
        pin.actions.act11.take_photos = req.body.action11;
      } else if (pin.actions.act11.record_video) {
        pin.actions.act11.record_video = req.body.action11;
      } else if (pin.actions.act11.rotate) {
        pin.actions.act11.rotate = req.body.action11;
      } else if (pin.actions.act11.home) {
        pin.actions.act11.home = req.body.action11;
      } else {
        pin.actions.act11 = req.body.action11;
      }
    }
    if (req.body.action12) {
      if (pin.actions.act12.stay_for) {
        pin.actions.act12.stay_for = req.body.action12;
      } else if (pin.actions.act12.take_photos) {
        pin.actions.act12.take_photos = req.body.action12;
      } else if (pin.actions.act12.record_video) {
        pin.actions.act12.record_video = req.body.action12;
      } else if (pin.actions.act12.rotate) {
        pin.actions.act12.rotate = req.body.action12;
      } else if (pin.actions.act12.home) {
        pin.actions.act12.home = req.body.action12;
      } else {
        pin.actions.act12 = req.body.action12;
      }
    }
    if (req.body.action13) {
      if (pin.actions.act13.stay_for) {
        pin.actions.act13.stay_for = req.body.action13;
      } else if (pin.actions.act13.take_photos) {
        pin.actions.act13.take_photos = req.body.action13;
      } else if (pin.actions.act13.record_video) {
        pin.actions.act13.record_video = req.body.action13;
      } else if (pin.actions.act13.rotate) {
        pin.actions.act13.rotate = req.body.action13;
      } else if (pin.actions.act13.home) {
        pin.actions.act13.home = req.body.action13;
      } else {
        pin.actions.act13 = req.body.action13;
      }
    }
    if (req.body.action14) {
      if (pin.actions.act14.stay_for) {
        pin.actions.act14.stay_for = req.body.action14;
      } else if (pin.actions.act14.take_photos) {
        pin.actions.act14.take_photos = req.body.action14;
      } else if (pin.actions.act14.record_video) {
        pin.actions.act14.record_video = req.body.action14;
      } else if (pin.actions.act14.rotate) {
        pin.actions.act14.rotate = req.body.action14;
      } else if (pin.actions.act14.home) {
        pin.actions.act14.home = req.body.action14;
      } else {
        pin.actions.act14 = req.body.action14;
      }
    }
    if (req.body.action15) {
      if (pin.actions.act15.stay_for) {
        pin.actions.act15.stay_for = req.body.action15;
      } else if (pin.actions.act15.take_photos) {
        pin.actions.act15.take_photos = req.body.action15;
      } else if (pin.actions.act15.record_video) {
        pin.actions.act15.record_video = req.body.action15;
      } else if (pin.actions.act15.rotate) {
        pin.actions.act15.rotate = req.body.action15;
      } else if (pin.actions.act15.home) {
        pin.actions.act15.home = req.body.action15;
      } else {
        pin.actions.act15 = req.body.action15;
      }
    }

    const pinEdited = await Project.updateOne(
      { "pin._id": pinId },
      {
        $set: { "pin.$": pin, updatedAt: date.setHours(date.getHours() + 7) },
      }
    );

    // Attach History
    await Project.updateOne(
      {
        _id: projectId,
      },
      {
        $push: {
          history: {
            aktivitas: "Edit pin",
            tgl: date.setHours(date.getHours() + 7),
            status: !newProject ? "Fail" : "Success",
          },
        },
      }
    );

    if (pinEdited.n == 0) {
      return res.json({
        status: "failed",
        message: "error",
        error: "server error",
      });
    }

    if (pinEdited.nModified == 0) {
      return res.json({
        status: "failed",
        message: "please input field updated",
        error: "update error",
      });
    }
    // response
    return res.json({
      status: "success",
      message: "data update successfully",
      data: pin,
    });
  } catch (err) {
    return res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});

// Deploy
// localhost:3001/api/project/deploy/[projectId]

router.patch("/deploy/:projectId", checkAuth, async (req, res) => {
  const { projectId: id } = req.params;
  let date = new Date();

  try {
    const response = await Project.update(
      {
        _id: id,
      },
      {
        $push: {
          deploy: {
            tglDeploy: date.setHours(date.getHours() + 7),
          },
        },
      }
    );

    // Attach History
    await Project.updateOne(
      {
        _id: id,
      },
      {
        $push: {
          history: {
            aktivitas: "Deploy",
            tgl: date.setHours(date.getHours() + 7),
            status: !response.n !== 1 ? "Fail" : "Success",
          },
        },
      }
    );

    if (response.n !== 1) {
      return res.json({
        status: "failed",
        message: "server error",
      });
    }
    const project = await Project.findOne({ _id: id });

    return res.json({
      status: "success",
      message: "project deploy successfully",
      data: project,
    });
  } catch (err) {
    return res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});

// Delete Pin
// localhost:3001/api/project/delete/:projectId/pin/:pinId

router.delete("/delete/:projectId/pin/:pinId", async (req, res) => {
  const { projectId, pinId } = req.params;
  try {
    const deletePin = await Project.updateOne(
      { _id: projectId },
      { $pull: { pin: { _id: pinId } } }
    );
    const response = await Project.findOne({ _id: projectId }).select("pin");

    // Attach History
    await Project.updateOne(
      {
        _id: projectId,
      },
      {
        $push: {
          history: {
            aktivitas: "Delete pin",
            tgl: date.setHours(date.getHours() + 7),
            status:
              !deletePin || deletePin.nModified === 0 ? "Fail" : "Success",
          },
        },
      }
    );

    if (!deletePin || deletePin.nModified === 0) {
      return res.json({
        status: "failed",
        message: "error",
        error: "something went wrong, please check id params",
      });
    }

    return res.json({
      status: "success",
      message: "data update successfully",
      data: response,
    });
  } catch (err) {
    return res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});

// =====================================================================
// =======================     Plugin      =============================
// =====================================================================

router.get("/:projectId/plugin", async (req, res) => {
  const { projectId: id } = req.params;
  try {
    const response = await Project.findOne({ _id: id });

    if (!response) {
      return res.json({
        status: "failed",
        message: `id ${id} not found`,
      });
    }
    return res.json({
      status: "success",
      message: "data successfully fetching",
      count: response.length,
      data: response.plugin,
    });
  } catch (err) {
    return res.json({
      status: "failed",
      message: "error",
      error: err.message,
    });
  }
});

router.patch(
  "/:projectId/plugin/add/:pluginId",
  uploadFile([{ name: "imagePlugin", maxCount: 1 }]),
  async (req, res) => {
    const { projectId: id, pluginId } = req.params;
    const { name, title, shortDescription, longDescription } = req.body;
    try {
      if (name) {
        await Project.updateOne(
          {
            _id: id,
          },
          {
            $push: {
              plugin: {
                name,
              },
            },
          }
        );
        return res.json({
          status: "success",
          message: "plugin success created, please add action",
        });
      }

      const addPlugin = await Project.updateOne(
        { _id: id, "plugin._id": pluginId },
        {
          $push: {
            "plugin.$[].actions": {
              title,
              shortDescription,
              longDescription,
              image: await uploadToGCS(req.files.imagePlugin),
            },
          },
        }
      );

      let date = new Date();
      await Project.updateOne(
        {
          _id: id,
        },
        {
          $push: {
            history: {
              aktivitas: "planning",
              tgl: date.setHours(date.getHours() + 7),
              status: !addPlugin ? "Fail" : "Success",
            },
          },
        }
      );

      const response = await Project.findOne({ "plugin._id": pluginId });

      return res.json({
        status: "success",
        message: "data successfully created",
        data: response.plugin,
      });
    } catch (err) {
      return res.json({
        status: "failed",
        message: "error",
        error: err.message,
      });
    }
  }
);

// =====================================================================
// =======================     Export      =============================
// =====================================================================

router.patch(
  "/:projectId/add-export",
  uploadFile([
    { name: "CSV", maxCount: 1 },
    { name: "PNG", maxCount: 1 },
    { name: "KML", maxCount: 1 },
    { name: "JPEG", maxCount: 1 },
    { name: "REPORT", maxCount: 1 },
  ]),
  async (req, res) => {
    const { projectId: id } = req.params;
    try {
      const project = await Project.findOne({ _id: id });

      if (req.files.CSV) {
        project.export.CSV = await uploadToGCS(req.files.CSV);
      }
      if (req.files.PNG) {
        project.export.PNG = await uploadToGCS(req.files.PNG);
      }
      if (req.files.KML) {
        project.export.KML = await uploadToGCS(req.files.KML);
      }
      if (req.files.JPEG) {
        project.export.JPEG = await uploadToGCS(req.files.JPEG);
      }
      if (req.files.KML) {
        project.export.KML = await uploadToGCS(req.files.KML);
      }

      await project.save();

      const exportFile = await Project.findOne({ _id: id });

      if (!exportFile) {
        return res.json({
          status: "failed",
          message: `id ${id} not found`,
        });
      }

      return res.json({
        status: "success",
        message: "file was uploaded",
        data: exportFile.export,
      });
    } catch (err) {
      return res.json({
        status: "failed",
        error: err.message,
      });
    }
  }
);
router.get("/:projectId/export", async (req, res) => {
  const { projectId: id } = req.params;

  try {
    const dirname = path.join(__dirname, "../../../../Downloads");
    const project = await Project.findOne({ _id: id });
    if (!project.export) {
      if (req.query.csv) {
        const file = `${project.export.CSV}`;
        res.download(file);
      }
      if (req.query.png) {
        const file = `${dirname}/${project.export.PNG}`;
        res.download(file);
      }
      if (req.query.kml) {
        const file = `${dirname}/${project.export.KML}`;
        res.download(file);
      }
      if (req.query.jpeg) {
        const file = `${dirname}/${project.export.JPEG}`;
        res.download(file);
      }
      if (req.query.report) {
        const file = `${dirname}/${project.export.REPORT}`;
        res.download(file);
      }
    }
    return res.json({
      status: "success",
      message: `file ${
        req.query.csv
          ? "csv"
          : req.query.png
          ? "png"
          : req.query.kml
          ? "kml"
          : req.query.jpeg
          ? "jpeg"
          : "report"
      } was downloaded`,
    });
  } catch (err) {
    return res.json({
      status: "failed",
      error: err.message,
    });
  }
});

// Delete
//localhost:3001/api/project/delete/:[project id]  (exact macth) all detail project no pin overwrite db
router.delete("/delete/:idProject", checkAuth, async (req, res) => {
  const { idProject: id } = req.params;
  try {
    const response = await Project.remove({ _id: id });
    if (response.n) {
      res.json({
        status: "success",
        message: "data delete successfully",
        id: id,
      });
    } else {
      res.json({
        status: "failed",
        message: `data id: ${id} not found`,
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "request error",
      error: err.message,
    });
  }
});

module.exports = router;

// namaProject: req.body.namaProject,
// namaSurveyor: req.body.namaSurveyor,
// alamatProject: req.body.alamatProject,
// detailProject: req.body.detailProject,
// koordinat: req.body.koordinat,
// tglTarget: req.body.tglTarget,
