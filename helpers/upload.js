const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = req.params.multerDestinationFolder || 'uploads';
    let uploadDir = path.normalize(__dirname + `/../${folder}`);
    // console.log("TCL: uploadDir", uploadDir)
    if (!fs.existsSync(uploadDir)) {
      // fs.mkdirSync(uploadDir, {
      //   recursive: true
      // });
      createDirRecursively(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  },
  // resizeImage: function(file) {
  // }
});

const upload = multer({
  storage: storage
});


function createDirRecursively(dir) {
  if (!fs.existsSync(dir)) {        
      createDirRecursively(path.join(dir, ".."));
      fs.mkdirSync(dir);
  }
}

module.exports = upload;