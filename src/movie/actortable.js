const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

const Actor = sequelize.define("Actor", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
        unique: true
    }
});

module.exports = Actor;