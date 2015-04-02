'use strict';

angular.module('iqfApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/location', {
        templateUrl: 'app/location/location.html',
        controller: 'LocationCtrl'
      });
  });
