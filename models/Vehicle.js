const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/database");

class Vehicle extends Model {}

Vehicle.init(
  {
    vehicleOwnerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    engineOilChange: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    engineOilFilter: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    breakOil: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tyreWearFront: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tyreWearBack: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tyrePressure: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    breakPads: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    RPM: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    headlight: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    allCablesCheck: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    breakCableDamage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    batteryCheck: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    clutch: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    carburetor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    rearViewMirror: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    bikeInsurance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    otherDamages: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "vehicle",
    timestamps: false,
  }
);

module.exports = Vehicle;
