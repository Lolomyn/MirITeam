module.exports = (sequelize, Sequelize) => {
    const Achievement = sequelize.define("achievement", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        fcs: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        organizator: {
            type: Sequelize.STRING
        },
        stepen: {
            type: Sequelize.STRING
        },
        ball: {
            type: Sequelize.FLOAT
        },
        date: {
            type: Sequelize.DATE
        },
        file: {
            type: Sequelize.BLOB("long")
        },
    });

    return Achievement;
};