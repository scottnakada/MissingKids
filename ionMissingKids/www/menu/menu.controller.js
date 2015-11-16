'use strict';

angular.module('ionMissingKidsApp')

    .controller('MenuCtrl', function ($scope, $location, Auth, toaster) {
        $scope.menu = [
            {
                'title': 'Choo Choo Map',
                'link': '#/app/store'
            },
            {
                'title': 'Details',
                'link': '#/app/details/1'
            },
            {
                'title': 'Store',
                'link': '#/app/store'
            },
            {
                'title': 'Cart',
                'link': '#/app/cart'
            },
            {
                'title': 'Appointment',
                'link': '#/app/appointment/1'
            },
        ];

        /* Is the Nav Bar collapsed? */
        $scope.isCollapsed = true;

        /* Is this route the selected route */
        $scope.isActive = function (route) {
            return route === $location.path();
        };

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

        /* Logout the user */
        $scope.logout = function () {
            toaster.pop('success', "Logged out successfully");
            Auth.logout();
            $location.path('/home');
        }

    });
