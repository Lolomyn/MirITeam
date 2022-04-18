module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "12345678",
    DB: "basa_dp",
    dialect: "mysql",
    // filePath: "C:\\Users\\bons1\\Documents\\git\\MirITeam\\project\\mirITeam\\src\\files",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };