module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Patient', {
    PatientId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PatientDOB: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'Patient',
    freezeTableName: true,
  }
);
};
