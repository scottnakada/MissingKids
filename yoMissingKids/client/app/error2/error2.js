'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('error2', {
        url: '/error2',
        templateUrl: 'app/error2/error2.html',
        controller: 'Error2Ctrl'
      });
  });