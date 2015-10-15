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
        { direction: 'North', speed: '> 5 m/s', plot1: '../../assets/images/abau.jpg', plot2: '../../assets/images/balcon.jpg', plot3: '../../assets/images/fernh.jpg', plot4: '../../assets/images/hoorz.jpg', plot5: '../../assets/images/mensa.jpg'},
        { direction: 'North', speed: '< 5 m/s', plot1: '../../assets/images/abau.jpg', plot2: '../../assets/images/balcon.jpg', plot3: '../../assets/images/fernh.jpg', plot4: '../../assets/images/hoorz.jpg', plot5: '../../assets/images/mensa.jpg'},
        { direction: 'South', speed: '> 5 m/s', plot1: '../../assets/images/abau.jpg', plot2: '../../assets/images/balcon.jpg', plot3: '../../assets/images/fernh.jpg', plot4: '../../assets/images/hoorz.jpg', plot5: '../../assets/images/mensa.jpg'},
        { direction: 'South', speed: '< 5 m/s', plot1: '../../assets/images/abau.jpg', plot2: '../../assets/images/balcon.jpg', plot3: '../../assets/images/fernh.jpg', plot4: '../../assets/images/hoorz.jpg', plot5: '../../assets/images/mensa.jpg'},
        { direction: 'East', speed: '> 5 m/s', plot1: '../../assets/images/abau.jpg', plot2: '../../assets/images/balcon.jpg', plot3: '../../assets/images/fernh.jpg', plot4: '../../assets/images/hoorz.jpg', plot5: '../../assets/images/mensa.jpg'},
        { direction: 'East', speed: '< 5 m/s', plot1: '../../assets/images/abau.jpg', plot2: '../../assets/images/balcon.jpg', plot3: '../../assets/images/fernh.jpg', plot4: '../../assets/images/hoorz.jpg', plot5: '../../assets/images/mensa.jpg'},
        { direction: 'West', speed: '> 5 m/s', plot1: '../../assets/images/abau.jpg', plot2: '../../assets/images/balcon.jpg', plot3: '../../assets/images/fernh.jpg', plot4: '../../assets/images/hoorz.jpg', plot5: '../../assets/images/mensa.jpg'},
        { direction: 'West', speed: '< 5 m/s', plot1: '../../assets/images/abau.jpg', plot2: '../../assets/images/balcon.jpg', plot3: '../../assets/images/fernh.jpg', plot4: '../../assets/images/hoorz.jpg', plot5: '../../assets/images/mensa.jpg'},
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
