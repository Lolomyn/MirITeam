const db = require("../models");
const fileService = require('../services/fileService')
const config = require('../config/db.config')
const fs = require('fs');
const User = db.users;
const File = db.files;
const Op = db.Sequelize.Op;
const filePath = "C:\\Users\\bons1\\Documents\\git\\MirITeam\\project\\mirITeam\\src\\files";

exports.create = (req, res) => {
    const files = {
        userid: req.body.userid,
        name: req.body.name,
        type: req.body.type,
        accessLink: req.body.accessLink,
        size: req.body.size,
        path: req.body.path,
        date: req.body.date,
        user: User.id
      };
      File.create(files)
.then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
message:
  err.message || "Some error occurred while creating the File info."
});
});
}
exports.createDir =  async (req, res) => {
        try {
            const {name, type, parent} = req.body;
            const file = new File({name, type, parent, user: User.id});
                file.path = name;
                await fileService.createDir(file);
            await file.save();
            return res.json(file);
        } catch (e) {
            console.log(e);
            return res.status(400).json(e);
        }
    };

    exports.getFiles = async (req, res) => {
        try {
            const files = await File.findAll({user: User.id, parent: req.query.parent});
            return res.json(files);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: "Can not get files"});
        }
    }

    exports.uploadFile = async (req, res) => {
        try {
            const file = req.files.file;
            const id = req.files.user;
            condition =

            File.findAll(req.body, {
                where: { id: id }
              });
            User.findAll(req.body, {
                where: { userid: id }
              });

            // if (user.usedSpace + file.size > user.diskSpace) {
            //     return res.status(400).json({message: 'There no space on the disk'});
            // }

            // user.usedSpace = user.usedSpace + file.size;

            let path;
            // if (parent) {
            //     path = `${config.get('filePath')}\\${user._id}\\${parent.path}\\${file.name}`;
            // } else {
                path = `${filePath}\\${id}\\${file.name}`;
            // }

            if (fs.existsSync(path)) {
                return res.status(400).json({message: 'File already exist'});
            }
            file.mv(path);

            const type = file.name.split('.').pop();
            const dbFile = new File({
                name: file.name,
                type,
                size: file.size,
                path: file.path,
                // user: user.id
            });

            await dbFile.save();
            await user.save();

            res.json(dbFile);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: "Upload error"});
        }
    }