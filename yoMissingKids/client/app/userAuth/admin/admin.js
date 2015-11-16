'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMissingKidsApp')
        /* Configure a route for this function */
        .config(function ($stateProvider) {
            $stateProvider
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'app/userAuth/admin/admin.html',
                    controller: 'AdminCtrl'
                });
        });

}());
/* Close the IIFE */
