module.exports = (sequelize, DataTypes) => {
  return sequelize.define("project", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    project_name: DataTypes.STRING,
    project_url: DataTypes.STRING,
    web_img_url: DataTypes.STRING,
    description: DataTypes.STRING
  });
};
