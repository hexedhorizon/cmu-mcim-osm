  angular.module('starter').controller('MapController',
  [ 
    '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    '$ionicActionSheet',
    'LocationsService',
    'InstructionsService',
    //map function and scope
    function(
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      $ionicActionSheet,
      LocationsService,
      InstructionsService
      )
    {
      /**
       * Once state loaded/reloaded, get put map on scope.
       */
      $scope.$on("$stateChangeSuccess", function()
      {
        //obj for saved locations
        $scope.locations = LocationsService.savedLocations;
        //obj for new location
       // $scope.newLocation;
        if(!InstructionsService.instructions.newLocations.seen)
        {
          /*popup
          var instructionsPopup =
          $ionicPopup.alert(
            {
              title: 'Welcome',
              template: InstructionsService.instructions.newLocations.text
            }
          );

          instructionsPopup.then
          (function(res)
            {
              InstructionsService.instructions.newLocations.seen = true;
            }
          );*/
        }

        //map variable
        $scope.map =
        {
          defaults: 
          {
            //map controls
            //tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
           tileLayer: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
             maxZoom: 18,
            minZoom: 16,
            draggable: false,
            tilt: true,
            zoomControlPosition: 'topright'
          },

          //show markers
          markers : {},

          /*
          events:
          {
            map: 
            {
              enable: ['context'],
              logic: 'emit'
            }
          }*/
        };
        $scope.goTo(0);
      });//end map load
      
      //template add this location to list
       $scope.Events = function(){
        var alertPopup = $ionicPopup.alert({
           title: 'Fuck you',
           template: 'This feature is under construction'
            })}

      $scope.tips = function(){
        var alertPopup = $ionicPopup.alert({
           title: 'Tips',
           template: 'This feature is under construction'
            })}

      var Location = function() {
        if ( !(this instanceof Location) ) return new Location();
        this.lat  = "";
        this.lng  = "";
        this.name = "";
      };

      $ionicModal.fromTemplateUrl('templates/addLocation.html',{
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });
      //Detect user long-pressing on map to add new location
      $scope.$on('leafletDirectiveMap.contextmenu', function(event, locationEvent){
        $scope.newLocation = new Location();
        $scope.newLocation.lat = locationEvent.leafletEvent.latlng.lat;
        $scope.newLocation.lng = locationEvent.leafletEvent.latlng.lng;
        $scope.modal.show();
      });

      $scope.saveLocation = function() {
        LocationsService.savedLocations.push($scope.newLocation);
        $scope.modal.hide();
        $scope.goTo(LocationsService.savedLocations.length - 1);
      };
   //FOCUS MAP
      /**
       * Center map on specific saved location
       * @param locationKey
       */
      $scope.goTo = function(locationKey) {

        var location = LocationsService.savedLocations[locationKey];

        $scope.map.center  = {
          lat : location.lat,
          lng : location.lng,
          zoom : 16
        };

        $scope.map.markers[locationKey] = {
          lat:location.lat,
          lng:location.lng,
          message: location.name,
          focus: true,
          draggable: false
        };
      };

      /**
       * Center map on user's current position
       */
      $scope.locate = function(){

        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 16;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "You Are Here",
              focus: true,
              draggable: true
            };

          }, function(err) {
            // error
            var alertPopup = $ionicPopup.alert({
                 title: 'Location Error',
                 template: 'Please check your Internet Connection and GPS'
            })
            console.log("Location error!");
            console.log(err);
          });

      };

      $scope.showActionsheet = function()
    {
      $ionicActionSheet.show
      ({
        titleText: '<center>Tips</center><br><center><h5>This mobile application is an interactive campus map of Central Mindanao University</h5></center><left><br>Search Information<left><br></left>- Search data that is related to the map</br></left><left><br>Free Roam<left><br></left>- Explore the map</br></left>',
        buttons:
        [ 
          /*
          { text: '<i class="icon ion-home"></i> Home' },
          { text: '<i class="icon ion-ios-paper"></i> Buildings List' },
          { text: '<i class="icon ion-ios-information"></i> About' },*/
        ],
        destructiveText: 'Cancel',
        buttonClicked: function(index)
        {
          if(index === 0)
          { // Manual Button
            var alertPopup = $ionicPopup.alert({
                 title: 'Menu',
                 template: 'Home'
            })
          }
          else if(index === 1)
          {
            var alertPopup = $ionicPopup.alert({
                 title: 'Menu',
                 template: 'Buildings'
            })
          }
          else if(index === 2)
          {
            var alertPopup = $ionicPopup.alert({
                 title: 'Menu',
                 template: 'About'
            })
          }
          //$scope.Events();
         // console.log('BUTTON CLICKED');
          return true;
        },

        destructiveButtonClicked: function()
        {
          //console.log('DESTRUCT');
          return true;
        }

      });
    };


    }]);
  //first edit
  