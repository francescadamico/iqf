'use strict';

angular.module('iqfApp')
  .controller('DataCtrl', function ($scope) {
    $scope.checkModelDir = {
        North: false,
        South: false,
        East: false,
        West: false
    };
    
    $scope.checkModelSpeed = {
        bigger5: false,
        smaller5: false
    };
    
    $scope.checkResultsDir = [];
    $scope.checkResultsSpeed = [];
    $scope.showPlots = false;
    
    $scope.plotItems = [
        { direction: 'North', speed: '> 5 m/s', plot1: '../../assets/images/windDirection.jpeg'},
        { direction: 'North', speed: '< 5 m/s', plot1: '../../assets/images/all.jpeg'},
        { direction: 'South', speed: '> 5 m/s', plot1: '../../assets/images/velocity.jpeg'},
        { direction: 'South', speed: '< 5 m/s', plot1: '../../assets/images/balcony_station.JPG'},
        { direction: 'East', speed: '> 5 m/s', plot1: '../../assets/images/garten_station.jpg'},
        { direction: 'East', speed: '< 5 m/s', plot1: '../../assets/images/hoorzaalzentrum_station.JPG'},
        { direction: 'West', speed: '> 5 m/s', plot1: '../../assets/images/morgenstelle_topview.jpg'},
        { direction: 'West', speed: '< 5 m/s', plot1: '../../assets/images/UKT.png'},
    ];
    
    $scope.$watchCollection('checkModelDir', function () {
        $scope.checkResultsDir = [];
        angular.forEach($scope.checkModelDir, function (valueDir, keyDir) {
            if (valueDir) {
                $scope.checkResultsDir.push = keyDir;
            }
        });
    });
    
    $scope.$watchCollection('checkModelSpeed', function () {
        $scope.checkResultsSpeed = [];
        angular.forEach($scope.checkModelSpeed, function (valueSpeed, keySpeed) {
            if (valueSpeed) {
                $scope.checkResultsSpeed.push = keySpeed;
            }
        });
    });
    
    $scope.enablePlots = function(dirChosen,speedChosen) {
        if(dirChosen[0] !== '' && speedChosen[0] !== '') {
            $scope.showPlots = true;
        }
    };
    
  });
