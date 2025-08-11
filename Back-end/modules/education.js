module.exports = (sequelize, DataTypes) => {
  return sequelize.define("education", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    location: DataTypes.STRING,
    specialization: DataTypes.STRING,
    certificate: DataTypes.STRING
  });
};
