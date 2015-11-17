'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.game1A', {
                url: '/game1A',
                views: {
                    'menuContent': {
                        templateUrl: "game1/game1A/game1A.html",
                        controller: 'Game1ACtrl'
                    }
                }
            }
        );
    }
);
