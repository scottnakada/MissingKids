'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: "userAuth/login/login.html",
                        controller: 'LoginCtrl'
                    }
                }
            });
    });
