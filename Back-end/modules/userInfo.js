module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    //* model name
    "userInfo",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      first_name: DataTypes.STRING,
      street: DataTypes.STRING,
      house_number: {
        type: DataTypes.STRING(10),
        field: "house_number"
      },
      zip: DataTypes.INTEGER,
      city: DataTypes.STRING,
      description: DataTypes.TEXT,
      position: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      birthday: DataTypes.STRING,
      phone: DataTypes.STRING,
      xing_url: DataTypes.STRING,
      github_url: DataTypes.STRING,
      linkedin_url: DataTypes.STRING,
      cv_file_url: DataTypes.STRING,
      data_protection_file_url: DataTypes.STRING
    },
    { tableName: "user_info", timestamps: false }
  );
};
