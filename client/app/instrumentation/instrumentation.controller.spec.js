'use strict';

describe('Controller: InstrumentationCtrl', function () {

  // load the controller's module
  beforeEach(module('iqfApp'));

  var InstrumentationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstrumentationCtrl = $controller('InstrumentationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
