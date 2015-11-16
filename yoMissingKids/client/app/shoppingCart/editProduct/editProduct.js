'use strict';

angular.module('yoMissingKidsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editProduct', {
        url: '/editProduct',
        templateUrl: 'app/shoppingCart/editProduct/editProduct.html',
        controller: 'EditProductCtrl'
      });
  });
