module.exports = (sequelize, DataTypes) => {
  return sequelize.define("experience", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    country: DataTypes.STRING,
    occupation: DataTypes.TEXT,
    job_title: DataTypes.STRING
  });
};
