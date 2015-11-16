'use strict';

angular.module('ionMissingKidsApp')

    // Define the Login Controller
    .controller('HomeCtrl', function ($scope, $location, $state, Auth) {

        // Bring the signedIn function from Auth into this scope
        $scope.signedIn = Auth.signedIn;

        // Bring the isAdmin function from Auth into this scope
        $scope.isAdmin = Auth.isAdmin;

        // Bring the isAdmin function from Auth into this scope
        $scope.isManager = Auth.isManager;

        /* Return true if the user is a simple pass user, so changing password is ok */
        $scope.changePassOk = Auth.changePassOk;

        // Bring the logout function from Auth into this scope
        $scope.logout = Auth.logout;

        $scope.go = function (state) {

            $state.go(state);

        }

    });
