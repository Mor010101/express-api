const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index.js");

class Contract extends Model {}

Contract.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    chainId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAtBlock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "contract",
  }
);

module.exports = Contract;
