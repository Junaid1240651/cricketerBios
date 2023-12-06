const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../dbConnection/database");

const CricketerBio = sequelize.define("cricketerBio", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  dob: DataTypes.STRING,
  photoUrl: DataTypes.STRING,
  birthPlace: DataTypes.STRING,
  carrer: DataTypes.STRING,
  noOfMatches: DataTypes.INTEGER,
  score: DataTypes.INTEGER,
  fifties: DataTypes.INTEGER,
  centuries: DataTypes.INTEGER,
  wickets: DataTypes.INTEGER,
  average: DataTypes.INTEGER,
});

module.exports = CricketerBio;
