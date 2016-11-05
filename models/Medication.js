module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Medication', {
    NDC: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    MedicationName: {
      type: DataTypes.STRING,
      allownNull: false
    }
  },
  {
    tableName: 'Medication',
    freezeTableName: true,
  });
};
