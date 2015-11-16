'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMissingKidsApp')
        /* Configure a route for this function */
        .config(function ($stateProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/userAuth/login/login.html',
                    controller: 'LoginCtrl'
                });
        });

}());
/* Close the IIFE */
