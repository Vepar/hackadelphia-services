module.exports = function(sequelize, DataTypes) {
  return  sequelize.define('PatientMed', {
    PatientMedId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    PatientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MedicationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'PatientMed',
    freezeTableName: true,
  }
);};
