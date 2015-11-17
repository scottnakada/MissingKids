'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.statistics', {
                url: '/statistics',
                views: {
                    'menuContent': {
                        templateUrl: "statistics/statistics.html",
                        controller: 'StatisticsCtrl'
                    }
                }
            }
        );
    }
);
