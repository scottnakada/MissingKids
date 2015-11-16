'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game1', {
        url: '/game1',
        templateUrl: 'app/game1/game1/game1.html',
        controller: 'Game1Ctrl'
      });
  });