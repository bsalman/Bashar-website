// src/models/index.js
const { Model } = require("sequelize");
const { sequelize } = require("../config/sequelize");
const DataTypes = require("sequelize").DataTypes;
// Instantiate every model
const UserInfo = require("./userInfo")(sequelize, DataTypes);
const Skill = require("./skill")(sequelize, DataTypes);
const Education = require("./education")(sequelize, DataTypes);
const Experience = require("./experience")(sequelize, DataTypes);
const Project = require("./project")(sequelize, DataTypes);
const P_education = require("./p_education")(sequelize, DataTypes);
const P_experience = require("./p_experience")(sequelize, DataTypes);
const P_projects = require("./p_project")(sequelize, DataTypes);
const P_skills = require("./p_skill")(sequelize, DataTypes);

/* ---------- Associations ---------- */
UserInfo.belongsToMany(Education, {
  through: P_education,
  foreignKey: "person_id",
  otherKey: "education_id"
});

Education.belongsToMany(UserInfo, {
  through: P_education,
  foreignKey: "education_id",
  otherKey: "person_id"
});

/* ---------- Associations ---------- */
UserInfo.belongsToMany(Experience, {
  through: P_experience,
  foreignKey: "person_id",
  otherKey: "experience_id"
});
Experience.belongsToMany(UserInfo, {
  through: P_experience,
  foreignKey: "experience_id",
  otherKey: "person_id"
});
/* ---------- Associations ---------- */
UserInfo.belongsToMany(Project, {
  through: P_projects,
  foreignKey: "person_id",
  otherKey: "project_id"
});
Project.belongsToMany(UserInfo, {
  through: P_projects,
  foreignKey: "project_id",
  otherKey: "person_id"
});
/* ---------- Associations ---------- */
UserInfo.belongsToMany(Skill, {
  through: P_skills,
  foreignKey: "person_id",
  otherKey: "skill_id"
});
Skill.belongsToMany(UserInfo, {
  through: P_skills,
  foreignKey: "skill_id",
  otherKey: "person_id"
});

module.exports = {
  UserInfo,
  Skill,
  Education,
  Experience,
  Project,
  P_education,
  P_experience,
  P_projects,
  P_skills
};
