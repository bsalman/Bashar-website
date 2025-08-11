// src/models/skills.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "skill",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      skill: DataTypes.STRING(100),
      skillLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      main_direction: DataTypes.STRING(255)
    },
    { tableName: "skill" }
  );
};
