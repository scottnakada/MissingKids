'use strict';

describe('Controller: Game1CCtrl', function () {

  // load the controller's module
  beforeEach(module('yoMissingKidsApp'));

  var Game1CCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Game1CCtrl = $controller('Game1CCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
