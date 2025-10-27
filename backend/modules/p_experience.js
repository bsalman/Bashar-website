// src/models/personal_experience.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "p_experience",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      person_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: { model: "user_info", key: "id" }
      },
      experience_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: { model: "experience", key: "id" }
      }
    },
    { tableName: "p_experience", timestamps: false }
  );
};
