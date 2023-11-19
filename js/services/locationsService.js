angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Main Gate",
      zoom: 16,
      lat : 7.85897,
      lng : 125.05217
    },
    {
      name : "College of Arts and Sciences",
      zoom: 16,
      lat : 7.86025,
      lng : 125.05175
    },
    {
      name : "College of Education",
      zoom: 16,
      lat : 7.86112,
      lng : 125.05203
    },
    {
      name : "College of Engineering",
      zoom: 16,
      lat : 7.86283,
      lng : 125.05283
    }

  ];

  return locationsObj;

}]);