'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMissingKidsApp')
        /* Configure a route for this function */
        .config(function ($stateProvider) {
            $stateProvider
                .state('register', {
                    url: '/register',
                    templateUrl: 'app/userAuth/register/register.html',
                    controller: 'RegisterCtrl'
                });
        });

}());
/* Close the IIFE */
