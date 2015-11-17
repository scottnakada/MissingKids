'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.results', {
                url: '/results',
                views: {
                    'menuContent': {
                        templateUrl: "results/results.html",
                        controller: 'ResultsCtrl'
                    }
                }
            }
        );
    }
);
