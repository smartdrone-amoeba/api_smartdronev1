const fs = require('fs-extra')

// Move Directory
exports.moveDir = async (filename, directory) => {
    await fs.move(`uploads/${filename}/`,`public/assets/${directory}/${filename}`, function (err, result) {
        if (err) {
            return console.error(err);
        }
        return true
    });
}



// File Compress