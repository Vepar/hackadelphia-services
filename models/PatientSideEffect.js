module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PatientSideEffect', {
    PatientSideEffectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PatientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SideEffect: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Schedule: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: 'PatientSideEffect',
    freezeTableName: true,
  }
);};
