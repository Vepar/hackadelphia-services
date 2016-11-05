module.exports = function(models){
  var express = require('express');
  var router = express.Router();
  var Patient = models.Patient;

  /* Get single patient*/
  router.get('/:id', function(req, res, next) {
    console.log(req);
    Patient.findById(req.params.id).then(function(patient){
      res.send(patient);
    }).error(function(err){
      //TODO:LOGGING look into error handling/logging
    });
  });

  /* Get all users*/
  router.get('/', function(req, res, next){
    Patient.findAll({
  }).then(function(patients){
      res.send(patient);
    }).error(function(err){
        //TODO:LOGGING look into error handling/logging
    });
  });


  /* Save new user*/
  router.put('/', function(req, res){
    Patient.create({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      PatientDOB: req.body.PatientDOB
    }).then(function(user){
        console.log(user.UserId);
        res.send({'userId': user.UserId});
        // res.sendStatus(200);
      }).error(function(err){
          //TODO:LOGGING look into error handling/logging
      });
  });


  return router;
};
