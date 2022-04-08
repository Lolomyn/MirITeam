const express = require("express");

const bodyParser = require("body-parser");
const fileRouter = require("./app/routes/file.routes")
const fileupload = require("express-fileupload");
const cors = require("cors");

const app = express();

global.__basedir = "C:\\Users\\bons1\\Documents\\git\\MirITeam\\project\\mirITeam\\src\\files\\";

var corsOptions = {
    origin: "http://localhost:4200" // для тестов
};

app.use(cors(corsOptions));

const initRoutes = require("./app/routes/file.routes");
const db = require("./app/models");


db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
// app.use(fileupload({}))
// app.use("/api/files", fileRouter)  //было до 1.04
// parse requests of content-type - application/json
initRoutes(app);
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to  platform." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./app/routes/users.routes")(app);
require("./app/routes/achievement.routes")(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});