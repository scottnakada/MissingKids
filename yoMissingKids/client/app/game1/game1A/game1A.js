'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game1A', {
        url: '/game1A',
        templateUrl: 'app/game1/game1A/game1A.html',
        controller: 'Game1ACtrl'
      });
  });