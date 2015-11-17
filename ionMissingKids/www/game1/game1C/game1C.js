'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.game1C', {
                url: '/game1C',
                views: {
                    'menuContent': {
                        templateUrl: "game1/game1C/game1C.html",
                        controller: 'Game1CCtrl'
                    }
                }
            }
        );
    }
);
