var Sequelize = require('sequelize');
//since I don't want to have all the models in one huge file we'll import them in
//and create any model relationships after all are imported

//initialize connection to AWS RDS instance
//TODO: these values will have to go into a config file somewhere

// var sequelize = new Sequelize('Bradslist', 'root', 'eH,;Cyrhx0B+', {
//     host: 'localhost',
//       dialect: "mysql",
//       port:    3306,
//     });

// var env = process.env.NODE_ENV || 'dev';
// var config = require('./' + env + 'config.json');

    var sequelize = new Sequelize('hackathondb', 'Hackathonuser', 'Password1!', {
      port: 3306
    });

  //
  // sequelize
  //   .authenticate()
  //   .then(function(err) {
  //     console.log('Connection has been established successfully.');
  //   }, function (err) {
  //     console.log('Unable to connect to the database:', err);
  //   });

//load models
var models = [
  'Medication',
  'Patient',
  'PatientMed',
  'PatientMedSchedule',
  'PatientSideEffect'
];

models.forEach(function(model){
  module.exports[model] = sequelize.import(model);
});

//create relationships
(function(m){
  m.Medication.belongsToMany(m.Patient, {through: 'PatientMed'});

  // m.User.hasMany(m.Ad, {foreignKey: 'UserId'});
  // m.Ad.belongsTo(m.User, {foreignKey: 'UserId'});
  // m.Ad.hasMany(m.AdImage, {foreignKey: 'AdId'});
  // m.AdImage.belongsTo(m.Ad, {foreignKey: 'AdId'});
  // m.Category.hasOne(m.Ad, {foreignKey: 'CategoryId'});
  // m.Market.hasOne(m.Ad, {foreignKey: 'MarketId'});
  // m.AdState.hasOne(m.Ad, {foreignKey: 'AdStateId'});
})(module.exports);

sequelize.sync( force = false);

module.exports.sequelize = sequelize;
