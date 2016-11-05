module.exports = function(sequelize, DataTypes) {
  return  sequelize.define('PatientMedSchedule', {
    PatientMedScheduleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    PatientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SideEffect: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SideEffectTimestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
  },
  {
    tableName: 'PatientMedSchedule',
    freezeTableName: true,
  }
);};
