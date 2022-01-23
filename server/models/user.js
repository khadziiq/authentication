'use strict';


const {
  Model
} = require('sequelize');
const { encryptPwd } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.item)
    }
  }
  user.init({
    email: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message: "Email must be not empty"
        },
        isEmail:{
          message:"Must be email format"
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message: "Password must be not empty"
        }
      }
    },
    username: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message: "Username must be not empty"
        }
      }
    },
    avatar: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message: "Avatar must be not empty"
        }
      }
    },
    role: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message: "Role must be not empty"
        }
      }
    }
  }, {
    hooks:{
      beforeCreate: function(user, option){
        user.password = encryptPwd(user.password)
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};