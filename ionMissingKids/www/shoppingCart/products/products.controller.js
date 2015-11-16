'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('ionMissingKidsApp')
        /* Define the RegisterCtrl controller */
        .controller('ProductsCtrl', function ($scope, $stateParams, DataService) {

            // get store and cart from service
            $scope.store = DataService.store;
            $scope.cart = DataService.cart;

            // use routing to pick the selected product
            if ($stateParams.productSku != null) {
                $scope.product = $scope.store.getProduct($stateParams.productSku);
            }


        });

}());
/* Close the IIFE */
