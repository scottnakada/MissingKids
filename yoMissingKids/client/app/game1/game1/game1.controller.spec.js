'use strict';

describe('Controller: Game1Ctrl', function () {

  // load the controller's module
  beforeEach(module('yoMissingKidsApp'));

  var Game1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Game1Ctrl = $controller('Game1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
