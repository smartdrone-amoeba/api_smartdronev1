const fsExtra = require('fs-extra')
const fs = require('fs')
const StreamZip = require('node-stream-zip');
const axios = require('axios')
const path = require('path')

// ==========================================================
//*                    Moving Directory
// ==========================================================
exports.moveDir = async (filename, directory) => {
    await fsExtra.move(`uploads/${filename}/`,`public/assets/${directory}/${filename}`, function (err, result) {
        if (err) {
            return console.error(err);
        }
    });
}
// ==========================================================
//*                        Donwload File 
// ==========================================================
exports.downloadFile = (fileUrl, outputLocationPath) => {
    const writer = fs.createWriteStream(outputLocationPath);
  
    return axios({
      method: 'get',
      url: fileUrl,
      responseType: 'stream',
    }).then(response => {
  
      //ensure that the user can call `then()` only when the file has
      //been downloaded entirely.
  
      return new Promise((resolve, reject) => {
        response.data.pipe(writer);
        let error = null;
        writer.on('error', err => {
          error = err;
          writer.close();
          reject(err);
        });
        writer.on('close', () => {
          if (!error) {
            resolve(true);
          }
          //no need to call the reject here, as it will have been called in the
          //'error' stream;
        });
      });
    });
  }

// ==========================================================
//*                        Extracting File 
// ==========================================================
exports.extractFile =  async (projectName) => {
  let pathDir = []
  let sumDir = 0
  return new Promise(  (resolve, reject) => {
    const zip = new StreamZip({file: 'public/temp/file.zip', storeEntries: true})

  zip.on('error', function (err) { console.log(err); });
   zip.on('entry',  function (entry) {
    const pathname = path.resolve('public/extracted', entry.name);
    const filename =  entry.name

    if (/\.\./.test(path.relative('public/extracted', pathname))) {
        console.warn("[zip warn]: ignoring maliciously crafted paths in zip file:", entry.name);
        return;
    }
    if ('/' === entry.name[entry.name.length - 1]) {
      console.log('[DIR]', entry.name);
      return;
    }
    console.log('[FILE]', entry.name);
    zip.stream(entry.name, function (err, stream) {
        if (err) { console.error('Error:', err.toString()); return; }
  
      stream.on('error', function (err) { console.log('[ERROR]', err); return });
  
      // example: print contents to screen
      //stream.pipe(process.stdout);
  
      // example: save contents to file
      fs.mkdir(
        path.dirname(pathname),
        { recursive: true },
        async function (err) {
          await stream.pipe(fs.createWriteStream(pathname));
          if(filename.match(/\odm_orthophoto/)){
            fsExtra.moveSync(
              "public/extracted/odm_orthophoto/odm_orthophoto.tif",
              `public/assets/${projectName}/image2d/odm_orthophoto.tif`
            );
          }
          
          if(filename.match(/\odm_texturing/)){
            const folderOdm = path.join(__dirname, '../public/') + "extracted/odm_texturing/";
            const odmDir = fs.readdirSync(folderOdm);
            odmDir.forEach((folder) => {
              if(!folder.match(/\model.mtl|conf/)){
                fsExtra.moveSync(
                  `public/extracted/odm_texturing/${folder}`,
                  `public/assets/${projectName}/image3d/${folder}`
                )
                pathDir.push(`assets/${projectName}/image3d/${folder}`)
                sumDir++
              }
            });
          }
        }
        ); 
        stream.on('end',() => {
          if(pathDir.length > 0 ){
            resolve(pathDir)
          }
        })
      });
    });
  })
}

// File Compress