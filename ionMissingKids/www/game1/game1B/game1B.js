'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.game1B', {
                url: '/game1B',
                views: {
                    'menuContent': {
                        templateUrl: "game1/game1B/game1B.html",
                        controller: 'Game1BCtrl'
                    }
                }
            }
        );
    }
);
