'use strict';

angular.module('iqfApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/instrumentation', {
        templateUrl: 'app/instrumentation/instrumentation.html',
        controller: 'InstrumentationCtrl'
      });
  });
