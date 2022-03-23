module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("File", {
        name: {
            type: Sequelize.STRING,
            required: true
        },
        type: {
            type: Sequelize.STRING,
            required: true
        },
        accessLink: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.INTEGER,
            default:0
        },
        path: {
            type: Sequelize.STRING,
            default:''
        },
        date: {
            type: Sequelize.DATE,
            default: Date.now()
        },
        user: {
            type: Sequelize.ObjectId,
            ref: 'User'
        },
        parent: {
            type: Sequelize.ObjectId,
            ref: 'File'
        },
        childs: {
            type: Sequelize.ObjectId,
            ref: 'File'
        }
    });

    return File;
};