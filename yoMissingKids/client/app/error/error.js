'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('error', {
        url: '/error',
        templateUrl: 'app/error/error.html',
        controller: 'ErrorCtrl'
      });
  });