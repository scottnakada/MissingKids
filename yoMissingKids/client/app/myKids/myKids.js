'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myKids', {
        url: '/myKids',
        templateUrl: 'app/myKids/myKids.html',
        controller: 'MyKidsCtrl'
      });
  });