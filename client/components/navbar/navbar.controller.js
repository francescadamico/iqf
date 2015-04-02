'use strict';

angular.module('iqfApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {
            'title': 'Location',
            'link': '/location'
        },
        {
            'title': 'Instrumentation',
            'link': '/instrumentation'
        },
        {
            'title': 'Data',
            'link': '/data'
        }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });