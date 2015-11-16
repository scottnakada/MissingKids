'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('ionMissingKidsApp')
        /* Define the EditProductCtrl controller */
        .controller('EditProductCtrl', function ($scope, DataService, Auth, $location, toaster) {

            // Make sure the user is a manager before showing this page
            if (!Auth.isManager()) {
                toaster.pop('error', 'You need Manager privileges to access this page');
                // See if they are signed In
                if (!Auth.signedIn()) {
                    // Not logged in, go to the login page
                    $location.path("/login");
                } else {
                    // Not authorized for this page; go back to the store
                    $location.path("/store");
                }
            }

            // Import the store from the dataservice
            $scope.store = DataService.store;

            // Show the data as a list
            $scope.showList = false;

        });

}());
/* Close the IIFE */
