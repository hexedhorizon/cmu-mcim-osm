// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'leaflet-directive', 'ngCordova', 'igTruncate','ion-floating-menu'])


  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    
    //middle title
    $ionicConfigProvider.navBar.alignTitle('center')

    $stateProvider
      
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'MapController'
      })

      .state('app.aboutcmu', {
        url: "/aboutcmu",
        views: {
          'menuContent' :{
            templateUrl: "templates/aboutcmu.html"
          }
        }
      })

      .state('app.map', {
        url: "/map",
        views: {
          'menuContent' :{
            templateUrl: "templates/map.html"
          }
        }
      })

      .state('app.sidemenu', {
        url: "/sidemenu",
        views: {
          'menuContent' :{
            templateUrl: "templates/sidemenu.html"
          }
        }
      })

       .state('app.main', {
        url: "/main",
        views: {
          'menuContent' :{
            templateUrl: "templates/main.html"
          }
        }
      })

       .state('app.searchmenu', {
        url: "/searchmenu",
        views:
          {
            'menuContent' :
            {
              templateUrl: "templates/searchmenu.html"
            }
          }
      })

       .state('app.routemenu', {
        url: "/routemenu",
        views:
          {
            'menuContent' :
            {
              templateUrl: "templates/routemenu.html"
            }
          }
      })

       .state('app.aboutmenu', {
        url: "/aboutmenu",
        views:
          {
            'menuContent' :
            {
              templateUrl: "templates/aboutmenu.html"
            }
          }
      });
    $urlRouterProvider.otherwise('/app/main');

  });