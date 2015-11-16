'use strict';

describe('Controller: Game1ACtrl', function () {

  // load the controller's module
  beforeEach(module('yoMissingKidsApp'));

  var Game1ACtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Game1ACtrl = $controller('Game1ACtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
