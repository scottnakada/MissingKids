'use strict';

describe('Controller: ThankYouCtrl', function () {

  // load the controller's module
  beforeEach(module('yoMissingKidsApp'));

  var ThankYouCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThankYouCtrl = $controller('ThankYouCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
