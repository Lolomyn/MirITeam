const fs = require("fs");

const db = require("../models");
const  Achievement = db.achievements;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Achievement.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      file: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    }).then((file) => {
      fs.writeFileSync(
        __basedir + "\\resources\\static\\assets\\tmp\\" + file.name,
        file.file
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload files: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};