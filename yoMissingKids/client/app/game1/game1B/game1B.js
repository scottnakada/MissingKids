'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game1B', {
        url: '/game1B',
        templateUrl: 'app/game1/game1B/game1B.html',
        controller: 'Game1BCtrl'
      });
  });