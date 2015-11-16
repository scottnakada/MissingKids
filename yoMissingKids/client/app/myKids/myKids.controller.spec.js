'use strict';

describe('Controller: MyKidsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoMissingKidsApp'));

  var MyKidsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyKidsCtrl = $controller('MyKidsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
