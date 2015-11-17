'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.error2', {
                url: '/error2',
                views: {
                    'menuContent': {
                        templateUrl: "game1/error2/error2.html",
                        controller: 'Error2Ctrl'
                    }
                }
            }
        );
    }
);
