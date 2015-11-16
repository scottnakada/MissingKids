'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMissingKidsApp')

        /* Define the ChangePass Controller */
        .controller('ChangePassCtrl', function ($scope, FURL, Auth, $location, toaster) {

            /* Define a changePassword function in the local scope */
            $scope.changePassword = function (user) {

                /* Use the Auth changePassword function to change the password */
                Auth.changePassword(user)
                    .then(function () {

                        // Reset form
                        $scope.user.email = '';
                        $scope.user.oldPass = '';
                        $scope.user.newPass = '';

                        toaster.pop('success', "Password changed successfully");
                        console.log("Password changed successfully");
                    }, function (error) {
                        if (error) {
                            toaster.pop('error', "Oops! Something went wrong changing password." + error);
                            switch (error.code) {
                                case "AUTHENTICATION_DISABLED":
                                    toaster.pop('error', "The requested authentication provider is disabled for this Firebase.");
                                    break;
                                case "INVALID_EMAIL":
                                    toaster.pop('error', "The specified user account email is invalid.");
                                    break;
                                case "INVALID_ORIGIN":
                                    toaster.pop('error', "A security error occurred while processing the " +
                                        "authentication request. The web origin for the request is not in " +
                                        "your list of approved request origins. To approve this origin, " +
                                        "visit the Login & Auth tab in your Firebase dashboard.");
                                    break;
                                case "INVALID_PASSWORD":
                                    toaster.pop('error', "The specified user account password is incorrect.");
                                    break;
                                case "INVALID_USER":
                                    toaster.pop('error', "The specified user account does not exist.");
                                    break;
                                case "NETWORK_ERROR":
                                    toaster.pop('error', "An error occurred while attempting to contact the authentication server");
                                    break;
                                case "TRANSPORT_UNAVAILABLE":
                                    toaster.pop('error', "The requested login method is not available in the user's browser " +
                                        "environment. Popups are not available in Chrome for iOS, iOS Preview Panes, or " +
                                        "local, file:// URLs. Redirects are not available in PhoneGap / Cordova, or local, file:// URLs.");
                                    break;
                                case "UNKNOWN_ERROR":
                                    toaster.pop('error', "An unknown error occurred. Please refer to the error message " +
                                        "and error details for more information.");
                                    break;

                                default:
                                    toaster.pop('error', "Error logging user in:", error);
                            }
                        }

                    });
            };

        });

}());
/* Close the IIFE */
