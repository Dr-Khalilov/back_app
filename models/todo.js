'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate (models) {}
  }
  Todo.init(
    {
      body: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      deadline: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      isDone: {
        field: 'is_done',
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Todo',
      tableName: 'todos',
      underscored: true,
    }
  );
  return Todo;
};
