'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.game1', {
                url: '/game1',
                views: {
                    'menuContent': {
                        templateUrl: "game1/game1/game1.html",
                        controller: 'Game1Ctrl'
                    }
                }
            }
        );
    }
);
