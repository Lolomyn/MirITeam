const multer = require("multer");

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("file")) {
//     cb(null, true);
//   } else {
//     cb("Please upload only files.", false);
//   }
// };

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-cp-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage });
module.exports = uploadFile;
