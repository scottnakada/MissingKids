'use strict';

describe('Controller: EditProductCtrl', function () {

  // load the controller's module
  beforeEach(module('yoMissingKidsApp'));

  var EditProductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditProductCtrl = $controller('EditProductCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
