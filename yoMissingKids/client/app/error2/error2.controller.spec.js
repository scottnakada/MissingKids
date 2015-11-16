'use strict';

describe('Controller: Error2Ctrl', function () {

  // load the controller's module
  beforeEach(module('yoMissingKidsApp'));

  var Error2Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Error2Ctrl = $controller('Error2Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
