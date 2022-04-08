module.exports = app => {
    const achievements = require("../controller/achievement.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", achievements.create);

    // router.post("/upload", upload.single("file"), uploadController.uploadFiles);
    
  
    // Retrieve all Achievements
    router.get("/", achievements.findAll);
  
    // // Retrieve all published Achievements
    // router.get("/published", achievements.findAllPublished);
  
    // // Retrieve a single User with id
    // router.get("/:id", achievements.findOne);
  
    // Update a User with id
    router.put("/:id", achievements.update);
  
    // Delete a User with id
    router.delete("/:id", achievements.delete);
  
    // // Delete all Achievements
    // router.delete("/", achievements.deleteAll);
  
    app.use('/api/students/achievements', router);
  };