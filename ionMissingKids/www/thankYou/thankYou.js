'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.thankYou', {
                url: '/thankYou',
                views: {
                    'menuContent': {
                        templateUrl: "thankYou/thankYou.html",
                        controller: 'ThankYouCtrl'
                    }
                }
            }
        );
    }
);
