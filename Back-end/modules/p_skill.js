module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "p_skill",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      person_id: {
        // original typo kept; map it—don’t fight it
        type: DataTypes.INTEGER.UNSIGNED,
        references: { model: "user_info", key: "id" }
      },
      skill_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: { model: "skill", key: "id" }
      }
    },
    { tableName: "p_skill" }
  );
};
