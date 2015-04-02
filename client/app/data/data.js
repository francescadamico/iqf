'use strict';

angular.module('iqfApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/data', {
        templateUrl: 'app/data/data.html',
        controller: 'DataCtrl'
      });
  });
