'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMissingKidsApp')
        /* Define the RegisterCtrl controller */
        .controller('RegisterCtrl', function ($scope, Auth, $location, toaster) {

            // Don't allow registering if you are logged in
            if (Auth.signedIn()) {
                toaster.pop('error', "Please log out, before attempting to register");
                // If logged in, redirect to the home page
                $location.path('/home');
            }

            /* Bring the Auth register function into the local scope */
            $scope.register = Auth.register;

        });

}());
/* Close the IIFE */
