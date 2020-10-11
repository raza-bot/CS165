'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExampleData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExampleData.init(
    {
      author: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      data: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'ExampleData',
    }
  );
  return ExampleData;
};
