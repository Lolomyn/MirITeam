module.exports = app => {
    const users = require("../controller/userbd.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);

    // router.post("/upload", upload.single("file"), uploadController.uploadFiles);
    
  
    // Retrieve all Users
    router.get("/", users.findAll);
  
    // // Retrieve all published Users
    // router.get("/published", users.findAllPublished);
  
    // // Retrieve a single User with id
    // router.get("/:id", users.findOne);
  
    // Update a User with id
    router.put("/:id", users.update);
  
    // Delete a User with id
    router.delete("/:id", users.delete);
  
    // // Delete all Users
    // router.delete("/", users.deleteAll);
  
    app.use('/api/students', router);
  };