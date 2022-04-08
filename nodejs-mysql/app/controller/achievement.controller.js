const db = require("../models");
const Achievement = db.achievements;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.fcs) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
        }
        const achievements = {
            id: req.body.id,
            fcs: req.body.fcs,
            name: req.body.name,
            status: req.body.status,
            organizator: req.body.organizator,
            stepen: req.body.stepen,
            ball: req.body.ball,
            date: req.body.date,
            file: req.body.file
          };
          Achievement.create(achievements)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the Achievements."
  });
});
        
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const fcs = req.query.fcs;
  var condition = fcs ? { fcs: { [Op.like]: `%${fcs}%` } } : null;

  Achievement.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving achievements."
      });
    });
};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Achievement.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Achievement was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Achievement with id=${id}. Maybe Achievement was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Achievements with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Achievement.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Achievement was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Achievement with id=${id}. Maybe Achievement was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Achievement with id=" + id
        });
      });
  };