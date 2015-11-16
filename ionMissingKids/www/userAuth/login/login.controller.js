'use strict';

angular.module('ionMissingKidsApp')

    // Define the Login Controller
    .controller('LoginCtrl', function ($scope, FURL, Auth, $location, toaster) {

        // Don't allow login if you are logged in
        if (Auth.signedIn()) {
            toaster.pop('error', "Please logout before attempting to login");
            // If logged in, redirect to the home page
            $location.path('/home');
        }

        /* Bring the Auth login Facebook method into the local scope */
        $scope.loginFb = Auth.loginFacebook;

        /* Bring the Auth login Google method into the local scope */
        $scope.loginGl = Auth.loginGoogle;

        /* Bring the Auth login Twitter method into the local scope */
        $scope.loginTw = Auth.loginTwitter;

        /* Bring the Auth login Github method into the local scope */
        $scope.loginGb = Auth.loginGithub;

        /* See if the current device is an Apple device */
        $scope.isApple = Auth.isApple;

        /* Use simple password login from Firebase */
        $scope.login = function (user) {
            Auth.login(user);
            user.email = '';
            user.password = '';
        };

    });
