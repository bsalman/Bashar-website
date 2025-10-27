// src/models/personal_education.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "p_education",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      person_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: "user_info", key: "id" }
      },
      education_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: "education", key: "id" }
      }
    },
    { tableName: "p_education", timestamps: false }
  );
};
