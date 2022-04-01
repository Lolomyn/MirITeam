module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("file", {
        userid: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        accessLink: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.INTEGER
        },
        path: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        }
    });

    return File;
};