angular.module('starter').factory('InstructionsService', [ function() {

  var instructionsObj = {};

  instructionsObj.instructions = {
    newLocations : {
      text : 'Visitor',
      seen : false
    }
  };

  return instructionsObj;

}]);