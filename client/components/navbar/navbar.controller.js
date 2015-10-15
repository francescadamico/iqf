'use strict';

angular.module('iqfApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {
            'title': 'Location',
            'link': '/location'
        },
        {
            'title': 'SN\@M',
            'link': '/instrumentation'
        },
        {
            'title': 'SN\@m data',
            'link': '/data'
        },
        {
            'title': 'Simulation',
            'link': '/simulation'
        }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });