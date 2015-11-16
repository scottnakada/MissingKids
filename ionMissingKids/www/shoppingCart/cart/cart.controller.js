'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('ionMissingKidsApp')
        /* Define the CartCtrl controller */
        .controller('CartCtrl', function ($scope, DataService) {

            // get store and cart from service
            $scope.store = DataService.store;
            $scope.cart = DataService.cart;

        });

}());
/* Close the IIFE */
