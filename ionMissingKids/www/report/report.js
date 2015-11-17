'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.report', {
                url: '/report',
                views: {
                    'menuContent': {
                        templateUrl: "report/report.html",
                        controller: 'ReportCtrl'
                    }
                }
            }
        );
    }
);
