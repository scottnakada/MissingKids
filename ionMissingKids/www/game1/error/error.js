'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.error', {
                url: '/error',
                views: {
                    'menuContent': {
                        templateUrl: "game1/error/error.html",
                        controller: 'ErrorCtrl'
                    }
                }
            }
        );
    }
);
