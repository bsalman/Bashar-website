// src/models/personal_projects.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "p_project",
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
      project_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: { model: "project", key: "id" }
      }
    },
    { tableName: "p_project", timestamps: false }
  );
};
