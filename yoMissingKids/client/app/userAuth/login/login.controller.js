'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMissingKidsApp')

        // Define the Login Controller
        .controller('LoginCtrl', function ($scope, FURL, Auth, $location, toaster) {

            // Don't allow login if you are logged in
            if (Auth.signedIn()) {
                toaster.pop('error', "Please logout before attempting to login");
                // If logged in, redirect to the home page
                $location.path('/home');
            }

            /* Bring the Auth Facebook login function into the local scope */
            $scope.loginFb = Auth.loginFacebook;

            /* Bring the Auth Google login function into the local scope */
            $scope.loginGl = Auth.loginGoogle;

            /* Bring the Auth Twitter login function into the local scope */
            $scope.loginTw = Auth.loginTwitter;

            /* Bring the Auth Github login function into the local scope */
            $scope.loginGb = Auth.loginGithub;

            /* Bring the Auth simple login function into the local scope */
            $scope.login = Auth.login;

        });

}());
/* Close the IIFE */
