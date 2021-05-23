const db = require("./connect");
const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = {
  User: db.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatarImgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }),
};
