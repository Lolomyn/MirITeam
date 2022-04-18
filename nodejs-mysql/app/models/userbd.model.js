module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        password: {
            type: Sequelize.STRING
        },
        fcs: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        course: {
            type: Sequelize.INTEGER
        },
        institute: {
            type: Sequelize.STRING
        },
        groupID: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        vk: {
            type: Sequelize.STRING
        },
        telegram: {
            type: Sequelize.STRING
        },
        pnumber: {
            type: Sequelize.STRING
        },
        stnumber: {
            type: Sequelize.INTEGER
        },
        inn: {
            type: Sequelize.STRING
        },
        snils: {
            type: Sequelize.STRING
        },
        bshifr: {
            type: Sequelize.STRING
        },
        avg: {
            type: Sequelize.STRING
        },
        comment: {
            type: Sequelize.STRING
        }
    });

    return User;
};