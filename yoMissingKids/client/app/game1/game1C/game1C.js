'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game1C', {
        url: '/game1C',
        templateUrl: 'app/game1/game1C/game1C.html',
        controller: 'Game1CCtrl'
      });
  });