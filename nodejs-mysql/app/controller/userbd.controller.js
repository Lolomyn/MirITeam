const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.email) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
        }
        const users = {
            id: req.body.id,
            password: req.body.password,
            fcs: req.body.fcs,
            age: req.body.age,
            course: req.body.course,
            institute: req.body.institute,
            groupID: req.body.groupID,
            email: req.body.email,
            vk: req.body.vk,
            telegram: req.body.telegram,
            pnumber: req.body.pnumber,
            stnumber: req.body.stnumber,
            inn: req.body.inn,
            snils: req.body.snils,
            bshifr: req.body.bshifr,
            comment: req.body.comment
          };
          User.create(users)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the User."
  });
});
        
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Users with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };