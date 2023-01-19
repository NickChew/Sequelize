const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // actor: {
    //     type: DataTypes.STRING,
    //     defaultValue: "Not specified",
    //     unique: true
    // },  
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not known",
        unique: true
    },
    addedBy: {
        type: DataTypes.STRING,
        allowNull: true,
        subQuery: false,
        distinct: true,
        defaultValue: "Not known",
        unique: "addedBy"
    }
});

module.exports = Movie;