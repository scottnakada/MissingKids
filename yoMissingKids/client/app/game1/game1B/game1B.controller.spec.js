'use strict';

describe('Controller: Game1BCtrl', function () {

  // load the controller's module
  beforeEach(module('yoMissingKidsApp'));

  var Game1BCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Game1BCtrl = $controller('Game1BCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
