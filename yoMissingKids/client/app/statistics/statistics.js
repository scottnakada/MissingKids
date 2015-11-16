'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('statistics', {
        url: '/statistics',
        templateUrl: 'app/statistics/statistics.html',
        controller: 'StatisticsCtrl'
      });
  });