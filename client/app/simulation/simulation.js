'use strict';

angular.module('iqfApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/simulation', {
        templateUrl: 'app/simulation/simulation.html',
        controller: 'SimulationCtrl'
      });
  });
