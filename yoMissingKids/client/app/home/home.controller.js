'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMissingKidsApp')
        /* Define the Home Controller */
        .controller('HomeCtrl', function ($scope, $location, Auth, toaster) {

            /* Pull in the current user information from the Auth Factory */
            $scope.currentUser = Auth.user;

            /* Return true if the user is signed in */
            $scope.signedIn = Auth.signedIn;

            /* Return true if the user has Manager permissions (or Admin) */
            $scope.isManager = Auth.isManager;

            /* Return true if the user has Admin permissions */
            $scope.isAdmin = Auth.isAdmin;

            /* Return true if the user is a simple pass user, so changing password is ok */
            $scope.changePassOk = Auth.changePassOk;

            /* Handle Logout */
            $scope.logout = function () {
                toaster.pop('success', "Logged out successfully");
                Auth.logout();
                $location.path('/');
            }

        });

}());
/* Close the IIFE */
