'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thankYou', {
        url: '/thankYou',
        templateUrl: 'app/thankYou/thankYou.html',
        controller: 'ThankYouCtrl'
      });
  });